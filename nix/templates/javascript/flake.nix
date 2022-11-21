{
  description = "JavaScript starter flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };

      nodejs = pkgs.nodejs-18_x;
      nodePkgs = with nodejs.pkgs; [ pnpm ];
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          nodejs
        ] ++ nodePkgs;
      };
    });
}
