import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
          <Link href={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'normal', margin: '0 0 5px 0' }}>
              {post.title}
            </h2>
          </Link>
          <time style={{ fontSize: '14px', color: '#666' }}>{post.date}</time>
          <p style={{ margin: '10px 0 0 0' }}>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
