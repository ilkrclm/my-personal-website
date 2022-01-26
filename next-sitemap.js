const siteUrl = process.env.NEXT_PUBLIC_URL;

module.exports = {
  siteUrl,
  exclude: ['/tr/*', '/tr'],
  priority: 1.0,
  alternateRefs: [
  {
    href: `${siteUrl}/en`,
    hreflang: 'en',
  },
],
  generateRobotsTxt: true,
};