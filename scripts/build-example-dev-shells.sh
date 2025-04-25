set -euo pipefail

echo "Checking example dev shells"

SYSTEM=$(nix eval --raw --impure --expr builtins.currentSystem)

for shell in $(nix flake show --json --all-systems | jq -r ".devShells.\""${SYSTEM}\"" | keys[]"); do
  echo "\_ building shell ${shell}"
  nix build ".#devShells.${SYSTEM}.${shell}"
done
