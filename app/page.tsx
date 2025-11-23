import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { blogConfig } from '@/config'
import TopSearch from './components/TopSearch'

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const allPosts = getAllPosts()
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = blogConfig.pagination.postsPerPage
  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  
  // 计算当前页显示的文章
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)

  return (
    <div>
      {/* 搜索框 */}
      <div style={{ marginBottom: '30px' }}>
        <TopSearch />
      </div>
      
      {/* 文章列表 */}
      {posts.map((post) => (
        <article 
          key={post.slug} 
          style={{ 
            marginBottom: '20px', 
            paddingBottom: '20px', 
            borderBottom: '1px solid #ddd',
            display: 'flex',
            gap: '20px'
          }}
        >
          {/* 封面图 */}
          {post.cover && (
            <Link href={`/posts/${post.slug}`} style={{ flexShrink: 0 }}>
              <img 
                src={post.cover} 
                alt={post.title}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '1px solid #ddd'
                }}
              />
            </Link>
          )}
          
          {/* 文章信息 */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Link href={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'normal', margin: '0 0 5px 0' }}>
                {post.title}
              </h2>
            </Link>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
              <time>{post.date}</time>
              {post.category && (
                <>
                  {' · '}
                  <Link href={`/categories/${post.category}`} style={{ color: '#666' }}>
                    {post.category}
                  </Link>
                </>
              )}
            </div>
            <p style={{ margin: '10px 0 0 0' }}>{post.excerpt}</p>
          </div>
        </article>
      ))}

      {/* 分页导航 */}
      {totalPages > 1 && (
        <nav style={{ 
          marginTop: '8px', 
          paddingTop: '20px', 
          borderTop: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          fontSize: '14px'
        }}>
          {/* 第一页 */}
          {currentPage > 1 ? (
            <Link href="/" title="第一页">
              ◀
            </Link>
          ) : (
            <span style={{ color: '#ccc' }}>◀</span>
          )}
          
          {/* 上一页 */}
          {currentPage > 1 ? (
            <Link href={currentPage === 2 ? '/' : `/?page=${currentPage - 1}`}>
              ← 上一页
            </Link>
          ) : (
            <span style={{ color: '#ccc' }}>← 上一页</span>
          )}
          
          {/* 页码 */}
          <div style={{ color: '#666', minWidth: '60px', textAlign: 'center' }}>
            {currentPage} / {totalPages}
          </div>
          
          {/* 下一页 */}
          {currentPage < totalPages ? (
            <Link href={`/?page=${currentPage + 1}`}>
              下一页 →
            </Link>
          ) : (
            <span style={{ color: '#ccc' }}>下一页 →</span>
          )}
          
          {/* 最后一页 */}
          {currentPage < totalPages ? (
            <Link href={`/?page=${totalPages}`} title="最后一页">
              ▶
            </Link>
          ) : (
            <span style={{ color: '#ccc' }}>▶</span>
          )}
        </nav>
      )}
    </div>
  )
}
