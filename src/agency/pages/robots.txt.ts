import type { APIRoute } from 'astro';
import { canonicalSite } from '../config/site';

export const GET: APIRoute = () => {
  const sitemapUrl = new URL('sitemap.xml', canonicalSite).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
