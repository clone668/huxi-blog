import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import { blogConfig } from '@/config'

export const metadata: Metadata = {
  title: blogConfig.title,
  description: blogConfig.description,
  openGraph: {
    title: blogConfig.title,
    description: blogConfig.description,
    url: 'https://hi.huxi.app',
    siteName: blogConfig.title,
    images: [
      {
        url: 'https://hi.huxi.app/logo.png', // 分享图片的完整URL
        width: 512,
        height: 512,
        alt: blogConfig.title,
      }
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogConfig.title,
    description: blogConfig.description,
    images: ['https://hi.huxi.app/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div style={{ 
          display: 'flex', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '40px 20px',
          gap: '60px'
        }}>
          {/* 左侧栏 - 桌面端显示 */}
          <aside style={{ 
            width: '200px',
            flexShrink: 0,
            display: 'none'
          }} className="sidebar">
            <div style={{ position: 'sticky', top: '40px' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                {/* Logo */}
                {blogConfig.logo && (
                  <div style={{ fontSize: '64px', marginBottom: '4px' }}>
                    {blogConfig.logo.startsWith('/') ? (
                      <img src={blogConfig.logo} alt="logo" style={{ width: '64px', height: '64px' }} />
                    ) : (
                      blogConfig.logo
                    )}
                  </div>
                )}
                
                <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: '0 0 4px 0' }}>
                  {blogConfig.title}
                </h1>
              </Link>
              
              {/* 副标题 */}
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 30px 0', lineHeight: '1.6' }}>
                {blogConfig.description}
              </p>
              
              <nav style={{ marginBottom: '40px' }}>
                {blogConfig.navigation.map((item) => (
                  <div key={item.name} style={{ marginBottom: '10px' }}>
                    <Link href={item.url}>{item.name}</Link>
                  </div>
                ))}
              </nav>

              {/* 自定义链接区域 */}
              <div style={{ marginBottom: '30px', fontSize: '14px' }}>
                {blogConfig.social.map((item) => (
                  <div key={item.name} style={{ marginBottom: '8px' }}>
                    <a 
                      href={item.url} 
                      target={item.type === 'external' ? '_blank' : undefined}
                      rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* 主内容区域 */}
          <div style={{ flex: 1, minWidth: 0, maxWidth: '800px' }}>
            {/* 移动端顶部导航 */}
            <header style={{ 
              marginBottom: '40px', 
              paddingBottom: '10px', 
              borderBottom: '1px solid #000',
              display: 'block'
            }} className="mobile-header">
              <Link href="/" style={{ textDecoration: 'none' }}>
                {/* Logo */}
                {blogConfig.logo && (
                  <div style={{ fontSize: '64px', marginBottom: '4px' }}>
                    {blogConfig.logo.startsWith('/') ? (
                      <img src={blogConfig.logo} alt="logo" style={{ width: '64px', height: '64px' }} />
                    ) : (
                      blogConfig.logo
                    )}
                  </div>
                )}
                
                <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: '0 0 4px 0' }}>
                  {blogConfig.title}
                </h1>
              </Link>
              
              {/* 副标题 */}
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 10px 0', lineHeight: '1.6' }}>
                {blogConfig.description}
              </p>
              
              <nav style={{ fontSize: '14px' }}>
                {blogConfig.navigation.map((item, index) => (
                  <span key={item.name}>
                    {index > 0 && ' / '}
                    <Link href={item.url}>{item.name}</Link>
                  </span>
                ))}
              </nav>
              {/* 移动端链接 */}
              <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                {blogConfig.social.map((item, index) => (
                  <span key={item.name}>
                    {index > 0 && ' / '}
                    <a 
                      href={item.url}
                      target={item.type === 'external' ? '_blank' : undefined}
                      rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </a>
                  </span>
                ))}
              </div>
            </header>

            <main>
              {children}
            </main>

            <footer style={{ marginTop: '8px', fontSize: '14px', textAlign: 'center' }}>
              <p style={{ margin: 0 }}>{blogConfig.footer.copyright}</p>
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
