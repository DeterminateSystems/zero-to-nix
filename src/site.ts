type NavLink = {
  text: string;
  href: string;
};

type ButtonProps = {
  text: string;
  href: string;
  highlight?: boolean;
};

export type Feature = {
  title: string;
  description: string;
  links: NavLink[];
};

type Language =
  | "C++"
  | "Go"
  | "Haskell"
  | "JavaScript"
  | "Python"
  | "Rust"
  | "Scala";

type Site = {
  title: string;
  description: string;
  githubUrl: string;
  languages: Language[];
  defaultLanguage: Language;
  banner: {
    text: string;
    generation: number;
  };
  navbarLinks: NavLink[];
  heroButtons: ButtonProps[];
  features: Feature[];
};

export const site: Site = {
  title: "Zero to Nix",
  description: "Your guide to learning Nix and flakes",
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languages: ["C++", "Go", "Haskell", "JavaScript", "Python", "Rust", "Scala"],
  defaultLanguage: "JavaScript",
  banner: {
    text: "Welcome to Zero to Nix!",
    generation: 1,
  },
  navbarLinks: [{ text: "About", href: "/about" }],
  heroButtons: [
    { text: "Quick start", href: "/start/install", highlight: true },
    { text: "Concepts", href: "/concepts" },
    { text: "About", href: "/about" },
  ],
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
};
