import Link from 'next/link'
import { getAllCategories } from '@/lib/posts'
import TopSearch from '@/app/components/TopSearch'

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: 'normal', marginBottom: '20px' }}>
        分类
      </h1>

      {/* 搜索框 */}
      <div style={{ marginBottom: '30px' }}>
        <TopSearch />
      </div>

      {categories.length === 0 ? (
        <p style={{ color: '#666' }}>暂无分类</p>
      ) : (
        <div>
          {categories.map((category) => (
            <div
              key={category.name}
              style={{
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px solid #ddd',
              }}
            >
              <Link
                href={`/categories/${category.name}`}
                style={{ textDecoration: 'none' }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: 'normal', margin: '0 0 5px 0' }}>
                  {category.name}
                </h2>
              </Link>
              <span style={{ fontSize: '14px', color: '#666' }}>
                {category.count} 篇文章
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
