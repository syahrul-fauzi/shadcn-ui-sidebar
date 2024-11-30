// src/app/(demo)/posts/columns.ts

import { ColumnDef } from "@tanstack/react-table"
import { Post } from "@/types"

// Mendefinisikan kolom sesuai dengan tipe Post
export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'id',
    header: 'ID',  // Pastikan header adalah string atau elemen JSX
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'author',
    header: 'Author',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
    cell: ({ getValue }) => {
      const value = getValue()
      if (Array.isArray(value)) {
        return value.join(', ')  // Jika array, gabungkan menjadi string
      }
      return ''
    },
  },
  {
    accessorKey: 'excerpt',
    header: 'Excerpt',
  },
]
