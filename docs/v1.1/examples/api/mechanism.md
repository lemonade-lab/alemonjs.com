---
outline: deep
---

# 特殊机制

## 对话机

```typescript
import { Conversation } from 'alemonjs'
```

| 属性 | 数据类型 | 解析       |
| ---- | -------- | ---------- |
| step | 字符串   | 会话次数   |
| data | 字符串   | 携带的数据 |
| fnc  | 函数     | 回调函数   |

为指定`user_id`|`e.guild_id`|`e.channel_id`设置状态

```typescript
await Conversation.passing(e.user_id, {
  step: 0,
  data: e.msg,
  fnc: () => {}
})
```

| 属性  | 数据类型 | 解析       |
| ----- | -------- | ---------- |
| e     | 对象     | 事件对象   |
| state | 对象     | 上一次状态 |

为指定`user_id`|`e.guild_id`|`e.channel_id`设置回调

```typescript
Conversation.add(e.user_id, async (e, state) => {
  if (state.step < 3) {
    // 回复
    e.reply(`[${state.step}]${e.msg}`)
    // 累计
    state.step += 1
    // 设置新状态
    await Conversation.passing(e.user_id, state)
    return
  }
  // 回复
  e.reply(`[${state.step}]对话次数已达上限~对话关闭`)
  // 关闭对话
  await Conversation.remove(e.user_id)
})
```

## 上下文

```typescript
import { APlugin } from 'alemonjs'
export class apps extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^\/你好呀$/,
          fnc: 'postHello'
        }
      ]
    })
  }

  async postHello(e) {
    this.e.reply('你好')
    // 设置准备进入下一步
    this.setContext('callback')
  }

  async callback(e) {
    this.e.reply(`你的初始函数消息：${e.msg}`)
    this.e.reply(`你当前的函数消息：${this.e.msg}`)
    if (this.e.msg == '下一步') {
      // 结束上一步
      this.finish('callback')
      // 准备进入下一步
      this.finish('reCallback')
    } else if (this.e.msg == '我结束了我自己') {
      this.finish('callback')
    }
  }

  async reCallback(e) {
    this.e.reply(`你上一步的函数消息：${e.msg}`)
    this.e.reply(`你当前的函数消息：${this.e.msg}`)
    if (this.e.msg == '最后一步') {
      // 触发最后的效果
      this.finish('reCallback')
    }
  }
}
```
