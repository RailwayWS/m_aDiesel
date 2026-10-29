import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Two pages: the one-page site and /gallery/.
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        gallery: resolve(import.meta.dirname, 'gallery/index.html'),
      },
    },
  },
})
