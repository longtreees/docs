import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // custom slots could be added here
    })
  },
  enhanceApp({ app }) {
    // register global components or other app enhancements
  }
}