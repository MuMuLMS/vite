import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "木木分享",
  description: "木木分享 - 一个分享优质网盘资源的网站",
  lang: 'zh-CN', // 设置默认语言为中文
  // 使用pagefind搜索插件
  vite: {
    plugins: [
      pagefindPlugin({
        // 中文搜索配置
        locales: {
          root: {
            btnPlaceholder: '搜索',
            placeholder: '搜索资源',
            emptyText: '没有找到相关结果',
            // 其他中文界面配置
            searching: '搜索中...' as any,
            loadingText: '加载中...' as any,
            // 搜索结果数量显示文本
            heading: '搜索到{{searchResult}}个相关内容' as any,
            // 中文分词器配置
            customSegmenter: true,
            customSegmenterOptions: {
              // 使用简单的字符分割方式处理中文
              tokenize: (text) => {
                // 将每个中文字符作为独立的token
                return Array.from(text);
              }
            }
          }
        },
        // 搜索索引配置
        indexingOptions: {
          // 确保中文内容被正确索引
          language: 'zh-cn',
          // 忽略常见的中文停用词
          ignoreStopWords: true,
          // 只索引h1和h2标题内容
          glob: '**/*.md',
          selectors: [
            { selector: 'h1', extract: 'text' },
            { selector: 'h2', extract: 'text' }
          ],
          // 排除其他内容
          excludeSelector: ['*', ':not(h1):not(h2)']
        },
        // 搜索UI配置
        uiOptions: {
          // 搜索结果显示配置
          showSearchButton: true,
          showEmptyMatches: true,
          showVendorBadge: false
        }
      } as any)
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
     // { text: '示例', link: '/markdown-examples' }
    ],

 //   sidebar: [
   //   {
    //    text: '示例',
    //    items: [
    //      { text: 'Markdown 示例', link: '/markdown-examples' },
    //      { text: 'API 示例', link: '/api-examples' },
    //      { text: '点击复制演示', link: '/copy-demo' }
    //    ]
    //  }
   // ],

    socialLinks: [
      { icon: 'qq', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 移除默认搜索配置，使用插件提供的搜索功能
  }
})