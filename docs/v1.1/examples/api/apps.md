---
outline: deep
---

# 应用开发

| Project           | Status                                               | Description     |
| ----------------- | ---------------------------------------------------- | --------------- |
| [alemonjs]        | [![alemonjs-status]][alemonjs-package]               | 标准应用解析器  |
| [create-alemonjs] | [![create-alemonjs-status]][create-alemonjs-package] | 模板创建脚手架  |
| [afloat]          | [![afloat-status]][afloat-package]                   | 热开发&打包工具 |
| [alemon-ffmpeg]   | [![alemon-ffmpeg-status]][alemon-ffmpeg-package]     | ffmpeg 自动下载 |
| [alemon-onebot]   | [![alemon-onebot-status]][alemon-onebot-package]     | OneBot 协议平台 |

[alemonjs]: https://github.com/ningmengchongshui/alemonjs
[alemonjs-status]: https://img.shields.io/npm/v/alemonjs.svg
[alemonjs-package]: https://www.npmjs.com/package/alemonjs

>

[create-alemonjs]: https://github.com/ningmengchongshui/alemonjs/tree/create-alemonjs
[create-alemonjs-status]: https://img.shields.io/npm/v/create-alemonjs.svg
[create-alemonjs-package]: https://www.npmjs.com/package/create-alemonjs

>

[afloat]: https://github.com/ningmengchongshui/alemonjs/tree/afloat
[afloat-status]: https://img.shields.io/npm/v/afloat.svg
[afloat-package]: https://www.npmjs.com/package/afloat

>

[alemon-ffmpeg]: https://github.com/kongxiangyiren/alemon-ffmpeg
[alemon-ffmpeg-status]: https://img.shields.io/npm/v/alemon-ffmpeg.svg
[alemon-ffmpeg-package]: https://www.npmjs.com/package/alemon-ffmpeg

>

[alemon-onebot]: https://github.com/ningmengchongshui/alemonjs/tree/alemon-onebot
[alemon-onebot-status]: https://img.shields.io/npm/v/alemon-onebot.svg
[alemon-onebot-package]: https://www.npmjs.com/package/alemon-onebot

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
npm install yarn -g
yarn install alemonjs@latest
```

:::

`alemon.config.ts`

```typescript
import { defineAlemonConfig, analysis } from 'alemonjs'
export default defineAlemonConfig({
  login: {
    qq: {
      appID: 'your app id',
      token: 'your token'
    }
  },
  app: {
    scripts: 'main.ts'
  }
})
```

## 编写入口

```ts
import { createApp, APlugin, AMessage } from 'alemonjs'

class word extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/滴滴$/,
          fnc: 'post'
        }
      ]
    })
  }
  async post(e: AMessage) {
    e.reply('哒哒')
  }
}

// 创建应用
createApp(import.meta.url)
  // 使用 word
  .use({ word })
  // 挂载
  .mount()
```

执行配置脚本来启动应用

```sh
npx ts-node alemon.config.ts
```

::: tip
启动后将会在`public/defset`目录下生成`alemonb.json`
:::

## 管理应用文件

`./apps/word.js`

```ts
export class word extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/滴滴$/,
          fnc: 'post'
        }
      ]
    })
  }
  async post(e: AMessage) {
    e.reply('哒哒')
  }
}
```

`./apps.js`

```ts
export * from './apps/hello.js'
export * from './apps/word.js'
```

`main.ts`

```ts
import { createApp } from 'alemonjs'
import * as apps from './apps.js'
createApp(import.meta.url)
  .use(apps)
  .mount()
```

## 热开发启动

```sh
npm install afloat
```

`afloat.config.ts`

```ts
export default defineAfloat({
  nodemon: {
    /**
     * 以`a.`开头的{ts,js}文件
     * 目录apps下所有的文件
     */
    watch: ['a.*.{ts,js}', 'apps']
  }
})
```

```ts
npx afloat dev
```

## 环境变量

```ts
export default defineAfloat({
  nodemon: {
    env: {
      // 平台原始数据
      ALEMONJS_EVENT: 'dev',
      // 构造后 event 对象
      ALEMONJS_MESSAGE: 'dev'
      // discord API
      // kook API
      // villa API
      // qq API
      // ntqq API
    }
  }
})
```

> `afloat`启动时会自动读取本地文件`.env`

```sh
# 打印所有 api 请求后反馈的结果
DISCORD_API_CONFIG='dev'
DISCORD_API_DATA='dev'
KOOK_API_CONFIG='dev'
KOOK_API_DATA='dev'
VILLA_API_CONFIG='dev'
VILLA_API_DATA='dev'
NTQQ_API_CONFIG='dev'
NTQQ_API_DATA='dev'
```

## 打包成插件

`afloat.config.ts`

```typescript
import { defineAfloat } from 'afloat'
export default defineAfloat({
  rollup: {
    input: 'dist/main.js'
  }
})
```

```sh
npx afloat build
```

得到`dist/main.js`和`dist/package.json`

> 放置于 plugins 目录下
