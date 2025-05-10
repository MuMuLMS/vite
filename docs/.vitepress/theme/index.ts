import DefaultTheme from 'vitepress/theme'
import CopyButton from 'vitepress-copy-helper';
import 'vitepress-copy-helper/style.css';
// import CustomSearch from '../components/CustomSearch.vue'
import Layout from './Layout.vue'
import ClickableCopy from '../components/ClickableCopy.vue'

// 确保主题被正确加载
console.log('自定义主题已加载')

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局搜索组件
    // app.component('CustomSearch', CustomSearch)
    app.component('CopyButton', CopyButton);
    app.component('ClickableCopy', ClickableCopy);
    console.log('自定义搜索组件已注册')
  }
}