// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/project/hy-mobile-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/project/hy-mobile-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/project/hy-mobile-ui/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/project/hy-mobile-ui/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/project/hy-mobile-ui/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import { createSvgIconsPlugin } from "file:///D:/project/hy-mobile-ui/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_import_meta_url = "file:///D:/project/hy-mobile-ui/vite.config.js";
var process = typeof process === "undefined" ? { cwd: () => "./" } : process;
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/svgIcon")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      entries: [{ find: "@/packages", replacement: "./packages" }]
    }
  },
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  build: {
    target: "modules",
    // 压缩
    minify: true,
    rollupOptions: {
      external: ["vant", "vue"],
      input: "index.js",
      output: {
        formats: "esm",
        entryFileNames: "[name].umd.min.js",
        preserveModules: true,
        inlineDynamicImports: false,
        preserveModulesRoot: "packages",
        dir: "dist/es"
      }
    },
    lib: {
      entry: "./index.js",
      name: "hy-mob-ui"
    },
    cssCodeSplit: true,
    // 放在 build 下
    sourcemap: true
  },
  cssCodeSplit: true
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGh5LW1vYmlsZS11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxoeS1tb2JpbGUtdWlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvaHktbW9iaWxlLXVpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAnQHZhbnQvYXV0by1pbXBvcnQtcmVzb2x2ZXInXHJcbi8vIFx1OTE0RFx1N0Y2RVNWR1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBwcm9jZXNzID0gdHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnID8geyBjd2Q6ICgpID0+ICcuLycgfSA6IHByb2Nlc3NcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV1cclxuICAgIH0pLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICBpY29uRGlyczogW3Jlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnSWNvbicpXSxcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuICAgIH0pXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgZW50cmllczogW3sgZmluZDogJ0AvcGFja2FnZXMnLCByZXBsYWNlbWVudDogJy4vcGFja2FnZXMnIH1dXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgIHBvcnQ6IDgwODBcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdtb2R1bGVzJyxcclxuICAgIC8vIFx1NTM4Qlx1N0YyOVxyXG4gICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWyd2YW50JywgJ3Z1ZSddLFxyXG4gICAgICBpbnB1dDogJ2luZGV4LmpzJyxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZm9ybWF0czogJ2VzbScsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0udW1kLm1pbi5qcycsXHJcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG4gICAgICAgIGlubGluZUR5bmFtaWNJbXBvcnRzOiBmYWxzZSxcclxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAncGFja2FnZXMnLFxyXG4gICAgICAgIGRpcjogJ2Rpc3QvZXMnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6ICcuL2luZGV4LmpzJyxcclxuICAgICAgbmFtZTogJ2h5LW1vYi11aSdcclxuICAgIH0sXHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsIC8vIFx1NjUzRVx1NTcyOCBidWlsZCBcdTRFMEJcclxuICAgIHNvdXJjZW1hcDogdHJ1ZVxyXG4gIH0sXHJcbiAgY3NzQ29kZVNwbGl0OiB0cnVlXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsU0FBUyxlQUFlLFdBQVc7QUFFaFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsZUFBZTtBQVRtSSxJQUFNLDJDQUEyQztBQVc1TSxJQUFNLFVBQVUsT0FBTyxZQUFZLGNBQWMsRUFBRSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBR3ZFLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFBQSxNQUN2RCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxTQUFTLENBQUMsRUFBRSxNQUFNLGNBQWMsYUFBYSxhQUFhLENBQUM7QUFBQSxJQUM3RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUVSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxRQUFRLEtBQUs7QUFBQSxNQUN4QixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxnQkFBZ0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxRQUNqQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxRQUNyQixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxjQUFjO0FBQUE7QUFBQSxJQUNkLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxjQUFjO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
