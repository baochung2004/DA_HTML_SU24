import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "shops.html"),
        detail: resolve(__dirname, "detailProducts.html")
      }
    }
  }
});
