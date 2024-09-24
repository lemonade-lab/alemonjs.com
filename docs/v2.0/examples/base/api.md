---
outline: deep
---

# api

## OnResponse

- 继续匹配

```ts
export default OnResponse(
  (_, { next }) => {
    // 即使完成了，也继续执行匹配
    next()
  },
  'message.create',
  /^你好$/
)
```

## ResponseConfig

::: warning

实验性功能

:::

```ts
export default ResponseConfig({
  // 只响应 kook 平台 （可选）
  platform: 'kook'
})
```
