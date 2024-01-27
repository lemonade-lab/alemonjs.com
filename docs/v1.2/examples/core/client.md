---
outline: deep
---

# 接口

为保持原平台接口文档一致性,增加阅读便捷度,方法名会尽量采用接口同名声明

## 客户端

用于直接调用接口的客户端对象

让开发框架不会因为兼容性导致接口缺失

同时能保持原生平台特有功能

### ClientFile

```ts:line-numbers=1
import { ClientFile } from 'alemonjs'
```

#### 固定文件暴露

```ts:line-numbers=1
const url = await ClientFile.getLocalFileUrl(
  '/plugins/point/public/img/ionc.png'
)

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

#### 动态文件暴露

```ts:line-numbers=1
const img = '<buffer-img xxx >'
const url = await ClientFile.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```

### ClientQQ

```ts:line-numbers=1
import { ClientQQ } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

> [ClientQQ 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/qq/sdk/)

### ClientKOOK

```ts:line-numbers=1
import { ClientKOOK } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientKOOK 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/kook/sdk/)

### ClientVILLA

```ts:line-numbers=1
import { ClientVILLA } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientVILLA 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/villa/sdk/)

### ClientNTQQ

```ts:line-numbers=1
import { ClientNTQQ } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientNTQQ 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/ntqq/sdk/)
