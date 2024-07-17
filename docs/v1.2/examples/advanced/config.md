---
outline: deep
---

# 了解配置

## 基础配置

```typescript
export interface AlemonOptions {
  /**
   * 平台
   */
  platforms?: PlatformsItemType[]
  /**
   * login配置
   */
  login?: LoginOptions
  /**
   * 指定读取登录ts/js文件
   */
  loginDir?: string
  /**
   * 是否挂载应用
   */
  mount?: false
  /**
   * 个人应用
   */
  app?: {
    /**
     * 是否初始化
     */
    init?: boolean
    /**
     * 执行脚本
     */
    scripts?: string
  }
  /**
   * 插件配置
   */
  plugin?: {
    /**
     * 是否加载插件
     */
    init?: false
    /**
     * 插件目录
     */
    directory?: string
  } & ApplicationProcessingOpsion
  /**
   * 事件屏蔽
   */
  shieldEvent?: string[]
  /**
   * 图片存储函数
   */
  imageStorage?: (val: Buffer) => Promise<string | false>
  /**
   * 服务器
   */
  server?: ServerOptions
  /**
   * 服务配置
   */
  file?: FileOptions
  /**
   * 是否启动pup
   * defaut true
   */
  pupStart?: false
  /**
   * env
   */
  env?: DotenvConfigOptions
  /**
   * 系统状态-邮箱订阅
   */
  email?: EmailOptions
}
```

## 配置详细

::: code-group

```typescript [server]
export interface FileOptions {
  /**
   * 协议
   */
  http?: string
  /**
   * 地址
   */
  ip?: string
  /**
   * 端口
   */
  port?: number
  /**
   * 挂载路由
   */
  fileRouter?: string
  /**
   * 本地缓存地址
   */
  fileDir?: string
  /**
   * 本地路由构造
   */
  addressRouter?: string
}
```

```typescript [Email]
export interface EmailOptions {
  smt: {
    // 平台
    service: string
    // 账号密码
    auth: {
      user: string
      pass: string
    }
  }
  to: string
}
```

```typescript [plugin]
export interface ApplicationProcessingOpsion {
  /**
   * 根目录
   */
  dir?: string
  /**
   * 主文件
   */
  main?: string
  /**
   * 主文件类型
   */
  type?: ApplicationProcessKeyScriptType
  /**
   * 匹配正则
   */
  openRegex?: RegExp
  /**
   * 不匹配正则
   */
  closeRegex?: RegExp | undefined
  /**
   * 指令json路由
   */
  route?: string
  /**
   * 是否生成json
   */
  regex?: boolean
  /**
   * 消息执行间隔时间
   */
  intervalTime?: number
  /**
   * 事件屏蔽器
   */
  event?: string[]
}
```

:::
