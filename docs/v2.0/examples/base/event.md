---
outline: deep
---

# 如何开始

## 消息创建 message.create

```ts
export type AEventByMessageCreate = {
  /**
   * 平台
   */
  Platform: string
  /**
   * 服务器ID
   */
  GuildId: string
  /**
   * 频道ID
   */
  ChannelId: string
  /**
   * 消息类型
   */
  IsMaster: boolean
  /**
   * 消息内容
   */
  UserId: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * 用户头像地址
   */
  UserAvatar: string
  /**
   * 消息ID
   */
  MsgId: string
  /**
   * 消息内容
   */
  Megs: any[]
  /**
   * 消息内容
   */
  OpenID: string
  /**
   * 创建时间
   */
  CreateAt: number
  /**
   * 捕获原始消息格式
   */
  value: any
}
```

## 消息更新 message.update

## 消息撤回 message.delete

## 私聊消息创建 private.message.create
