---
outline: deep
---

# 图片制作

## 基础示例

- 加载 vue.global.js

访问 `https://unpkg.com/vue@3/dist/vue.global.js`

并把内容下载下来，放置在 `.image/global.js`

`alemonjs/resources/index.html` 将默认加载该文件

你可以选择其他 vue 版本

> 如果你并不熟悉 vue3,[请点击阅读 vue 文档](https://cn.vuejs.org/)

- 新建 vue 文件

`/public/pages/index.vue`

> 注意：不能使用组件写法

```vue:line-numbers=1
<script>
Vue.createApp({
  setup: () => {
    const { ref } = Vue
    return {
      // BOT_DATA  是上流中对机器人实例化image对象时的dir
      DIR: BOT_DIR,
      // BOT_DATA  是上流中对机器人传入的data进行预留
      data: BOT_DATA
    }
  }
}).mount('#app')
</script>

<template>
  <!-- 必须绑定id,详细请看vue文档中关于cdn的写法 -->
  <div id="app">
    <div v-for="val of data" :key="val">
      {{ val }}
    </div>
  </div>
</template>

<style>
body,html {
  margin: 0;
}
</style>
```

非常推荐使用 vscode 进行编程

安装插件`Vue Language Features (Volar)`

它可以为你提供 vue 语法提示

- 调用示例 1

```ts:line-numbers=1
import { createImage } from 'alemonjs'
// 创建图片对象
const img = await createImage()
  // 选择模板文件
  .create({ late: '/public/pages/index.vue' })
  // 截图
  .screenshot()
// e.reply(img)
```

- 调用示例 2

```ts:line-numbers=1
import { createImage } from 'alemonjs'
const Image = createImage()
Image.create({
  late: '/public/pages/index.vue',
  // 传入数据
  data: ['1', '2', '3']
})
const img = await Image.screenshot()
```

该工具并非像 vite 那样能完美渲染 vue 文件

其内部只是对字符串进行简单的拼接,以达到类似于 vue 语法习惯

`<template> </template>`

`<style> </style>`

`<head> </head>`

`<script> </script>`

> 以上几个标签不可增加任何修饰符

> 比如 `<style src="url"> </style>`

## 扩展标签

有时候我们需要在 html 中放入一些请求头部

你可以在 vue 中新增`head`标签来达到效果

```vue:line-numbers=1 {2}
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
```

上面的 vue 文件引入了 bootstrap5 ,你可以在`template`中使用

```vue:line-numbers=1
<template>
  <div id="app">
    <div class="card">
      卡片
    </div>
  </div>
</template>

```

## 截图封装

- 获取插件位置

`plugins/point/config.ts`

```ts:line-numbers=1
import { importPath } from 'alemonjs'
// 得到当前位置的路径以及目录名
export const app = importPath(import.meta.url)
```

- 调整图片对象并封装

`plugins/point/api.ts`

```ts:line-numbers=1
import { createImage } from 'alemonjs'
import { app } from './config.js'
// 绑定@的位置,如果你的应用未来放置在plugins下，并务必这么做
const Image = createImage(app.cwd())
/**
 * 图片发送
 * @param key 路由
 * @param params 数据
 * @returns
 */
export function obtainingImages(KEY: string, params: any = {}) {
  // 创建字符
  Image.create({
    late: KEY,
    data: params
  })
  // 截图
  return Image.screenshot()
}
```

- 调用图片接口

`plugins/point/apps.ts`

```ts:line-numbers=1
import { obtainingImages } from './api.js'
const img = await obtainingImages('/public/pages/index.vue')
e.reply(img)
```

## 公共资源

公共资源都能用@来引入标记,如引入 css 文件

> @/ --> public/

`public/css/help.css`

```css:line-numbers=1
.help {
  margin: 0;
}
```

```vue:line-numbers=1
<head>
   <style src="@/css/help.css"></style>
</head>
```

但你不能在 css 文件中使用@

目前还未能支持外部资源使用`@`语法糖

可以把需要的引入资源都写在 vue 文件中

```vue:line-numbers=1 {3,9}
<template>
  <div id="app" class="help">
    <img src="@/img/help.jpg" />
  </div>
</template>

<style>
.help {
  background-image: url('@/img/help.jpg');
}
</style>
```

## 固定资源

用于解决网络波动造成的长时间无法请求文件问题

可把文件下载下来后,放置于`.image` 目录中

并按格式命名为`应用名-文件名.文件格式`

```vue
<head>
  <script src="~/name-plugin-bootstrap5.js"></script>
</head>
```

> ~/ --> .image/

## 调用参数

除了 vue 编写之外,有一些参数可以让你更方便的调整图片

```ts:line-numbers=1
// 得到当前配置
getLaunch:() => val<PuppeteerLaunchOptions>;
// 修改初始化配置
setLaunch: (val: PuppeteerLaunchOptions) => any;
// 使用vue字符串解析
Render: ({
str: string;
data?: any;
cance?: boolean;
}) => any;
// 得到解析后的html字符串
getHtml: () => string;
```

## 热开发调试

新增 `./image/ws.js` 文件用于加载 ws 连接

```js
const adr = window.location.origin.replace(/^(http|https)/, '')
const socket = new WebSocket('ws' + adr + '/ws')
socket.onopen = function () {}
socket.onmessage = function (event) {
  const message = JSON.parse(event.data)
  if (window.location.pathname == message.url) {
    if (message.url.endsWith('.vue') || message.url.endsWith('.html')) {
      socket.close()
      window.location.reload()
    }
  }
}
socket.onclose = function (event) {}
socket.onerror = function (error) {}
console.log('调节设备工具(机器人图片截图尺寸):800*960')
```

现在,你通过启动浏览器服务进行调试

```sh
npx afloat image
```

http://127.0.0.1:7070/index.vue

若你的文件在 public/pages/index.vue

可以通过访问以下地址进行预览

`http://127.0.0.1:7070/public/pages/index.vue`

当打开的文件发生变动时,该页面将自动刷新

此外,推荐调整设备大小为 `800*960`

因为这是机器人默认的浏览器大小
