set -euo pipefail

echo "Updating flake inputs for dev shell templates"

for template in ./nix/templates/dev/*; do
  (
    echo "\_ updating ${template}"
    cd $template
    nix flake update
  )
done

echo "Updating flake inputs for package build templates"

for template in ./nix/templates/pkg/*; do
  (
    cd $template
    nix flake update
  )
done
