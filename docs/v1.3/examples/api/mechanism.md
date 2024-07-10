---
outline: deep
---

# 特殊机制

## 上下文

```typescript:line-numbers=1
import { APlugin, AEvent } from 'alemonjs'
export class TestConversation extends APlugin {
  constructor() {
    super()
    this.rule = [
          {
          reg: /^(#|\/)?你好呀$/,
          fnc: this.startCall.name
          }
      ]
  }

  state: {
    [key: string]: number
  } = {}

  /**
   * @param e 消息对象
   * @returns
   */
  async startCall(e: AEvent) {
    e.reply('好的,现在开始你的个人对话')
    this.subscribe('reBack')
    return
  }

  async reBack(e: AEvent) {
    if (/^^(#|\/)?关闭/.test(e.msg)) {
      e.reply(`验证结束`)
      // 关闭
      delete this.state[e.user_id]
      // 取消
      this.cancel()
      return
    }

    // init
    if (!this.state[e.user_id]) this.state[e.user_id] = 0
    // ++
    this.state[e.user_id] += 1

    // v
    if (this.state[e.user_id] > 3) {
      e.reply(`验证失败`)
      // 关闭
      delete this.state[e.user_id]
      // 取消
      this.cancel()
      return
    }

    e.reply(`[${this.state[e.user_id]}]请输入正确密码:${e.msg}`)
    return
  }
}

```

## 广播

```typescript:line-numbers=1
import { APlugin , APPS } from 'alemonjs'
export class apps extends APlugin {
  constructor() {
    super()
    this.rule = [
          {
          reg: /^(#|\/)?你好呀$/,
          fnc: this.postHello.name
          }
      ]
  }

  async postHello(e) {
    e.reply('你好')

    const msg = '你们好呀'

    if(!APPS.trigger(msg)){
      e.reply('广播失败,无效消息')
      return
    }

    // 开始广播
    e.msg = msg
    APPS.responseMessage(e)

  }
}
```

## 注销应用

```typescript:line-numbers=1
import { APlugin , APPS } from 'alemonjs'
export class apps extends APlugin {
  constructor() {
    super()
       this.rule = [
        {
          reg: /^\/注销$/,
          fnc: 'del'
        },
        {
          reg: /^\/选择注销/,
          fnc: 'select'
        }
      ]
  }

  async del(e) {
    if(!e.isMastet){
      e.reply('无操作权限')
      return
    }

    // 开始注销 this.name 是自身应用名
    APPS.del(this.name)
  }

  async select(e) {
    if(!e.isMastet){
      e.reply('无操作权限')
      return
    }
    /**
     * /选择注销game-plugin
     */
    const name = e.msg.replace(/^\/选择注销/,'')
    // 注销其他应用
    APPS.del(name)
  }
}
```
