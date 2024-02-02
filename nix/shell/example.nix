{ pkgs }:

{
  example = pkgs.mkShell {
    name = "zero-to-nix";

    packages = with pkgs; [ curl jq git ];

    FUNNY_JOKE = "What kind of phone does a turtle use? A shell phone!";
  };

  hook = pkgs.mkShell {
    shellHook = ''
      echo "Congrats! You just triggered a shell hook for a Nix development environment."
      echo "Run \"exit\" to exit this environment."
      echo "Then run \"nix develop github:DeterminateSystems/zero-to-nix#hook\" again to re-trigger this hook."
    '';

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
    packages = with pkgs; [ nodejs_18 ];

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
    packages = with pkgs; [ cargo rustc ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Rust!"
    '';
  };

  scala = pkgs.mkShell {
    packages = with pkgs; [ sbt ];

    shellHook = ''
      echo "Welcome to a Nix development environment for Scala!"
    '';
  };

  multi = pkgs.mkShell {
    packages = with pkgs; [ python39 kubectl openssl terraform ];

    shellHook = ''
      echo "Welcome to a very mixed Nix development environment!"
    '';
  };
}
