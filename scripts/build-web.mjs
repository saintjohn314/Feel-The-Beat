// Copies the web app (and only the web app) into an output folder.
// Netlify publishes it from dist/, and the native apps bundle it from native/www/.
//   node scripts/build-web.mjs dist
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] || join(root, 'dist'));
const files = ['index.html', 'sw.js', 'manifest.webmanifest', 'icons'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of files) cpSync(join(root, f), join(out, f), { recursive: true });
console.log(`Web app copied to ${out}`);
