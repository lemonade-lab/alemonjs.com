---
outline: deep
---

# 频道类型

## 全部事件

```typescript
/**
 * 消息枚举
 */
export const EventEnum = [
  /**
   * 消息
   */
  'MESSAGES',
  /**
   * 消息
   * @deprecated MESSAGES
   */
  'message',
  /**
   * 频道事件
   */
  'GUILD',
  /**
   * 机器人进出事件
   */
  'BOT',
  /**
   * 子频道事件
   */
  'CHANNEL',
  /**
   * 成员进出
   */
  'MEMBERS',
  /**
   * 论坛
   */
  'FORUM',
  /**
   * 表态
   */
  'REACTIONS',
  /**
   * 互动
   */
  'INTERACTION',
  /**
   * 视频
   */
  'FREQUENCY',
  /**
   * 麦克风
   */
  'MICROPHONE',
  /**
   * 审核消息
   */
  'AUDIT'
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

```typescript:line-numbers=1
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

```typescript:line-numbers=1
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
