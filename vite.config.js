import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
// 配置SVG
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

const process = typeof process === 'undefined' ? { cwd: () => './' } : process

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svgIcon')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      entries: [{ find: '@/packages', replacement: './packages' }]
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080
  },

  build: {
    lib: {
      name: 'hyMobileUI',
      fileName: 'hy-mobile-ui',
      entry: './index.js',
      formats: ['es']
    },
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      external: ['vant', 'vue'],
      input: 'index.js',
      cssCodeSplit: true,
      output: {
        format: 'es',
        entryFileNames: '[name].umd.min.js',
        preserveModules: true,
        inlineDynamicImports: false,
        preserveModulesRoot: 'packages',
        outDir: 'dist/es'
      }
    },

    sourcemap: true
  }
})
