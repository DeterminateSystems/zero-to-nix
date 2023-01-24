{
  description = "Example Scala development environment for Zero to Nix";

  # Flake inputs
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs"; # also valid: "nixpkgs"
  };

  # Flake outputs
  outputs = { self, nixpkgs }:
    let
      # Overlays enable you to customize the Nixpkgs attribute set
      overlays = [
        (self: super:
          let jdk = super.openjdk17; in
          # sets jre/jdk overrides that use the openjdk17 package
          {
            jre = jdk;
            inherit jdk;
          })
      ];

      # Helper to provide system-specific attributes
      nameValuePair = name: value: { inherit name value; };
      genAttrs = names: f: builtins.listToAttrs (map (n: nameValuePair n (f n)) names);
      allSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit overlays system; };
      });
    in
    {
      # Development environment output
      devShells = forAllSystems ({ pkgs }: {
        default = pkgs.mkShell {
          # The Nix packages provided in the environment
          packages = with pkgs; [
            # Uses the JRE/JDK version set up by the overlay.
            sbt
          ];
        };
      });
    };
}
