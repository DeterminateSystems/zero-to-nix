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
        go = {
          path = ./nix/templates/go;
          description = "Go starter template for Zero to Nix";
        };

        javascript = {
          path = ./nix/templates/javascript;
          description = "JavaScript starter template for Zero to Nix";
        };

        python = {
          path = ./nix/templates/python;
          description = "Python starter template for Zero to Nix";
        };

        rust = {
          path = ./nix/templates/rust;
          description = "Rust starter template for Zero to Nix";
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

        common = with pkgs; [ vale alex htmltest nodejs pnpm python38 ];

        scripts = with pkgs; [
          (writeScriptBin "clean" ''
            rm -rf dist
          '')

          (writeScriptBin "setup" ''
            clean
            pnpm install
          '')

          (writeScriptBin "build" ''
            setup
            pnpm run build
          '')

          (writeScriptBin "build-dev" ''
            setup
            ENV=dev pnpm run build
          '')

          (writeScriptBin "dev" ''
            setup
            pnpm run dev
          '')

          (writeScriptBin "format" ''
            setup
            pnpm run format
          '')

          (writeScriptBin "preview" ''
            ENV=preview build
            python3 -m http.server -d dist 3000
          '')

          (writeScriptBin "check-internal-links" ''
            htmltest --conf ./.htmltest.internal.yml
          '')

          (writeScriptBin "check-external-links" ''
            htmltest --conf ./.htmltest.external.yml
          '')

          (writeScriptBin "lint-style" ''
            vale src/pages
          '')

          (writeScriptBin "check-sensitivity" ''
            alex --quiet src/pages
          '')

          (writeScriptBin "check-types" ''
            npm run typecheck
          '')

          # Run this to see if CI will pass
          (writeScriptBin "ci" ''
            ENV=ci build
            check-internal-links
            lint-style
            check-sensitivity
            check-types
          '')
        ];

        runLocal = pkgs.writeScriptBin "run-local" ''
          rm -rf dist
          pnpm install
          pnpm run build
          python3 -m http.server -d dist 3000
        '';

        exampleShells = import ./nix/shell/example.nix { inherit pkgs; };
      in
      {
        devShells = {
          # The shell for developing this site
          default = pkgs.mkShell
            {
              buildInputs = common ++ scripts;
            };

          # Shells used in quick start guide
          inherit (exampleShells)
            example javascript python go rust multi;
        };

        apps.default = flake-utils.lib.mkApp {
          drv = runLocal;
        };
      })
    );
}
