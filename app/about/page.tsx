import { Github, Mail, Twitter } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          关于我
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            你好！我是一名热爱技术的开发者，在这个博客里，我会分享我的学习经历、项目经验以及对技术和生活的思考。
          </p>
          
          <p>
            我专注于 Web 开发，特别是现代前端技术栈。我相信通过分享和交流，我们可以共同成长。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            技术栈
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>前端：React, Next.js, TypeScript, Tailwind CSS</li>
            <li>后端：Node.js, Python</li>
            <li>工具：Git, VS Code, Docker</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            联系方式
          </h2>
          <div className="flex gap-4 mt-4">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
            <a 
              href="mailto:your@email.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
