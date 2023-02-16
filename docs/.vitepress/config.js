export default {
  title: 'US Counties',
  description: 'Just playing around.',
  base: '/us-counties/', //issues with base path
  themeConfig: {
    siteTitle: 'US Counties',
    logo: '/logo.png',
    nav: [
      { text: 'Github', link: '' },
      { text: 'Changelog', link: 'https://github.com/...' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nick Graffis',
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Documentation', link: '/' },
          { text: 'Cookbook', link: '/example' },
          {
            text: 'Plugins',
            link: '/plugins/index',
            items: [
              {
                text: 'Population Plugin',
                link: '/plugins/population',
              },
              {
                text: 'Polygon Plugin',
                link: '/plugins/polygon',
              },
            ],
          },
          { text: 'Version 0.0.1', link: '/v001' },
        ],
      },
    ],
  },
};
