---
outline: deep
---

# 图片制作

:::tip 注意

此内容专业性较高，请仔细了解相关技术文档再阅读

:::

### 特性

- 无需再写原生的 html

强大的现代化框架 React.js 将为你管理组件和代码

[点击 学习 React.js](https://react.docschina.org/)

> VScode 安装插件 `ES7+ React/Redux/React-Native snippets`

- 无需再写原生的 css

tailwindcss 将自动识别 jsx 中的 class 并生成 css

> 默认设置识别 plugins 目录, 并存放在`./public/output.css`

[点击 学习 tailwindcss](https://www.tailwindcss.cn/)

丰富的`tailwindcss`组件将节省你的开发成本

> VScode 安装插件 `Tailwind CSS IntelliSense`

- 独立的浏览器控制

机器人不再为你主动连接

你可以为自己的应用创建属于自己的环境

此后，不再担心崩溃后影响其他应用

### 如何编写组件

```ts title="./hello.tsx"
import React from 'react'
export type DataType = {
  name: string
}
export type PropsType = {
  data: DataType
}
export default function App({ data }: PropsType) {
  return (
    <div className="text-red-500 p-2 text-xl m-80">Hello, {data.name}!</div>
  )
}
```

### 实例化截图类

```tsx title="./image.ts"
import React from 'react'
import { Picture } from 'alemonjs'
import Hello, { PropsType } from './hello.tsx'
export class Image extends Picture {
  constructor() {
    // 继承实例
    super()
    // 启动
    this.Pup.start()
  }
  /**
   *
   * @param uid
   * @param Props
   * @returns
   */
  createHello(uid: number, Props: PropsType) {
    // 生成 html 地址 或 html字符串
    const Address = this.Com.create(<Hello {...Props} />, {
      // html/hello/uid.html
      join_dir: 'hello',
      html_name: `${uid}.html`
    })
    return this.Pup.render(Address)
  }
}
// 初始化 图片生成对象
export const imgae = new Image()
```

### 如何进行截图

```ts title="./apps.ts"
import { Messages } from 'alemonjs'
import { imgae } from './image.tsx'
const message = new Messages()
message.response(/^你好/, async e => {
  const UID = e.user_id
  // render 是异步的，因此此处也是异步的
  const img = await imgae.createHello(UID, {
    data: { name: 'word' }
  })
  // 判断是否成功
  if (typeof img !== 'boolean') {
    // 图片
    e.reply(img)
  } else {
    e.reply('你好')
  }
})
export default message
```

## 扩展功能

> VScode 安装插件 `Path Intellisense`

### 动态组件

```ts
import * as hellos from './hello.tsx'
import { createDynamicComponent } from 'alemonjs'
const dynamic = createDynamicComponent(import.meta.url)
/**
 *
 * 该方法可被重复执行
 * 并触发dynamic重新加载
 * @param Props
 * @returns
 */
async function DynamicHello(Props: Parameters<typeof hellos.default>[0]) {
  const Hello = (await dynamic<typeof hellos>('./hello.tsx')).default
  return <Hello {...Props} />
}
```

使用`createDynamicComponent`将创建一个动态组件.

当前脚本再执行时,其内部关联的所有动态组件都将再次被重新执行.

:::danger 警告

动态组件是危险的,请确保他仅用于包裹一个可预测的纯组件.
如果组件内额外的执行代码，都将触发重复执行.
生产环境下，即 env.NODE_ENV=='production'下，禁用动态模块。

:::

### 文件引入

```ts
import React from 'react'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const url = require('./resources/example.png')
// 样式内引入
const styles = {
  background: `url(${url})`,
  backgroundSize: '100% 100%'
}
export default function App() {
  return (
    <>
      <div style={styles}></div>
      <img src={url} />
    </>
  )
}
```

### 截图方块

Puppeteer 截图是默认 body

你可以指定截图的元素为`section`

也可以设置`section`为指定的高度

```ts
export default function App({ data }: PropsType) {
  return (
    <div className="text-red-500 p-2 text-xl m-80">
      Hello, {data.name}!<section className="h-[80rem] w-[90rem]">嘎嘎</section>
    </div>
  )
}
```

```tsx
export class Image extends Picture {
  createHello(uid: number, Props: PropsType) {
    const Address = this.Com.create(<Hello {...Props} />, {
      join_dir: 'hello',
      html_name: `${uid}.html`
    })
    return this.Pup.render(Address, {
      tab: 'section'
    })
  }
}
```

### 元素插入

```html title="./script.html"
<script>
  // 利用html的语法提示，撰写插入的脚本
  const dom = document.getElementById('root')
</script>
```

```tsx title="./link.tsx"
export const Link = () => {
  return (
    <>
      <link rel="stylesheet" href={require('../../resources/css/output.css')} />
      <link rel="stylesheet" href={require('../../resources/css/hello.css')} />
    </>
  )
}
```

```ts title="./image.tsx"
import { readFileSync } from 'fs'
import { Link } from './link.tsx'
export class Image extends Picture {
  createHello(uid: number, Props: PropsType) {
    const Address = this.Com.create(<Hello {...Props} />, {
      join_dir: 'hello',
      html_name: `${uid}.html`,
      // head里插入额外的元素
      html_head: this.Com.render(<Link />),
      // body里插入额外的元素
      head_body: readFileSync('./script.html', 'utf-8')
    })
    return this.Pup.render(Address)
  }
}
```

### 引用别名

定义一个显示图片的组件

```tsx title="./views/image.tsx"
import React from 'react'
export default () => <div className="show-image"></div>
```

创建一个 css 文件

> 图片位置./resources/exp.png

```css title="./resources/css/example.main.css"
.show-image {
  // 引入上级目录的图片资源
  background-image: url('../resources/exp.png');
}
```

正常情况下，截图工具是无法识别 css 内部引用的其他资源的

- 资源的位置随便可能会因为插件位置的改变而改变

- 框架的设计变更也可能发生改变

- 生产的 html 文件随时会变化

此时，开发者需要借助别名系统，确保资源能正常被识别出来

```tsx
import { dirname, join } from 'path'
import ImageComponent from './views/image.tsx'
// 别名路径
export const paths = {
  // 定位自身的 md文件，并获取目录地址
  '@example': dirname(require('./README.md'))
}

// 携带了别名的资源
export const files = {
  // ... require ..
  hello: [require('./resources/css/example.main.css')]
}

export class Image extends Picture {
  async createHello() {
    const Address = this.Com.create(
      // 引入组件
      <ImageComponent {...Props} />,
      {
        // 设置带有别名的资源
        html_files: files.hello,
        // 设置别名
        file_paths: paths
        // ... 其他参数
      }
    )
    // return ...
  }
}
```

```css title="./resources/css/example.main.css"
.show-image {
  // 在外部资源中使用别名引用
  background-image: url('@example/resources/exp.png');
}
```
