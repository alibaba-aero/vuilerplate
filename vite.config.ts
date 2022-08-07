// @ts-ignore
import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer as Visualizer } from 'rollup-plugin-visualizer'
import ViteCompression from 'vite-plugin-compression'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import SvgLoader from 'vite-svg-loader'
import Unocss from 'unocss/vite'

function removeDataTestAttrs(node: any) {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter((prop: any) =>
      prop.type === 6 /* NodeTypes.ATTRIBUTE */
        ? prop.name !== 'data-testid'
        : true
    )
  }
}
// https://github.com/antfu/unplugin-icons
// for our icons

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@/utils': path.resolve(__dirname, './src/utils')
    },
  },
  build: {
    sourcemap: true
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      template: {
        compilerOptions: {
          nodeTransforms: process.env.MODE === 'production' ? [removeDataTestAttrs] : [],
        }
      }
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Components({
      extensions: ['vue', 'md', 'tsx', 'jsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Layouts(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Alibaba Travels',
        short_name: 'Alibaba',
        theme_color: '#FDB713',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/maskable-icon-x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/maskable-icon-x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
        'vue-i18n',
        // 'vitest',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
        'src/utils'
      ],
      vueTemplate: true,
    }),
    VueJsx({ optimize: true }),
    ...(command === 'build'
      ? [Visualizer({ filename: `stats.html` })]
      : []
    ),
    ...(process.env.COMPRESS !== '0'
      ? [ViteCompression({}), ViteCompression({ algorithm: 'brotliCompress', ext: '.br' })]
      : []
    ),
    Markdown({
      wrapperClasses: 'markdown-wrapper',
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(Prism)
      },
    }),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    SvgLoader({
      svgo: true,
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                inlineStyles: {
                  onlyMatchedOnce: false,
                },
              },
            },
          },
        ],
      }
    }),
    Unocss(),
  ],
  server: {
    port: 5173,
    host: '127.0.0.1'
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
  test: {
    // environment: 'jsdom',
    environment: 'happy-dom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
    outputFile: {
      json: './coverage/final.json',
      junit: './coverage/junit.xml',
    },
    reporters: ['verbose', 'junit', 'json'],
    coverage: {
      clean: false,
    },
  },
}))
