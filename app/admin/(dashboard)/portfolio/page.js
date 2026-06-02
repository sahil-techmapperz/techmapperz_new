'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, ExternalLink, FolderOpen, Search, Filter } from 'lucide-react'

export default function PortfolioList() {
  const [portfolios, setPortfolios] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const fetchPortfolios = async () => {
    try {
      const res = await fetch('/api/admin/portfolio')
      const data = await res.json()
      if (data.success) {
        setPortfolios(data.data)
      }
    } catch (error) {
      console.error('Error fetching portfolios:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this portfolio?')) return

    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        fetchPortfolios()
      } else {
        alert('Failed to delete')
      }
    } catch (error) {
      console.error('Error deleting:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Portfolios</h1>
        <Link 
          href="/admin/portfolio/form"
          className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Portfolio
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search portfolios by name or slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors text-black"
          />
        </div>
        <div className="relative w-full sm:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full pl-10 pr-8 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors appearance-none text-black"
          >
            <option value="All">All Categories</option>
            {Array.from(new Set(portfolios.map(p => p.category))).filter(Boolean).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : portfolios.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <FolderOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No portfolios found</h3>
          <p className="text-gray-500 mt-1">Get started by creating a new portfolio.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Link</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Created</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {portfolios.filter(p => {
                  const matchesSearch = (p.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || (p.slug || '').toLowerCase().includes(searchQuery.toLowerCase())
                  const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter
                  return matchesSearch && matchesCategory
                }).length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500 text-sm">
                      No portfolios match your search or filter criteria.
                    </td>
                  </tr>
                ) : portfolios.filter(p => {
                  const matchesSearch = (p.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || (p.slug || '').toLowerCase().includes(searchQuery.toLowerCase())
                  const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter
                  return matchesSearch && matchesCategory
                }).map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 rounded-md object-cover border border-gray-200" 
                        />
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900 flex items-center text-sm"
                        >
                          View <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/admin/portfolio/form?id=${item._id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
