import type { DefaultTheme } from 'vitepress'
export default [
  {
    text: '简介',
    link: '/v1.1/markdown'
  },
  {
    text: '体验',
    items: [
      { text: '应用示例', link: '/v1.1/examples/base/apps' },
      { text: '快速开始', link: '/v1.1/examples/base/build' },
      { text: '功能体验', link: '/v1.1/examples/base/test' }
    ]
  },
  {
    text: '基础',
    items: [
      { text: '应用开发', link: '/v1.1/examples/api/apps' },
      { text: '基础消息', link: '/v1.1/examples/api/message' },
      { text: '特殊机制', link: '/v1.1/examples/api/mechanism' }
    ]
  },
  {
    text: '进阶',
    items: [
      { text: '了解配置', link: '/v1.1/examples/advanced/config' },
      { text: '事件对象', link: '/v1.1/examples/advanced/message' },
      { text: '频道类型', link: '/v1.1/examples/advanced/types' },
      { text: '内置对象', link: '/v1.1/examples/advanced/obj' }
    ]
  },
  {
    text: '高阶',
    items: [
      { text: '功能预览', link: '/v1.1/examples/core/function' },
      { text: '消息控制', link: '/v1.1/examples/core/controller' },
      { text: '原生接口', link: '/v1.1/examples/core/client' },
      { text: '平台开发', link: '/v1.1/examples/core/platforms' }
    ]
  }
] as DefaultTheme.SidebarItem[]
