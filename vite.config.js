import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/robo-friends/',
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    exclude: ['redux-thunk'],
  },
});
