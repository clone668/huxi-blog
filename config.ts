// 博客配置文件 - 在这里修改所有博客信息

export const blogConfig = {
  // 基本信息
  title: 'Huxi Blog',
  description: '分享技术、生活和思考',
  author: 'Huxi',
  
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
      name: 'HOME',
      url: '/',
    },
    {
      name: 'ABOUT',
      url: '/about',
    },
  ],
  
  // 页脚信息
  footer: {
    copyright: '© 2025',
  },
}

// 使用示例：
// import { blogConfig } from '@/config'
// blogConfig.title
// blogConfig.social
