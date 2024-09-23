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
  },
  {
    text: '进阶',
    items: [
      { text: '模块', link: '/v2.0/examples/dev/api' },
    ]
  },
  {
    text: '平台',
    items: [
      { text: '自定义', link: '/v2.0/examples/pkg/api' },
    ]
  }
] as DefaultTheme.SidebarItem[]
