import type { DefaultTheme } from 'vitepress'
export default [
  {
    text: '简介',
    link: '/v2.0/markdown'
  },
  {
    text: '基础',
    items: [
      { text: '如何开始', link: '/v2.0/examples/base/start' },
      { text: '应用示例', link: '/v2.0/examples/base/apps' },
      { text: '事件类型', link: '/v2.0/examples/base/event' },
      { text: 'hook', link: '/v2.0/examples/base/hook' },
      { text: 'api', link: '/v2.0/examples/base/api' },
    ]
  }
] as DefaultTheme.SidebarItem[]
