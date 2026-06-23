import type { APIRoute } from 'astro';

const pages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/philosophy', priority: '0.9', changefreq: 'monthly' },
  { loc: '/science', priority: '0.9', changefreq: 'monthly' },
  { loc: '/about', priority: '0.7', changefreq: 'monthly' },
  { loc: '/journal', priority: '0.8', changefreq: 'weekly' },
  { loc: '/journal/posts/anxiety-sleep-pattern', priority: '0.8', changefreq: 'monthly' },
  { loc: '/journal/posts/chronic-pain-circuit', priority: '0.8', changefreq: 'monthly' },
  { loc: '/waitlist', priority: '0.6', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const urls = pages.map(p => `
  <url>
    <loc>https://patternparadigm.xyz${p.loc}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
