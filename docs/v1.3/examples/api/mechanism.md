---
outline: deep
---

# 特殊机制

## 上下文

```typescript:line-numbers=1
import { APlugin, Controllers } from 'alemonjs'
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
   * @returns
   */
  async startCall() {
    Controllers(this.e).Message.reply('好的,现在开始你的个人对话')
    this.subscribe('reBack')
    return
  }

  async reBack() {
    const c = Controllers(this.e)
    if (/^^(#|\/)?关闭/.test(this.e.msg)) {
      c.Message.reply(`验证结束`)
      // 关闭
      delete this.state[this.e.user_id]
      // 取消
      this.cancel()
      return
    }

    // init
    if (!this.state[this.e.user_id]) this.state[this.e.user_id] = 0
    // ++
    this.state[this.e.user_id] += 1

    // v
    if (this.state[this.e.user_id] > 3) {
      c.Message.reply(`验证失败`)
      // 关闭
      delete this.state[this.e.user_id]
      // 取消
      this.cancel()
      return
    }

    c.Message.reply(`[${this.state[this.e.user_id]}]请输入正确密码:${this.e.msg}`)
    return
  }
}

```

## 广播

```typescript:line-numbers=1
import { APlugin , APPS , Controllers } from 'alemonjs'
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

  async postHello() {
    const c = Controllers(this.e)
    c.Message.reply('你好')

    const msg = '你们好呀'

    if(!APPS.trigger(msg)){
      c.Message.reply('广播失败,无效消息')
      return
    }

    // 开始广播
    this.e.msg = msg
    APPS.responseMessage(this.e)

  }
}
```

## 注销应用

```typescript:line-numbers=1
import { APlugin , APPS , Controllers} from 'alemonjs'
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

  async del() {
    const c = Controllers(this.e)
    if(!this.e.isMastet){
      c.Message.reply('无操作权限')
      return
    }

    // 开始注销 this.name 是自身应用名
    APPS.del(this.name)
  }

  async select() {
    const c = Controllers(this.e)
    if(!this.e.isMastet){
      c.Message.reply('无操作权限')
      return
    }
    /**
     * /选择注销game-plugin
     */
    const name = this.e.msg.replace(/^\/选择注销/,'')
    // 注销其他应用
    APPS.del(name)
  }
}
```
