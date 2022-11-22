# Zero to Nix

[Zero to Nix][site] is an unofficial and opinionated guide to getting started with [Nix] from [Determinate Systems][detsys].

## Setup

Make sure that you have Nix and [direnv] installed, then:

```shell
# Activate Nix shell environment
direnv allow

# Recommended
alias npm=pnpm
```

## Developing the site

### Run locally

To run the site in development mode (with live reload when you make changes):

```shell
dev
```

To run the site in preview mode (with a static web server and no live reload):

```shell
preview

# Alternatively
nix run
```

Then open your browser to http://localhost:3000.

### Build locally

To ensure that the site can build properly in response to changes:

```shell
build
```

### Format code

To ensure that everything is properly formatted:

```shell
format
```

## Publishing

The Zero to Nix site is automatically published on [Vercel], which also provides deploy previews for pull requests.

## Technologies

Zero to Nix's "stack" 🥞:

- [îles][iles] for content management and site generation
- [Vue] for templating
- [MDX] for content
- [Tailwind] for CSS

## MDX components

The site uses a number of custom [MDX] components to spice up the usual Markdown content.

| Component                                                   | What it does                                                                    |
| :---------------------------------------------------------- | :------------------------------------------------------------------------------ |
| [`Concept`](./src/components/Concept.vue)                   | Add a hoverable tool tip for a concept                                          |
| [`Language`](./src/components/Language.vue)                 | Displays which (programming) language the user has selected                     |
| [`Languages`](./src/components/Languages.vue)               | Provides a (programming) language selector                                      |
| [`Harmonic`](./src/components/Harmonic.vue)                 | Provides system-specific shell commands for [Harmonic]                          |
| [`NixStorePath`](./src/components/NixStorePath.vue)         | Provides a colorful visualization of Nix store path components                  |
| [`Shell`](./src/components/Shell.vue)                       | Provides language- and system-specific shell commands                           |
| [`SpecificLanguage`](./src/components/SpecificLanguage.vue) | Displays the enclosed content only if the user has selected a specific language |
| [`Systems`](./src/components/Systems.vue)                   | Provides a system selector (Linux vs. macOS)                                    |

## Directory structure

| Directory                             | What it contains                                                               |
| :------------------------------------ | :----------------------------------------------------------------------------- |
| [`src/assets`](./src/assets/)         | Assets to be processed (only CSS for now)                                      |
| [`src/components`](./src/components/) | [Vue] components used throughout the site                                      |
| [`src/layouts`](./src/layouts/)       | [Vue] layouts for specific page types                                          |
| [`src/logic`](./src/logic/)           | TypeScript helper stuff for state and content management                       |
| [`src/pages`](./src/pages/)           | The content of the site (all [MDX]) plus some Vue templates for specific pages |
| [`public`](./public/)                 | Assets that won't be processed (favicon, etc.)                                 |

## Page metadata

For [quick start pages](./src/pages/start/):

- `title`
- `order` (ascending)

For [concept pages](./src/pages/concepts/):

- `title`
- `related` (an array of IDs representing concept pages, like `flakes` or `nix-store`)
- `readMore` (an array of links to external sources, such as official docs)

[detsys]: https://determinate.systems
[direnv]: https://direnv.net
[harmonic]: https://github.com/DeterminateSystems/harmonic
[iles]: https://github.com/elMassimo/iles
[mdx]: https://mdxjs.com
[nix]: https://nixos.org
[site]: https://zero-to-nix.vercel.app
[tailwind]: https://tailwindcss.com
[vercel]: https://vercel.com
[vue]: https://vuejs.org
