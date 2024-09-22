---
outline: deep
---

# hook

## useSend

> 消息发送

```ts
import { useSend, Text, At } from 'alemonjs'
export default OnResponse(
  async e => {
    // 发送Text
    const Send = useSend(e)
    Send(Text('Hello Word!'))

    // 发送At
    Send(At('123456'))

    // Text And At
    Send(Text('Hello '), At('123456'), Text(', How are things going?'))

    //
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```

## useParse

> 解析消息

```ts
import { useParse } from 'alemonjs'
export default OnResponse(
  async e => {
    // user msg
    const text = useParse(e.Msgs, 'Text')

    if (!text) {
      // 消息为空
      return
    }

    // ats
    const ats = useParse(e.Msgs, 'At')

    if (!ats || ats.lenght === 0) {
      // at为空
      return
    }

    // user 类型的at，且不是bot
    const UserID = ats.find(item => item.typing == 'user' && !item.bot)

    if (!UserID) {
      // 未找到
      return
    }

    //
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```
