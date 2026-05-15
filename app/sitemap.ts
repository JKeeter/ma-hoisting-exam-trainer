import { MetadataRoute } from 'next';
import { curriculum } from '@/lib/curriculum';

const BASE_URL = 'https://www.freemasshoist.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/plan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hand-signals`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
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

  const referenceIds = [
    '2a-m1-s1', '2a-m1-s2', '2a-m1-s3',
    '2a-m2-s1', '2a-m2-s2', '2a-m2-s3',
    '2a-m3-s1', '2a-m3-s2', '2a-m3-s3',
    '2a-m4-s1', '2a-m4-s2', '2a-m4-s3',
    '2a1c-m1-s1', '2a1c-m1-s2', '2a1c-m1-s3',
    '2a1c-m2-s1', '2a1c-m2-s2', '2a1c-m2-s3',
    '2a1c-m3-s1', '2a1c-m3-s2', '2a1c-m3-s3',
    '2a1c-m4-s1', '2a1c-m4-s2', '2a1c-m4-s3',
  ];

  const referenceRoutes: MetadataRoute.Sitemap = referenceIds.map(id => ({
    url: `${BASE_URL}/reference/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...planRoutes, ...referenceRoutes];
}
