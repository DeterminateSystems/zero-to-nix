{ pkgs }:

{
  example = pkgs.mkShell {
    packages = with pkgs; [ curl jq git ];

    FUNNY_JOKE = "What kind of phone does a turtle use? A shell phone!";
  };

  cpp = pkgs.mkShell {
    packages = with pkgs; [ gcc cmake ];

    shellHook = ''
      echo "Welcome to a Nix development environment for C++!"
    '';
  };

  haskell = pkgs.mkShell {
    packages = with pkgs.haskellPackages; [ stack ghc ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Haskell!"
    '';
  };

  javascript = pkgs.mkShell {
    packages = with pkgs; [ nodejs-18_x ];

    shellHook = ''
      echo "Welcome to a Nix development environment for JavaScript!"
    '';
  };

  python = pkgs.mkShell {
    packages = with pkgs; [ python39 ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Python!"
    '';
  };

  go = pkgs.mkShell {
    packages = with pkgs; [ go_1_19 ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Go!"
    '';
  };

  rust = pkgs.mkShell {
    packages = with pkgs; [ cargo ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Rust!"
    '';
  };

  multi = pkgs.mkShell {
    packages = with pkgs; [ python39 kubectl openssl terraform ];

    shellHook = ''
      echo "Welcome to a very mixed Nix development environment!"
    '';
  };
}
