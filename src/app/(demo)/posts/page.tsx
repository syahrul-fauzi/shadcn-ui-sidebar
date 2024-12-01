"use client"

import { ContentLayout } from "@/components/admin-panel/content-layout"
import { columns } from "./columns"
import { DataTable } from "@/components/demo/data-table"
import { Input } from "@/components/ui/input"
import { Post } from "@/types" // Tipe data Post

// Data statis contoh untuk Post
const data: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    author: 'Author 1',
    status: 'published',
    date: '2024-11-01',
    category: 'Tech',
    tags: ['react', 'javascript'],
    excerpt: 'This is an excerpt for post 1.',
    content: 'Full content for post 1.'
  },
  {
    id: '2',
    title: 'Post 2',
    author: 'Author 2',
    status: 'draft',
    date: '2024-11-02',
    category: 'Health',
    tags: ['wellness', 'fitness'],
    excerpt: 'This is an excerpt for post 2.',
    content: 'Full content for post 2.'
  },
  {
    id: '3',
    title: 'Post 3',
    author: 'Author 3',
    status: 'archived',
    date: '2024-11-03',
    category: 'Business',
    tags: ['startup', 'entrepreneur'],
    excerpt: 'This is an excerpt for post 3.',
    content: 'Full content for post 3.'
  }
]

export default function PostsPage() {
  return (
    <ContentLayout title="All Posts">
      {/* Filter Input */}
      <div className="w-full py-4">
        <Input placeholder="Search posts" className="max-w-sm" />
      </div>

      {/* Render DataTable with columns and data */}
      <DataTable columns={columns} data={data} />
    </ContentLayout>
  )
}
