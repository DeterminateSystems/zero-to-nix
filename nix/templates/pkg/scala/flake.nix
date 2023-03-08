{
  description = "Scala example flake for Zero to Nix";

  # Flake inputs
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    sbt = {
      url = "github:zaninime/sbt-derivation";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  # Flake outputs
  outputs = { self, nixpkgs, sbt }:
    let
      pname = "zero-to-nix-scala";
      version = "0.1.0";
      scalaVersion = "2.12";

      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
        inherit system;
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      # Package outputs
      packages = forAllSystems ({ pkgs, system }: {
        default = sbt.mkSbtDerivation.${system} {
          inherit pname version;
          depsSha256 = "sha256-rFh3dTcK65/sFOy2mQI6HxK+VQdzn3XvBNaVksSvP0U=";
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
