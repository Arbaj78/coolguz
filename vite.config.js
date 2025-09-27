import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Prerenderer from 'vite-plugin-prerenderer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/', 
  plugins: [
    react(),
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

      // ✅ FIX: Replaced waiting for an element with a fixed time delay.
      renderer: {
        // Force the renderer to wait 6 seconds before capturing the HTML.
        renderAfterTime: 6000, 
        // Set a total timeout to prevent the build from hanging indefinitely.
        timeout: 10000 
      }
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  assetsInclude: ['**/*.mp4'],
});