---
outline: deep
---

# 常见问题

## 关于启动

#### 3.可能版本太高

```sh
node -v #查看版本
```

[点击前往下载 node windows 版本管理](https://github.com/coreybutler/nvm-windows/releases)

打开`Assets`并点击安装`nvm-setup.exe`

```sh
nvm -v #查看版本
```

```sh
nvm install 18.18.2 # 安装稳定版
```

```sh
nvm use 18.18.2 # 切换稳定版本
node -v # 查看版本
```

> 若发现`npm`无效可关闭当前窗口来更新环境

#### 4.discord 连接失败

Win10 可在商城下载`Steam++`工具

![Alt text](/assets/steam.png)

同时在 a.login.config.ts 中补充

```ts
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
```

![Alt text](/assets/dc-tls.png)

#### 5.discord TOKEN 异常

其一,选择重置 token
![Alt text](/assets/dc-token.png)

其二,打开网关
![Alt text](/assets/dc-ws.png)

## 关于浏览器

### 一、Windows Server 2012

选其一安装,且默认路径安装

> 1.推荐安装 [edge](https://www.microsoft.com/zh-cn/edge/download?form=MA13DC)

> 2.推荐安装[Chrome](https://www.google.cn/chrome/)

## 关于反馈

### 开发交流 806943302
