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
          (writeScriptBin "get-registry-json" ''
            curl -O https://raw.githubusercontent.com/NixOS/flake-registry/master/flake-registry.json
            mv flake-registry.json src/data
          '')

          (writeScriptBin "clean" ''
            rm -rf dist
          '')

          (writeScriptBin "setup" ''
            clean
            get-registry-json
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
          ENV=preview pnpm run build
          python3 -m http.server -d dist 3000
        '';
      in
      {
        devShells = {
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
