import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      lazyLoading: true
    },
  },
  lang: 'en-US',
  title: "koiya.me",
  description: "My blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../img/koiya.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'First Post', link: '/first-post' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'First Post', link: '/first-post' },
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/koiyakiya'},
      { icon: 'twitter', link: 'https://x.com/koiyakiya/'},
      { icon: 'instagram', link: 'https://instagram.com/koiyakiya9/'},
      { icon: 'youtube', link: 'https://youtube.com/@koiyakiya'},
      { icon: 'discord', link: 'https://discord.gg/gcxbkuNNRN' }
    ],

    footer: {
      message: 'Built using <a href="https://vitepress.dev/">Vitepress</a>.',
      copyright: 'Released under the <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0-1.0</a> license.'
  },
  externalLinkIcon: true,

}
})
