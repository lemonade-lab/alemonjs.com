---
outline: deep
---

# 图片制作

:::tip 注意

该模块设计已独立。
请阅读[react-puppeteer](https://github.com/lemonade-lab/react-puppeteer)

:::


## 图床

```ts
import { defineAlemonConfig } from 'alemonjs'
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
