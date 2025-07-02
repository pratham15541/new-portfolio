import { MetadataRoute } from 'next';
import { siteUrl } from '@/constants/constant';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
      images:[]
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
