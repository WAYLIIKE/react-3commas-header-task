import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/react-3commas-header-task/',
  plugins: [
    react(),
    {
      name: 'create-404-page',
      apply: 'build',
      writeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html');
      },
    },
  ],
  build: {
    outDir: 'dist',
  },
});
