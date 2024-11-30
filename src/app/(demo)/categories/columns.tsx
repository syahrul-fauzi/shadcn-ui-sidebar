import { ColumnDef } from "@tanstack/react-table"
import { Category } from "@/types"

// Definisikan kolom untuk kategori
export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',  // Properti pada data kategori
    header: 'Category Name',  // Nama header untuk kategori
    enableSorting: true,  // Mengaktifkan pengurutan kolom
  },
]
