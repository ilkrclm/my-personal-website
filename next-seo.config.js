const siteUrl = `${process.env.NEXT_PUBLIC_URL}`;
const title =
  'İlker Çalım – Web Tasarım Uzmanı!';
const description = '';

const SEO = {
  title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;