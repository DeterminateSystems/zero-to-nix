# This flake is heavily indebted to the flake template in the sbt-derivation project:
# https://github.com/zaninime/sbt-derivation/blob/92d6d6d825e3f6ae5642d1cce8ff571c3368aaf7/templates/cli-app/flake.nix
{
  description = "Scala example flake for Zero to Nix";

  # Flake inputs
  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2405.*.tar.gz";
    sbt = {
      url = "github:zaninime/sbt-derivation";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  # Flake outputs
  outputs = { self, nixpkgs, sbt, ... }:
    let
      name = "zero-to-nix-scala";
      version = "0.1.0";
      mainClass = "hello";

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
          pname = name;
          inherit version;
          depsSha256 = "sha256-eOSvpVOMjIO+oUErei4NGj9xMKknhkFe6+NrUui+hm8=";
          src = ./.;
          depsWarmupCommand = ''
            sbt 'managedClasspath; compilers'
          '';
          startScript = ''
            #!${pkgs.runtimeShell}
            exec ${pkgs.openjdk_headless}/bin/java ''${JAVA_OPTS:-} -cp "${
              placeholder "out"
            }/share/${name}/lib/*" ${nixpkgs.lib.escapeShellArg mainClass} "$@"
          '';
          buildPhase = ''
            sbt stage
          '';
          installPhase = ''
            libs_dir="$out/share/${name}/lib"
            mkdir -p "$libs_dir"
            cp -ar target/universal/stage/lib/. "$libs_dir"
            install -T -D -m755 $startScriptPath $out/bin/${name}
          '';
          passAsFile = [ "startScript" ];
        };
      });
    };
}
