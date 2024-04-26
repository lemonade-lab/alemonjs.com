---
outline: deep
---

# Afloat

`afloat`是一个基于`rollup`的构建工具。

```bash
npm i -D afloat
```

使用它,你可以......

- 直接启动机器人

```sh
npx afloat app
```

- 调用 PM2 进行程序管理

```sh
npx afloat pm2 start
```

- 调用 nodemon 进行开发环境的热更新

```sh
npx afloat dev
```

- 调用 rollup 进行打包

```sh
npx afloat build
```

- 自动加载 `.env` 环境文件

## PM2

使用 PM2 进行程序管理, 你可以通过 `afloat pm2` 命令来调用它.

afloat 只是内部为`alemonjs`写好了合适的配置并加载

你翻阅 pm2 文档了解更多

```ts
   "start": "afloat pm2 startOrRestart pm2.config.cjs",
    "stop": "afloat pm2 stop pm2.config.cjs",
    "restart": "afloat pm2 restart pm2.config.cjs",
    "delete": "afloat pm2 delete pm2.config.cjs",
    "logs": "afloat pm2 logs",
    "list": "afloat pm2 list",
    "startup": "afloat pm2 startup",
    "update": "afloat pm2 update",
    "monit": "afloat pm2 monit",
    "save": "afloat pm2 save",
    "kill": "afloat pm2 kill",
    "format": "prettier --write .",
```

## nodemon

nodemon 是一个开发环境的热更新工具

内部会默认调用`ts-node`和`alemon.config.ts`

```ts
import { defineAfloat } from 'afloat'
export default defineAfloat({
  nodemon: {
    watch: ['alemon.*.{ts,js}', 'src']
  }
})
```

## rollup

rollup 是一个打包工具,默认会将`main.ts`文件打包至于`dist/main.js`

```sh
npx afloat build
```

此外,你可以通过进行简单的配置 rollup 的插件

```ts
import { defineAfloat } from 'afloat'
export default defineAfloat({
  build: {
    multiEntry: {},
    terser: {},
    typescript: {}
  }
})
```

但如果你直接配置,`build`配置将失效,效果以下配置为准

```ts
import { defineAfloat } from 'afloat'
export default defineAfloat({
  rollup: {
    plugins: []
  }
})
```
