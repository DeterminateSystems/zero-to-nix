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
  rootUrl: string;
  canonical: string;
  githubUrl: string;
  languageCode: string;
  features: Feature[];
  navbarLinks: NavLink[];
  heroButtons: ButtonProps[];
  systems: string[];
  languages: string[];
  nixTerms: Term[];
  banner: {
    text: string;
    generation: number;
  };
  mailingListTags: string[];
};

const site: Site = {
  title: "Zero to Nix",
  description: "Your guide to learning Nix and flakes",
  rootUrl: "https://zero-to-nix.com",
  canonical: "zero-to-nix.com",
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languageCode: "en",
  navbarLinks: [
    { text: "Breeze", href: "/breeze" },
    { text: "About", href: "/about" },
  ],
  heroButtons: [
    { text: "Breeze", href: "/breeze", highlight: true },
    { text: "Quick start", href: "/start/install" },
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
          href: "/start/nix-develop",
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
          text: "Build a Nix package",
          href: "/start/nix-build",
        },
        {
          text: "How Nix packages work",
          href: "/concepts/packages",
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

  // User interactions
  systems: ["Linux", "macOS"],
  languages: ["JavaScript", "Python", "Go", "Rust", "C++", "Haskell", "Scala"],

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
        "A language for instructing Nix how to build packages, environments, and systems.",
      href: "/concepts/nix-language",
    },
    {
      title: "NixOS",
      description:
        "A Linux distribution built on Nix with its core principles in mind.",
      href: "/concepts/nixos",
    },
    {
      title: "Nixpkgs",
      description:
        "A vast collection of Nix packages, libraries, and helper functions.",
      href: "/concepts/nixpkgs",
    },
  ],

  banner: {
    text: "Check out <strong><a target='_blank' href='https://FlakeHub.com'>FlakeHub</a></strong> - the best place to discover and publish Nix flakes, from Determinate Systems.",
    generation: 2,
  },

  mailingListTags: [
    "294258", // zero-to-nix
  ],
};

export default site;
