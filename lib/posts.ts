import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime?: string
  category?: string
  cover?: string
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  // 确保posts目录存在
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt || '',
        readTime: data.readTime || '5 分钟',
        category: data.category || '',
        cover: data.cover || '',
      }
    })

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // 将 Markdown 转换为 HTML
    const htmlContent = marked(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      content: htmlContent as string,
      readTime: data.readTime,
      category: data.category || '',
      cover: data.cover || '',
    }
  } catch (error) {
    return null
  }
}

// 获取所有分类及其文章数量
export function getAllCategories(): { name: string; count: number }[] {
  const posts = getAllPosts()
  const categoryMap = new Map<string, number>()
  
  posts.forEach(post => {
    if (post.category) {
      const count = categoryMap.get(post.category) || 0
      categoryMap.set(post.category, count + 1)
    }
  })
  
  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count) // 按文章数量排序
}

// 根据分类获取文章
export function getPostsByCategory(category: string): Omit<Post, 'content'>[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}
