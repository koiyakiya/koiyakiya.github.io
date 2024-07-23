// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import './tailwind.postcss'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import MyLayout from './MyLayout.vue'
import Comments from '../../components/Comments.vue'
import { Kofi } from 'vite-coffee'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Comments', Comments);
    app.component('Kofi', Kofi)
  }
} satisfies Theme
