type Prefix = {
  name: string;
  description: string;
  examples: string[];
};

type Flakes = {
  prefixes: Prefix[];
};

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
};
