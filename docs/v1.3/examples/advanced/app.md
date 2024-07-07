---
outline: deep
---

# 应用对象

## 重定义事件对象

```typescript:line-numbers=1
import { createApp } from 'alemonjs'
// 重定义属性后重新返回`e`事件对象给机器人
createApp(import.meta.url).event(e => {
  if (e.user_name) e.user_ponit_name = e.user_name
  return e
})
```

| 参数 | 数据类型 | 解析     |
| ---- | -------- | -------- |
| fnc  | 函数     | 回调函数 |

> 仅限当前`AppName`内的`plugin`生效

## 参数扩展

```typescript:line-numbers=1
import { createApp } from 'alemonjs'
createApp(import.meta.url).arg(e => [
  () => 'I am dataApi',
  () => 'I am control2'
])
```

```ts:line-numbers=1
// 使用
export class PluginName extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/你好$/,
          fnc: 'postHello'
        }
      ]
    })
  }

  async postHello(e, dataApi, control2) {
    e.reply('你好')
    console.log(dataApi()) // I am dataApi
    console.log(control2()) // I am control2

    this.subscribe('sub')
  }

  // 订阅的函数也一样生效
  async sub(e, dataApi, control2) {
    e.reply('新的订阅')
    console.log(dataApi()) // I am dataApi
    console.log(control2()) // I am control2
    // 取消
    this.cancel()
  }
}
```

| 参数 | 数据类型 | 解析     |
| ---- | -------- | -------- |
| fnc  | 函数     | 回调函数 |

> 仅限当前`AppName`内的`plugin`生效

## 自定义打印

```typescript:line-numbers=1
import { createApp } from 'alemonjs'
const app = createApp(import.meta.url)
app.info(
  (
    e: AEvent,
    name: string,
    acount: number,
    example: string,
    funcName: string
  ) => {
    return `[${e.event}] [${e.typing}] [${name}] [${acount}] [${example}] [${funcName}]`
  }
)
app.error(
  (
    e: AEvent,
    name: string,
    acount: number,
    example: string,
    funcName: string
  ) => {
    return `[${e.event}] [${e.typing}] [${name}] [${acount}] [${example}] [${funcName}]`
  }
)
```

## 测试平台

可以伪造任意数据来测试内部应用

```typescript:line-numbers=1
import { createApp, AEvent } from 'alemonjs'
const app = createApp(import.meta.url)

const e: AEvent = {}

// message
app.responseMessage(e)

// event
app.responseEventType(e)

// on
app.response(e)
```
