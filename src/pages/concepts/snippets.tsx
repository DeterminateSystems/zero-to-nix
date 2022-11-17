import type React from "react";

export type Snippet = {
  id: string;
  title: string;
  text: React.ReactNode;
};

export const snippets: Snippet[] = [
  {
    id: "channels",
    title: "Channels",
    text: (
      <>
        A way of consuming and distributing Nix code that remains official that
        was standard for most of Nix's history. Although channels remain fully
        supported in Nix, we at{" "}
        <a href="https://determinate.systems">Determinate Systems</a> strongly
        recommand using <a href="/concepts/flakes">flakes</a> instead, despite
        flakes' current official status as experimental.
      </>
    ),
  },
  {
    id: "derivation",
    title: "Derivation",
    text: <>A set of build instructions for producing packages</>,
  },
  {
    id: "det-sys",
    title: "Determinate Systems",
    text: <>The good folks who made this website.</>,
  },
  {
    id: "flake-inputs",
    title: "Flake inputs",
    text: <>Just, you know, flake inputs.</>,
  },
  {
    id: "flake-outputs",
    title: "Flake outputs",
    text: (
      <>
        What your flake produces. Includes things like dev environments,
        packages, and NixOS configurations.
      </>
    ),
  },
  {
    id: "flake-templates",
    title: "Flake templates",
    text: <>An easy way to get started with Nix flake projects.</>,
  },
  {
    id: "flakes",
    title: "Flakes",
    text: <>A way of organizing and referring to Nix code...</>,
  },
  {
    id: "harmonic",
    title: "Harmonic",
    text: (
      <>
        A Nix installer created by{" "}
        <a href="https://determinate.systems">Determinate Systems</a>. Harmonic
        is <em>not</em> the official installer for Nix. If you'd prefer to use
        the official installer, see the{" "}
        <a href="https://nixos.org/download.html">Download</a> page on the
        official <a href="https://nixos.org">Nix website</a>.
      </>
    ),
  },
  {
    id: "nix",
    title: "Nix",
    text: <>The subject of this website!</>,
  },
  {
    id: "nix-store",
    title: "The Nix store",
    text: <>The filesystem place where the good Nix stuff happens.</>,
  },
  {
    id: "nixlang",
    title: "Nixlang",
    text: (
      <>
        The language used to power Nix. You write Nixlang in <code>.nix</code>{" "}
        files.
      </>
    ),
  },
  {
    id: "nixos",
    title: "NixOS",
    text: <>A Linux distribution built on top of Nix.</>,
  },
  {
    id: "nixpkgs",
    title: "Nixpkgs",
    text: <>The biggest ball of Nix code ya ever did see.</>,
  },
  {
    id: "packages",
    title: "Packages",
    text: <>In Nix, packages are the result of derivations...</>,
  },
  {
    id: "pinning",
    title: "Pinning dependencies",
    text: <>A totally awesome thing that you should always do, trust us.</>,
  },
  {
    id: "reproducibility",
    title: "Reproducibility",
    text: (
      <>
        A totally bad-ass thing you should totally do with your software because
        it rocks.
      </>
    ),
  },
  {
    id: "shell-environments",
    title: "Shell environments",
    text: <>Nix shell environments are heremetically sealed...</>,
  },
];
