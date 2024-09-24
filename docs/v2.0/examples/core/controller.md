---
outline: deep
---

# 特殊接口


::: warning

实验性功能

:::


## 特殊接口

> (卡片|表态)不同于其他接口一般只需要通用子段

> 每个平台的数据格式皆不相同

### qq-group

#### embed

```ts:line-numbers=1
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
const cards = [
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
  ]

```

#### emoji

```ts:line-numbers=1
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()

```

### qq-guild-bot

#### markdown

::: warning

markdown 通用消息模版已被禁止申请

:::
