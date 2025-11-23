// 博客配置文件 - 在这里修改所有博客信息

export const blogConfig = {
  // 基本信息
  title: 'Huxi Blog',
  description: '分享技术、生活和思考',
  author: 'Huxi',
  logo: '/logo.png', // 可以是 emoji 或图片路径如 '/logo.png'
  
  // 社交链接
  social: [
    {
      name: 'AI部署器',
      url: 'https://clone-ai.cn',
      type: 'external' // external = 新窗口打开
    },
    {
      name: '鲁班尺',
      url: '/ruler/',
      type: 'external'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/clone668',
      type: 'external' // external = 新窗口打开
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/huxi53441000',
      type: 'external'
    },
    {
      name: 'Email',
      url: 'mailto:hi@huxi.app',
      type: 'email' // email = 邮件链接
    },
  ],
  
  // 导航菜单
  navigation: [
    {
      name: '首页',
      url: '/',
    },
    {
      name: '分类',
      url: '/categories',
    },
    {
      name: '关于',
      url: '/about',
    },
  ],
  
  // 页脚信息
  footer: {
    copyright: 'Copyright © 2025 Huxi',
  },
  
  // 分页设置
  pagination: {
    postsPerPage: 8, // 每页显示文章数量
  },
  
  // 分类配置（可选，文章可以使用任意分类，这里只是参考）
  categories: [
    { name: 'AI', slug: 'ai' },
    { name: '编程', slug: 'coding' },
    { name: '网络', slug: 'network' },
    { name: '建筑', slug: 'architecture' },
    { name: '金融', slug: 'finance' },
    { name: '思考', slug: 'thinking' },
  ],
}

// 使用示例：
// import { blogConfig } from '@/config'
// blogConfig.title
// blogConfig.social
