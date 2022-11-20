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
  languageCode: string;
  navbarLinks: NavLink[];
  year: number;
  nixTerms: Term[];
};

const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and opinionated guide to getting started with Nix",
  languageCode: "en",
  navbarLinks: [
    { text: "Quick start", href: "/start" },
    { text: "Concepts", href: "/concepts" },
  ],
  year: new Date().getFullYear(),

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

export default site;
