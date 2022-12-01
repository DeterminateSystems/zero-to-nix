import { IlesModule } from "iles";
import { Code, Root } from "mdast";
import prism from "prismjs";
import type { Grammar } from "prismjs";
import loadLanguages from "prismjs/components/index.js";
import { Plugin } from "unified";
import { SKIP, visit } from "unist-util-visit";

// The îles module (add to the `modules` list in the îles config)
const CodeBlocks = (config: CodeBlockConfig): IlesModule => {
  return {
    name: "code-blocks",
    markdown: {
      remarkPlugins: [[codeBlockPlugin, config]],
    },
  };
};

// Plugin config
export interface CodeBlockConfig {
  aliases?: Record<string, string>;
}

// Meta fields
type Meta = {
  filename?: string; // filename=hello.txt
};

// Parse metadata from a string into a Meta object
const parseMeta = (s: string): Meta => {
  let meta: Meta = {};
  const segments: string[] = s.split(" ");
  const maybeFilename = segments.find((seg) => seg.startsWith("filename"));
  if (maybeFilename !== undefined) {
    const filename = maybeFilename.split("=").at(1);
    if (filename === undefined) {
      throw new Error(
        "Malformed code block; you need to specify a filename like this: filename=foo.txt"
      );
    } else {
      meta.filename ||= filename;
    }
  }
  return meta;
};

const highlightCode = (
  code: string,
  grammar: Grammar,
  lang: string,
  meta: string
): string => {
  code = prism.highlight(code, grammar, lang);
  const cls = `language-${lang}`;
  const dataLang = lang === "text" ? "" : lang;
  const blockMeta = parseMeta(meta);
  const innerHtml = [
    `<pre class="${cls}">`,
    blockMeta.filename !== undefined &&
      `<span class="absolute top-2 right-3 text-sm">${blockMeta.filename}</span>`,
    `<code>${code}</code></pre>`,
  ]
    .filter(Boolean)
    .join("");

  return `<div class="relative ${cls}" data-lang="${dataLang}">${innerHtml}</div>`;
};

const getGrammar = (lang: string): Grammar | undefined => {
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    } catch (e) {
      console.warn(
        `[prismjs] Syntax highlight for language "${lang}" is not supported.`
      );
    }
  }
  return prism.languages[lang];
};

const codeBlockPlugin: Plugin<[CodeBlockConfig], Root> =
  function RemarkPrismPlugin(config: CodeBlockConfig) {
    return (ast) => {
      visit(ast, "code", (node: Code, index, parent) => {
        const aliases = config.aliases ?? {};
        const code = node.value ?? "";
        const lang = node.lang ?? "text";
        const grammar = getGrammar(aliases[lang] || lang);
        const meta = node.meta ?? "";

        if (grammar) {
          const codeHtml = highlightCode(code, grammar, lang, meta);
          parent!.children[index!] = {
            type: "mdxFlowExpression",
            value: codeHtml,
            data: { raw: true, count: 1 },
          } as any;
        }

        return SKIP;
      });
    };
  };

export default CodeBlocks;
