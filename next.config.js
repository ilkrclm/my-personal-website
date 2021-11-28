module.exports = {
  i18n: {
   locales: ['en', 'tr'],
   defaultLocale: 'tr',
 },
  env: {
    FORM_URL: process.env.FORM_URL,
    MAILUSER: process.env.MAILUSER,
    PASS: process.env.PASS,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.pexels.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}]
    })
    return config
  }
}
