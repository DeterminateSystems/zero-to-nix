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
        default = pkgs.buildNpmPackage {
          name = "zero-to-nix-javascript";

          buildInputs = with pkgs; [
            nodejs-18_x
          ];

          src = ./.;

          npmDepsHash = "sha256-A85l8kFgIU2grgDQNBM7ilLVPehMl6ilkpt4YoiZyeo=";

          installPhase = ''
            mkdir $out
            npm run build
            cp dist/index.html $out
          '';
        };
      });
    };
}
