import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base keeps the build working on GitHub Pages subpaths
  // (https://user.github.io/repository/) without knowing the repository name.
  base: './',
})