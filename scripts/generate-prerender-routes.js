// scripts/generate-prerender-routes.js
import fs from 'fs';
import path from 'path';
import sanityClient from '@sanity/client';

const outPath = path.join(process.cwd(), 'prerender-routes.json');

const staticRoutes = [
  '/', '/roadmap', '/testimonials', '/faq', '/subscribe', '/blog',
  '/industry', '/about', '/contact', '/linkedin-agent', '/content-flow', '/linkbuddy',
  '/Retail-Consumer', '/HrAgent', '/Out-Reach-Ai', '/BFS', '/CME', '/HealthCare',
  '/Manufacturing', '/Oil_and_gas', '/PUE', '/Renuable_energy', '/RetailConsumer',
  '/Social-Media-Service', '/Chat-Bots-Service', '/Voice-Assitent-Service',
  '/Email-Management-Service', '/CRM-Automation-Service', '/Notion-Integaration-Service', '/Domain'
];

async function main() {
  // If SANITY env vars exist, try fetch slugs
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const useSanity = projectId && dataset;

  if (useSanity) {
    try {
      const client = sanityClient({
        projectId,
        dataset,
        useCdn: false,
        apiVersion: '2024-01-01',
      });
      // Adjust GROQ query based on your schema
      const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`);
      const postRoutes = posts.map(p => `/blog/${p.slug}`);
      const routes = Array.from(new Set([...staticRoutes, ...postRoutes]));
      fs.writeFileSync(outPath, JSON.stringify(routes, null, 2));
      console.log('Generated prerender routes with Sanity slugs:', routes.length);
      return;
    } catch (err) {
      console.warn('Sanity fetch failed, falling back to static routes:', err.message);
    }
  }

  // fallback
  fs.writeFileSync(outPath, JSON.stringify(staticRoutes, null, 2));
  console.log('Generated prerender routes (static fallback).');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
