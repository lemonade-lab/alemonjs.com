---
# https://vitepress.dev/reference/default-theme-home-page
title: 阿柠檬开发框架
layout: home

hero:
  name: '阿柠檬'
  text: '构建属于你的机器人'
  tagline: 基于 JavaScript 所构建的跨平台开发框架
  image:
    src: /img/alemon.jpg
    alt: Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /v1.3/markdown
    - theme: alt
      text: 接口文档
      link: /v1.3/examples/api/apps

features:
  - title: 简单易懂
    details: JavaScript函数式编程
    icon:
      src: /img/edt.png
      width: 80
      height: 80
  - title: 功能直调
    details: 所有平台的功能都一个样
    icon:
      src: /img/api.png
      width: 80
      height: 80
  - title: 敏捷开发
    details: 丰富的脚手架与生态环境
    icon:
      src: /img/post.png
      width: 80
      height: 80
---

<script setup>
import HomeView from '.vitepress/views/HomeView.vue'
</script>

<HomeView />
