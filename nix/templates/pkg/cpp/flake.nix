{
  description = "Python example flake for Zero to Nix";

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
        default =
          let
            binName = "zero-to-nix-cpp";
            cppDependencies = with pkgs; [ boost gcc poco ];
          in
          pkgs.stdenv.mkDerivation {
            name = "zero-to-nix-cpp";
            src = self;
            buildInputs = cppDependencies;
            buildPhase = "c++ -std=c++17 -o ${binName} ${./main.cpp} -lPocoFoundation -lboost_system";
            installPhase = ''
              mkdir -p $out/bin
              cp ${binName} $out/bin/
            '';
          };
      });
    };
}
