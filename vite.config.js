import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["swiper"], // Externalize swiper if needed
      plugins: [
        commonjs(), // Add CommonJS support
      ],
    },
  },
});
