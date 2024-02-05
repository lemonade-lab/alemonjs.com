---
outline: deep
---

# 应用开发

- [查看 AlemonJS 接口|函数|声明](https://ningmengchongshui.github.io/alemonjs/)

| Project           | Status                                               | Description    |
| ----------------- | ---------------------------------------------------- | -------------- |
| [alemonjs]        | [![alemonjs-status]][alemonjs-package]               | 标准应用解析器 |
| [create-alemonjs] | [![create-alemonjs-status]][create-alemonjs-package] | 模板创建脚手架 |
| [afloat]          | [![afloat-status]][afloat-package]                   | 应用构建工具   |

>

[alemonjs]: https://github.com/ningmengchongshui/alemonjs
[alemonjs-status]: https://img.shields.io/npm/v/alemonjs.svg
[alemonjs-package]: https://www.npmjs.com/package/alemonjs

>

[create-alemonjs]: https://github.com/ningmengchongshui/alemonjs/tree/create-alemonjs
[create-alemonjs-status]: https://img.shields.io/npm/v/create-alemonjs.svg
[create-alemonjs-package]: https://www.npmjs.com/package/create-alemonjs

>

[afloat]: https://github.com/ningmengchongshui/alemonjs/tree/rollup
[afloat-status]: https://img.shields.io/npm/v/afloat.svg
[afloat-package]: https://www.npmjs.com/package/afloat

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
import { createApp, APlugin, AEvent } from 'alemonjs'

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
  async post(e: AEvent) {
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

```ts:line-numbers=3
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
  async post(e: AEvent) {
    e.reply('哒哒')
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
createApp(import.meta.url)
  .use(apps)
  .mount()
```

## 热开发启动

::: code-group

```sh [npm]
npm install afloat@latest
```

```sh [pnpm]
pnpm install afloat@latest
```

:::

`afloat.config.ts`

```ts:line-numbers=1 {7}
export default defineAfloat({
  nodemon: {
    /**
     * 以`a.`开头的{ts,js}文件
     * 目录src下所有的文件
     */
    watch: ['alemon.*.{ts,js}', 'src']
  }
})
```

```ts
npx afloat dev
```

## 环境变量

```ts:line-numbers=1
export default defineAfloat({
  nodemon: {
    env: {
      // 平台原始数据
      ALEMONJS_EVENT: 'dev',
      // 构造后 event 对象
      ALEMONJS_AEvent: 'dev'
    }
  }
})
```

> `afloat`启动时会自动读取本地文件`.env`

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

## 打包成插件

`afloat.config.ts`

```typescript:line-numbers=1
import { defineAfloat } from 'afloat'
export default defineAfloat({
  rollup: {
    input: 'dist/main.js'  // 默认
  }
})
```

```sh
npx afloat build
```

得到`dist/main.js`和`dist/package.json`

> 放置于 plugins 目录下

## 插件导出

`export.json`

```json
{
  "name": "xiuxian",
  "version": "1.0.0",
  "description": "说明",
  "author": "作者",
  "dependencies": {
    "axios": "^1.6.5",
    "bullmq": "^4.12.7",
    "ioredis": "^5.3.2",
    "mysql2": "^3.6.2",
    "sequelize": "^6.33.0"
  },
  "alemonjs": {
    "download": {
      "github": {
        "arg": "--depth=1 -b build",
        "url": "https://github.com/ningmengchongshui/xiuxian-plugin.git"
      }
    },
    "env": {
      "ALEMONJS_REDIS_HOST": "localhost",
      "ALEMONJS_REDIS_PORT": 6379,
      "ALEMONJS_REDIS_PASSWORD": "",
      "ALEMONJS_REDIS_DB": 3,
      "ALEMONJS_MYSQL_DATABASE": "xiuxian",
      "ALEMONJS_MYSQL_USER": "root",
      "ALEMONJS_MYSQL_PASSWORD": "",
      "ALEMONJS_MYSQL_HOST": "localhost",
      "ALEMONJS_MYSQL_PROT": 3306
    }
  }
}
```
