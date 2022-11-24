{ pkgs }:

{
  example = pkgs.mkShell {
    buildInputs = with pkgs; [ curl jq git ];

    SECRET_PASSWORD = "open sesame";

    shellHook = ''
      echo "Welcome to a Nix development environment!"
    '';
  };

  javascript = pkgs.mkShell {
    buildInputs = with pkgs; [ nodejs-18_x ];

    shellHook = ''
      echo "Welcome to a Nix development environment for JavaScript!"
    '';
  };

  python = pkgs.mkShell {
    buildInputs = with pkgs; [ python39 ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Python!"
    '';
  };

  go = pkgs.mkShell {
    buildInputs = with pkgs; [ go_1_19 ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Go!"
    '';
  };

  rust = pkgs.mkShell {
    buildInputs = with pkgs; [ cargo ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Rust!"
    '';
  };

  multi = pkgs.mkShell {
    buildInputs = with pkgs; [ python39 kubectl openssl terraform ];

    shellHook = ''
      echo "Welcome to a very mixed Nix development environment!"
    '';
  };
}
