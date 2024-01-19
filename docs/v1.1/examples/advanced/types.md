---
outline: deep
---

# 频道类型

## 全部事件

```typescript
export const EventEnum = [
  /**
   * **********
   * 频道
   * **********
   */
  'GUILD', // 频道事件
  'GUILD_BOT', // 机器人进出事件
  'CHANNEL', // 子频道事件
  'GUILD_MEMBERS', // 成员进出
  /**
   * ***********
   * 论坛
   * *********
   */
  'FORUMS_THREAD', // 论坛主题
  'FORUMS_POST', // 论坛POST
  'FORUMS_REPLY', // 论坛评论
  /**
   * *********
   * 会话消息
   * ********
   * MESSAGES=message
   * =MESSAGE+DIRECT+PUBLIC
   */
  'MESSAGES', // 消息
  'message', // 消息
  'GUILD_MESSAGE_REACTIONS', // 表态
  'MESSAGE_BUTTON', // 按钮回调

  /**
   * 互动事件监听
   */
  'INTERACTION',
  /**
   * ***********
   * 音频事件
   * ***********
   */
  'AUDIO_FREQUENCY', // 视频
  'AUDIO_MICROPHONE', // 麦克风
  /**
   * 审核消息
   */
  'MESSAGE_AUDIT'
] as const
```

```typescript
/**
 * 消息判断
 */
export const TypingEnum = ['CREATE', 'UPDATE', 'DELETE'] as const
```

## 消息事件

### 创建

```typescript
export class APP extends APlugin {
  constructor() {
    super({
      event: 'MESSAGES',
      typing: 'CREATE'
      rule: [

      ]
    })
  }
}
```

## 消息事件

### 撤回

```typescript
export class APP extends APlugin {
  constructor() {
    super({
      event: 'MESSAGES',
      typing: 'DELETE'
      rule: [

      ]
    })
  }
}
```
