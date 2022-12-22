// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { viteSingleFile } from "vite-plugin-singlefile"

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    viteSingleFile(),
  ],
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["vuetify"],
    },
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      // '.ts',
      // '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
