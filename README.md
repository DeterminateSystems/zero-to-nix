# Zero to Nix

```shell
# Activate Nix shell environment
direnv allow

# Develop the site
dev

# Build the site
build

# Preview the site (run using a Python web server to mimic non-Node environment)
preview
```

The site is also a package output:

```shell
nix build
```

And an app:

```shell
nix run

# Open up http://localhost:3000
```
