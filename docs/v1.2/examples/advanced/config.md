---
outline: deep
---

# 了解配置

## 数据配置

`a.db.config.ts`

```typescript:line-numbers=1
import { AlemonOptions } from 'alemonjs'
export const mysql: AlemonOptions['mysql'] = {
  user: 'root',
  port: 3306,
  password: 'Aa002580!',
  host: 'localhost',
  database: 'alemonjs'
}
export const redis: AlemonOptions['redis'] = {
  password: '',
  port: 6379,
  host: '127.0.0.1',
  db: 1
}
```

## 基础配置

```typescript
export interface AlemonOptions {
  /**
   * 配置
   */
  [key: string]: any
  /**
   * 平台
   */
  platforms?: PlatformsItemType[]
  /**
   * login配置
   */
  login?: LoginOptions
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
    /**
     * 插件名匹配规则
     */
    RegexOpen?: RegExp
    /**
     * 插件名关闭规则
     */
    RegexClose?: RegExp
    /**
     * 插件入口
     * 默认index
     * type='ts'
     * 即 index.ts
     */
    main?: string
    /**
     * 入口文件类型
     */
    type?: 'ts' | 'js' | 'stript'
  }
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
  server?: {
    /**
     * 应用端口
     */
    port?: number
    /**
     * 中间件
     */
    middleware?: any[]
  }
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
   * puppeteer配置
   */
  puppeteer?: PuppeteerLaunchOptions
  /**
   * redis配置
   */
  redis?: RedisOptions
  /**
   * mysql配置
   */
  mysql?: MysqlOptions
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

```typescript [redis]
export interface RedisOptions {
  /**
   * 地址
   */
  host?: string
  /**
   * 端口
   */
  port?: number
  /**
   * 密码
   */
  password?: string
  /**
   * 数据库名
   */
  db?: number
}
```

```typescript [mysql]
export interface MysqlOptions {
  /**
   * 地址
   */
  host?: string
  /**
   * 端口
   */
  port?: number
  /**
   * 用户名
   */
  user?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 数据库名
   */
  database?: string
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

:::
