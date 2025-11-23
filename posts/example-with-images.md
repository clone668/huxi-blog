---
title: "Markdown 图片使用示例"
date: "2025-11-25"
excerpt: "演示如何在文章中添加和使用图片"
category: "编程"
---

# Markdown 图片使用示例

本文演示如何在博客文章中添加图片。

## 基础图片

最简单的图片插入方式：

![示例图片](/logo.png)

## 带说明的图片

你可以在图片下方添加说明文字：

![Huxi Blog Logo](/logo.png)

*图：博客 Logo*

## 居中显示图片

使用 HTML 标签可以更灵活地控制样式：

<div style="text-align: center; margin: 30px 0;">
  <img src="/logo.png" alt="居中的图片" style="width: 200px;">
  <p style="color: #666; font-size: 14px; margin-top: 10px;">这是一张居中显示的图片</p>
</div>

## 并排显示图片

<div style="display: flex; gap: 20px; justify-content: center; margin: 30px 0;">
  <img src="/logo.png" alt="图1" style="width: 150px;">
  <img src="/logo.png" alt="图2" style="width: 150px;">
</div>

## 响应式图片

这张图片会自动适应屏幕宽度：

<img src="/logo.png" alt="响应式图片" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;">

## 外部图片

也可以使用外部图片链接：

![外部图片](https://via.placeholder.com/600x400?text=External+Image)

## 小贴士

1. **优化图片大小**：上传前先压缩图片
2. **使用有意义的文件名**：`nas-setup-guide.jpg` 而不是 `IMG_001.jpg`
3. **添加 alt 文字**：帮助 SEO 和无障碍访问
4. **考虑加载速度**：避免使用过大的图片

---

就是这么简单！开始在你的文章中使用图片吧。
