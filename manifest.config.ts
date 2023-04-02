import { defineManifest } from '@crxjs/vite-plugin/dist/index.js';
import packageJson from './package.json' assert { type: 'json' };

// Convert from SemVer, eg. 0.1.0-beta6 becomes:
// major: 0, minor: 1, patch: 0, label: 6
const [major, minor, patch, label = '0'] = packageJson.version
  .replace(/[^\d.-]+/g, '')
  .split(/[.-]/);

export default defineManifest(() => ({
  manifest_version: 3,
  name: 'Archive Webpage',
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  action: {
    default_title: 'Archive webpage to archive.ph & Wayback Machine',
    // default_popup: 'index.html',
  },
  permissions: ['tabs'],
  host_permissions: ['http://*/', 'https://*/'],
  // Version can be up to four numbers separated by dots
  version: `${major}.${minor}.${patch}.${label}`,
}));
