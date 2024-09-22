---
outline: deep
---

# 如何开始

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
