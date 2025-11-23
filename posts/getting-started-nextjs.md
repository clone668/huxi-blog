---
title: "Next.js 入门指南"
date: "2024-01-20"
excerpt: "学习如何使用 Next.js 构建现代化的 Web 应用程序，包括服务端渲染、静态生成等核心概念。"
readTime: "8 分钟"
---

# Next.js 入门指南

Next.js 是一个强大的 React 框架，它让构建生产级的 Web 应用变得更加简单。

## 为什么选择 Next.js？

Next.js 提供了许多开箱即用的功能：

### 1. 多种渲染模式

- **静态生成 (SSG)** - 在构建时生成 HTML
- **服务端渲染 (SSR)** - 在每次请求时生成 HTML
- **客户端渲染 (CSR)** - 传统的 React 渲染方式

### 2. 优秀的开发体验

```javascript
// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Hello Next.js!</h1>
    </main>
  )
}
```

### 3. 性能优化

- 自动代码分割
- 图片优化
- 字体优化

## 快速开始

创建一个新的 Next.js 项目非常简单：

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## 路由系统

Next.js 使用基于文件系统的路由：

```
app/
├── page.tsx          # /
├── about/
│   └── page.tsx      # /about
└── blog/
    └── [slug]/
        └── page.tsx  # /blog/:slug
```

## 数据获取

Next.js 提供了多种数据获取方式：

```typescript
// 静态生成
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
```

## 总结

Next.js 是一个功能强大且易于使用的框架，无论你是构建博客、电商网站还是企业应用，它都是一个很好的选择。

在下一篇文章中，我会深入讲解 Next.js 的服务端组件和客户端组件的区别。

---

*标签: #Next.js #React #Web开发*
