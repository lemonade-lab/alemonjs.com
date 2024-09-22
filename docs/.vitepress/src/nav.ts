import type { DefaultTheme } from 'vitepress'
export default [
  {
    text: '常见问题',
    link: '/about/problem'
  },
  {
    text: '更新记录',
    link: '/about/log'
  },
  {
    text: '版本',
    items: [{
      text: 'V-2.0',
      link: '/v2.0/markdown'
    },
    {
      text: 'V-1.3',
      link: '/v1.3/markdown'
    },
    {
      text: 'V-1.2',
      link: '/v1.2/markdown'
    },
    {
      text: 'V-1.1',
      link: '/v1.1/markdown'
    }
    ]
  }
] as DefaultTheme.NavItem[]
