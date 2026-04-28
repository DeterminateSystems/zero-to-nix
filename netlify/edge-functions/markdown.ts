// This function provides the desired server dance for .md endpoints
// that perform Markdown content negotiation for AI agents
import type { Context } from "@netlify/edge-functions";

function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  let md = 0;
  let html = 0;
  for (const part of accept.split(",")) {
    const [type, ...params] = part
      .trim()
      .split(";")
      .map((s) => s.trim());
    const qParam = params.find((p) => p.startsWith("q="));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    if (type === "text/markdown") md = Math.max(md, q);
    else if (type === "text/html" || type === "application/xhtml+xml") {
      html = Math.max(html, q);
    }
  }
  return md > 0 && md >= html;
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  const looksLikeAsset = /\.[a-z0-9]+$/i.test(url.pathname);
  if (request.method !== "GET" || looksLikeAsset) {
    return context.next();
  }

  const accept = request.headers.get("Accept");
  const mdPath = url.pathname.replace(/\/$/, "") + ".md";
  const mdUrl = new URL(mdPath, url);

  if (prefersMarkdown(accept)) {
    try {
      const mdResponse = await fetch(mdUrl, {
        headers: { "User-Agent": request.headers.get("User-Agent") ?? "" },
      });
      const upstreamCt = mdResponse.headers.get("Content-Type") ?? "";
      if (mdResponse.ok && upstreamCt.includes("markdown")) {
        return new Response(mdResponse.body, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            Vary: "Accept",
            "Cache-Control": "public, max-age=3600",
            Link: `<${url.href}>; rel="canonical"`,
          },
        });
      }
    } catch {
      // Upstream .md fetch failed; falling through to normal HTML response
    }
  }

  // Fell through to normal HTML response due to lack of .md sibling
  const response = await context.next();
  const ct = response.headers.get("Content-Type") ?? "";
  if (ct.includes("text/html")) {
    response.headers.append(
      "Link",
      `<${mdUrl.href}>; rel="alternate"; type="text/markdown"`,
    );
    response.headers.append("Vary", "Accept");
  }
  return response;
};
