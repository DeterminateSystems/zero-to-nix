export type Site = {
  title: string;
  description: string;
  systems: string[];
  languages: string[];
};

export const site: Site = {
  title: "Zero to Nix",
  description:
    "An unofficial and highly opinionated getting started guide for Nix",
  systems: ["Linux", "macOS"],
  languages: ["Go", "Rust"],
};
