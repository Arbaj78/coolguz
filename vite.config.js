// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PrerenderSPAPlugin from 'vite-plugin-prerenderer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Fix for GitHub Actions spinner issue
if (process.env.CI || process.env.DISABLE_SPIN) {
  process.stdout.clearLine = () => {};
  process.stdout.cursorTo = () => {};
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Toggle prerender: default = ON (best for SEO)
const ENABLE_PRERENDER = process.env.PRERENDER !== '0';

// Default routes (update if needed)
const defaultRoutes = [
  '/', '/roadmap', '/testimonials', '/faq', '/subscribe', '/blog',
  '/industry', '/about', '/contact', '/linkedin-agent', '/content-flow', '/linkbuddy',
  '/Retail-Consumer', '/HrAgent', '/Out-Reach-Ai', '/BFS', '/CME', '/HealthCare',
  '/Manufacturing', '/Oil_and_gas', '/PUE', '/Renuable_energy', '/RetailConsumer',
  '/Social-Media-Service', '/Chat-Bots-Service', '/Voice-Assitent-Service',
  '/Email-Management-Service', '/CRM-Automation-Service', '/Notion-Integaration-Service', '/Domain'
];

// Try loading prerender-routes.json
let routesList = defaultRoutes;
const routesFile = path.join(__dirname, 'prerender-routes.json');
if (fs.existsSync(routesFile)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(routesFile, 'utf8'));
    if (Array.isArray(parsed) && parsed.length > 0) {
      routesList = parsed;
      console.log('[vite] Using prerender routes from prerender-routes.json:', routesList.length);
    } else {
      console.warn('[vite] prerender-routes.json empty — using defaultRoutes');
    }
  } catch (err) {
    console.warn('[vite] Failed to parse prerender-routes.json:', err.message);
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ENABLE_PRERENDER &&
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: routesList,
        renderer: 'string',
        renderAfterDocumentEvent: 'prerender-ready',
      }),
  ].filter(Boolean),
  server: {
    host: true,
    port: 5173,
  },
  assetsInclude: ['**/*.mp4'],
  build: {
    chunkSizeWarningLimit: 1200,
  },
});
