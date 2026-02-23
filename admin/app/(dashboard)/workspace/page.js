'use client'

import { useState, useEffect } from 'react'
import { workspaceApi } from '@/utils/api'
import Modal from '@/components/Modal'
import Alert from '@/components/Alert'
import Form from '@/components/Form'
import EventImageUpload from '@/components/EventImageUpload'
import { Plus, Edit, Trash2, Image as ImageIcon, Monitor, Coffee, Users, Home } from 'lucide-react'

export default function WorkspacePage() {
  const [workspaceImages, setWorkspaceImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [filterType, setFilterType] = useState('all')
  const [formLoading, setFormLoading] = useState(false)

  const [formData, setFormData] = useState({
    src: '',
    alt: '',
    type: 'square',
    width: 300,
    height: 300
  })

  const imageTypes = [
    { value: 'featured', label: 'Featured (600x600)', icon: Home, width: 600, height: 600 },
    { value: 'tall', label: 'Tall (300x600)', icon: Users, width: 300, height: 600 },
    { value: 'wide', label: 'Wide (900x300)', icon: Monitor, width: 900, height: 300 },
    { value: 'wide2', label: 'Wide2 (600x300)', icon: Coffee, width: 600, height: 300 },
    { value: 'square', label: 'Square (300x300)', icon: ImageIcon, width: 300, height: 300 }
  ]

  useEffect(() => {
    fetchWorkspaceImages()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [workspaceImages, filterType])

  const fetchWorkspaceImages = async () => {
    try {
      setLoading(true)
      const response = await workspaceApi.getAll()
      const workspaceData = response?.data || []
      // Ensure we always have an array
      setWorkspaceImages(Array.isArray(workspaceData) ? workspaceData : [])
    } catch (error) {
      console.error('Error fetching workspace images:', error)
      showAlertMessage('Failed to fetch workspace images', 'error')
      setWorkspaceImages([]) // Ensure workspaceImages is always an array
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    // Ensure workspaceImages is always an array
    const imagesArray = Array.isArray(workspaceImages) ? workspaceImages : []
    let filtered = [...imagesArray]

    if (filterType !== 'all') {
      filtered = filtered.filter(image => image?.type === filterType)
    }

    setFilteredImages(filtered)
  }

  const resetForm = () => {
    setFormData({
      src: '',
      alt: '',
      type: 'square',
      width: 300,
      height: 300
    })
  }

  const handleTypeChange = (type) => {
    const selectedType = imageTypes.find(t => t.value === type)
    if (selectedType) {
      setFormData(prev => ({
        ...prev,
        type,
        width: selectedType.width,
        height: selectedType.height
      }))
    }
  }

  const handleCreate = async (data) => {
    const submitData = data || formData
    console.log('Workspace handleCreate - submitData:', submitData)
    
    if (!submitData.src || !submitData.alt || !submitData.type) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setFormLoading(true)
      console.log('Workspace handleCreate - About to call workspaceApi.create with:', submitData)
      const result = await workspaceApi.create(submitData)
      console.log('Workspace handleCreate - Success result:', result)
      showAlertMessage('Workspace image added successfully!', 'success')
      fetchWorkspaceImages()
      setShowCreateModal(false)
      resetForm()
    } catch (error) {
      console.error('Error creating workspace image:', error)
      console.error('Error details:', error.response?.data)
      showAlertMessage(`Failed to add workspace image: ${error.response?.data?.message || error.message}`, 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleEdit = async (data) => {
    const submitData = data || formData
    if (!submitData.src || !submitData.alt || !submitData.type) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setFormLoading(true)
      await workspaceApi.update(currentImage._id, submitData)
      showAlertMessage('Workspace image updated successfully!', 'success')
      fetchWorkspaceImages()
      setShowEditModal(false)
      setCurrentImage(null)
      resetForm()
    } catch (error) {
      console.error('Error updating workspace image:', error)
      
      // Show more specific error message
      const errorMessage = error.message || 'Failed to update workspace image'
      showAlertMessage(errorMessage, 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await workspaceApi.delete(currentImage._id)
      showAlertMessage('Workspace image deleted successfully!', 'success')
      fetchWorkspaceImages()
      setShowDeleteModal(false)
      setCurrentImage(null)
    } catch (error) {
      console.error('Error deleting workspace image:', error)
      
      // Show more specific error message
      const errorMessage = error.message || 'Failed to delete workspace image'
      showAlertMessage(errorMessage, 'error')
    }
  }

  const handleEditClick = (image) => {
    if (!image?._id) {
      showAlertMessage('Cannot edit: Invalid image data', 'error')
      return
    }
    setCurrentImage(image)
    setFormData({
      src: image.src || '',
      alt: image.alt || '',
      type: image.type || 'office',
      width: image.width || 800,
      height: image.height || 600
    })
    setShowEditModal(true)
  }

  const handleDeleteClick = (image) => {
    if (!image?._id) {
      showAlertMessage('Cannot delete: Invalid image data', 'error')
      return
    }
    setCurrentImage(image)
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

  const getTypeIcon = (type) => {
    const typeData = imageTypes.find(t => t.value === type)
    return typeData ? typeData.icon : ImageIcon
  }

  const getTypeLabel = (type) => {
    const typeData = imageTypes.find(t => t.value === type)
    return typeData ? typeData.label : 'Unknown'
  }

  const formFields = [
    {
      name: 'src',
      label: 'Workspace Image',
      type: 'custom',
      required: true,
      component: EventImageUpload,
      props: {
        type: 'workspace',
        required: true
      },
      value: formData.src,
      onChange: (value) => handleInputChange('src', value)
    },
    {
      name: 'alt',
      label: 'Alt Text (Description)',
      type: 'text',
      required: true,
      placeholder: 'Describe the workspace image',
      value: formData.alt,
      onChange: (value) => handleInputChange('alt', value)
    },
    {
      name: 'type',
      label: 'Image Type',
      type: 'select',
      required: true,
      options: imageTypes.map(type => ({ value: type.value, label: type.label })),
      value: formData.type,
      onChange: (value) => handleTypeChange(value)
    },
    {
      name: 'width',
      label: 'Width (pixels)',
      type: 'number',
      required: true,
      min: 100,
      placeholder: '800',
      value: formData.width,
      onChange: (value) => handleInputChange('width', parseInt(value) || 800)
    },
    {
      name: 'height',
      label: 'Height (pixels)',
      type: 'number',
      required: true,
      min: 100,
      placeholder: '600',
      value: formData.height,
      onChange: (value) => handleInputChange('height', parseInt(value) || 600)
    }
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workspace Gallery</h1>
          <p className="text-gray-600">Manage office photos and workspace images</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setShowCreateModal(true)
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Image</span>
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <ImageIcon className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Images</h3>
              <p className="text-2xl font-bold text-gray-900">{Array.isArray(workspaceImages) ? workspaceImages.length : 0}</p>
            </div>
          </div>
        </div>
        {imageTypes.slice(0, 4).map(type => {
          const Icon = type.icon
          const count = Array.isArray(workspaceImages) ? workspaceImages.filter(img => img?.type === type.value).length : 0
          return (
            <div key={type.value} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <Icon className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500">{type.label}</h3>
                  <p className="text-2xl font-bold text-gray-900">{count}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filterType === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Images ({Array.isArray(workspaceImages) ? workspaceImages.length : 0})
          </button>
          {imageTypes.map(type => {
            const count = Array.isArray(workspaceImages) ? workspaceImages.filter(img => img?.type === type.value).length : 0
            const Icon = type.icon
            return (
              <button
                key={type.value}
                onClick={() => setFilterType(type.value)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 ${
                  filterType === type.value
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{type.label} ({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Image Preview */}
      {formData.src && (showCreateModal || showEditModal) && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Image Preview</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <img 
              src={formData.src} 
              alt={formData.alt || 'Preview'}
              className="max-w-full h-64 object-cover rounded-lg mx-auto"
              onError={(e) => {
                e.target.src = '/placeholder-image.png'
              }}
            />
            <div className="mt-3 text-center">
              <p className="font-medium text-gray-900">{formData.alt}</p>
              <p className="text-sm text-gray-600">
                {getTypeLabel(formData.type)} • {formData.width}×{formData.height}px
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Images Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        {filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600 mb-4">Start by adding your first workspace image.</p>
            <button
              onClick={() => {
                resetForm()
                setShowCreateModal(true)
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Add Image
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => {
              if (!image) return null; // Skip invalid images
              const TypeIcon = getTypeIcon(image.type)
              return (
                <div key={image._id || image.id || index} className="group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-image.png'
                      }}
                    />
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(image)}
                        className="p-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50"
                        disabled={!image?._id}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(image)}
                        className="p-2 bg-white text-red-600 rounded-lg hover:bg-red-50"
                        disabled={!image?._id}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image info */}
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TypeIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">{getTypeLabel(image.type)}</span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{image.alt}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {image.width}×{image.height}px
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Create Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Add Workspace Image"
      >
        <div className="p-6">
          <Form
            fields={formFields}
            onSubmit={handleCreate}
            submitLabel="Add Image"
          />
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Workspace Image"
      >
        <div className="p-6">
          <Form
            fields={formFields}
            onSubmit={handleEdit}
            submitLabel="Update Image"
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Workspace Image"
      >
        <div className="p-6">
          {currentImage?.src && (
            <div className="mb-4">
              <img 
                src={currentImage.src} 
                alt={currentImage.alt}
                className="w-full h-32 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = '/placeholder-image.png'
                }}
              />
            </div>
          )}
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete this workspace image? This action cannot be undone.
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