---
outline: deep
---

# 快速开始

::: warning
[Node.js](https://nodejs.org) and [Chrome/Chromium](https://www.google.cn/chrome/)/[Edge](https://www.microsoft.com/zh-cn/edge/download?form=MA13DC) installation required
:::

## 部署工具

> -y 快速确定 c 取消依赖 f 强制覆盖

::: code-group

```sh [npm]
npm create alemonjs@latest -y
```

```sh [pnpm]
npm install pnpm -g
pnpm create alemonjs@latest -y
```

```sh [yarn]
npm install yarn@1.12.1 -g
yarn create alemonjs@latest -y
```

:::

```sh
cd alemonb
```

> 国际环境建议取消依赖, 且 create 后删除.npmrc 配置

::: code-group

```sh [npm]
npm install # 默认已自动加载依赖
```

```sh [pnpm]
pnpm install # 默认已自动加载依赖
```

```sh [yarn]
yarn install # 默认已自动加载依赖
```

:::

```sh
npm run dev
```

> 安装或启动遇到[常见问题?](/about/problem)

## 登录配置

`alemon.login.ts`需要配置才能正确登录

```typescript:line-numbers=1
import { defineConfig } from 'alemonjs'
export default defineConfig({
  // 配置名 test
  test: {
    // qq平台配置
    qq: {
      appID: 'your app id',
      token: 'your token'
    }
  },
  // 配置名 pro
  pro: {
    // kook平台配置
    kook: {}
  }
})
```

> 示例 1：配置 默认 平台 qq

```sh
npm run dev qq
```

> 示例 2：配置 test 平台 qq

```sh
npm run dev qq
```

> 示例 3：配置 pro 平台 kook 和 ntqq

```sh
npm run dev pro kook ntqq
```

## 登录详细

::: code-group

```ts{3,5,7} [QQ(频道)]
export interface QqGuildOptions {
  // 应用编号(必填)
  appID: string
  // 钥匙(必填)
  token: string
  // 密钥(必填)
  secret: string
  // 主人编号
  masterID?: string
  /**
   * 私域机器人登录
   * 选项必须配置为 true
   */
  isPrivate?: boolean
  // 事件订阅（有默认）
  intents?: IntentsEnum[]
  // 分片（有默认）
  shard?: number[]
  // 是否是沙盒环境（默认非沙盒）
  sandbox?: boolean
}
```

```ts{3,5,7} [NTQQ(群)]
export interface NtQQOptions {
  // 应用编号(必填)
  appID: string
  // 钥匙(必填)
  token: string
  // 密钥(必填)
  secret: string
  // 主人编号
  masterID?: string
  // 事件订阅（有默认）
  intents?: NtQQEventsEnum[]
  // 分片（有默认）
  shard?: number[]
}
/**
 * ntqq 无文件流发送接口
 * 仅能通过url进行发送图片
 * 使用服务器部署将自启本地接口服务器
 * 也可以翻看图床栏目编写第三方图床接口
 */
```

```ts{3} [KOOK]
export interface KookOptionsg {
  // 钥匙(必填)
  token: string
  // 主人编号
  masterID?: string
}
```

```ts{3} [DISCORD]
export interface DISOCRDOptions {
  // 钥匙(必填)
  token: string
  // 订阅（有默认）
  intent?: IntentsEnum[]
  // 分片（有默认）
  shard?: number[]
  // 主人编号
  masterID?: string
}
```

:::
