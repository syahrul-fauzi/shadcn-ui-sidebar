"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Category } from "@/types"  // Import type Category

// Dummy data for categories (replace with real data from backend or state management)
const categories: Category[] = [
  { id: '1', name: 'Technology' },
  { id: '2', name: 'Health' },
  { id: '3', name: 'Business' },
  { id: '4', name: 'Lifestyle' },
  { id: '5', name: 'Education' }
]

export default function CategoriesPage() {
  // State to handle search input for category filtering
  const [filter, setFilter] = useState<string>("")

  // State for managing visible columns
  const [visibleColumns, setVisibleColumns] = useState<string[]>(["name"])

  // Filter the data based on the search term
  const filteredCategories = useMemo(() => {
    return categories.filter(category => 
      category.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [filter])

  // Handle visibility toggling for columns
  const handleColumnToggle = (columnKey: string) => {
    setVisibleColumns(prev => 
      prev.includes(columnKey) 
        ? prev.filter(col => col !== columnKey) 
        : [...prev, columnKey]
    )
  }

  return (
    <ContentLayout title="Categories">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="flex space-x-2 py-2 text-sm">
        <Link href="/" className="text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
        <span>/</span>
        <Link href="/categories" className="text-blue-600">Categories</Link>
      </nav>

      {/* Filter and Columns Control */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter categories by name"
          className="max-w-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}  // Updating filter state
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {["name"].map((column) => (
              <DropdownMenuCheckboxItem
                key={column}
                checked={visibleColumns.includes(column)}
                onClick={() => handleColumnToggle(column)}
                className="capitalize"
              >
                {column}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Categories Table */}
      <div className="rounded-md border">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {visibleColumns.includes("name") && <th className="px-4 py-2">Category Name</th>}
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map(category => (
              <tr key={category.id}>
                {visibleColumns.includes("name") && <td className="px-4 py-2">{category.name}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentLayout>
  )
}
