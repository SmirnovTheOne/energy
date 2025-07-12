// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/smirnovtheone/vueProject/vityaz-energy/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/smirnovtheone/vueProject/vityaz-energy/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///Users/smirnovtheone/vueProject/vityaz-energy/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { createHash } from "crypto";
var __vite_injected_original_import_meta_url = "file:///Users/smirnovtheone/vueProject/vityaz-energy/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          hash: (str) => createHash("sha256").update(str).digest("hex").substr(0, 8)
        }
      }
    }),
    vueDevTools()
  ],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@scss": fileURLToPath(new URL("./src/assets/scss", __vite_injected_original_import_meta_url)),
      "@img": fileURLToPath(new URL("./src/assets/images", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@scss/core/variables" as *;
          @use "@scss/core/mixins" as *;
          @use "@scss/core/reset";
        `
      }
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc21pcm5vdnRoZW9uZS92dWVQcm9qZWN0L3ZpdHlhei1lbmVyZ3lcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zbWlybm92dGhlb25lL3Z1ZVByb2plY3Qvdml0eWF6LWVuZXJneS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc21pcm5vdnRoZW9uZS92dWVQcm9qZWN0L3ZpdHlhei1lbmVyZ3kvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKHtcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGhhc2g6IChzdHIpID0+IGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShzdHIpLmRpZ2VzdCgnaGV4Jykuc3Vic3RyKDAsIDgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICB2dWVEZXZUb29scygpLFxuICBdLFxuICBiYXNlOiAnLycsXG5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAc2Nzcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvYXNzZXRzL3Njc3MnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAaW1nJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hc3NldHMvaW1hZ2VzJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG5cbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxuICAgICAgICAgIEB1c2UgXCJAc2Nzcy9jb3JlL3ZhcmlhYmxlc1wiIGFzICo7XG4gICAgICAgICAgQHVzZSBcIkBzY3NzL2NvcmUvbWl4aW5zXCIgYXMgKjtcbiAgICAgICAgICBAdXNlIFwiQHNjc3MvY29yZS9yZXNldFwiO1xuICAgICAgICBgLFxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsZUFBZSxXQUFXO0FBQzVWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGtCQUFrQjtBQUp1SyxJQUFNLDJDQUEyQztBQU1uUCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLE1BQU0sQ0FBQyxRQUFRLFdBQVcsUUFBUSxFQUFFLE9BQU8sR0FBRyxFQUFFLE9BQU8sS0FBSyxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDM0U7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxTQUFTLGNBQWMsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxDQUFDO0FBQUEsTUFDcEUsUUFBUSxjQUFjLElBQUksSUFBSSx1QkFBdUIsd0NBQWUsQ0FBQztBQUFBLElBQ3ZFO0FBQUEsRUFDRjtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
