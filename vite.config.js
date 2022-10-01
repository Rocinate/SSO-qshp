import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server: {
    port: 5700,
    proxy: {
      '/dev' : 'http://bbs.abrac.site/star/',
    }
  },
})
