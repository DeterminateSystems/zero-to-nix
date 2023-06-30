for env in ./nix/templates/dev/*; do
  nix flake check $env
done

for pkg in ./nix/templates/pkg/*; do
  nix build $pkg
done
