import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/robo-friends/',
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
    }),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Robo-Friends',
        short_name: 'Robots',
        description: 'Small Robot project',
        theme_color: '#000000',
        icons: [
          {
            src: '/public/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/public/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/public/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/public/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
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
