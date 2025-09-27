import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Prerenderer from 'vite-plugin-prerenderer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -------------------------
// Safety polyfill for CI / non-TTY environments.
// Prevents "process.stdout.clearLine is not a function" errors from spinner libs.
// -------------------------
if (typeof process !== 'undefined' && process && process.stdout) {
  if (typeof process.stdout.clearLine !== 'function') {
    // no-op polyfill
    process.stdout.clearLine = function() {};
  }
  if (typeof process.stdout.cursorTo !== 'function') {
    process.stdout.cursorTo = function() {};
  }
}

// Toggle prerender: default = ON (best for SEO).
// Disable by setting PRERENDER=0 in env (e.g., local dev if you want to skip).
const ENABLE_PRERENDER = process.env.PRERENDER !== '0';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ENABLE_PRERENDER &&
      new Prerenderer({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/roadmap',
          '/testimonials',
          '/faq',
          '/subscribe',
          '/blog',
          '/industry',
          '/about',
          '/contact',
          '/linkedin-agent',
          '/content-flow',
          '/linkbuddy',
          '/Retail-Consumer',
          '/HrAgent',
          '/Out-Reach-Ai',
          '/BFS',
          '/CME',
          '/HealthCare',
          '/Manufacturing',
          '/Oil_and_gas',
          '/PUE',
          '/Renuable_energy',
          '/RetailConsumer',
          '/Social-Media-Service',
          '/Chat-Bots-Service',
          '/Voice-Assitent-Service',
          '/Email-Management-Service',
          '/CRM-Automation-Service',
          '/Notion-Integaration-Service',
          '/Domain'
        ],

        // Use string renderer (simple and stable)
        renderer: 'string',

        // Wait for client-side preloader (ms)
        renderAfterTime: 6000,
      }),
  ].filter(Boolean),
  server: {
    host: true,
    port: 5173,
  },
  assetsInclude: ['**/*.mp4'],
  build: {
    // increase to reduce noisy chunk-size warnings; tune as needed
    chunkSizeWarningLimit: 1200,
  },
});
