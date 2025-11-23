import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import TopSearch from '@/app/components/TopSearch'

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const allPosts = getAllPosts()
  const query = searchParams.q || ''
  
  // 搜索逻辑：匹配标题、摘要、分类
  const results = query
    ? allPosts.filter((post) => {
        const searchQuery = query.toLowerCase()
        const matchTitle = post.title.toLowerCase().includes(searchQuery)
        const matchExcerpt = post.excerpt.toLowerCase().includes(searchQuery)
        const matchCategory = post.category?.toLowerCase().includes(searchQuery)
        return matchTitle || matchExcerpt || matchCategory
      })
    : []

  return (
    <div>
      {query && (
        <Link href="/" style={{ fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
          ← 返回首页
        </Link>
      )}
      
      <h1 style={{ fontSize: '28px', fontWeight: 'normal', marginBottom: '20px' }}>
        搜索结果
      </h1>
      
      {/* 搜索框 */}
      <div style={{ marginBottom: '20px' }}>
        <TopSearch />
      </div>
      
      {query && (
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>
          关键词：<strong>{query}</strong>
        </p>
      )}

      {/* 搜索结果 */}
      {query && (
        <div style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
          {results.length > 0 ? `找到 ${results.length} 篇文章` : '没有找到相关文章'}
        </div>
      )}

      {/* 结果列表 */}
      <div>
        {results.map((post) => (
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
      </div>
    </div>
  )
}
