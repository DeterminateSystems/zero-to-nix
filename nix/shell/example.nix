{ pkgs }:

{
  example = pkgs.mkShell {
    buildInputs = with pkgs; [ curl jq git ];

    SECRET_PASSWORD = "open sesame";

    shellHook = ''
      echo "Welcome to a Nix shell environment!"
    '';
  };

  javascript = pkgs.mkShell {
    buildInputs = with pkgs; [ nodejs-18_x ];

    shellHook = ''
      echo "Welcome to a Nix shell for JavaScript development!"
    '';
  };

  python = pkgs.mkShell {
    buildInputs = with pkgs; [ python39 ];

    shellHook = ''
      echo "Welcome to a Nix shell for Python development!"
    '';
  };

  go = pkgs.mkShell {
    buildInputs = with pkgs; [ go_1_19 ];

    shellHook = ''
      echo "Welcome to a Nix shell for Go development!"
    '';
  };

  rust = pkgs.mkShell {
    buildInputs = with pkgs; [ cargo ];

    shellHook = ''
      echo "Welcome to a Nix shell for Rust development!"
    '';
  };

  multi = pkgs.mkShell {
    buildInputs = with pkgs; [ terraform ];
  };
}
