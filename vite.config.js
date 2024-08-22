import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  plugins: [
    sveltekit(),
    qrcode() // Only applies in dev mode
  ],
  resolve: {
    alias: {
      '@': '/src' // Example alias; adjust as needed
    }
  },
  build: {
    target: 'esnext' // Ensure modern JavaScript support
  }
});
