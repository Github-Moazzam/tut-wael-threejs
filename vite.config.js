import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // The 'src' folder will be the root of the project
  base: './',   // Base URL for built assets
  build: {
    outDir: '../dist',  // Output directory for build files (one level up from 'src')
  },
});
