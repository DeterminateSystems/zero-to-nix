# Zero to Nix

[Zero to Nix][site] is an unofficial and opinionated guide to getting started with [Nix] from [Determinate Systems][detsys].

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

| Component                                                                | What it does                                                                    |
| :----------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| [`Concept`](./src/components/mdx/concepts/Concept.vue)                   | Add a hoverable tool tip for a concept                                          |
| [`Danger`](./src/components/mdx/admonitions/Danger.vue)                  | Danger admonition block                                                         |
| [`Info`](./src/components/mdx/admonitions/Info.vue)                      | Info admonition block                                                           |
| [`Language`](./src/components/mdx/stateful/Language.vue)                 | Displays which (programming) language the user has selected                     |
| [`Languages`](./src/components/mdx/stateful/Languages.vue)               | Provides a (programming) language selector                                      |
| [`Harmonic`](./src/components/mdx/code/Harmonic.vue)                     | Provides system-specific shell commands for [Harmonic]                          |
| [`NixStorePath`](./src/components/concepts/NixStorePath.vue)             | Provides a colorful visualization of Nix store path components                  |
| [`Shell`](./src/components/code/Shell.vue)                               | Provides language- and system-specific shell commands                           |
| [`SpecificLanguage`](./src/components/mdx/stateful/SpecificLanguage.vue) | Displays the enclosed content only if the user has selected a specific language |
| [`System`](./src/components/mdx/stateful/System.vue)                     | Displays the currently selected system (Linux vs. macOS)                        |
| [`Systems`](./src/components/stateful/Systems.vue)                       | Provides a system selector (Linux vs. macOS)                                    |
| [`Success`](./src/components/mdx/admonitions/Success.vue)                | Success admonition block                                                        |
| [`Warning`](./src/components/mdx/admonitions/Warning.vue)                | Warning admonition block                                                        |

> **Note**: any time you use one of these components in an [MDX] file, you need to add a `client:load` directive to it.
> This is one of [îles][iles]' so-called [hydration directives][hydration].
> There are other directives available, but `client:load` is the one that we need to use, as it ensures that the component is loaded as soon as the user comes to the page.

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
- `summary` (an array of things that the user will accomplish in the guide)
- `order` (ascending)

For [concept pages](./src/pages/concepts/):

- `title`
- `snippet` (a brief explanation of the concept that appears in pop-ups)
- `related` (an array of IDs representing concept pages, like `flakes` or `nix-store`)
- `readMore` (an array of links to external sources, such as official docs)

## Site logic

There are a few other important files you should be aware of when working on the site:

- [`src/app.ts`](./src/app.ts) defines global page metadata
- [`src/site.ts`](./src/site.ts) defines site-level values, like the title, description, navbar links, and more.
- [`src/logic/content.ts`](./src/logic/content.ts) provides the content management logic for the site (type-safe page frontmatter, functions to fetch and sort documents, and more)
- [`src/logic/state.ts`](./src/logic/state.ts) defines all stateful logic using the [nanostores] library
- [`src/logic/theme.ts`](./src/logic/theme.ts) provides logic for the light/dark theme switcher

[detsys]: https://determinate.systems
[direnv]: https://direnv.net
[harmonic]: https://github.com/DeterminateSystems/harmonic
[hydration]: https://iles.pages.dev/guide/hydration#hydration-directives
[iles]: https://github.com/elMassimo/iles
[mdx]: https://mdxjs.com
[nanostores]: https://github.com/nanostores/nanostores
[nix]: https://nixos.org
[site]: https://zero-to-nix.vercel.app
[tailwind]: https://tailwindcss.com
[vercel]: https://vercel.com
[vue]: https://vuejs.org
