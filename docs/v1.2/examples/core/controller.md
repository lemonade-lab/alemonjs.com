---
outline: deep
---

# 控制器

```ts
export interface ControllerOption {
  // 平台
  platform?: string
  // 群聊 | 私聊
  attribute?: 'group' | 'single'
  // 频道号
  guild_id?: string
  // 子频道号
  channel_id?: string
  // 消息编号
  msg_id?: string
  // 用户编号
  user_id?: string
  // 私聊会话识别
  open_id?: string
}
```

## 被动控制器

通过传入 event 可自动补全内部参数

该行为称作被动控制器

```ts:line-numbers=1
import { Controllers } from 'alemonjs'
const c = Controllers(e)
```

### 消息绑定

```ts:line-numbers=1
// 立即回复对方消息
c.Message.reply('你好')

// 引用回复对方
c.Message.reply('你好', { quote: e.msg_id })

// 私聊对方
c.Message.reply('你好', { open_id: e.open_id })

// 立即撤回对方消息
c.Message.withdraw()

// 立即钉选对方消息
c.Message.pinning()

// 在该频道内的其他子频道艾特该用户
c.set('channel_id', '1234567890').Message.reply(e.segment.at(e.user_id))

// 在其他频道的某个子频道艾特该用户
c.set('guild_id', '1234567890')
  .set('1234567890')
  .Message.reply(e.segment.at(e.user_id))
```

### 用户绑定

```ts:line-numbers=1
// 禁言一分钟
c.Member.mute()

// 用户详细信息
c.Member.information()

// 加入id=1的身分组
c.Member.operate('1')

// 用户在 id = 1234567890 频道的详细信息
const uData = await c.set('guild_id', '1234567890').Member.information()
```

## 特殊接口

> (卡片|表态)不同于其他接口一般只需要通用子段

> 每个平台的数据格式皆不相同

> 发送前需要进行平台判断并构造数据格式

### QQ

#### 卡片

```ts:line-numbers=1
if (e.platform == 'qq') {
  // qq embed
  c.Message.card([
    {
      embed: {
        title: '新人任务',
        prompt: '新人任务',
        thumbnail: {
          url: 'http://tva1.sinaimg.cn/bmiddle/6af89bc8gw1f8ub7pm00oj202k022t8i.jpg'
        },
        fields: [
          {
            name: '一库一库'
          },
          {
            name: '😁继续努力'
          }
        ]
      }
    }
  ])
}
```

#### 表态

```ts:line-numbers=1
if (e.platform == 'qq') {
  const emoji = {
    emoji_type: 1,
    emoji_id: '4'
  }
  c.Message.emoji([CardItem])
} else if (e.platform == 'kook') {
  // emoji
} else {
  e.reply('当前平台不支持emoji')
}
```

## 主动控制器

> 不推荐使用

- 主动配置平台

- 部分平台限制主动消息

- 需要构造基本参数

自定义的配置来构造控制器

该行为称作`主动控制器`

```ts:line-numbers=1
import { Controllers } from 'alemonjs'
const c = Controllers({})
```
