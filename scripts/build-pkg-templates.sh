set -euo pipefail

echo "Checking package build templates"

for pkg in ./nix/templates/pkg/*; do
  echo "\_ checking ${pkg}"
  nix flake check $pkg
  echo "\_ building ${pkg}"
  nix build $pkg
done
