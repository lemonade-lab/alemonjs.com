---
outline: deep
---

# 事件对象

#### 事件相关

```typescript
interface EventBase {
  // 平台
  platform: string
  // 事件类型
  event: (typeof EventEnum)[number]
  // 消息类型
  typing: (typeof TypingEnum)[number]
}
```

#### 机器人相关

```typescript
interface BotBase {
  bot: {
    // 机器人编号
    id: string
    // 机器人昵称
    name: string
    // 机器人头像(部分平台可能没有)
    avatar?: string
  }
}
```

#### 服务器相关

```typescript
interface Serverbase {
  // 频道编号 | 服务器 | 群名
  guild_id: string
  // 频道名 |  服务器名 | 群号
  guild_name: string
  // 频道头像
  guild_avatar: string
  // 子频道名 | 房间名 | 群名
  channel_name: string
  // 子频道编号 | 房间编号 | 群号
  channel_id: string
  // 公域@ | 私域无@
  boundaries: 'publick' | 'private'
  // 群聊 | 私聊
  attribute: 'group' | 'single'
}
```

#### 消息相关

```typescript
interface MsgBase {
  // 是否有@
  at: boolean
  /**
   * 当有艾特时
   * 第一个非机器人用户信息
   * 不管是公域或私域
   */
  at_user: UserType | undefined
  // 艾特得到的uid即可
  at_users: UserType[]
  // 消息编号
  msg_id: string
  // 引用的消息id
  quote: string
  // 私聊会话，存在即允许私聊
  open_id: string
  // 消息创建时间
  send_at: number
  // 原始消息内容
  msg_txt: string
  // 附件消息
  attachments: any[]
  // 特殊消息
  specials: any[]
  // 纯消息
  msg: string
  // 快捷接口
  segment: SegmentType
}
```

#### 用户相关

```typescript
interface UserBase {
  // 用户编号
  user_id: string
  // 用户名
  user_name: string
  // 用户头像
  user_avatar: string
  // 是否是主人
  isMaster: boolean
}
```

#### 用户类型

```typescript
export interface UserType {
  // 用户编号
  id: string
  // 用户名称
  name: string
  // 用户头像地址
  avatar: string
  // 是否是机器人
  bot: boolean
}
```

#### 模块类型

```typescript
export interface SegmentType {
  /**
   * 艾特用户
   * @param uid
   */
  at(uid: string): string
  /**
   * 艾特全体
   */
  atAll(): string
  /**
   * @param dir 本地图片地址
   */
  img(dir: string): Buffer | false
  /**
   * 标注GET请求
   * @param url
   */
  http(url: string): string
  /**
   * 艾特频道
   * @param channel_id
   */
  atChannel?(channel_id: string): string
  /**
   *
   * @param role_id 角色
   */
  role?(role_id: string): string
  /**
   *  点击后才显示
   * @param content 内容
   */
  spoiler?(content: string): string
  /**
   *
   * @param name  服务器表情名
   * @param id   服务器表情id
   */
  expression?(name: string, id: string): string
  /**
   * @param txt 链接文字
   * @param url 链接地址
   */
  link?(txt: string, url: string): string
  /**
   * 加粗
   * @param txt
   */
  Bold?(txt: string): string
  /**
   * 斜体
   * @param txt
   */
  italic?(txt: string): string
  /**
   * 加粗斜体
   */
  boldItalic?(txt: string): string
  /**
   * 删除线
   * @param txt
   */
  strikethrough?(txt: string): string
  /**
   * 代码块
   * @param txt
   */
  block?(txt: string): string
}
```
