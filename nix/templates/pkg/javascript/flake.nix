{
  description = "JavaScript example flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2305.491812.tar.gz";
  };

  outputs = { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      packages = forAllSystems ({ pkgs }: {
        default = pkgs.buildNpmPackage {
          name = "zero-to-nix-javascript";

          buildInputs = with pkgs; [
            nodejs_18
          ];

          src = ./.;

          npmDepsHash = "sha256-8Bj7nPZBAU+SnVTeKeArcjYnfZV4z/4I7fX+l0V+v04=";

          npmBuild = "npm run build";

          installPhase = ''
            mkdir $out
            cp dist/index.html $out
          '';
        };
      });
    };
}
