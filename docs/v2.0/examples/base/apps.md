---
outline: deep
---

# 应用示例

::: tip

V2 的响应是基于文件系统的，且是运行时的。

也就是说，当 res 没有匹配到时，不会对该模块进行加载

当且仅当路过 res 时，会进行初始化，并在内部通过算法来优化匹配速度。

:::

### apps/\*\*/\*/res.ts

> 定义响应内容

```ts title="res.ts"
export default OnResponse(
  event => {
    // 执行内容
  },
  'message.create', // 匹配类型
  /^你好$/ // 该类型下可使用正则匹配
)
```

- 消息发送

```ts
import { Text, useSend } from 'alemonjs'
// ...
// 使用消息接口
const Send = useSend(event)
// 发送消息 - 文本 Hello Word !
Send(Text('Hello Word !'))
// ...
```

- 完整例子

```ts title="res.ts"
import { Text, useSend } from 'alemonjs'
export default OnResponse(
  event => {
    const Send = useSend(event)
    Send(Text('Hello Word !'))
  },
  'message.create',
  /^你好$/
)
```

### apps/\*\*/\*/config.ts

> 对同目录下 res.ts 的进行其他配置

```ts title="res.ts"
export default ResponseConfig({
  // 只响应 kook 平台 （可选）
  platform: 'kook'
})
```
