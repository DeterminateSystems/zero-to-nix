// Open Graph image generation. Images follow the Determinate Systems social
// card design (as on security.determinate.systems): dark background with a
// faint grid and glows, the Determinate Systems logo, a bold Work Sans title,
// the domain, and a gradient bar along the bottom edge.
import {
  getConceptPagesAlphabetical,
  getStartPagesByOrderParam,
} from "../content/collections";
import { site } from "../site";
import { conceptPagePath, plainText, startPagePath } from "./utils";
import { getEntry } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export type OgPage = {
  // Page path without leading or trailing slashes ("" for the home page)
  path: string;
  title: string;
  description: string;
  // Section label shown above the title, such as "Concepts"
  section?: string;
};

const trimSlashes = (p: string): string => p.replace(/^\/+|\/+$/g, "");

export const getOgPages = async (): Promise<OgPage[]> => {
  const startPages = await getStartPagesByOrderParam();
  const conceptPages = await getConceptPagesAlphabetical();
  const about = await getEntry("plain", "about");

  return [
    {
      path: "",
      title: site.title,
      description:
        "A flake-centric guide to learning Nix, from installation to building your own packages",
    },
    ...(about
      ? [
          {
            path: "about",
            title: about.data.title,
            description: plainText(about.data.description),
          },
        ]
      : []),
    {
      path: "start",
      title: "Quick start",
      description:
        "Get a taste of Nix's power and learn key concepts along the way",
    },
    ...startPages.map(({ id, data: { title, description } }) => ({
      path: trimSlashes(startPagePath(id)),
      title,
      description: plainText(description),
      section: "Quick start",
    })),
    {
      path: "concepts",
      title: "Nix concepts",
      description: "The whys and the hows of Nix",
    },
    ...conceptPages.map(({ id, data: { title, snippet } }) => ({
      path: trimSlashes(conceptPagePath(id)),
      title,
      description: plainText(snippet),
      section: "Concepts",
    })),
  ];
};

// The image path for a page path, for example "concepts/flakes" becomes
// "/og/concepts/flakes.png" and the home page becomes "/og/index.png"
export const ogImagePath = (pagePath: string): string =>
  `/og/${trimSlashes(pagePath) || "index"}.png`;

// Colors sampled from the Determinate Systems social card
const colors = {
  background: "#0b0b10",
  title: "#ffffff",
  description: "#c8c8d0",
  muted: "#9a9aa6",
};

const assetPath = (...segments: string[]) =>
  path.join(process.cwd(), ...segments);

const font = (weight: 400 | 500 | 700) =>
  fs.readFileSync(
    assetPath(
      "node_modules/@fontsource/work-sans/files",
      `work-sans-latin-${weight}-normal.woff`,
    ),
  );

let fonts: Parameters<typeof satori>[1]["fonts"] | undefined;
let logo: string | undefined;

const loadAssets = () => {
  fonts ??= ([400, 500, 700] as const).map((weight) => ({
    name: "Work Sans",
    data: font(weight),
    weight,
    style: "normal" as const,
  }));
  logo ??= `data:image/svg+xml;base64,${fs
    .readFileSync(assetPath("src/assets/og/detsys-logo-mono.svg"))
    .toString("base64")}`;
  return { fonts, logo };
};

// Minimal element factory, so this module doesn't need JSX
type Node = string | { type: string; props: Record<string, unknown> };
const h = (
  type: string,
  props: Record<string, unknown>,
  ...children: Node[]
): Node => ({
  type,
  props: {
    ...props,
    children: children.length === 1 ? children[0] : children,
  },
});

const truncate = (text: string, max: number): string =>
  text.length <= max ? text : `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;

const titleSize = (title: string): number => {
  if (title.length <= 24) return 84;
  if (title.length <= 32) return 72;
  return 64;
};

export const renderOgImage = async (page: OgPage): Promise<Buffer> => {
  const { fonts, logo } = loadAssets();
  const domain = new URL(site.url).host;

  const card = h(
    "div",
    {
      style: {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        display: "flex",
        position: "relative",
        backgroundColor: colors.background,
        fontFamily: "Work Sans",
      },
    },
    // Faint grid
    h("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      },
    }),
    // Teal glow, top right
    h("div", {
      style: {
        position: "absolute",
        top: -260,
        right: -160,
        width: 820,
        height: 640,
        display: "flex",
        backgroundImage:
          "radial-gradient(closest-side, rgba(30,159,217,0.20), rgba(30,159,217,0))",
      },
    }),
    // Purple glow, bottom right
    h("div", {
      style: {
        position: "absolute",
        bottom: -320,
        right: -220,
        width: 900,
        height: 700,
        display: "flex",
        backgroundImage:
          "radial-gradient(closest-side, rgba(158,40,176,0.22), rgba(158,40,176,0))",
      },
    }),
    // Content
    h(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
        },
      },
      h("img", {
        src: logo,
        width: 390,
        height: 105,
        style: { flexShrink: 0 },
      }),
      h(
        "div",
        { style: { display: "flex", flexDirection: "column", marginTop: 48 } },
        // The section label, shown only on pages within a section
        ...(page.section
          ? [
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    fontSize: 28,
                    fontWeight: 500,
                    color: colors.description,
                    marginBottom: 14,
                  },
                },
                page.section,
              ),
            ]
          : []),
        h(
          "div",
          {
            style: {
              display: "flex",
              fontSize: titleSize(page.title),
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: colors.title,
              maxWidth: 1056,
            },
          },
          page.title,
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.4,
              color: colors.description,
              marginTop: 20,
              maxWidth: 980,
            },
          },
          truncate(page.description, 120),
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: 36,
              fontSize: 24,
              color: colors.muted,
            },
          },
          domain,
        ),
      ),
    ),
    // Gradient bar along the bottom edge
    h("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 8,
        display: "flex",
        backgroundImage:
          "linear-gradient(90deg, #1e9fd9, #5f5bca 25%, #9e28b0 50%, #d22d78 75%, #ea741f)",
      },
    }),
  );

  const svg = await satori(card as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts,
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
};
