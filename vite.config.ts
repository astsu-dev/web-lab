import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src', 'index.html'),
        portfolio: path.resolve(__dirname, 'src', 'portfolio/index.html'),
      },
    },
  },
});
