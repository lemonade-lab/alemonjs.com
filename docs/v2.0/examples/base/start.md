---
outline: deep
---

# 如何开始

| Project                  | Status                              | Description       |
| ------------------------ | ----------------------------------- | ----------------- |
| [alemonjs]               | [![alemonjs-s]][alemonjs-p]         | 标准应用解析器    |
| [@alemonjs/kook]         | [![kook-s]][kook-p]                 | KOOK 机器人连接   |
| [@alemonjs/discord]      | [![discord-s]][discord-p]           | DC 公会机器人连接 |
| [@alemonjs/qq-group-bot] | [![qq-group-bot-s]][qq-group-bot-p] | QQ 群机器人连接   |
| [@alemonjs/qq-guild-bot] | [![qq-guild-bot-s]][qq-guild-bot-p] | QQ 频道机器人连接 |

[alemonjs]: https://github.com/ningmengchongshui/alemonjs
[alemonjs-s]: https://img.shields.io/npm/v/alemonjs.svg
[alemonjs-p]: https://www.npmjs.com/package/alemonjs
[@alemonjs/kook]: https://github.com/alemonjs/kook
[kook-s]: https://img.shields.io/npm/v/@alemonjs/kook.svg
[kook-p]: https://www.npmjs.com/package/@alemonjs/kook
[@alemonjs/discord]: https://github.com/alemonjs/discord
[discord-s]: https://img.shields.io/npm/v/@alemonjs/discord.svg
[discord-p]: https://www.npmjs.com/package/@alemonjs/discord
[@alemonjs/qq-group-bot]: https://github.com/alemonjs/qq-group-bot
[qq-group-bot-s]: https://img.shields.io/npm/v/@alemonjs/qq-group-bot.svg
[qq-group-bot-p]: https://www.npmjs.com/package/@alemonjs/qq-group-bot
[@alemonjs/qq-guild-bot]: https://github.com/alemonjs/qq-guild-bot
[qq-guild-bot-s]: https://img.shields.io/npm/v/@alemonjs/qq-guild-bot.svg
[qq-guild-bot-p]: https://www.npmjs.com/package/@alemonjs/qq-guild-bot

## 初始化环境

- 使用 yarn

```sh
npm install yarn@1.19.1 -g
```

- 安装 ts 环境

```sh
yarn add tsx -D
```

> 创建文件 tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "alemonjs/tsconfig.json"
}
```

- 安装 alemonjs

```sh
yarn add alemonjs@2 -W
```

> 创建文件 index.ts

```ts
import { createBot } from 'alemonjs'
createBot()
```

- 启动

> --login 即要选择登录的平台

```sh
npx tsx index.ts --login "xxx"
```

## 登录平台

> 登录平台，需要增加对应平台的关联包

- 安装 kook 平台

```sh
yarn add @alemonjs/kook
```

- 启动

> --token 即登录需要的 token ，不同平台要求不同

```sh
npx tsx index.ts --login "kook" --token "xxxx"
```

## 热更新配置

> 创建文件 alemon.config.yaml

```yaml
# 不使用 --login 时将尝试读取此配置内容以启动机器人
login: 'kook'

# @alemonjs/kook

kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
# kook end

# @alemonjs/discord
discord:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
# discord end

# @alemonjs/qq-guild-bot
qq-guild-bot:
  # 编号
  app_id: ''
  # 令牌
  token: ''
  # 主人
  master_id:
    - ''

# @alemonjs/qq-group-bot
qq-group-bot:
  # 编号
  app_id: ''
  # 令牌
  token: ''
  # 密钥
  secret: ''
  # 主人
  master_id:
    - ''
```
