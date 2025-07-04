const fs = require('fs');
const path = require('path');

const baseUrl = 'https://safari.flit.tz';

function extractRoutes() {
  const appFile = path.join(__dirname, '../src/App.jsx');
  const appContent = fs.readFileSync(appFile, 'utf8');
  const routeRegex = /path="([^"]+)"/g;
  const set = new Set();
  let match;
  while ((match = routeRegex.exec(appContent))) {
    if (!match[1].includes(':')) {
      set.add(match[1]);
    }
  }

  // grab blog slugs for travel blog posts
  const blogFile = path.join(__dirname, '../src/pages/travel/BlogPost.jsx');
  if (fs.existsSync(blogFile)) {
    const blogContent = fs.readFileSync(blogFile, 'utf8');
    const slugRegex = /slug:\s*'([^']+)'/g;
    while ((match = slugRegex.exec(blogContent))) {
      set.add(`/travel/blog/${match[1]}`);
    }
  }

  return Array.from(set).sort();
}

function buildXml(routes) {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = routes
    .map((route) => {
      const priority = route === '/' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

const routes = extractRoutes();
const xml = buildXml(routes);
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml.trim() + '\n');
console.log(`Generated sitemap with ${routes.length} routes.`);
