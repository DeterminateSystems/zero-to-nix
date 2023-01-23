{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs =
    { self
    , flake-utils
    , nixpkgs
    }:

    {
      templates = {
        cpp-dev = {
          path = ./nix/templates/dev/cpp;
          description = "C++ dev environment template for Zero to Nix";
        };

        go-dev = {
          path = ./nix/templates/dev/go;
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

        cpp-pkg = {
          path = ./nix/templates/pkg/cpp;
          description = "C++ package starter template for Zero to Nix";
        };

        go-pkg = {
          path = ./nix/templates/pkg/go;
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
      };
    }

    //

    (
      let
        overlays = [
          (self: super: {
            nodejs = super.nodejs-18_x;
            pnpm = super.nodePackages.pnpm;
            alex = super.nodePackages.alex;
          })
        ];

      in
      flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit overlays system; };

        common = with pkgs; [
          # CI
          cachix
          direnv
          nix-direnv

          # Language
          vale
          alex

          # Link checking
          htmltest

          # JS
          nodejs
          pnpm
        ];

        run = pkg: "${pkgs.${pkg}}/bin/${pkg}";

        scripts = with pkgs; [
          (writeScriptBin "clean" ''
            rm -rf dist
          '')

          (writeScriptBin "setup" ''
            clean
            ${run "pnpm"} install
          '')

          (writeScriptBin "build" ''
            setup
            ${run "pnpm"} run build
          '')

          (writeScriptBin "build-ci" ''
            setup
            ENV=ci ${run "pnpm"} run build
          '')

          (writeScriptBin "dev" ''
            setup
            ${run "pnpm"} run dev
          '')

          (writeScriptBin "format" ''
            setup
            ${run "pnpm"} run format
          '')

          (writeScriptBin "check-internal-links" ''
            ${run "htmltest"} --conf ./.htmltest.internal.yml
          '')

          (writeScriptBin "check-external-links" ''
            ${run "htmltest"} --conf ./.htmltest.external.yml
          '')

          (writeScriptBin "lint-style" ''
            ${run "vale"} src/pages
          '')

          (writeScriptBin "check-sensitivity" ''
            ${run "alex"} --quiet src/pages
          '')

          (writeScriptBin "check-types" ''
            ${run "pnpm"} run typecheck
          '')

          (writeScriptBin "preview" ''
            build
            ${run "pnpm"} run preview
          '')

          # Run this to see if CI will pass
          (writeScriptBin "ci" ''
            build-ci
            check-internal-links
            lint-style
            check-sensitivity
            check-types
          '')
        ];

        runLocal = pkgs.writeScriptBin "run-local" ''
          rm -rf dist
          ${run "pnpm"} install
          ${run "pnpm"} run build
          ${run "pnpm"} run preview
        '';
      in
      {
        devShells =
          let
            exampleShells = import ./nix/shell/example.nix { inherit pkgs; };
          in
          {
            inherit (exampleShells) example cpp haskell javascript python go rust multi;
          }
          //
          {
            # The shell for developing this site
            default = pkgs.mkShell
              {
                buildInputs = common ++ scripts;
              };
          };

        apps.default = flake-utils.lib.mkApp {
          drv = runLocal;
        };
      })
    );
}
