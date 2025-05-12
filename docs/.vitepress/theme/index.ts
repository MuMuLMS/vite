import DefaultTheme from 'vitepress/theme'
import CopyButton from 'vitepress-copy-helper';
import 'vitepress-copy-helper/style.css';
import Layout from './Layout.vue'
import ClickableCopy from '../components/ClickableCopy.vue'


export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局搜索组件
    // app.component('CustomSearch', CustomSearch)
    app.component('CopyButton', CopyButton);
    app.component('ClickableCopy', ClickableCopy);
  }
}