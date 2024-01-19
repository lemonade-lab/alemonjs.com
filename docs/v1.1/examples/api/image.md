---
outline: deep
---

# 图片制作

## 基础示例

- 新建 vue 文件

`/public/pages/index.vue`

```vue
<script>
// createApp 是上流中vue对象解构所得
createApp({
  setup: () => ({
    // BOT_DATA  是上流中对机器人传入的data进行预留
    data: BOT_DATA
  })
}).mount('#app')
</script>

<template>
  <div v-for="val of data" :key="val">
    {{ val }}
  </div>
</template>
```

非常推荐使用 vscode 进行编程

安装插件`Vue Language Features (Volar)`

它可以为你提供 vue 语法提示

- 调用示例

```ts
import { createImage } from 'alemonjs'
// 创建图片对象
const img = await createImage()
  // 选择模板文件
  .create({ late: '/public/pages/index.vue' })
  // 截图
  .screenshot()
// e.reply(img)
```

```ts
// 写法 2
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

> 以上几个标签不可增加任何修饰符,且不能有空格

> 比如 `<style src="url"> </style>`

## 扩展标签

- 引入网络资源

有时候我们需要在 html 中放入一些请求头部

你可以在 vue 中新增`head`标签来达到近似效果

```vue
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<template>
  <div></div>
</template>
```

上面的 vue 文件引入了 bootstrap5 ,你可以在`template`中使用

```vue
<template>
  <div class="p-2">Alemon-Image</div>
</template>
```

如果你需要全局生效,你应该注册一个`link`

```ts
const Image = createImage()
Image.link(`<link  href="your url">`)
```

- 引入本地资源

本地的所有资源都能用@来引入标记,如引入本地 css 文件

`publick/css/help.css`

```css
.help {
  margin: 0;
}
```

```vue
<head>
   <style src="@/css/help.css"></style>
</head>
```

但你不能在 css 文件中使用@

目前还未能支持外部资源@语法糖

可以把需要的引入资源都写在 vue 文件中

```vue
<template>
  <div class="help">
    <img src="@/img/help.jpg" />
  </div>
</template>

<style>
.help {
  background-image: url('@/img/help.jpg');
}
</style>
```

## 声明数据

```vue
<script setup>
const onClick = () => {}
const img = ''
const data = [
  {
    title: '',
    val: ''
  }
]
</script>

<script>
createApp({
  setup: () => {
    // 导出 ref
    const { ref } = Vue
    // 定义响应式数据
    const img = ref('点我')
    // 定义点击函数
    const onClick = () => {
      console.log('点击')
    }
    return {
      onClick,
      msg,
      data: BOT_DATA
    }
  }
}).mount('#app')
</script>
```

虽然`<script setup>`会在渲染时完全丢弃

但你可以借助它来达到近似类型声明的效果

```vue
<template>
  <button @click="onClick">{{ msg }}</button>
</template>
```

## 调用参数

除了 vue 编写之外,有一些参数可以让你更方便的调整图片

```ts
// 调整@的位置
cwd: (cwd?: string) => any;
// 推送网络资源
link: (link: string) => any;
// 使用vue字符串解析
Render: ({
str: string;
data?: any;
cance?: boolean;
}) => any;
// 使用vue文件路径解析
create: ({
late: string;
data?: any;
cance?: boolean;
}) => any;
// 得到解析后的html字符串
getHtml: () => string;
// 对html字符串进行截图
screenshot: (options?: ImageOptions) => Promise<Buffer|string|false>;
```

## 截图封装

- 获取插件位置

`plugins/point/config.ts`

```ts
import { importPath } from 'alemonjs'
// 得到当前位置的路径以及目录名
// cwd c://xxxxx/plugins/point
// name point
export const app = importPath(import.meta.url)
```

- 调整图片对象并封装

`plugins/point/api.ts`

```ts
import { createImage } from 'alemonjs'
import { app } from './config.js'
// 绑定@的位置
const Image = createImage(app.cwd())
/**
 * 图片发送
 * @param key 路由
 * @param params 数据
 * @returns
 */
export function obtainingImages(KEY: string, params: any) {
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

```ts
import { obtainingImages } from './api.js'
const img = await obtainingImages('/public/pages/index.vue', {})
e.reply(img)
```

## 热开发调试

通过机器人一次次的截图来查看图片效果的体验非常不友好

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

因为这是机器人的默认浏览器大小
