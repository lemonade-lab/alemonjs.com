---
outline: deep
---

# hook

## useSend

> 消息发送

```ts
import { useSend, Text, At, Image } from 'alemonjs'
export default OnResponse(
  async e => {
    // 发送Text
    const Send = useSend(e)
    Send(Text('Hello Word!'))

    // 发送At
    Send(At('123456'))

    // Text And At
    Send(Text('Hello '), At('123456'), Text(', How are things going?'))

    // Images
    const img: Buffer = null
    Send(Image(img))

    // Images local file
    Send(Image('./public/test.jpg', 'file'))

    // ...
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

    // ...
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```

## useOberver

> 用户观察某事件的某个值是否相同，相同则执行处理逻辑

```ts
import { Text, useOberver, useParse, useSend } from 'alemonjs'
export default OnResponse(
  event => {
    //
    const Send = useSend(event)
    Send(Text('请输入密码'))

    // 创建观察者
    const Observer = useOberver(event, 'message.create')
    Observer(
      (event, { next }) => {
        //
        const Send = useSend(event)
        const text = useParse(event.Megs, 'Text')
        if (text === '123456') {
          Send(Text('密码正确'))
        } else {
          Send(Text('密码不正确'))
          // 下一个消息继续执行
          next()
        }
      },
      // 监听当前用户的下一个消息
      ['UserId']
    )

    // ...
  },
  'message.create',
  /测试/
)
```
