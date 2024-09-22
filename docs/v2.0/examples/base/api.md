---
outline: deep
---

# api

## OnResponse

- 继续匹配

```ts title="res.ts"
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

```ts
export default ResponseConfig({
  //
})
```
