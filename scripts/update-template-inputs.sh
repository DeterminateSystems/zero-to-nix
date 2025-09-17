set -euo pipefail

root=$(git rev-parse --show-toplevel)

echo "Updating flake inputs for dev shell templates"

for kind in dev pkg; do
  for template in ${root}/nix/templates/${kind}/*; do
    (
      echo "\_ updating ${template}"
      cd $template
      nix flake update
      nix flake check --all-systems
      echo "\_ updated ${template} ✅"
    )
  done
done
