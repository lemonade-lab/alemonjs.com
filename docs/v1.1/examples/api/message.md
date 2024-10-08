---
outline: deep
---

# 基础消息

### 数组消息

数组消息可以在书写时折叠行数

```typescript
e.reply([
  '哎哟,你干嘛',
  '这不会换行哦',
  '换行需要\n才行',
  '换行需要\n才行',
  '换行需要\n才行'
])
```

### 元素消息

#### 艾特所有人

```typescript
e.reply(e.segment.atAll())
```

当然你也可以这样

```typescript
e.reply(`${e.segment.atAll()},哎哟 你干嘛`)
```

#### 艾特某人

接收用户的 ID

```typescript
e.reply(e.segment.at(e.user_id))
```

#### 提及频道

```typescript
e.reply(e.segment.atChannel(e.channel_id))
```

#### 提及蓝链

```typescript
e.reply(e.segment.link('百度以下', 'wwww.baidu.com'))
```

### 图片消息

```typescript
const img = '<buffer-img xxx>'
// 1.
e.reply(['你好呀~', img])
// 2.
e.reply([img])
// 3.
e.reply(img)
```

- 本地图片

```typescript
e.reply(e.segment.img('/plugins/point-plugin/img/icon.png'))
```

- 二维码

```typescript
e.reply(e.segment.qrcode('https://www.baidu.com'))
```

- 网络图片

```typescript
e.reply(e.segment.http('https://api.xingzhige.com/API/yshl/'))
```
