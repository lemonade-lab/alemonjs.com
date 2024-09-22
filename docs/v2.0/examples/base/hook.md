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
    // string
    const text = useParse(e.Msgs, 'Text')
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```
