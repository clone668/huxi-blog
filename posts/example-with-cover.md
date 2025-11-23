---
title: "带封面图的文章示例"
date: "2024-11-24"
excerpt: "这是一篇展示如何添加封面图的示例文章"
category: "编程"
cover: "/logo.png"
---

# 带封面图的文章示例

这篇文章展示了如何为文章添加封面图。

## 如何添加封面图

在文章的 frontmatter 中添加 `cover` 字段：

```markdown
---
title: "文章标题"
date: "2024-11-24"
excerpt: "文章摘要"
category: "技术"
cover: "/images/cover.jpg"
---
```

## 封面图路径

封面图路径支持：

1. **本地图片**：`/images/cover.jpg`（图片放在 `public/images/` 目录）
2. **外部链接**：`https://example.com/image.jpg`

## 建议尺寸

- **推荐尺寸**：1200x630px 或正方形
- **最小尺寸**：600x600px
- **文件大小**：< 500KB

## 效果

封面图会显示在：
- 首页文章列表
- 分类页面
- 搜索结果

如果不添加 `cover` 字段，文章列表会自动采用纯文字布局。
