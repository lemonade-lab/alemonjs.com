---
outline: deep
---

# 平台开发

## 基础讲解

消息分为`字符串消息`和`非字符串消息`

`src/index.ts`

```ts:line-numbers=1
// alemonjs
import { PlatformsItemType, AEvent } from 'alemonjs'
export default {
  // 平台名
  name: 'mybot',
  // 控制器
  controllers: class controllers {
    //
  },
  /**
   * @param options 登录配置
   * @param resMessage 字符串消息
   * @param resEvent 非字符串消息
   * @returns
   */
  login: (options, resMessage, resEvent) => {
    // 使用 options 进行登录自定义的平台

    // 监听回调事件后

    function classback(event) {
      // 把消息类型的数据 根据 AEvent 标准 构造
      const e = {
        user_id: event.user_id
      } as AEvent

      // 如果消息属于字符串消息

      if (event?.type == 'MESSAGE') {
        resMessage(e)
      } else {
        resEvent(e)
      }
    }
  }
} as PlatformsItemType
```

发 npm 包后

`alemon.config.ts`

```ts:line-numbers=1
import { defineAlemonConfig, analysis } from 'alemonjs'
import MyBot from ''
export default defineAlemonConfig({
  // 配置平台npm包即可
  platforms: [MyBot]
})
```

## 登录声明

```ts:line-numbers=1
// 以自身命名为前缀
export interface MyBotOptions {
  appid: string
  token?: string
  masterID?: string
}
// 保留名称变量
export const BOTNAME = 'mybot'
// 声明登录loinmap
export interface MyBotLoginMap {
  [key: string]: {
    [BOTNAME]?: MyBotOptions
  }
}
```

```ts:line-numbers=1
import { BOTNAME } from ''
export default {
  // 平台名
  name: BOTNAME
}
```

`a.login.config.ts`

```ts:line-numbers=1
import { MyBotLoginMap } from 'my-bot'
import { LoginMap } from 'alemonjs'
export const login: LoginMap & MyBotLoginMap = {}
```
