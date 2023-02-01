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
      scalaVersion = "2.12";

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
          inherit pname version;
          depsSha256 = "sha256-ebtaZPbLylPt17/r++1QFWezOBfSUB9J8djkOHOpWbE=";
          nativeBuildInputs = with pkgs; [ makeWrapper ];
          src = ./.;
          buildPhase = ''
            sbt package
          '';
          installPhase = ''
            mkdir -p $out/bin
            cp target/scala-${scalaVersion}/${pname}_${scalaVersion}-${version}.jar $out/bin/${pname}.jar
            #makeWrapper ${pkgs.jre}/bin/java $out/bin/${pname} \
            #  --add-flags "-jar $out/bin/${pname}.jar"
          '';
        };
      });
    };
}
