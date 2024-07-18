---
outline: deep
---

# 应用开发

| Project           | Status                                               | Description    |
| ----------------- | ---------------------------------------------------- | -------------- |
| [alemonjs]        | [![alemonjs-status]][alemonjs-package]               | 标准应用解析器 |
| [create-alemonjs] | [![create-alemonjs-status]][create-alemonjs-package] | 模板创建脚手架 |

[alemonjs]: https://github.com/lemonade-lab/alemonjs
[alemonjs-status]: https://img.shields.io/npm/v/alemonjs.svg
[alemonjs-package]: https://www.npmjs.com/package/alemonjs
[create-alemonjs]: https://github.com/lemonade-lab/alemonjs/tree/create-alemonjs
[create-alemonjs-status]: https://img.shields.io/npm/v/create-alemonjs.svg
[create-alemonjs-package]: https://www.npmjs.com/package/create-alemonjs

## 启动配置

::: code-group

```sh [npm]
npm install alemonjs@latest
```

```sh [pnpm]
npm install pnpm -g
pnpm install alemonjs@latest
```

```sh [yarn]
npm install yarn@1.12.1 -g
yarn install alemonjs@latest
```

:::

`alemon.config.ts`

```typescript:line-numbers=1
import { defineAlemonConfig, analysis } from 'alemonjs'
export default defineAlemonConfig({
  app: {
    scripts: 'src/main.ts'
  }
})
```

## 编写入口

`main.ts`

```ts:line-numbers=1
import { createApp, APlugin, Controllers } from 'alemonjs'
class word extends APlugin {
  constructor() {
    super()
    this.rule = [
      {
          reg: /^\/滴滴$/,
          fnc: this.post.name
        }
    ]
  }
  async post() {
    Controllers(this.e).Message.reply('哒哒')
  }
}

// 创建应用
const app =createApp(import.meta.url)
  // 使用 word
app.use(word)
  // 挂载
app.mount()
```

执行配置脚本来启动应用

```sh
npx alemonjs
```

::: tip
启动后将会在`public/defset`目录下生成`alemonb.json`
:::

## 管理应用文件

`./apps/word.js`

```ts:line-numbers=3
export class word extends APlugin {
  constructor() {
    super()
    this.rule = [
        {
          reg: /^\/滴滴$/,
          fnc: this.post.name
        }
      ]
  }
  async post() {
    Controllers(this.e).Message.reply('哒哒')
  }
}
```

`./apps.js`

```ts:line-numbers=1
export * from './apps/hello.js'
export * from './apps/word.js'
```

`main.ts`

```ts:line-numbers=1
import { createApp } from 'alemonjs'
import * as apps from './apps.js'
const app =createApp(import.meta.url)
for(const key in apps){
  app.use(apps[key])
}
app.mount()
```

## 环境变量

打印原始数据

```ts
ALEMONJS_EVENT = 'dev'
```

打印事件对象

```ts
ALEMONJS_AEvent = 'dev'
```

打印所有 api 请求后反馈的结果

```ts
DISCORD_API_CONFIG = 'dev'
DISCORD_API_DATA = 'dev'
```

```ts
NTQQ_API_CONFIG = 'dev'
NTQQ_API_DATA = 'dev'
```

```ts
VILLA_API_CONFIG = 'dev'
VILLA_API_DATA = 'dev'
```

```ts
KOOK_API_CONFIG = 'dev'
KOOK_API_DATA = 'dev'
```

打印 ws 数据流

```ts
DISCORD_WS = 'dev'
NTQQ_WS = 'dev'
VILLA_WS = 'dev'
KOOK_WS = 'dev'
```

打印指令集

```ts
ALEMONJS_JSON = 'dev'
```

取消 log 前缀

```ts
ALEMONJS_LOG = 'false'
```

转为生产环境

```ts
NODE_ENV = 'production'
```
