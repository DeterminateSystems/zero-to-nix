type Attribute = {
  name: string;
  description: string;
  examples: string[];
};

type Flakes = {
  prefixes: Attribute[];
  gitAttributes: Attribute[];
};

// Based on https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#flake-references
export const flakes: Flakes = {
  prefixes: [
    {
      name: "path",
      description: "A relative or absolute filesystem path",
      examples: ["path:/home/nixuser/nix-stuff", "path:../nix-stuff"],
    },
    {
      name: "github",
      description: "A repository on [GitHub](https://github.com)",
      examples: [
        "github:DeterminateSystems/riff",
        "github:numtide/flake-utils",
      ],
    },
    {
      name: "gitlab",
      description: "A repository on [GitLab](https://gitlab.com)",
      examples: ["gitlab:TODO", "gitlab:TODO"],
    },
    {
      name: "git+https",
      description:
        "A [Git](https://git-scm.com) repository that isn't [GitHub](https://github.com) or [GitLab](https://gitlab.com). In fact, the `github` and `gitlab` prefixes are shorthand for `git+https://github.com` and `git+https://gitlab.com`, respectively.",
      examples: ["git+https://git-svc.io/nix-stuff/monorepo"],
    },
  ],

  gitAttributes: [
    {
      name: "dir",
      description: "A specific subdirectory of the repository",
      examples: ["dir=scripts", "dir=python"],
    },
    {
      name: "ref",
      description: "Branch",
      examples: ["ref=main", "ref=testing"],
    },
    {
      name: "rev",
      description: "Revision",
      examples: [],
    },
  ],
};

// Flake registry
type Entry = {
  from: {
    id: string;
    type: "indirect";
  };
  to: {
    owner: string;
    repo: string;
    type: "github" | "gitlab";
  };
};

type FlakeRegistry = {
  flakes: Entry[];
  version: number;
};
