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

        common = with pkgs; [ vale alex htmltest nodejs pnpm ];

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
