// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PrerenderSPAPlugin from 'vite-plugin-prerenderer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Toggle prerender: default = ON (best for SEO). Disable by set PRERENDER=0 in env.
const ENABLE_PRERENDER = process.env.PRERENDER !== '0';

// default fallback routes (matches your App.jsx routes). Edit if needed.
const defaultRoutes = [
  '/', '/roadmap', '/testimonials', '/faq', '/subscribe', '/blog',
  '/industry', '/about', '/contact', '/linkedin-agent', '/content-flow', '/linkbuddy',
  '/Retail-Consumer', '/HrAgent', '/Out-Reach-Ai', '/BFS', '/CME', '/HealthCare',
  '/Manufacturing', '/Oil_and_gas', '/PUE', '/Renuable_energy', '/RetailConsumer',
  '/Social-Media-Service', '/Chat-Bots-Service', '/Voice-Assitent-Service',
  '/Email-Management-Service', '/CRM-Automation-Service', '/Notion-Integaration-Service', '/Domain'
];

// Try to load prerender-routes.json if it exists
let routesList = defaultRoutes;
const routesFile = path.join(__dirname, 'prerender-routes.json');
if (fs.existsSync(routesFile)) {
  try {
    const raw = fs.readFileSync(routesFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      routesList = parsed;
      console.log('[vite] using prerender routes from prerender-routes.json:', routesList.length);
    } else {
      console.warn('[vite] prerender-routes.json is empty or not an array — using defaultRoutes');
    }
  } catch (err) {
    console.warn('[vite] failed to parse prerender-routes.json — falling back to defaultRoutes', err.message);
  }
} else {
  console.log('[vite] prerender-routes.json not found — using defaultRoutes.');
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
        // Use event-based render: dispatch `prerender-ready` from client when page is ready.
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
