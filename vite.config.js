import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
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
    },
    define: {
      'process.env': env
    }
  };
});
