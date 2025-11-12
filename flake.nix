{
  description = "Zero to Nix: Your guide to learning Nix and flakes";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1";

  outputs =
    {
      self,
      ...
    }@inputs:

    let
      # Nix systems supported
      supportedSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      forEachSupportedSystem =
        f:
        inputs.nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            inherit system;
            pkgs = import inputs.nixpkgs { inherit system; };
          }
        );

      # Helper function for scripting
      runPkg = pkgs: pkg: "${pkgs.${pkg}}/bin/${pkg}";
    in
    {
      devShells = forEachSupportedSystem (
        { pkgs, system }:
        let
          common = with pkgs; [
            # Language
            vale

            # Link checking
            htmltest
            lychee

            # JS
            nodejs
            pnpm

            # Markdown linting
            rumdl

            # Serve locally
            static-web-server

            self.formatter.${system}
          ];

          script =
            name: runtimeInputs: text:
            pkgs.writeShellApplication {
              inherit name runtimeInputs text;
            };

          scripts = with pkgs; [
            (script "setup" [ pnpm ] "pnpm install")

            (script "build" [ pnpm ] ''
              setup
              pnpm run build
            '')

            (script "build-ci" [ pnpm ] ''
              setup
              ENV=ci pnpm run build
            '')

            (script "dev" [ pnpm ] ''
              setup
              pnpm run dev
            '')

            (script "format" [ pnpm ] ''
              setup
              pnpm run format
            '')

            (script "check-internal-links" [ htmltest ] ''
              htmltest --conf ./.htmltest.internal.yml
            '')

            (script "lint-style" [ vale ] ''
              vale src/pages
            '')

            (script "preview" [ pnpm ] ''
              build
              pnpm run preview
            '')

            (script "check-nix-formatting" [ nixfmt-rfc-style ] ''
              git ls-files -z '*.nix' | xargs -0 -r nixfmt --check
            '')

            (script "format-nix" [ ] ''
              git ls-files -z '*.nix' | xargs -0 -r nix fmt
            '')

            # Run this to see if CI will pass
            (script "ci" [ ] ''
              set -e

              check-nix-formatting
              build-ci
              check-internal-links
              lint-style
            '')
          ];

          exampleShells = import ./nix/shell/example.nix { inherit pkgs; };
        in
        {
          inherit (exampleShells)
            example
            cpp
            haskell
            hook
            javascript
            python
            go
            rust
            scala
            multi
            ;
        }
        // {
          default = pkgs.mkShellNoCC {
            packages = common ++ scripts;
          };
        }
      );

      formatter = forEachSupportedSystem ({ pkgs, ... }: pkgs.nixfmt-rfc-style);

      templates = {
        cpp-dev = {
          path = ./nix/templates/dev/cpp;
          description = "C++ dev environment template for Zero to Nix";
        };

        go-dev = {
          path = ./nix/templates/dev/golang;
          description = "Go dev environment template for Zero to Nix";
        };

        haskell-dev = {
          path = ./nix/templates/dev/haskell;
          description = "Haskell dev environment template for Zero to Nix";
        };

        javascript-dev = {
          path = ./nix/templates/dev/javascript;
          description = "JavaScript dev environment template for Zero to Nix";
        };

        python-dev = {
          path = ./nix/templates/dev/python;
          description = "Python dev environment template for Zero to Nix";
        };

        rust-dev = {
          path = ./nix/templates/dev/rust;
          description = "Rust dev environment template for Zero to Nix";
        };

        scala-dev = {
          path = ./nix/templates/dev/scala;
          description = "Scala dev environment template for Zero to Nix";
        };

        cpp-pkg = {
          path = ./nix/templates/pkg/cpp;
          description = "C++ package starter template for Zero to Nix";
        };

        go-pkg = {
          path = ./nix/templates/pkg/golang;
          description = "Go package starter template for Zero to Nix";
        };

        haskell-pkg = {
          path = ./nix/templates/pkg/haskell;
          description = "Haskell package starter template for Zero to Nix";
        };

        javascript-pkg = {
          path = ./nix/templates/pkg/javascript;
          description = "JavaScript package starter template for Zero to Nix";
        };

        python-pkg = {
          path = ./nix/templates/pkg/python;
          description = "Python package starter template for Zero to Nix";
        };

        rust-pkg = {
          path = ./nix/templates/pkg/rust;
          description = "Rust package starter template for Zero to Nix";
        };

        scala-pkg = {
          path = ./nix/templates/pkg/scala;
          description = "Scala package starter template for Zero to Nix";
        };
      };
    };
}
