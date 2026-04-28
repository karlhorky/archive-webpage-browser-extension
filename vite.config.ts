// eslint-disable-next-line import-x/no-unresolved -- CRXJS false positive: https://github.com/crxjs/chrome-extension-tools/issues/1160
import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import manifest from './manifest.config.js';

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
