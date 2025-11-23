import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          在这里，我分享关于技术、生活和思考的文章
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          最新文章
        </h2>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 border border-orange-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-gray-600"
            >
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime || '5 分钟'}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/posts/${post.slug}`}
                className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline font-medium"
              >
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
