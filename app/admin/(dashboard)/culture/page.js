'use client'

import { useState, useEffect } from 'react'
import { cultureApi } from '@/app/admin/_utils/api'
import CultureDataTable from '@/app/admin/_components/CultureDataTable'
import Modal from '@/app/admin/_components/Modal'
import Alert from '@/app/admin/_components/Alert'
import Form from '@/app/admin/_components/Form'
import EventImageUpload from '@/app/admin/_components/EventImageUpload'
import { Plus, Edit, Trash2, Heart, FileText, Hash } from 'lucide-react'

export default function CulturePage() {
  const [cultureItems, setCultureItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [searchTerm, setSearchTerm] = useState('')
  const [formLoading, setFormLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    order: 1
  })

  useEffect(() => {
    fetchCultureItems()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [cultureItems, searchTerm])

  const fetchCultureItems = async () => {
    try {
      setLoading(true)
      const response = await cultureApi.getAll()
      const cultureData = response?.data || []
      // Ensure we always have an array
      setCultureItems(Array.isArray(cultureData) ? cultureData : [])
    } catch (error) {
      console.error('Error fetching culture items:', error)
      showAlertMessage('Failed to fetch culture items', 'error')
      setCultureItems([]) // Ensure cultureItems is always an array
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    // Ensure cultureItems is always an array
    const cultureArray = Array.isArray(cultureItems) ? cultureItems : []
    let filtered = [...cultureArray]

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort by order
    filtered.sort((a, b) => (a?.order || 0) - (b?.order || 0))

    setFilteredItems(filtered)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      order: 1
    })
  }

  const handleCreate = async (data) => {
    const submitData = data || formData
    console.log('Culture handleCreate - submitData:', submitData)
    
    if (!submitData.title || !submitData.description || !submitData.icon) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setFormLoading(true)
      console.log('Culture handleCreate - About to call cultureApi.create with:', submitData)
      const result = await cultureApi.create(submitData)
      console.log('Culture handleCreate - Success result:', result)
      showAlertMessage('Culture value created successfully!', 'success')
      fetchCultureItems()
      setShowCreateModal(false)
      resetForm()
    } catch (error) {
      console.error('Error creating culture item:', error)
      console.error('Error details:', error.response?.data)
      showAlertMessage(`Failed to create culture value: ${error.response?.data?.message || error.message}`, 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleEdit = async (data) => {
    const submitData = data || formData
    if (!submitData.title || !submitData.description || !submitData.icon) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setFormLoading(true)
      await cultureApi.update(currentItem._id, submitData)
      showAlertMessage('Culture value updated successfully!', 'success')
      fetchCultureItems()
      setShowEditModal(false)
      setCurrentItem(null)
      resetForm()
    } catch (error) {
      console.error('Error updating culture item:', error)
      showAlertMessage('Failed to update culture value', 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await cultureApi.delete(currentItem._id)
      showAlertMessage('Culture value deleted successfully!', 'success')
      fetchCultureItems()
      setShowDeleteModal(false)
      setCurrentItem(null)
    } catch (error) {
      console.error('Error deleting culture item:', error)
      showAlertMessage('Failed to delete culture value', 'error')
    }
  }

  const handleEditClick = (item) => {
    if (!item?._id) {
      showAlertMessage('Cannot edit: Invalid item data', 'error')
      return
    }
    setCurrentItem(item)
    setFormData({
      title: item.title || '',
      description: item.description || '',
      icon: item.icon || '',
      order: item.order || 1
    })
    setShowEditModal(true)
  }

  const handleDeleteClick = (item) => {
    if (!item?._id) {
      showAlertMessage('Cannot delete: Invalid item data', 'error')
      return
    }
    setCurrentItem(item)
    setShowDeleteModal(true)
  }

  const showAlertMessage = (message, type = 'success') => {
    setAlertMessage(message)
    setAlertType(type)
    setShowAlert(true)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const formFields = [
    {
      name: 'title',
      label: 'Culture Value Title',
      type: 'text',
      required: true,
      placeholder: 'e.g., Innovation, Collaboration, Excellence',
      icon: FileText,
      value: formData.title,
      onChange: (value) => handleInputChange('title', value)
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      placeholder: 'Describe what this culture value means to your company',
      rows: 3,
      value: formData.description,
      onChange: (value) => handleInputChange('description', value)
    },
    {
      name: 'icon',
      label: 'Icon (Emoji)',
      type: 'text',
      required: true,
      placeholder: '🚀 💡 🤝 ⭐ 🎯 💎',
      value: formData.icon,
      onChange: (value) => handleInputChange('icon', value)
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      required: true,
      min: 1,
      placeholder: '1',
      icon: Hash,
      value: formData.order,
      onChange: (value) => handleInputChange('order', parseInt(value) || 1)
    }
  ]

  const columns = [
    {
      key: 'order',
      label: 'Order',
      render: (item) => (
        <span className="font-medium text-gray-900">#{item.order || 1}</span>
      )
    },
    {
      key: 'icon',
      label: 'Icon',
      render: (item) => (
        <span className="text-2xl">{item.icon}</span>
      )
    },
    {
      key: 'title',
      label: 'Title',
      render: (item) => (
        <span className="font-medium text-gray-900">{item.title}</span>
      )
    },
    {
      key: 'description',
      label: 'Description',
      render: (item) => (
        <p className="text-gray-700 line-clamp-2 max-w-md">{item.description}</p>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (item) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditClick(item)}
            className="p-1 text-blue-600 hover:text-blue-800"
            disabled={!item?._id}
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteClick(item)}
            className="p-1 text-red-600 hover:text-red-800"
            disabled={!item?._id}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Culture Management</h1>
          <p className="text-gray-600">Define and manage your company's core values and culture</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setShowCreateModal(true)
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Culture Value</span>
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-pink-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Values</h3>
              <p className="text-2xl font-bold text-gray-900">{Array.isArray(cultureItems) ? cultureItems.length : 0}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Avg. Length</h3>
              <p className="text-2xl font-bold text-gray-900">
                {Array.isArray(cultureItems) && cultureItems.length > 0 
                  ? Math.round(cultureItems.reduce((sum, item) => sum + (item?.description?.length || 0), 0) / cultureItems.length)
                  : 0
                } chars
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Hash className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Latest Order</h3>
              <p className="text-2xl font-bold text-gray-900">
                {Array.isArray(cultureItems) && cultureItems.length > 0 
                  ? Math.max(...cultureItems.map(item => item?.order || 1))
                  : 0
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search culture values..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Culture Values Preview */}
      {filteredItems.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Culture Values Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => {
              if (!item) return null; // Skip invalid items
              return (
                <div key={item._id || item.id || index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.description}</p>
                      <span className="inline-block mt-2 text-xs text-gray-500">Order: {item.order}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Culture Table */}
      <div className="bg-white rounded-lg shadow">
        <CultureDataTable
          data={filteredItems}
          columns={columns}
          loading={loading}
          emptyMessage="No culture values found"
        />
      </div>

      {/* Create Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Add New Culture Value"
      >
        <div className="p-6">
          <Form
            fields={formFields}
            onSubmit={handleCreate}
            submitLabel="Create Culture Value"
          />
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Culture Value"
      >
        <div className="p-6">
          <Form
            fields={formFields}
            onSubmit={handleEdit}
            submitLabel="Update Culture Value"
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Culture Value"
      >
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete "{currentItem?.title}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Alert */}
      {showAlert && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  )
} 
