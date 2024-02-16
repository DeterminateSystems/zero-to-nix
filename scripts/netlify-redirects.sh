#!/usr/bin/env bash

# Note: www.zero-to-nix.com is in here explicitly and not zero-to-nix.com.
# Adding zero-to-nix.com would cause an infinite loop back to itself.

domains=(
  02nix.com
  nix-lang.org
  nixlang.org
  Otonix.com
  z2n.dev
  zero-to-nix.netlify.app
  zero-to-nixos.com
  zero2nix.com
  zerotonix.com
  zerotoonix.com
  zerotwonix.com
  www.zero-to-nix.com
);

for domain in "${domains[@]}"; do
cat <<-EOF
[[redirects]]
from = "https://$domain/*"
to = "https://zero-to-nix.com/:splat"
force = true
status = 301

[[redirects]]
from = "https://www.$domain/*"
to = "https://zero-to-nix.com/:splat"
force = true
status = 301

EOF
done

