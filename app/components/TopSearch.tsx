'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TopSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form 
      onSubmit={handleSearch}
      style={{ 
        display: 'flex', 
        gap: '8px',
      }}
    >
      <input
        type="text"
        placeholder="搜索..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          padding: '8px 12px',
          fontSize: '14px',
          border: '1px solid #ddd',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#000'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ddd'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 20px',
          fontSize: '14px',
          border: '1px solid #000',
          background: '#fff',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#000'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#fff'
          e.currentTarget.style.color = '#000'
        }}
      >
        搜索
      </button>
    </form>
  )
}
