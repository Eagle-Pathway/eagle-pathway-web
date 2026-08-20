import type { MetadataRoute } from 'next';
import { site } from './content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/how-it-works', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/results', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/privacy', priority: 0.4, changeFreq: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
