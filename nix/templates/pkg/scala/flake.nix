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
      pname = "zero-to-nix-scala";
      version = "0.1.0";

      nameValuePair = name: value: { inherit name value; };
      genAttrs = names: f: builtins.listToAttrs (map (n: nameValuePair n (f n)) names);
      allSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: genAttrs allSystems (system: f {
        inherit system;
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      devShells = forAllSystems ({ pkgs, system }: {
        default = pkgs.mkShell {
          packages = [ pkgs.sbt ];
        };
      });

      packages = forAllSystems ({ pkgs, system }: {
        default = sbt.mkSbtDerivation.${system} {
          inherit pname version;
          depsSha256 = "sha256-ebtaZPbLylPt17/r++1QFWezOBfSUB9J8djkOHOpWbE=";
          nativeBuildInputs = [ pkgs.makeWrapper ];
          src = ./.;
          buildPhase = ''
            sbt package
          '';
          installPhase = ''
            mkdir -p $out/bin
            cp target/scala-2.12/${pname}_2.12-${version}.jar $out/bin/${pname}.jar
            makeWrapper ${pkgs.jre}/bin/java $out/bin/${pname} \
              --add-flags "-jar $out/bin/${pname}.jar"
          '';
        };
      });
    };
}
