import type { MetadataRoute } from 'next';
import { site } from './content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/how-it-works', '/results', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
