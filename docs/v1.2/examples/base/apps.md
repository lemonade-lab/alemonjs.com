---
outline: deep
---

# 应用示例

## 模板继承

继承写法可使用多个配置函数

```ts:line-numbers=1
import { createApp, AMessage, APlugin } from 'alemonjs'
// 模板继承
class word extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/你好$/,
          fnc: 'post',
        }
      ]
    })
  }
  async post(e: AMessage) {
    e.reply('你好')
  }
}
// 创建应用
createApp(import.meta.url).use({ word }).mount()
```

## 回调响应

比继承优先的回调写法

```ts:line-numbers=1
import { createApp, APlugin } from 'alemonjs'
// 创建应用
const app = createApp(import.meta.url)
// 监听消息事件
app.on('MESSAGE', e => {
  if (/^你好$/.test(e.msg)) e.reply('你好呀', e.user_name)
})
// 挂载
app.mount()
```
