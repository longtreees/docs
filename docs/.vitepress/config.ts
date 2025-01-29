import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LongTrees",
  description: "Growing 1000-year-old trees in Edmonton",
  appearance: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#55833b' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'LongTrees' }],
    ['meta', { name: 'og:description', content: 'Growing 1000-year-old trees in Edmonton' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'LongTrees',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Community', link: 'https://longtrees.org' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Board Motion', link: '/guide/board-motion' },
          { text: 'Tree Steward', link: '/guide/tree-steward' },
          { text: 'Nursery Setup', link: '/guide/nursery-setup' }
        ]
      },
      {
        text: 'Growing Process',
        items: [
          { text: 'Tree Distribution', link: '/guide/tree-distribution' },
          { text: 'Care Guidelines', link: '/guide/care-guidelines' },
          { text: 'Documentation', link: '/guide/documentation' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Tree Species', link: '/resources/species' },
          { text: 'Construction Guide', link: '/resources/construction' },
          { text: 'Community Guidelines', link: '/resources/community' },
          { text: 'City Requirements', link: '/resources/city-requirements' }
        ]
      }
    ],

    footer: {
      message: 'Growing a thousand-year legacy, one tree at a time.',
      copyright: 'Copyright © 2024 LongTrees Initiative'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/longtreees' },
      { icon: 'twitter', link: 'https://twitter.com/longtrees' },
      { icon: 'instagram', link: 'https://instagram.com/longtrees' }
    ],

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
})