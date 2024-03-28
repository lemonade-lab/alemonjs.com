---
outline: deep
---

# 图片制作

确保 ts 开启了 jsx

- tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
    "noEmit": true,
    "allowImportingTsExtensions": true
  }
}
```

安装 react

- npm

```sh
npm install react  react-dom @types/react-dom -D
```

## 定义组件

- help.jsx

```tsx
import React from 'react'

// types
export type DataType = {
  id: number
  group: string
  list: {
    id: number
    name: string
    doc: string
  }[]
}[]

// component
export default function App({ data }: { data: DataType }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="../css/help.css" />
      </head>
      <body>
        <div className="body-top"></div>
        {data.map(val => (
          <div key={val.id}>
            <div className="body-point">
              <div className="body-point-font">{val.group}</div>
            </div>
            <div>
              {val.list.map(item => (
                <div key={item.id} className="body-box">
                  <div className="body-box-font-title">{item.name}</div>
                  <div className="body-box-font-desc">{item.doc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="body-buttom"></div>
      </body>
    </html>
  )
}
```

- css/help.css

```css
html,
body {
  margin: 0;
}
```

## 截图函数

```tsx
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Puppeteer, importPath } from 'alemonjs'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
const app = importPath(import.meta.url)
// component
import HelpComponent, { DataType } from './conponent/help.tsx'
// cwd
const cwd = app.cwd()
// dir
const dir = join(cwd, 'public/html')
mkdirSync(dir, { recursive: true })
// init
const p = new Puppeteer()
/**
 * 用户信息
 * @param data
 * @returns
 */
export function getHelpImage(data: DataType, name = 'help.html') {
  // 渲染 React 组件为 HTML 字符串
  const html = renderToString(<HelpComponent data={data} />)
  // 生产 html 文件
  const address = join(dir, name)
  writeFileSync(address, `<!DOCTYPE html>${html}`)
  // 对该文件进行截图
  return p.toFile(address, {})
}
```

## 发送截图

```ts
import { APlugin, type AEvent } from 'alemonjs'
import { getHelpImage } from '../../image'
export class TestLocal extends APlugin {
  constructor() {
    super({
      rule: [
        {
          reg: /^(#|\/)?柠檬帮助$/,
          fnc: 'help'
        }
      ]
    })
  }

  /**
   * @param e 消息对象
   * @returns
   */
  async help(e: AEvent) {
    const img = await getHelpImage([
      {
        id: 1,
        group: '指令示范效果',
        list: [
          {
            id: 1,
            name: '/百度一下',
            doc: '二维码'
          },
          {
            id: 2,
            name: '/你好呀',
            doc: '上下文机制'
          },
          {
            id: 2,
            name: '/原神黄历',
            doc: '网络图片'
          }
        ]
      }
    ])
    if (typeof img != 'boolean') e.reply(img)
    return
  }
}
```
