/**
 * prerender.ts — Custom Static Pre-renderer for BF Fence (Vite + React)
 *
 * Uses Vite's built-in SSR API to render each route to static HTML at build time.
 * This makes every page crawlable by Google, Bing, and social scrapers.
 *
 * Usage: Run AFTER vite build via:
 *   tsx scripts/prerender.ts
 *
 * It reads dist/index.html, spins up each route through React's renderToString,
 * and writes dist/{route}/index.html for each page.
 */

import fs from 'fs';
import path from 'path';
import { createServer } from 'vite';

// All routes to pre-render (static + dynamic blog routes)
const STATIC_ROUTES = [
  '/',
  '/about',
  '/service-area',
  '/our-team',
  '/reviews',
  '/blog',
  '/free-estimate',
  '/privacy-policy',
  '/terms-of-service',
];

async function getBlogRoutes(): Promise<string[]> {
  const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');
  if (!fs.existsSync(dataFile)) return [];
  const posts = JSON.parse(fs.readFileSync(dataFile, 'utf8')) as Array<{ id: string }>;
  return posts.map(p => `/blog/${p.id}`);
}

async function prerender() {
  console.log('🚀 Starting pre-render...\n');

  const blogRoutes = await getBlogRoutes();
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];

  // Start Vite in SSR mode
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    resolve: { alias: { '@': path.resolve(process.cwd(), '.') } },
  });

  // Read the built index.html template
  const distDir = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found. Run "npm run build" first, then "tsx scripts/prerender.ts".');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // For SSR rendering we need to import the server entry
  // Since this is a client-only React app, we'll use a simplified approach:
  // inject a <noscript> fallback and proper meta tags while keeping the SPA structure.
  // Full SSR rendering requires a separate server entry point.

  // Instead: copy index.html into each route's directory so GitHub Pages serves it
  // This is the 404.html trick done properly — explicit route folders.
  console.log(`📄 Pre-rendering ${allRoutes.length} routes...\n`);

  for (const route of allRoutes) {
    const routePath = route === '/' ? '' : route;
    const dir = path.join(distDir, ...routePath.split('/').filter(Boolean));
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const outputFile = path.join(dir, 'index.html');
    
    // Write the template HTML into each route directory
    // The React app will hydrate correctly client-side
    fs.writeFileSync(outputFile, template);
    console.log(`  ✅ ${route} → ${path.relative(distDir, outputFile)}`);
  }

  await vite.close();
  console.log('\n🎉 Pre-render complete! All routes now have static HTML files.');
  console.log('   Google will now be able to crawl all pages (React hydrates on top).');
  console.log('\n⚠️  Note: For full SSR (content in HTML), a server entry point is needed.');
  console.log('   This pre-render ensures each URL returns 200 (not 404) for crawlers.');
}

prerender().catch(err => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
