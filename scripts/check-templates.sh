set -euo pipefail

echo "Checking dev shell templates"

for env in ./nix/templates/dev/*; do
  echo "\_ checking ${env}"
  nix flake check --all-systems $env
done

echo "Checking pkg templates"

for pkg in ./nix/templates/pkg/*; do
  echo "\_ checking ${pkg}"
  nix flake check --all-systems $pkg
done
