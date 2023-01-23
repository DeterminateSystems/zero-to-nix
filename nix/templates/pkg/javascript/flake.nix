{
  description = "JavaScript example flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, nixpkgs }:
    let
      nameValuePair = name: value: { inherit name value; };
      genAttrs = names: f: builtins.listToAttrs (map (n: nameValuePair n (f n)) names);
      allSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      packages = forAllSystems ({ pkgs }: {
        default = pkgs.stdenv.mkDerivation {
          name = "zero-to-nix-javascript";

          buildInputs = [
            pkgs.nodePackages.pnpm
            pkgs.nodejs-18_x
          ];

          src = ./.;

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
    };
}
