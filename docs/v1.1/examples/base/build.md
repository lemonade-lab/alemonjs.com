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
npm create alemonjs@1.1.25 -y
```

```sh [pnpm]
npm install pnpm -g
pnpm create alemonjs@1.1.25 -y
```

```sh [yarn]
npm install yarn -g
yarn create alemonjs@1.1.25 -y
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
npm run dev # npx afloat dev
```

> 安装或启动遇到[常见问题?](/about/problem)

## 登录配置

`a.login.config.ts`需要配置才能正确登录

```typescript
import { LoginMap } from 'alemonjs'
export const login: LoginMap = {
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
}
```

> npm run [脚本名] [配置名] [平台名]

```sh
npm run dev test qq  #登录 test 机器人的 qq 平台
```

```sh
npm run dev pro kook #登录 pro 机器人 kook 平台
```

```sh
npm run dev qq #登录 test(默认位) 机器人的 qq 平台
```

## 登录详细

::: code-group

```ts [KOOK]
export interface KookOptionsg {
  /**
   * 钥匙(必填)
   */
  token: string
  /**
   * 主人编号
   */
  masterID?: string
}
```

```ts [QQ]
export interface QqGuildOptions {
  /**
   * 应用编号(必填)
   */
  appID: string
  /**
   * 钥匙(必填)
   */
  token: string
  /**
   * 密钥(必填)
   */
  secret: string
  /**
   * 主人编号
   */
  masterID?: string
  /**
   * 私域机器人登录
   * 选项必须配置为 true
   */
  isPrivate?: boolean
  /**
   * 事件订阅
   */
  intents?: AvailableIntentsEventsEnum[]
  /**
   * 分片
   */
  shard?: number[]
  /**
   * 是否是沙盒环境
   */
  sandbox?: boolean
}
```

```ts [NTQQ]
export interface NtQQOptions {
  /**
   * 应用编号(必填)
   */
  appID: string
  /**
   * 钥匙(必填)
   */
  token: string
  /**
   * 密钥(必填)
   */
  secret: string
  /**
   * 主人编号
   */
  masterID?: string
  /**
   * 事件订阅
   */
  intents?: NtQQEventsEnum[]
  /**
   * 分片
   */
  shard?: number[]
}
```

```ts [VILLA]
export interface VillaOptions {
  /**
   * 机器人编号(必填)
   */
  bot_id: string
  /**
   * 密钥(必填)
   */
  secret: string
  /**
   * 公匙(必填)
   */
  pub_key: string
  /**
   * 测试别野号(必填)
   */
  villa_id: number
  /**
   * 主人编号
   */
  masterID?: string
}
```

```ts [DISCORD]
export interface DISOCRDOptions {
  /**
   * 钥匙(必填)
   */
  token: string
  /**
   * 订阅
   */
  intent?: IntentsEnum[]
  /**
   * 分片
   */
  shard?: number[]
  /**
   * 主人编号
   */
  masterID?: string
}
```

:::
