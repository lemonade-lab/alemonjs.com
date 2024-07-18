---
outline: deep
---

# 基础消息


```ts
import { Controllers } from 'alemonjs'
const c = Controllers(e)
```

### 数组消息

数组消息可以在书写时折叠行数

```typescript:line-numbers=1
c.Message.reply([
  '哎哟,你干嘛',
  '这不会换行哦',
  '换行需要\n才行',
  '换行需要\n才行',
  '换行需要\n才行'
])
```

### 元素消息

#### 艾特所有人

```typescript:line-numbers=1
c.Message.reply(e.segment.atAll())
```

当然你也可以这样

```typescript:line-numbers=1
c.Message.reply(`${e.segment.atAll()},哎哟 你干嘛`)
```

#### 艾特某人

接收用户的 ID

```typescript:line-numbers=1
c.Message.reply(e.segment.at(e.user_id))
```

#### 提及频道

```typescript:line-numbers=1
c.Message.reply(e.segment.atChannel(e.channel_id))
```

#### 提及蓝链

```typescript:line-numbers=1
c.Message.reply(e.segment.link('百度以下', 'wwww.baidu.com'))
```

### 图片消息

```typescript:line-numbers=1
const img = '<buffer-img xxx>'
// 1.
c.Message.reply(['你好呀~', img])
// 2.
c.Message.reply([img])
// 3.
c.Message.reply(img)
```

- 本地图片

```typescript:line-numbers=1
c.Message.reply(e.segment.img('/plugins/point-plugin/img/icon.png'))
```

- 二维码

```typescript:line-numbers=1
c.Message.reply(e.segment.qrcode('https://www.baidu.com'))
```

- 网络图片

```typescript:line-numbers=1
c.Message.reply(e.segment.http('https://api.xingzhige.com/API/yshl/'))
```

### 按钮消息

```ts
c.Message.reply('', [{ label: '打招呼', value: '/你好' }])
```
