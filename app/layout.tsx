import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Huxi Blog',
  description: '分享技术、生活和思考',
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
                <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: '0 0 30px 0' }}>
                  Huxi Blog
                </h1>
              </Link>
              
              <nav style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <Link href="/">HOME</Link>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <Link href="/about">ABOUT</Link>
                </div>
              </nav>

              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                <p style={{ margin: '0 0 10px 0' }}>
                  分享技术、生活和思考
                </p>
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
                <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: 0 }}>Huxi Blog</h1>
              </Link>
              <nav style={{ marginTop: '10px' }}>
                <Link href="/">HOME</Link>
                {' / '}
                <Link href="/about">ABOUT</Link>
              </nav>
            </header>

            <main>
              {children}
            </main>

            <footer style={{ marginTop: '80px', fontSize: '14px' }}>
              <p>© 2025</p>
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
