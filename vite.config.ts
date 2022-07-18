import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Visualizer from 'rollup-plugin-visualizer';
import ViteCompression from 'vite-plugin-compression';

// https://github.com/antfu/unplugin-icons
// for our icons

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
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
        'vitest',
        // 'vue-i18n',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
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
  ],
  ssgOptions: {
    script: 'async',
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
