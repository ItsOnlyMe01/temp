const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap() {
    return [
        {
            url: `${siteUrl}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${siteUrl}/iwant`,
            lastModified: new Date(),
            priority: 0.8,
        },
    ];
}