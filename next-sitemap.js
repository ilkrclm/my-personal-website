const siteUrl = "https://www.vahacreative.com";

module.exports = {
  siteUrl,
  exclude: ['/tr/*', '/tr'],
  alternateRefs: [
  {
    href: "https://www.vahacreative.com/en",
    hreflang: 'en',
  },
],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-projects.xml`,
      `${siteUrl}/sitemap-projects-en.xml`,
    ],
  }
};