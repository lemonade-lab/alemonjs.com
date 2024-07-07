---
outline: deep
---

# 接口与图床

## 定义路由

只要定义了就会自启服务器，端口为`6010`

```ts
import { createApp, ARouter } from 'alemonjs'
const api = new ARouter()
api.get('/api/open', async ctx => {
  ctx.body = 'hello world'
})
createApp(import.meta.url).router(api)
```

## 中间件

```ts
import { defineAlemonConfig, ACors, ABodyParser, AStatic } from 'alemonjs'
export default defineAlemonConfig({
  server: {
    port: 6010,
    // 增加中间件
    middleware: [ACors(), ABodyParser()]
  }
})
```

### 自定义

```ts
import { AKoa, AWebSocket } from 'alemonjs'
// 自行翻阅 koa 官网
```

## 图床

```ts
import { defineAlemonConfig, ACors, ABodyParser } from 'alemonjs'
export default defineAlemonConfig({
  imageStorage: async (val: Buffer) => {
    // 撰写任意图床的图片上传方法

    // 对val进行哈希  并以哈希名进行命名

    // 尝试向平台调用哈希文件,如果该哈希文件不存在,则进行上传

    // 上传成功在返回 url ,不成功则 false

    return false
  }
})
```
