import type { DefaultTheme } from 'vitepress'
export default [
  {
    text: '常见问题',
    link: '/about/problem'
  },
  {
    text: '关于',
    items: [
      {
        text: '更新记录',
        link: '/about/log'
      },
      {
        text: '参与成员',
        link: '/about/team'
      }
    ]
  },
  {
    text: '版本',
    items: [
      {
        text: 'Version-1.2',
        link: '/v1.2/markdown'
      },
      {
        text: 'Version-1.1',
        link: '/v1.1/markdown'
      }
    ]
  }
] as DefaultTheme.NavItem[]
