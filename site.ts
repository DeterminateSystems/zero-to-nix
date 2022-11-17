import type { NavLink } from "./src/types";

export type Site = {
  title: string;
  description: string;
  author: string;
  languageCode: string;
  systems: string[];
  languages: string[];
  navbarLinks: NavLink[];
};

export const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and highly opinionated getting started guide for Nix",
  author: "Determinate Systems",
  languageCode: "en",
  systems: ["Linux", "macOS"],
  languages: ["Go", "Rust"],
  navbarLinks: [
    {
      title: "Quick start",
      href: "/start",
    },
    {
      title: "Concepts",
      href: "/concepts",
    },
  ],
};
