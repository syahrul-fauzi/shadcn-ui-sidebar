// src/app/(demo)/posts/page.ts

"use client"

import Link from "next/link"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { columns } from "./columns"  // Pastikan columns didefinisikan dengan benar di file columns.ts
import { DataTable } from "@/components/demo/data-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Post } from "@/types" // Mengimpor tipe Post

// Contoh data yang disesuaikan dengan tipe Post
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
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="flex space-x-2 py-2 text-sm">
        <Link href="/" className="text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
        <span>/</span>
        <Link href="/posts" className="text-blue-600">Posts</Link>
      </nav>

      {/* Filter Bar */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter posts by title"
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {columns.map((column) => (
              // Pastikan kolom memiliki id atau identifier yang unik
              <DropdownMenuCheckboxItem key={column.accessorKey} className="capitalize">
                {column.header}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Data Table */}
      <div className="rounded-md border">
        <DataTable columns={columns} data={data} />
      </div>
    </ContentLayout>
  )
}
