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

        (writeScriptBin "dev" ''
          setup
          pnpm run dev
        '')

        (writeScriptBin "preview" ''
          build
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

        (writeScriptBin "checks" ''
          check-internal-links
          lint-style
          check-sensitivity
        '')
      ];

      runLocal = pkgs.writeScriptBin "run-local" ''
        rm -rf dist
        pnpm install
        pnpm run build
        python3 -m http.server -d dist 3000
      '';
    in
    {
      devShells.default = pkgs.mkShell
        {
          buildInputs = common ++ scripts;
        };

      apps.default = flake-utils.lib.mkApp {
        drv = runLocal;
      };
    });
}
