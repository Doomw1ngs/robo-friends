import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/robo-friends/',
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
    }),
  ],
  build: {
    minify: 'terser',
    testerOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['redux-thunk'],
  },
});
