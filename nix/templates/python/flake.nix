{
  description = "Go example flake for Zero to Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        python = pkgs.python39;
      in
      {
        packages.default = python.pkgs.buildPythonApplication {
          name = "hello-nix-python";

          buildInputs = with python.pkgs; [ pip ];

          src = ./.;
        };
      });
}
