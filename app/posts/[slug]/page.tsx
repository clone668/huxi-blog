import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <Link href="/" style={{ fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
        ← 返回
      </Link>

      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'normal', margin: '0 0 10px 0' }}>
          {post.title}
        </h1>
        <div style={{ fontSize: '14px', color: '#666' }}>
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
      </header>

      <div 
        style={{ lineHeight: '1.8' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
