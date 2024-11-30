import { ColumnDef } from "@tanstack/react-table"
import { Tag } from "@/types"

// Definisikan kolom untuk tag
export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: 'name',  // Properti pada data tag
    header: 'Tag Name',  // Nama header untuk tag
    enableSorting: true,  // Mengaktifkan pengurutan kolom
  },
]
