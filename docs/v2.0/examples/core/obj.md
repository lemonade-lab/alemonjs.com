---
outline: deep
---

# 内置实例

::: warning

实验性功能

:::

### 数据 Buffer


```ts
import { BufferData } from 'chat-space'
const BufferDB = new BufferData()

```

把字符串地址转换成二维码

```ts:line-numbers=1
const img: Buffer | false = await BufferDB.qrcode('www.baidu.com')
```

读取指定路径的图片

```ts:line-numbers=1
const img: Buffer | false = await BufferDB.getPath('xxx.png')
```

读取指定地址的图片

```ts:line-numbers=1
const img: Buffer | false = await BufferDB.getUrl('https://xxxx.com/xxx.png')
```

写入数据并以文件存储

```ts:line-numbers=1
BufferDB.set('/public/buffer.ini')
```

读取文件数据

```ts:line-numbers=1
const img: Buffer | false = await BufferDB.get('/public/buffer.ini')
```

## 客户端 Client

用于直接调用接口的客户端对象

让开发框架不会因为兼容性导致接口缺失

同时能保持原生平台特有功能

### FilesServer

```ts:line-numbers=1
import { FilesServer } from 'chat-space'
const ClientFile = new FilesServer()
```

-  固定文件暴露

```ts:line-numbers=1
const url = await ClientFile.getLocalFileUrl(
  '/plugins/point/public/img/ionc.png'
)

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

-  动态文件暴露

```ts:line-numbers=1
const img : Buffer = '<buffer-img xxx >'
const url = await ClientFile.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```


## 地址 IP

获取公网地址, 如果你的服务器有的话

```ts:line-numbers=1
import { IP } from 'chat-space'
const ip:string : false = await IP.get()
```
