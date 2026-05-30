'use client'

import { useState, useEffect } from 'react'
import { workspaceApi } from '@/app/admin/_utils/api'
import EventsDataTable from '@/app/admin/_components/EventsDataTable'
import Modal from '@/app/admin/_components/Modal'
import Alert from '@/app/admin/_components/Alert'
import Form from '@/app/admin/_components/Form'
import EventImageUpload from '@/app/admin/_components/EventImageUpload'
import { Plus, Edit, Trash2, Image as ImageIcon, Monitor, Coffee, Users, Home, Loader } from 'lucide-react'

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
  const [editFormData, setEditFormData] = useState({})
  const [loadingImage, setLoadingImage] = useState(false)

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

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    
    if (!editFormData.src || !editFormData.alt || !editFormData.type) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setFormLoading(true)
      await workspaceApi.update(currentImage._id, editFormData)
      showAlertMessage('Workspace image updated successfully!', 'success')
      
      // Refresh images list
      fetchWorkspaceImages()
      
      // Close modal
      setShowEditModal(false)
      setCurrentImage(null)
      setEditFormData({})
    } catch (error) {
      console.error('Error updating workspace image:', error)
      showAlertMessage('Failed to update workspace image. Please try again.', 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleEditInputChange = (field, value) => {
    setEditFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDelete = async (id) => {
    if (!id) {
      showAlertMessage('Cannot delete image: Invalid ID', 'error')
      return
    }
    
    try {
      await workspaceApi.delete(id)
      setWorkspaceImages(workspaceImages.filter(image => image?._id !== id))
      showAlertMessage('Workspace image deleted successfully', 'success')
      setShowDeleteModal(false)
      setCurrentImage(null)
    } catch (error) {
      console.error('Error deleting workspace image:', error)
      showAlertMessage('Failed to delete workspace image', 'error')
    }
  }

  const handleEditClick = async (image) => {
    console.log('Edit Modal - Clicked image (full object):', image)
    console.log('Edit Modal - Image keys:', Object.keys(image || {}))
    console.log('Edit Modal - Image._id:', image?._id)
    
    if (!image?._id) {
      console.error('Edit Modal - No image ID found!')
      showAlertMessage('Cannot edit image: Invalid image data', 'error')
      return
    }
    
    console.log('Edit Modal - Clicked image:', image)
    
    setCurrentImage(image)
    setShowEditModal(true)
    setLoadingImage(true)
    
    // Set initial data from table image (fallback)
    const fallbackFormData = {
      src: image.src || '',
      alt: image.alt || '',
      type: image.type || 'square',
      width: image.width || 300,
      height: image.height || 300
    }
    
    console.log('Edit Modal - Setting fallback data:', fallbackFormData)
    setEditFormData(fallbackFormData)
    
    try {
      const response = await workspaceApi.getById(image._id)
      console.log('Edit Modal - Raw response:', response)
      
      if (response.data) {
        console.log('Edit Modal - Image data:', response.data)
        
        const formDataToSet = {
          src: response.data.src || '',
          alt: response.data.alt || '',
          type: response.data.type || 'square',
          width: response.data.width || 300,
          height: response.data.height || 300
        }
        
        console.log('Edit Modal - Setting detailed form data:', formDataToSet)
        setEditFormData(formDataToSet)
      }
    } catch (error) {
      console.error('Error fetching image for edit:', error)
      showAlertMessage('Failed to load detailed image data, using basic info', 'warning')
      // Keep the fallback data that's already set
    } finally {
      setLoadingImage(false)
    }
  }

  const handleDeleteClick = (image) => {
    if (!image?._id) {
      showAlertMessage('Cannot delete image: Invalid image data', 'error')
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

  const editFormFields = [
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
      onChange: (value) => handleEditInputChange('src', value)
    },
    {
      name: 'alt',
      label: 'Alt Text (Description)',
      type: 'text',
      required: true,
      placeholder: 'Describe the workspace image',
      onChange: (value) => handleEditInputChange('alt', value)
    },
    {
      name: 'type',
      label: 'Image Type',
      type: 'select',
      required: true,
      options: imageTypes.map(type => ({ value: type.value, label: type.label })),
      onChange: (value) => {
        handleEditInputChange('type', value)
        const selectedType = imageTypes.find(t => t.value === value)
        if (selectedType) {
          handleEditInputChange('width', selectedType.width)
          handleEditInputChange('height', selectedType.height)
        }
      }
    },
    {
      name: 'width',
      label: 'Width (pixels)',
      type: 'number',
      required: true,
      min: 100,
      placeholder: '800',
      onChange: (value) => handleEditInputChange('width', parseInt(value) || 800)
    },
    {
      name: 'height',
      label: 'Height (pixels)',
      type: 'number',
      required: true,
      min: 100,
      placeholder: '600',
      onChange: (value) => handleEditInputChange('height', parseInt(value) || 600)
    }
  ]

  const columns = [
    {
      key: 'src',
      label: 'Image',
      render: (image) => (
        <img 
          src={image.src} 
          alt={image.alt}
          className="w-16 h-16 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = '/placeholder-image.png'
          }}
        />
      )
    },
    {
      key: 'alt',
      label: 'Description',
      render: (image) => (
        <span className="font-medium">{image.alt || 'No description'}</span>
      )
    },
    {
      key: 'type',
      label: 'Type',
      render: (image) => {
        const TypeIcon = getTypeIcon(image.type)
        return (
          <div className="flex items-center">
            <TypeIcon className="w-4 h-4 mr-2 text-gray-500" />
            <span>{getTypeLabel(image.type)}</span>
          </div>
        )
      }
    },
    {
      key: 'dimensions',
      label: 'Dimensions',
      render: (image) => (
        <span>{image.width}×{image.height}px</span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (image) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditClick(image)}
            className="p-1 text-blue-600 hover:text-blue-800"
            disabled={!image?._id}
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteClick(image)}
            className="p-1 text-red-600 hover:text-red-800"
            disabled={!image?._id}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
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
      </div>

      {/* Workspace Images Table */}
      <div className="bg-white rounded-lg shadow">
        <EventsDataTable
          data={filteredImages}
          columns={columns}
          loading={loading}
          emptyMessage="No workspace images found"
        />
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
        onClose={() => {
          setShowEditModal(false)
          setCurrentImage(null)
          setEditFormData({})
        }}
        title="Edit Workspace Image"
        size="lg"
      >
        <div className="p-6">
          {loadingImage ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <Loader className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600">Loading image data...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Image Preview */}
              {(editFormData.src || editFormData.alt) && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Image Preview</h4>
                  <div className="flex items-start space-x-4">
                    {editFormData.src ? (
                      <img 
                        src={editFormData.src} 
                        alt={editFormData.alt || 'Image preview'}
                        className="w-20 h-20 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.svg'
                        }}
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No Image</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h5 className="font-medium text-gray-900">
                          {editFormData.alt || 'Image Description'}
                        </h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {getTypeLabel(editFormData.type)} • {editFormData.width}×{editFormData.height}px
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Edit Form */}
              <Form
                key={`edit-form-${currentImage?._id}-${Object.keys(editFormData).length}`}
                fields={editFormFields}
                initialData={editFormData}
                onSubmit={handleEditSubmit}
                passEventToOnSubmit={true}
                submitLabel={formLoading ? "Updating..." : "Update Image"}
              />
            </>
          )}
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
            Are you sure you want to delete "{currentImage?.alt || 'this workspace image'}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(currentImage._id)}
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
