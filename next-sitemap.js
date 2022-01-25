const siteUrl = process.env.NEXT_PUBLIC_URL;

module.exports = {
  siteUrl,
  exclude: ['/tr/*', '/tr'],
  alternateRefs: [
  {
    href: `${siteUrl}/en`,
    hreflang: 'en',
  },
],
  generateRobotsTxt: true,
};