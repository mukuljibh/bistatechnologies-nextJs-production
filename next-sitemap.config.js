/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bistatechnologies.vercel.app/',
    exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}