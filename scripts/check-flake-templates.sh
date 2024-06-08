for env in ./nix/templates/dev/*; do
  echo "checking development environment ${env}"
  nix flake check --all-systems $env
done

for pkg in ./nix/templates/pkg/*; do
  echo "checking package build ${pkg}"
  nix flake check --all-systems $pkg
  nix build $pkg
done
