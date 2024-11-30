"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Tag } from "@/types"  // Import type Tag

// Dummy data for tags (replace with real data from backend or state management)
const tags: Tag[] = [
  { id: '1', name: 'React' },
  { id: '2', name: 'JavaScript' },
  { id: '3', name: 'Health' },
  { id: '4', name: 'Business' },
  { id: '5', name: 'Fitness' }
]

export default function TagsPage() {
  // State to handle search input for tag filtering
  const [filter, setFilter] = useState<string>("")

  // State for managing visible columns
  const [visibleColumns, setVisibleColumns] = useState<string[]>(["name"])

  // Filter the data based on the search term
  const filteredTags = useMemo(() => {
    return tags.filter(tag => 
      tag.name.toLowerCase().includes(filter.toLowerCase())
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
    <ContentLayout title="Tags">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="flex space-x-2 py-2 text-sm">
        <Link href="/" className="text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
        <span>/</span>
        <Link href="/tags" className="text-blue-600">Tags</Link>
      </nav>

      {/* Filter and Columns Control */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter tags by name"
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

      {/* Tags Table */}
      <div className="rounded-md border">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {visibleColumns.includes("name") && <th className="px-4 py-2">Tag Name</th>}
            </tr>
          </thead>
          <tbody>
            {filteredTags.map(tag => (
              <tr key={tag.id}>
                {visibleColumns.includes("name") && <td className="px-4 py-2">{tag.name}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentLayout>
  )
}
