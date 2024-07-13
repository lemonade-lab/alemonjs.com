import { defineConfig } from 'vitepress'
import head from './head'
import locales from './locales'
export default defineConfig({
  /* 文档配置 */
  title: 'AlemonJS',
  // 前缀
  base: '/alemon.com',
  // 说明
  description: 'document',
  // 最后更新时间戳
  lastUpdated: true,
  // lang: 'en',
  lang: 'zh',
  /* 标头配置 */
  head,
  vite: {
    esbuild: {
      // 删除 所有的console 和 debugger
      drop: ['console', 'debugger']
    }
  },
  /* 主题配置 */
  themeConfig: {
    logo: '/img/alemon.jpg',
    i18nRouting: false,
    aside: 'left',
    // 广告栏
    // carbonAds: {
    //   code: '',
    //   placement: ''
    // },
    // 页脚
    footer: {
      message: 'GNU General Public License v2.0',
      copyright:
        'Copyright © 2023-present LEMONADE  |  <a style="color: #3796d9;" href="https://beian.miit.gov.cn/">津ICP备2023004480号</a>'
    },
    // 搜索配置（二选一）
    search: {
      // 本地离线搜索
      provider: 'local'
      // 多语言搜索配置
      // options: {
      //   locales: {
      //     /* 默认语言 */
      //     'v1.0': {
      //       translations: {
      //         button: {
      //           buttonText: '搜索',
      //           buttonAriaLabel: '搜索文档'
      //         },
      //         modal: {
      //           noResultsText: '无法找到相关结果',
      //           resetButtonTitle: '清除查询结果',
      //           footer: {
      //             selectText: '选择',
      //             navigateText: '切换'
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lemonade-lab/alemonjs'
      }
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
      //   },
      //   link: 'https://gitee.com/lemonade-lab/alemon'
      // }
    ]
  },
  /* 语言配置 */
  locales
})
