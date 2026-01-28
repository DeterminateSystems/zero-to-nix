# Zero to Nix

[![FlakeHub](https://img.shields.io/endpoint?url=https://flakehub.com/f/DeterminateSystems/zero-to-nix/badge)](https://flakehub.com/flake/DeterminateSystems/zero-to-nix)

[Zero to Nix][site] is your guide to learning [Nix] and [flakes].
It was created and is maintained by [Determinate Systems][detsys].

## Setup

Make sure that you have Nix and [direnv] installed, then:

```shell
# Activate Nix development environment
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

### Run checks locally

The site has some [CI checks][ci] that run in [GitHub Actions][gha], like link checking.
To run the whole CI suite locally:

```shell
ci
```

### Build locally

To ensure that the site can build properly in response to changes:

```shell
build
```

As an alternative, you can [run the whole CI suite](#run-checks-locally), which also builds the site.

### Format code

To ensure that everything is properly formatted:

```shell
format
```

## Publishing

The Zero to Nix site is automatically published on [Vercel], which also provides deploy previews for pull requests.

## Technologies

Zero to Nix's "stack" 🥞:

- [Astro] for content management, templating and site generation
- [MDX] for content
- [Tailwind] for CSS

## MDX components

The site uses a number of custom [MDX] components to spice up the usual Markdown content.

| Component                                                                | What it does                                                                                                                           |
| :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [`Admonition`](./src/components/mdx/Admonition.astro)                      | An admonition block of type `danger`, `info`, `success`, or `warning`.<br /><br />Adding an `id` makes it a stateful callout dropdown. |
| [`Language`](./src/components/mdx/Language.astro)                 | Displays which (programming) language the user has selected                                                                            |
| [`Languages`](./src/components/mdx/Languages.astro)               | Provides a (programming) language selector                                                                                             |
| [`NixStorePath`](./src/components/mdx/NixStorePath.astro)             | Provides a colorful visualization of Nix store path components                                                                         |
| [`SpecificLanguage`](./src/components/mdx/SpecificLanguage.astro) | Displays the enclosed content only if the user has selected a specific language                                                        |

## Directory structure

| Directory                             | What it contains                                                               |
| :------------------------------------ | :----------------------------------------------------------------------------- |
| [`src/assets`](./src/assets/)         | Assets to be processed (only CSS for now)                                      |
| [`src/components`](./src/components/) | [Astro] components used throughout the site                                      |
| [`src/layouts`](./src/layouts/)       | [Astro] layouts for specific page types                                          |
| [`src/pages`](./src/pages/)           | The content of the site (all [MDX]) plus some Astro templates for specific pages |
| [`public`](./public/)                 | Assets that won't be processed (favicon, etc.)                                 |

## Page metadata

For [quick start pages](./src/pages/start/):

- `title`
- `summary` (an array of things that the user will accomplish in the guide)
- `order` (ascending)

For [concept pages](./src/pages/concepts/):

- `title`
- `snippet` (a brief explanation of the concept that appears in pop-ups)
- `related` (an array of IDs representing concept pages, like `flakes` or `nix-store`)
- `externalSources` (an array of links to external sources, such as official docs)

## Site logic

There are a few other important files you should be aware of when working on the site:

- [`src/site.ts`](./src/site.ts) defines site-level values, like the title, description, navbar links, and more.
- [`src/content/`](./src/content/) provides the content management logic for the site (type-safe page frontmatter, functions to fetch and sort documents, and more)

## Suggested VS Code settings

If you happen to use VS Code as your editor, we recommend adding these extensions:

- [`unifiedjs.vscode-mdx`][vsc-mdx]
- [`bradlc.vscode-tailwindcss`][vsc-tailwind]
- [`esbenp.prettier-vscode`][vsc-prettier]
- [`vscode.vscode-typescript-next`][vsc-tsc]

We also recommend adding these settings to your local `.vscode/settings.json`:

```jsonc
{
  "[mdx]": {
    // By default, this extension overwrites our one-sentence-per-line policy
    "editor.formatOnSave": false,
    // This is a nice helper for longer sentences
    "editor.wordWrapColumn": 100,
    "editor.wordWrap": "wordWrapColumn",
  },
  // Format everything using the Prettier config
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Keep junk out of your search results
  "search.exclude": {
    "**/.direnv": true,
    "**/.git": true,
    "**/node_modules": true,
    "dist": true,
    "pnpm-lock.yaml": true,
    "*.d.ts": true,
    "tmp": true,
  },
}
```

[astro]: https://astro.build
[ci]: ./.github/workflows/test.yml
[detsys]: https://determinate.systems
[direnv]: https://direnv.net
[flakes]: https://zero-to-nix.com/concepts/flakes
[gha]: https://github.com/features/actions
[mdx]: https://mdxjs.com
[nanostores]: https://github.com/nanostores/nanostores
[nix]: https://nixos.org
[site]: https://zero-to-nix.com/
[tailwind]: https://tailwindcss.com
[vercel]: https://vercel.com
[vsc-mdx]: https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx
[vsc-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vsc-tailwind]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[vsc-tsc]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next
