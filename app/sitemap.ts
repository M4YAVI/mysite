import { MetadataRoute } from 'next';
import { THOUGHTS } from '@/data/thoughts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aryayama.netlify.app';

    // Static routes
    const routes = [
        '',
        '/crafts',
        '/thoughts',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic thought routes
    const thoughts = THOUGHTS.map((thought) => ({
        url: `${baseUrl}/thoughts/${thought.id}`,
        lastModified: new Date(thought.date), // Assuming date format is compatible or defaults to now
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...thoughts];
}
