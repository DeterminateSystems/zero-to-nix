import type { NavLink, Term } from "./src/types";

export type Site = {
  title: string;
  description: string;
  author: string;
  languageCode: string;
  systems: string[];
  languages: string[];
  navbarLinks: NavLink[];
  nixTerms: Term[];
};

export const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and highly opinionated getting started guide for Nix",
  author: "Determinate Systems",
  languageCode: "en",
  systems: ["Linux", "macOS"],
  languages: ["JavaScript", "Python", "Go", "Rust"],
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
  nixTerms: [
    {
      title: "Nix",
      description:
        "A build tool and package manager used to create declarative, reproducible software systems.",
      href: "/concepts/nix",
    },
    {
      title: "Nix language",
      description:
        "A for instructing Nix how to build packages and create environments and systems.",
      href: "/concepts/nixlang",
    },
    {
      title: "NixOS",
      description:
        "A Linux distribution built on Nix and with its core principles in mind.",
      href: "/concepts/nixos",
    },
    {
      title: "Nixpkgs",
      description:
        "A vast collection of Nix packages and Nixlang libraries and helpers.",
      href: "/concepts/nixpkgs",
    },
  ],
};
