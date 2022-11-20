import type React from "react";

type Prefix = {
  name: string;
  description: React.ReactNode;
  examples: string[];
};

const prefixes: Prefix[] = [
  {
    name: "path",
    description: (
      <>A filesystem path on the local system (absolute or relative).</>
    ),
    examples: ["/Users/foo/bar/baz", "/home/nix-stuff/my-project"],
  },
  {
    name: "github",
    description: (
      <>
        A{" "}
        <a href="https://git-scm.com" className="underline hover:text-primary">
          Git
        </a>{" "}
        repository on{" "}
        <a href="https://github.com" className="underline hover:text-primary">
          GitHub
        </a>
        .
      </>
    ),
    examples: ["NixOS/nixpkgs", "numtide/flake-utils", "omnicorp/nix-stuff"],
  },
  {
    name: "gitlab",
    description: (
      <>
        A{" "}
        <a href="https://git-scm.com" className="underline hover:text-primary">
          Git
        </a>{" "}
        repository on{" "}
        <a href="https://gitlab.com" className="underline hover:text-primary">
          GitLab
        </a>
        .
      </>
    ),
    examples: ["NixOS/nixpkgs", "numtide/flake-utils", "omnicorp/nix-stuff"],
  },
  {
    name: "git+https",
    description: (
      <>
        A{" "}
        <a href="https://git-scm.com" className="underline hover:text-primary">
          Git
        </a>{" "}
        repository served behind{" "}
        <a
          href="https://en.wikipedia.org/wiki/HTTPS"
          className="underline hover:text-primary"
        >
          HTTPS
        </a>
        . For GitHub and GitLab repos you can use <code>github</code> and{" "}
        <code>gitlab</code> paths, respectively.
      </>
    ),
    examples: [
      "//my-git-host/my-owner/my-repo",
      "//github.com/nix-owner/nix-repo",
    ],
  },
];

type Wrapper = {
  children: React.ReactNode;
};

export const ConceptPanel = ({ children }: Wrapper) => {
  return (
    <div className="not-prose overflow-auto rounded-lg border-2 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-black">
      {children}
    </div>
  );
};

export const FlakeURLs = () => {
  return (
    <ConceptPanel>
      <div className="space-y-1 md:space-y-1.5 lg:space-y-2">
        <span className="text-xs sm:text-sm lg:text-base">
          Flake URL structure
        </span>

        <div className="space-y-4">
          <pre className="flex overflow-auto text-3xl">
            <span className="text-blue dark:text-orange">prefix</span>
            <span>:</span>
            <span className="text-rose dark:text-cerulean">path</span>
          </pre>

          <div>
            <p>Prefixes</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {prefixes.map((prefix: Prefix) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <code className="text-xl font-bold tracking-tight text-blue dark:text-orange">
                      {prefix.name}
                    </code>
                    <p className="text-base">{prefix.description}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-base">Examples</p>
                    <div className="flex flex-col space-y-0.5">
                      {prefix.examples.map((e: string) => (
                        <code className="text-sm">
                          <span className="text-blue dark:text-orange">
                            {prefix.name}
                          </span>
                          :
                          <span className="text-rose dark:text-cerulean">
                            {e}
                          </span>
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ConceptPanel>
  );
};

export const SpecialCases = () => {
  return (
    <>
      <p>SPECIAL CASES</p>
    </>
  );
};
