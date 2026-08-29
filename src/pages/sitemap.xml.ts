import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const basePath = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
  const urls = ['', 'candidates/'].map((path) => new URL(`${basePath}${path}`, site).toString());
  const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
