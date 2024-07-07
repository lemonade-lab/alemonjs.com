---
outline: deep
---

# 内置实例

```ts
import {} from 'alemonjs'
```

### 数据 ABuffer

把字符串地址转换成二维码

```ts:line-numbers=1
const img: Buffer | false = await ABuffer.qrcode('www.baidu.com')
```

读取指定路径的图片

```ts:line-numbers=1
const img: Buffer | false = await ABuffer.getPath('xxx.png')
```

读取指定地址的图片

```ts:line-numbers=1
const img: Buffer | false = await ABuffer.getUrl('https://xxxx.com/xxx.png')
```

写入数据并以文件存储

```ts:line-numbers=1
ABuffer.set('/public/buffer.ini')
```

读取文件数据

```ts:line-numbers=1
const img: Buffer | false = await ABuffer.get('/public/buffer.ini')
```

### 网址 IP

获取公网地址

```ts:line-numbers=1
const ip:string : false = await IP.get()
```

### 配置 ABotConfig

机器人配置

```ts:line-numbers=1
const redis = ABotConfig.get('redis')
```

### 观察者 AObserver

观察者

```ts
/**
* 发布订阅
* @param acount
* @param example
* @param func
* @param key
* @param id
* @returns
   */
AObserver.add(
    name: string,
    acount: number,
    example: string,
    func: string,
    key: string,
    id: any
  )

/**
* 取消订阅
* @param key
*/
AObserver.cancel(key: string)

/**
* 寻找订阅
* @param key
* @returns
*/
AObserver.find(key: string)
```

### 解析配置 AppLoadConfig

应用解析配置

```ts:line-numbers=1
const data = AppLoadConfig.get('')
```

### 截图配置 ALunchConfig

截图工具初始化配置

```ts:line-numbers=1
const data = ALunchConfig.set('headless', 'new')
```

### 浏览器 Puppeteer

```ts:line-numbers=1
// 创建截图工具
const Screenshot = new Puppeteer()
```

对指定路径的 html 文件进行渲染截图

```ts:line-numbers=1
const img: Buffer | false = await Screenshot.toFile(AdressHtml, {
  SOptions: { type: 'jpeg', quality: 90 },
  tab: 'body',
  timeout: 2000
})
```

对指定 url 地址进行渲染截图

```ts:line-numbers=1
const img: Buffer | false = await Screenshot.toFile('https://baidu.com')
```

配置管理

```ts:line-numbers=1
// 设置
Screenshot.setLaunch({})
// 读取
const data = Screenshot.getLaunch()
```

### 邮箱 Email

该对象必须启动时配置 email

```ts:line-numbers=1
export default defineAlemonConfig({
  email: {
    smt: {
      // 平添
      service: 'qq',
      auth: {
      // 账号
        user: '',
        // 密码
        pass: ''
      }
    },
    // 接收方
    to: '916415899@qq.com'
  }
})

```

```ts:line-numbers=1
new Email().send({
  // 标题
  subject: 'AlemonJS-BOT',
  // 内容
  text: '应用加载完毕'
})
```

```ts:line-numbers=1
new Email({
  // 更改接收方
  to:''
}).send({})
```

## 客户端 Client

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

### All Client

```ts:line-numbers=1
import { ClientQQ } from 'alemonjs'
import { ClientKOOK } from 'alemonjs'
import { ClientVILLA } from 'alemonjs'
import { ClientNTQQ } from 'alemonjs'
```

> 接口随平台同步更新

> 请直接翻阅源码查看参数

> [ClientQQ 源码查看](https://github.com/ningmengchongshui/alemonjs)
