import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import nav from './nav'
import sidebarRootV11 from './sidebar/v1.1'
import sidebarRootV12 from './sidebar/v1.2'
import sidebarAbout from './sidebar/about'
export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    logo: '/img/alemon.jpg',
    nav,
    sidebar: {
      'about': sidebarAbout,
      'v1.1': sidebarRootV11,
      'v1.2': sidebarRootV12
    },
    // outline: 'deep',//侧边栏深度:数字或者deep
    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',
    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // editLink: {
    //   pattern: '路径地址',
    //   text: '对本页提出修改建议'
    // },
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录' // 右侧大纲标题文本配置
    }
  }
}
