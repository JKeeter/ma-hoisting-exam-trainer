import { MetadataRoute } from 'next';
import { curriculum } from '@/lib/curriculum';
import { referenceSessionIds } from '@/lib/reference-content/ids';

const BASE_URL = 'https://www.freemasshoist.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/lessons`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/plan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/hand-signals`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const planRoutes: MetadataRoute.Sitemap = curriculum.flatMap(restriction =>
    restriction.modules.flatMap(mod =>
      mod.sessions.map(session => ({
        url: `${BASE_URL}/plan/${session.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    )
  );

  const referenceRoutes: MetadataRoute.Sitemap = referenceSessionIds.map(id => ({
    url: `${BASE_URL}/reference/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...planRoutes, ...referenceRoutes];
}
