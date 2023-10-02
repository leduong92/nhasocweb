const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: 'https://nhasoc.io.vn/sitemap.xml',
    host: 'https://nhasoc.io.vn'
  };
}
