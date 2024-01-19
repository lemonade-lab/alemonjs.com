import { defineConfig } from 'vitepress'
import themeConfig from './themeConfig'
import head from './head'
import locales from './locales'
export default defineConfig({
  /* 文档配置 */
  title: 'AlemonJS',
  // 前缀
  base: '/',
  // 说明
  description: 'document',
  // lang: 'en',
  lang: 'zh',
  /* 标头配置 */
  head,
  /* 主题配置 */
  themeConfig,
  /* 语言配置 */
  locales
})
