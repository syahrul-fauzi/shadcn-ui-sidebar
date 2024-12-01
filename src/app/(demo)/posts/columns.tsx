import { ColumnDef } from "@tanstack/react-table"
import { Post } from "@/types"

// Definisi kolom untuk data Post
export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: true,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    enableSorting: true,
  },
  {
    accessorKey: 'author',
    header: 'Author',
    enableSorting: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableSorting: true,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: (info) => {
      // Mengambil nilai date dan memastikan bahwa itu adalah string yang bisa diubah menjadi Date
      const dateValue = info.getValue()
      if (typeof dateValue === "string" || typeof dateValue === "number") {
        return new Date(dateValue).toLocaleDateString()  // Menformat tanggal dengan locale yang sesuai
      }
      return "Invalid Date"  // Jika bukan string atau number, tampilkan pesan default
    },
    enableSorting: true,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    enableSorting: true,
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
    cell: ({ getValue }) => {
      const value = getValue()
      return Array.isArray(value) ? value.join(', ') : ''
    },
  },
  {
    accessorKey: 'excerpt',
    header: 'Excerpt',
  }
]
