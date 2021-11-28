const title =
  'Vaha Creative – Eğitimde doğru frekansı yakalayın!';
const description = 'Eğitimde başarının frekansını keşfet. TYT, LGS, AYT sınavlarına hazırlık kursları için fırsatlarımıza hemen gözat.';

const SEO = {
  title,
  description,
  canonical: 'https://vahacreative.com',
  openGraph: {
    type: 'website',
    url: 'https://vahacreative.com',
    title,
    description,
    images: [
      {
        url: 'https://vahacreative.com/images/og-image.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;