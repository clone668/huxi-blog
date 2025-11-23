# 我的博客

一个使用 Next.js 构建的现代化博客系统。

## 功能特性

- 📝 支持 Markdown 文章
- 🎨 现代化的 UI 设计
- 📱 响应式布局
- ⚡ 快速的页面加载速度
- 🔍 文章列表和详情页

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 上导入你的仓库
3. Vercel 会自动检测 Next.js 项目并进行部署

或者使用 Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 添加新文章

在 `posts` 目录下创建新的 `.md` 文件，格式如下：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要"
---

文章内容...
```

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Markdown
