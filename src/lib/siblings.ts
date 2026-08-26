import { site } from "../site";

// Subdomains of determinate.systems hosted by third parties (the status page
// and the trust center). Their analytics are not ours, so links to them get
// neither the referrer nor a phid.
const THIRD_PARTY_HOSTS = new Set([
  "status.determinate.systems",
  "trust.determinate.systems",
]);

// Whether a hostname is one of the Determinate Systems web properties.
//
// The same function lives in every Determinate site; keep them identical:
//   determinate.systems          src/lib/url.ts
//   docs.determinate.systems     src/siblings.ts
//   flakehub.com                 web/src/lib/siblings.ts
//   zero-to-nix.com              src/lib/siblings.ts
//   security.determinate.systems src/lib/links.ts
export function isSiblingHost(hostname: string): boolean {
  if (THIRD_PARTY_HOSTS.has(hostname)) return false;
  return (
    hostname === "flakehub.com" ||
    hostname === "zero-to-nix.com" ||
    hostname === "determinate.systems" ||
    hostname.endsWith(".determinate.systems")
  );
}

const siteHostname = new URL(site.url).hostname;

// Another Determinate property (never this site itself). Links to a sibling
// keep the referrer (no `noreferrer`) and carry the visitor's PostHog id as a
// `phid` query param so the sibling's analytics can stitch the session back
// to this visitor.
export function isSiblingProperty(href: string): boolean {
  try {
    const { hostname } = new URL(href, site.url);
    return hostname !== siteHostname && isSiblingHost(hostname);
  } catch {
    return false;
  }
}
