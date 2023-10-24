for env in ./nix/templates/dev/*; do
  nix flake check --all-systems $env
done

for pkg in ./nix/templates/pkg/*; do
  nix flake check --all-systems $pkg
  nix build $pkg
done
