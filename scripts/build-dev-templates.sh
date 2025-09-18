#!/usr/bin/env bash

set -euo pipefail

echo "Checking dev shell templates"

SYSTEM=$(nix eval --raw --impure --expr builtins.currentSystem)

echo "Building each individually"
for shell in ./nix/templates/dev/*; do
  echo "\_ building dev shell ${shell}"
  nix build "${shell}#devShells.${SYSTEM}.default"
  echo "\_ successfully built dev shell ${shell} ✅"
done
