import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.siteUrl) return [];
  return ['/', '/aviso-legal/', '/privacidad/'].map((p) => ({ url: `${site.siteUrl}${p}` }));
}
