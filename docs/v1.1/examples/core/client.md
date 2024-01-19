---
outline: deep
---

# 接口

为保持原平台接口文档一致性,增加阅读便捷度,方法名会尽量采用接口同名声明

## 客户端

用于直接调用接口的客户端对象

让开发框架不会因为兼容性导致接口缺失

同时能保持原生平台特有功能

### ClientKOA

```ts
import { ClientKOA } from 'alemonjs'
```

#### 固定文件暴露

```ts
const url = await ClientKOA.getLocalFileUrl(
  '/plugins/point/public/img/ionc.png'
)

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

#### 动态文件暴露

```ts
const img = '<buffer-img xxx >'
const url = await ClientKOA.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```

#### 动态文件定时清除

```ts
// 60s 清一次
// 当挂载服务启动时,该行为默认开启
ClientKOA.autoClearFiles(60000)
```

### ClientQQ

```ts
import { ClientQQ } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

> [ClientQQ 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/qq/sdk/)

### ClientKOOK

```ts
import { ClientKOOK } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientKOOK 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/kook/sdk/)

### ClientVILLA

```ts
import { ClientVILLA } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientVILLA 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/villa/sdk/)

### ClientNTQQ

```ts
import { ClientNTQQ } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

[ClientNTQQ 源码查看](https://github.com/ningmengchongshui/alemonjs/blob/main/src/ntqq/sdk/)
