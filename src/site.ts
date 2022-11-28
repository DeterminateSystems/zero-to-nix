export type NavLink = {
  text: string;
  href: string;
};

export type Term = {
  title: string;
  description: string;
  href: string;
};

export type Site = {
  title: string;
  description: string;
  url: string;
  canonical: string;
  githubUrl: string;
  languageCode: string;
  navbarLinks: NavLink[];
  heroLinks: NavLink[];
  year: number;
  systems: string[];
  languages: string[];
  nixTerms: Term[];
};

const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and opinionated guide to getting started with Nix",
  url: "https://zero-to-nix.vercel.app",
  canonical: "zero-to-nix.vercel.app",
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languageCode: "en",
  navbarLinks: [{ text: "About", href: "/about" }],
  heroLinks: [
    { text: "Quick start", href: "/start" },
    { text: "Concepts", href: "/concepts" },
    { text: "About", href: "/about" },
  ],

  year: new Date().getFullYear(),

  // User interactions
  systems: ["Linux", "macOS"],
  languages: ["JavaScript", "Python", "Go", "Rust"],

  // Nix stuff
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
      href: "/concepts/nix-language",
    },
    {
      title: "NixOS",
      description:
        "A Linux distribution built on Nix and with its core principles in mind.",
      href: "/concepts/nixos",
    },
    {
      title: "Nixpkgs",
      description: "A vast collection of Nix packages, libraries, and helpers.",
      href: "/concepts/nixpkgs",
    },
  ],
};

export default site;
