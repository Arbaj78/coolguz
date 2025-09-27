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

      // This is the key fix. Use the simple 'string' renderer.
      renderer: 'string', 
      
      // We still need to wait for your preloader to finish.
      renderAfterTime: 6000, 
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  assetsInclude: ['**/*.mp4'],
});