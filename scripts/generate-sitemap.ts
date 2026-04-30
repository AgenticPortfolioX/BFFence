import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://bffence.com';
const today = new Date().toISOString().split('T')[0];

// Static pages with priority and changefreq
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/service-area', priority: '0.9', changefreq: 'monthly' },
  { path: '/our-team', priority: '0.7', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/free-estimate', priority: '1.0', changefreq: 'monthly' },
];

// Load blog posts
const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');
let blogPosts: Array<{ id: string; date: string }> = [];
if (fs.existsSync(dataFile)) {
  blogPosts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

// Build XML
const urls = [
  ...staticPages.map(p => `
  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`),
  ...blogPosts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml.trim());
console.log(`✅ Sitemap generated: ${outPath} (${staticPages.length} pages + ${blogPosts.length} blog posts)`);
