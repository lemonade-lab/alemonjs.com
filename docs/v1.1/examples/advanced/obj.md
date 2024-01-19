---
outline: deep
---

# 内置实例

```ts
import {} from 'alemonjs'
```

### BUFFER

把字符串地址转换成二维码

```ts
const img: Buffer | false = await BUFFER.qrcode('www.baidu.com')
```

读取指定路径的图片

```ts
const img: Buffer | false = await BUFFER.getPath('xxx.png')
```

读取指定地址的图片

```ts
const img: Buffer | false = await BUFFER.getUrl('https://xxxx.com/xxx.png')
```

### Screenshot

对指定路径的 html 文件进行渲染截图

```ts
const img: Buffer | false = await Screenshot.toFile(AdressHtml, {
  SOptions: { type: 'jpeg', quality: 90 },
  tab: 'body',
  timeout: 2000
})
```

对指定 url 地址进行渲染截图

```ts
const img: Buffer | false = await Screenshot.toFile('https://baidu.com')
```

### IP

获取公网地址

```ts
const ip:string : false = await IP.get()
```

### CONTOLLER

控制器

```ts
const qq = CONTOLLER.get('qq')
```

### BOTCONFIG

机器人配置

```ts
const redis = BOTCONFIG.get('redis')
```

### HELP

指令文本管理

```ts
const BotHelpJson = CONTOLLER.get('alemonb')
```

### Conversation

对话机

```ts
const con = ALEMONCONFIG.add('', () => {})
```

### ALEMONCONFIG

进程初始化配置

```ts
const BotHelpJson = ALEMONCONFIG.get()
```

### UTILS

工具
