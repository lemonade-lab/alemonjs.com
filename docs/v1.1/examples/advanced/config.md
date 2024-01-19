---
outline: deep
---

# 了解配置

## 数据配置

`a.db.config.ts`

```typescript
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

::: code-group

```typescript [server]
export interface ServerOptions {
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
  /**
   * 当前服务状态
   */
  state?: boolean
  /**
   * 定时清除是否开启
   * 默认关闭
   */
  clear?: boolean
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

:::
