// scripts/copy-404.js
import { copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const from = join(process.cwd(), 'dist', 'index.html');
  const to = join(process.cwd(), 'dist', '404.html');
  try {
    await copyFile(from, to);
    console.log('Copied index.html -> 404.html');
  } catch (err) {
    console.error('Failed to copy 404:', err.message);
    process.exit(1);
  }
}

main();
