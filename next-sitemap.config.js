/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.farawlatech.com',
    changefreq: 'daily',
    priority: 0.8,
    // sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/admin'],
    alternateRefs: [
      {
        href: 'https://farawla-tech.trendlix.com/en',
        hreflang: 'en',
      },
      {
        href: 'https://farawla-tech.trendlix.com/ar',
        hreflang: 'ar',
      },
    ],
    // Default transformation function
    transform: async (config, path) => {
      // custom function to ignore the path
      if (path.includes('/admin') || path.includes('/undefined')) {
        return null
      }
  
      // only create changefreq along with path
      // returning partial properties will result in generation of XML field with only returned values.
      if (path.endsWith('/en') || path.endsWith('/ar')) {
        // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
        return {
          loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
          changefreq: 'weekly',
          priority: 1,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
      }
  
      // Use default transformation for all other cases
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    },
    additionalPaths: async (config) => [
      // await config.transform(config, '/en'),
      // await config.transform(config, '/en/about'),
      // await config.transform(config, '/en/blogs'),
      // await config.transform(config, '/en/contact'),
      // await config.transform(config, '/en/news'),
      // await config.transform(config, '/ar'),
      // await config.transform(config, '/ar/about'),
      // await config.transform(config, '/ar/blogs'),
      // await config.transform(config, '/ar/contact'),
      // await config.transform(config, '/ar/news'),
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        // {
        //   userAgent: 'test-bot',
        //   allow: ['/path', '/path-2'],
        // },
        // {
        //   userAgent: 'black-listed-bot',
        //   disallow: ['/sub-path-1', '/path-2'],
        // },
      ],
      additionalSitemaps: [
        'https://www.farawlatech.com/en/server-sitemap.xml', // <==== Add here
      ],
    },
  }