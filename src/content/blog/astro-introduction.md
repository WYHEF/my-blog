---
title: 'Astro 快速入门指南'
description: 'Astro 是一个现代化的静态站点生成器，本文将介绍如何使用 Astro 构建高性能的网站。'
pubDate: 2024-01-20
category: 'tech'
tags: ['Astro', '前端', 'SSG']
---

## 什么是 Astro

Astro 是一个现代化的静态站点生成器（SSG），专注于构建快速、内容优先的网站。

## 核心特性

### 1. 零 JavaScript 默认加载

Astro 默认生成零 JavaScript 的 HTML 页面，只在需要时加载交互组件。

```astro
---
// 这段代码只在构建时运行
const data = await fetch('https://api.example.com/data');
---

<div>
  <h1>数据展示</h1>
  <!-- 纯 HTML，无 JavaScript -->
</div>
```

### 2. 组件岛（Islands）架构

可以在静态页面中嵌入交互式组件：

```astro
---
import Counter from './Counter.tsx';
---

<div>
  <h1>静态内容</h1>
  <!-- 只有这个组件会加载 JavaScript -->
  <Counter client:load />
</div>
```

### 3. 支持多框架

在同一个项目中使用 React、Vue、Svelte 等不同框架：

- React 组件
- Vue 组件
- Svelte 组件
- Solid 组件

### 4. 内容集合

Astro 提供了强大的内容管理功能：

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
```

## 性能优势

Astro 生成的网站具有以下性能优势：

1. **更小的包体积**：只发送必要的 JavaScript
2. **更快的加载速度**：HTML 优先的方法
3. **更好的 SEO**：完整的服务端渲染
4. **更优的 Core Web Vitals**：更好的用户体验指标

## 适用场景

Astro 特别适合以下类型的网站：

- 📝 博客和文档站点
- 🛍️ 营销和落地页
- 📰 内容发布平台
- 🎨 作品集网站

## 快速开始

```bash
# 创建新项目
npm create astro@latest

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 总结

Astro 是构建现代静态网站的绝佳选择，它结合了优秀的开发体验和出色的性能表现。

如果你正在考虑构建一个内容为中心的网站，不妨试试 Astro！

