---
outline: deep
---

# 应用示例

## 事件回调

```ts:line-numbers=1
import { createApp, Events } from 'alemonjs'
// 监听事件
const event = new Events()
event.response('MEMBERS', async e => {
  if (/^你好$/.test(e.msg)) e.reply('你好呀')
})
// 构建应用
const app = createApp(import.meta.url)
app.on(event.ok)
app.mount()
```

## 消息回调

```ts:line-numbers=1
import { createApp, Messages } from 'alemonjs'
// 响应消息
const message = new Messages()
message.response(/^你好吗/, async e => {
  e.reply('当然')
})
// 构建应用
const app = createApp(import.meta.url)
app.use(message.ok)
app.mount()
```

## 模板继承

`./apps.ts`

```ts
import { AEvent, APlugin } from 'alemonjs'
export class word extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/你好$/,
          fnc: 'post'
        }
      ]
    })
  }
  async post(e: AEvent) {
    e.reply('你好')
  }
}
```

`./main.ts`

```ts
import { createApp, AEvent, APlugin } from 'alemonjs'
import { word } from './apps.js'
// 创建应用
const app = createApp(import.meta.url)
//使用模板
app.use(word)
// 挂载
app.mount()
```
