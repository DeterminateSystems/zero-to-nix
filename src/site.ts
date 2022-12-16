import { ButtonProps } from "./logic/content";

export type Feature = {
  title: string;
  description: string;
  links: NavLink[];
};

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
  features: Feature[];
  navbarLinks: NavLink[];
  heroButtons: ButtonProps[];
  year: number;
  systems: string[];
  languages: string[];
  nixTerms: Term[];
};

const site: Site = {
  title: "Zero to Nix",
  description: "An unofficial, opinionated, and gentle introduction to Nix",
  url: "https://zero-to-nix.vercel.app",
  canonical: "zero-to-nix.vercel.app",
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languageCode: "en",
  navbarLinks: [{ text: "About", href: "/about" }],
  heroButtons: [
    { text: "Quick start", href: "/start", highlight: true },
    { text: "Concepts", href: "/concepts" },
    { text: "About", href: "/about" },
  ],

  // TODO: make this automated rather than manual
  features: [
    {
      title: "Declarative, reproducible development environments",
      description:
        'No more "works on my machine." Create environments that work seamlessly and are easily sharable across platforms.',
      links: [
        {
          text: "Explore a Nix development environment",
          href: "/start/nix-develop",
        },
        {
          text: "Create a development environment",
          href: "/start/dev-shell-flake",
        },
        {
          text: "How Nix development environments work",
          href: "/concepts/dev-env",
        },
      ],
    },
    {
      title: "Declarative, reproducible package builds",
      description:
        "No more broken builds or mysterious installation processes. Nix builds packages from scratch every time.",
      links: [
        {
          text: "Build a package from Nixpkgs",
          href: "/start/nix-build-nixpkgs",
        },
        {
          text: "How Nix packages work",
          href: "/concepts/package",
        },
      ],
    },
    {
      title: "The largest package repository in existence",
      description:
        "Nixpkgs offers over 80,000 packages and continues to grow every day.",
      links: [
        {
          text: "How Nixpkgs works",
          href: "/concepts/nixpkgs",
        },
      ],
    },
    {
      title: "Declarative Linux systems",
      description:
        "NixOS is a unique Linux distribution that you can declaratively configure using the Nix language and Nix packages.",
      links: [
        {
          text: "How NixOS works",
          href: "/concepts/nixos",
        },
      ],
    },
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
        "A language for instructing Nix how to build packages, environments and systems.",
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
