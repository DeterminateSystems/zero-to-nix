{
  description = "JavaScript example flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };
    in
    {
      packages.default = pkgs.stdenv.mkDerivation {
        name = "zero-to-nix-javascript";

        buildInputs = [
          pkgs.nodePackages.pnpm
          pkgs.nodejs-18_x
        ];

        src = self;

        buildPhase = ''
          pnpm install
          pnpm run build
        '';

        installPhase = ''
          mkdir $out
          cp dist/index.html $out
        '';
      };
    });
}
