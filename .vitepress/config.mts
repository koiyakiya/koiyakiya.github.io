import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "koiya.me",
  description: "My blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../koiya.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
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
