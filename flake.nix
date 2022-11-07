{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs =
    { self
    , flake-utils
    , nixpkgs
    }:

    flake-utils.lib.eachDefaultSystem (system:
    let
      overlays = [
        (self: super: rec {
          nodejs = super.nodejs-18_x;
          pnpm = super.nodePackages.pnpm;
        })
      ];
      pkgs = import nixpkgs { inherit overlays system; };

      common = with pkgs; [ nodejs pnpm ];
      scripts = with pkgs; [
        (writeScriptBin "setup" ''
          pnpm install
        '')

        (writeScriptBin "build" ''
          setup
          pnpm run build
        '')

        (writeScriptBin "dev" ''
          setup
          pnpm run dev
        '')
      ];
    in
    {
      devShells.default = pkgs.mkShell
        {
          buildInputs = common ++ scripts;
        };
    });
}
