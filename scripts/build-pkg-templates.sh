set -euo pipefail

echo "Checking package build templates"

for pkg in ./nix/templates/pkg/*; do
  echo "\_ building ${pkg}"
  nix build $pkg
done
