---
outline: deep
---

# 控制器

```ts
export interface ControllerOption {
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

### 消息绑定

```ts
const Message = e.Message()

// 立即回复对方消息
Message.reply('你好')

// 引用回复对方
Message.reply('你好', { quote: e.msg_id })

// 私聊对方
Message.reply('你好', { open_id: e.open_id })

// 立即撤回对方消息
Message.withdraw()

// 立即钉选对方消息
Message.pinning()

// 在该频道内的其他子频道艾特该用户
const MessageChannel = e.Message({ channel_id: '1234567890' })
MessageChannel.reply(e.segment.at(e.user_id))

// 在其他频道的某个字频道艾特该用户
const MessageGuild = e.Message({
  guild_id: '1234567890',
  channel_id: '1234567890'
})
MessageGuild.reply(e.segment.at(e.user_id))
```

### 用户绑定

```ts
const Member = e.Member()

// 禁言一分钟
Member.mute()

// 用户详细信息
Member.information()

// 加入id=1的身分组
Member.operate('1')

// 用户在 id = 1234567890 频道的详细信息
const MemberChannel = e.Member({
  guild_id: '1234567890'
})

// 得到该用户详细信息
const uData = await MemberChannel.information()
```

## 特殊接口

> (卡片|表态)不同于其他接口一般只需要通用字段

> 每个平台的数据格式皆不相同

> 发送前需要进行平台判断并构造数据格式

## QQ

### 卡片

```ts
const Message = e.Message()

if (e.platform == 'qq') {
  // qq embed
  Message.card([
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

### 表态

```ts
const Message = e.Message()
if (e.platform == 'qq') {
  const emoji = {
    emoji_type: 1,
    emoji_id: '4'
  }
  Message.emoji([CardItem])
} else if (e.platform == 'kook') {
  // emoji
} else {
  e.reply('当前平台不支持emoji')
}
```

## 主动控制器

> 不推荐使用

- 部分平台限制主动消息

- 无法自动识别平台

- 需要主动标注平台 API

- 需要构造基本参数

自定义的配置来构造控制器

该行为称作`主动控制器`

### 消息控制

```ts
import { Controller } from 'alemonjs'

// 绑定 e 等同  qq下的 e.Message()
// const Message = Controller('qq')(e).Message

// 同时参数必要参数
const Message = Controller('qq')({}).Message()

// 立即回复对方消息
Message.reply('你好')
```

### 用户控制

```ts
import { Controller } from 'alemonjs'

// 绑定 e 等同  qq下的 e.Member()
// const Member = Controller('qq')(e).Member

const Member = Controller('qq')({}).Member()

// 禁言一分钟
Member.Message.mute()

// 用户详细信息
Member.information()

// 加入id=1的身分组
Member.operate('1')
```
