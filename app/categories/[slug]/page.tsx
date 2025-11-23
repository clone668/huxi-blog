import Link from 'next/link'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import { notFound } from 'next/navigation'
import TopSearch from '@/app/components/TopSearch'

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.name,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${decodeURIComponent(params.slug)} - 分类`,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = decodeURIComponent(params.slug)
  const posts = getPostsByCategory(categoryName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/categories" style={{ fontSize: '14px' }}>
          ← 返回分类列表
        </Link>
      </div>

      <h1 style={{ fontSize: '28px', fontWeight: 'normal', marginBottom: '20px' }}>
        {categoryName}
      </h1>

      {/* 搜索框 */}
      <div style={{ marginBottom: '30px' }}>
        <TopSearch />
      </div>

      <div>
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
              <time style={{ fontSize: '14px', color: '#666' }}>{post.date}</time>
              <p style={{ margin: '10px 0 0 0' }}>{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
