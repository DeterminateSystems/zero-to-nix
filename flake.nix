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
        })
      ];
    in
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit overlays system; };

      common = with pkgs; [ nodejs pnpm python38 ];
      scripts = with pkgs; [
        (writeScriptBin "setup" ''
          pnpm install
          pnpm run content
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
          pnpm run export
          python3 -m http.server -d out 3000
        '')
      ];
    in
    {
      devShells.default = pkgs.mkShell
        {
          buildInputs = common ++ scripts;
        };

      packages.default = pkgs.stdenv.mkDerivation {
        name = "dev-to-nix";
        src = ./.;
        buildInputs = with pkgs; [ pnpm ];
        installPhase = ''
          mkdir -p $out
        '';
        buildPhase = ''
          pnpm install
          pnpm run build
          pnpm run export

          cp -R out/ $out/
        '';
      };
    });
}
