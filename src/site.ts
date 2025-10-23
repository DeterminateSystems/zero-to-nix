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

export type Term = {
  title: string;
  description: string;
  href: string;
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
  url: string;
  description: string;
  llms: {
    description: string;
    otherProjects: { title: string; description: string; href: string }[];
  };
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
  nixTerms: Term[];
  mailingListTags: string;
};

export const site: Site = {
  title: "Zero to Nix",
  url: "https://zero-to-nix.com",
  description: "Your guide to learning Nix and flakes",
  llms: {
    description:
      "Zero to Nix is a flake-centric resource for learning Nix created by [Determinate Systems](https://determinate.systems/llms.txt). It takes you on a [learning journey](#start-pages) from installing Nix to exploring Nix development environments to building Nix packages and more. It also offers a series of [concept pages](#concept-pages) covering some of the trickier corners of Nix.",
    otherProjects: [
      {
        title: "FlakeHub",
        description:
          "FlakeHub is a platform for publishing and discovering Nix flakes and Nix artifacts, featuring semantic versioning, private flakes with federated, JWT-based authentication, flake discovery via search, labels, and other means, and next-generation Nix binary caching with FlakeHub Cache.",
        href: "https://flakehub.com/llms.txt",
      },
      {
        title: "Determinate documentation",
        description:
          "Determinate is Nix for teams: Stop wrestling with binary caches, reinventing deploy scripts, and figuring out access controls. Confidently adopt and scale Nix across teams of any size.",
        href: "https://docs.determinate.systems/llms.txt",
      },
      {
        title: "Determinate Systems website",
        description:
          "Our goal for Determinate is to enable fearless innovation by bringing Nix to teams, providing a complete Nix-based workflow from installation through collaboration and CI to deployment.",
        href: "https://determinate.systems/llms.txt",
      },
    ],
  },
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languages: ["C++", "Go", "Haskell", "JavaScript", "Python", "Rust", "Scala"],
  defaultLanguage: "JavaScript",
  banner: {
    text: "Check out <strong><a target='_blank' class='banner-link' href='https://flakehub.com'>FlakeHub</a></strong>, the best place to discover and publish Nix flakes, brought to you by <strong><a target='_blank' class='banner-link' href='https://determinate.systems'>Determinate Systems</a></strong>.",
    generation: 2,
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
  mailingListTags: [
    "294258", // zero-to-nix
  ].join(","),
};
