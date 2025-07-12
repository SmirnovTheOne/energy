import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Можно удалить, если не используете DevTools в продакшене
  ],
  base: '/energy/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)) // Дополнительный алиас для изображений
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
