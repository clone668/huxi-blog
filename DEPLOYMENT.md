# 部署指南

本文档将指导你如何将博客部署到 Vercel。

## 方式一：通过 Vercel 网站部署（推荐）

这是最简单的方式，适合初学者。

### 步骤

1. **创建 GitHub 仓库**
   - 在 [GitHub](https://github.com) 创建一个新仓库
   - 将代码推送到仓库：
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/你的用户名/你的仓库名.git
     git push -u origin main
     ```

2. **连接到 Vercel**
   - 访问 [Vercel](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "Add New Project"
   - 选择你刚创建的 GitHub 仓库
   - Vercel 会自动检测到这是一个 Next.js 项目

3. **配置项目**
   - 项目名称：可以自定义
   - Framework Preset：应该自动选择 Next.js
   - Root Directory：保持默认 `./`
   - Build Command：保持默认 `npm run build`
   - Output Directory：保持默认 `.next`

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待几分钟，Vercel 会自动构建和部署你的博客
   - 部署完成后，你会得到一个类似 `https://你的项目名.vercel.app` 的网址

5. **自动部署**
   - 之后每次你向 GitHub 推送代码，Vercel 都会自动重新部署
   - 这意味着你只需要专注于写作，部署完全自动化

## 方式二：使用 Vercel CLI

这种方式更快，适合有经验的开发者。

### 步骤

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署**
   在项目目录中运行：
   ```bash
   vercel
   ```
   
   首次部署时会询问一些问题：
   - Set up and deploy? `Y`
   - Which scope? 选择你的账号
   - Link to existing project? `N`
   - Project name? 输入项目名或按回车使用默认
   - In which directory is your code located? 按回车使用当前目录
   
   等待部署完成，你会得到一个预览链接。

4. **部署到生产环境**
   ```bash
   vercel --prod
   ```

## 自定义域名

1. 在 Vercel 项目设置中选择 "Domains"
2. 添加你的自定义域名
3. 根据提示配置 DNS 记录
4. 等待 DNS 生效（通常需要几分钟到几小时）

## 环境变量

如果你的博客需要使用环境变量（例如 API 密钥）：

1. 在 Vercel 项目设置中选择 "Environment Variables"
2. 添加需要的环境变量
3. 重新部署项目

## 添加新文章

有两种方式添加新文章：

### 方式一：直接在 GitHub 上编辑

1. 在 GitHub 仓库中，进入 `posts` 目录
2. 点击 "Add file" > "Create new file"
3. 文件名格式：`your-post-name.md`
4. 编写文章内容（参考已有文章的格式）
5. 提交更改
6. Vercel 会自动重新部署

### 方式二：本地编辑后推送

1. 在本地 `posts` 目录创建新的 `.md` 文件
2. 编写文章
3. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "Add new post"
   git push
   ```
4. Vercel 会自动重新部署

## 文章格式

每篇文章都需要在文件顶部包含元数据（Front Matter）：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要，显示在列表页"
readTime: "5 分钟"
---

文章正文内容...
```

## 常见问题

### 部署失败怎么办？

1. 查看 Vercel 部署日志，找到错误信息
2. 确保所有依赖都在 `package.json` 中正确声明
3. 确保代码在本地可以正常运行（`npm run build` 成功）

### 如何更新博客样式？

1. 修改相应的组件文件（在 `app` 或 `components` 目录）
2. 提交并推送到 GitHub
3. Vercel 会自动重新部署

### 性能优化建议

- 图片使用 Next.js 的 `<Image>` 组件
- 合理使用静态生成和服务端渲染
- 启用 Vercel 的 Edge Network
- 使用 Vercel Analytics 监控性能

## 获取帮助

- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [Vercel 社区](https://github.com/vercel/next.js/discussions)

祝你部署顺利！🚀
