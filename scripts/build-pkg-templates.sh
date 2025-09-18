#!/usr/bin/env bash

set -euo pipefail

echo "Checking package build templates"

echo "Building all of them all at once for speed"
nix build --keep-going ./nix/templates/pkg/*

echo "Building each individually as a summary"
for pkg in ./nix/templates/pkg/*; do
  echo "\_ building package ${pkg}"
  nix build "${pkg}"
done
