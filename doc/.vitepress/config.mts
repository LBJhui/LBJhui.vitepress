import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LBJhui's blog",
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/icon.svg' }]],
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  themeConfig: {
    externalLinkIcon: true,
    logo: '/icon.svg',
    docFooter: {
      prev: false,
      next: false,
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples.html' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
