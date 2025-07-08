import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)) // Добавляем алиас для SCSS
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
  }
})
