import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createHash } from 'crypto'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          hash: (str) => createHash('sha256').update(str).digest('hex').substr(0, 8)
        }
      }
    }),
    vueDevTools(),
  ],
  base: '/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@scss/core/variables" as *;
          @use "@scss/core/mixins" as *;
          @use "@scss/core/reset";
        `,
      }
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
