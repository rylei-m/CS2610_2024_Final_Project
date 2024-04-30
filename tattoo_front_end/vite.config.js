import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/static/', // Serve assets from Django's static directory
  build: {
    outDir: '../path_to_django/static/react', // Output directory for build files
    emptyOutDir: true, // Clean this directory every build
  }
});
