# Zero to Nix

```shell
# Activate Nix shell environment
direnv allow

# Recommended
alias npm=pnpm

# Develop the site
dev

# Build the site
build

# Preview the site (run using a Python web server to mimic non-Node environment)
preview
```

Or run the app locally using Nix:

```shell
nix run

# Open up http://localhost:3000
```
