import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/solid-kiss/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000
  }
});
