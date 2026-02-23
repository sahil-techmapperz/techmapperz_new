import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown
} from 'lucide-react'

export default function DataTable({ 
  columns, 
  data = [],
  onEdit,
  onDelete,
  actions = [],
  loading = false,
  emptyMessage = "No data available",
  defaultSort = null // { key: 'columnKey', direction: 'asc' | 'desc' }
}) {
  const [sortConfig, setSortConfig] = useState(
    defaultSort || { key: null, direction: 'asc' }
  )
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Ensure data is always an array and filter out any undefined/null items
  const safeData = Array.isArray(data) ? data.filter(item => item != null) : []

  // Helper function to parse date strings in DD-MM-YYYY format
  const parseDate = (dateString) => {
    if (!dateString) return null
    // Handle format: "1-8-2025" or "01-08-2025" (DD-MM-YYYY)
    const parts = dateString.split('-')
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1 // Month is 0-indexed
      const year = parseInt(parts[2], 10)
      return new Date(year, month, day)
    }
    // Try standard date parsing as fallback
    return new Date(dateString)
  }

  // Sorting logic
  const sortedData = [...safeData].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    let aValue = a[sortConfig.key]
    let bValue = b[sortConfig.key]
    
    // Handle date sorting
    if (sortConfig.key === 'Date' || sortConfig.key.toLowerCase().includes('date')) {
      const aDate = parseDate(aValue)
      const bDate = parseDate(bValue)
      
      if (!aDate && !bDate) return 0
      if (!aDate) return 1
      if (!bDate) return -1
      
      if (aDate < bDate) return sortConfig.direction === 'asc' ? -1 : 1
      if (aDate > bDate) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    }
    
    // Handle regular string/number sorting
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  if (loading) {
    return (
      <div className="w-full">
        <div className="rounded-lg border bg-white p-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (safeData.length === 0) {
    return (
      <div className="w-full">
        <div className="rounded-lg border bg-white p-8 text-center">
          <p className="text-black">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black"
                >
                  <button
                    className="flex items-center gap-1 text-black hover:text-gray-700"
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                    <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
              ))}
              {(onEdit || onDelete || actions.length > 0) && (
                <th className="px-6 py-3 text-right text-black">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => {
              if (!row) return null; // Skip undefined/null rows
              
              return (
                <tr
                  key={row._id || row.id || index}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 text-sm text-black"
                    >
                      {column.render ? column.render(row[column.key], row) : (row[column.key] || '')}
                    </td>
                  ))}
                  {(onEdit || onDelete || actions.length > 0) && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {actions.map((action, idx) => (
                        action.show ? action.show(row) && (
                          <button
                            key={idx}
                            onClick={() => action.onClick(row)}
                            className="text-black hover:text-gray-700 mr-4"
                          >
                            {action.icon && <action.icon className="h-4 w-4 inline-block mr-1" />}
                            {action.label}
                          </button>
                        ) : (
                          <button
                            key={idx}
                            onClick={() => action.onClick(row)}
                            className="text-black hover:text-gray-700 mr-4"
                          >
                            {action.icon && <action.icon className="h-4 w-4 inline-block mr-1" />}
                            {action.label}
                          </button>
                        )
                      ))}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="text-black hover:text-gray-700 mr-4"
                        >
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className="text-black hover:text-gray-700"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronsLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronsRight className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm text-black">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, safeData.length)} of {safeData.length} results
        </div>
      </div>
    </div>
  )
} 
