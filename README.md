<p align='center'>
Alibaba Travels Vue 3 starter package with vite
- Check <a href="https://github.com/antfu/vitesse">vitesse</a>
</p>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/pages)

- 📑 [Layout system](./src/layouts)

- 📦 [Components auto importing](./src/components)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 📐 [JSX Support](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- ⚖️ [Rollup Visualizer](https://github.com/btd/rollup-plugin-visualizer)

- 🗜️ [File compression](https://github.com/vbenjs/vite-plugin-compression) - Use `gzip` or `brotli` to compress resources.

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 📩 [Markdown Support](https://github.com/antfu/vite-plugin-md)

- 💡 [PostCSS](https://postcss.org/)

- ⚙️ Unit testing with [Vitest](https://github.com/vitest-dev/vitest)

- ⚙️ E2E and component testing with [Cypress](https://www.cypress.io/)

- 🦾 TypeScript

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

<br>


## Pre-packed

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) - visualize and analyze your bundle to see which modules are taking up space.
- [`vite-plugin-compression`](https://github.com/vbenjs/vite-plugin-compression) - use `gzip` or `brotli` to compress resources.
- [`plugin-vue-jsx`](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx) - use JSX & TSX in your `.vue` files or separated `.jsx|tsx` file
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- Markdown Support - [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md)
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism)
  - [Prism](https://prismjs.com/) for syntax highlighting
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [PostCSS](https://postcss.org/)
  - [`postcss-nested`](https://github.com/postcss/postcss-nested) for using nested `BEM` syntax for styling
  - [`postcss-url`](https://github.com/postcss/postcss-url)
  - [`postcss-import`](https://github.com/postcss/postcss-import)



### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [airbnb](https://github.com/airbnb/javascript), [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript), [@antfu/eslint-config](https://github.com/antfu/eslint-config), and other custom configs
- [Stylelint](https://stylelint.io/) with [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) and some custom rules

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite (with `happy-dom`)
- [Cypress](https://www.cypress.io/) - E2E and component testing powered by Cypress
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [standard-version](https://github.com/conventional-changelog/standard-version)
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Styleling](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Docker

At first, build the image:

```bash
docker build . -t alibaba:latest
```

Then run the image by:
```
docker run --rm -it -p 3000:80 alibaba:latest
```

## TODO

- [ ] improve `README.md` and add `Contribute`, `Folder Structure` sections
- [ ] [Use icons from any icon sets with classes](https://github.com/antfu/)
- [ ] [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [ ] [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [ ] SSG Support - [vite-ssg](https://github.com/antfu/vite-ssg)
  - [ ] [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [ ] SSR Support
- [ ] CSS engine - [Tailwind](https://tailwindcss.com/), [WindiCSS](https://windicss.org/), [UnoCSS](https://github.com/antfu/unocss)
- [ ] Critical CSS - [critters](https://github.com/GoogleChromeLabs/critters)
- [ ] [`vite-plugin-istanbul`](https://github.com/ifaxity/vite-plugin-istanbul)
- [ ] Multi Device Plugin
- [ ] reset or normalize CSS
- [ ] [autoprefixer](https://github.com/postcss/autoprefixer)
- [ ] remove hover on mobile
- [ ] remove desktop `@media` on mobile build
- [ ] add alias on `vite.config.ts`
- [ ] remove `data-testid` on production
- [ ] enable `sourcemap` for production build
- [ ] analyze `web-vital` and track them
- [ ] improve `PWA` features
- [ ] improve `PostCSS` plugins
- [ ] add and imprve `vite` or `rollup` plugins
- [ ] add cli for creating boilerplate
- [ ] add demo link and config github action for production releases auto publish
