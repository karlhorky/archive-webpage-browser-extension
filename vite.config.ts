import { crx } from '@crxjs/vite-plugin/dist/index.mjs';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import manifest from './manifest.config.js';

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
