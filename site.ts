export type Site = {
  title: string;
  description: string;
  systems: string[];
  languages: string[];
};

export const site: Site = {
  title: "Zero to Nix",
  description: "Up and running in no time",
  systems: ["Linux", "macOS"],
  languages: ["Go", "Rust"],
};
