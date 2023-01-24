{
  description = "Scala example flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    sbt = {
      url = "github:zaninime/sbt-derivation";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, sbt }:
    let
      nameValuePair = name: value: { inherit name value; };
      genAttrs = names: f: builtins.listToAttrs (map (n: nameValuePair n (f n)) names);
      allSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: genAttrs allSystems (system: f {
        inherit system;
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      packages = forAllSystems ({ pkgs, system }: {
        default = sbt.mkSbtDerivation.${system} {
          pname = "zero-to-nix-scala";
          version = "0.1.0";
          depsSha256 = "sha256-ebtaZPbLylPt17/r++1QFWezOBfSUB9J8djkOHOpWbE=";
          src = ./.;
        };
      });
    };
}
