const title =
  'İlker Çalım – Web Tasarım Uzmanı!';
const description = '.';

const SEO = {
  title,
  description,
  canonical: 'https://www.ilkercalim.com',
  openGraph: {
    type: 'website',
    url: 'https://ilkercalim.com',
    title,
    description,
    images: [
      {
        url: 'https://www.ilkercalim.com/images/og-image.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;