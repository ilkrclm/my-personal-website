const site = `${process.env.NEXT_PUBLIC_URL}`

module.exports = {
  siteUrl: `${site}`,
  exclude: ['/tr/*', '/tr'],
  priority: 1.0,
  alternateRefs: [
    {
      href: `${site}/en`,
      hreflang: 'en',
    },
  ],
  generateRobotsTxt: true,
}
