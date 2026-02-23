'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { eventsApi, categoriesApi } from '@/app/admin/_utils/api'
import EventsDataTable from '@/app/admin/_components/EventsDataTable'
import Modal from '@/app/admin/_components/Modal'
import Alert from '@/app/admin/_components/Alert'
import Form from '@/app/admin/_components/Form'
import EventImageUpload from '@/app/admin/_components/EventImageUpload'
import { Plus, Edit, Trash2, Eye, Filter, Star, Calendar, FileText, Tag, Loader, Settings } from 'lucide-react'

export default function EventsPage() {
  const router = useRouter()
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [eventToDelete, setEventToDelete] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [eventToEdit, setEventToEdit] = useState(null)
  const [editFormData, setEditFormData] = useState({})
  const [loadingEvent, setLoadingEvent] = useState(false)
  const [filters, setFilters] = useState({
    status: 'all',
    category: '',
    featured: 'all'
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')

  // Category management states
  const [categories, setCategories] = useState([])
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState(null)
  const [categoryToEdit, setCategoryToEdit] = useState(null)
  const [categoryFormData, setCategoryFormData] = useState({})
  const [loadingCategories, setLoadingCategories] = useState(false)

  const editFormFields = [
    {
      name: 'title',
      label: 'Event Title',
      type: 'text',
      required: true,
      placeholder: 'Enter event title',
      icon: FileText,
      onChange: (value) => handleEditInputChange('title', value)
    },
    {
      name: 'date',
      label: 'Event Date',
      type: 'date',
      required: true,
      icon: Calendar,
      onChange: (value) => handleEditInputChange('date', value)
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: categories.map(cat => ({ value: cat.name, label: cat.name })),
      icon: Tag,
      onChange: (value) => handleEditInputChange('category', value)
    },
    {
      name: 'image',
      label: 'Event Image',
      type: 'custom',
      required: true,
      component: EventImageUpload,
      props: {
        type: 'events',
        required: true
      },
      onChange: (value) => handleEditInputChange('image', value)
    },
    {
      name: 'description',
      label: 'Event Description',
      type: 'textarea',
      required: true,
      placeholder: 'Enter event description',
      rows: 4,
      onChange: (value) => handleEditInputChange('description', value)
    },
    {
      name: 'status',
      label: 'Event Status',
      type: 'select',
      required: true,
      options: [
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'completed', label: 'Completed' }
      ],
      onChange: (value) => handleEditInputChange('status', value)
    },
    {
      name: 'featured',
      label: 'Featured Event',
      type: 'checkbox',
      onChange: (value) => handleEditInputChange('featured', value),
      description: 'Mark this event as featured to highlight it'
    }
  ]

  useEffect(() => {
    fetchEvents()
    fetchCategories()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [events, filters, searchTerm])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const response = await eventsApi.getAll()
      console.log('Events Page - Raw API response:', response)
      const eventsData = response?.data || []
      console.log('Events Page - Events data:', eventsData)
      console.log('Events Page - Sample event:', eventsData[0])
      // Ensure we always have an array
      setEvents(Array.isArray(eventsData) ? eventsData : [])
    } catch (error) {
      console.error('Error fetching events:', error)
      setError('Failed to fetch events')
      showAlertMessage('Failed to fetch events', 'error')
      setEvents([]) // Ensure events is always an array
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true)
      const response = await categoriesApi.getAll()
      console.log('Categories Page - Raw API response:', response)
      const categoriesData = response?.data || []
      console.log('Categories Page - Categories data:', categoriesData)
      
      // Ensure we always have an array and add default categories if none exist
      const categoriesArray = Array.isArray(categoriesData) ? categoriesData : []
      
      // If no categories exist, add default ones
      if (categoriesArray.length === 0) {
        const defaultCategories = [
          { name: 'Conference', description: 'Professional conferences and seminars', color: '#3B82F6', isActive: true },
          { name: 'Team Building', description: 'Team building activities and events', color: '#10B981', isActive: true },
          { name: 'Hackathon', description: 'Coding competitions and hackathons', color: '#8B5CF6', isActive: true },
          { name: 'Meeting', description: 'Company meetings and presentations', color: '#F59E0B', isActive: true },
          { name: 'Celebration', description: 'Company celebrations and parties', color: '#EF4444', isActive: true },
          { name: 'Training', description: 'Training sessions and workshops', color: '#06B6D4', isActive: true }
        ]
        setCategories(defaultCategories)
      } else {
        setCategories(categoriesArray)
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
      showAlertMessage('Failed to fetch categories', 'error')
      // Set default categories on error
      const defaultCategories = [
        { name: 'Conference', description: 'Professional conferences and seminars', color: '#3B82F6', isActive: true },
        { name: 'Team Building', description: 'Team building activities and events', color: '#10B981', isActive: true },
        { name: 'Hackathon', description: 'Coding competitions and hackathons', color: '#8B5CF6', isActive: true },
        { name: 'Meeting', description: 'Company meetings and presentations', color: '#F59E0B', isActive: true },
        { name: 'Celebration', description: 'Company celebrations and parties', color: '#EF4444', isActive: true },
        { name: 'Training', description: 'Training sessions and workshops', color: '#06B6D4', isActive: true }
      ]
      setCategories(defaultCategories)
    } finally {
      setLoadingCategories(false)
    }
  }

  const applyFilters = () => {
    // Ensure events is always an array
    const eventsArray = Array.isArray(events) ? events : []
    let filtered = [...eventsArray]

    // Apply status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(event => event?.status === filters.status)
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(event => event?.category === filters.category)
    }

    // Apply featured filter
    if (filters.featured !== 'all') {
      const isFeatured = filters.featured === 'featured'
      filtered = filtered.filter(event => event?.featured === isFeatured)
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event?.category?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredEvents(filtered)
    console.log('Events Page - Filtered events:', filtered)
    console.log('Events Page - Sample filtered event:', filtered[0])
  }

  const handleDelete = async (id) => {
    if (!id) {
      showAlertMessage('Cannot delete event: Invalid ID', 'error')
      return
    }
    
    try {
      await eventsApi.delete(id)
      setEvents(events.filter(event => event?._id !== id))
      showAlertMessage('Event deleted successfully', 'success')
      setShowDeleteModal(false)
      setEventToDelete(null)
    } catch (error) {
      console.error('Error deleting event:', error)
      showAlertMessage('Failed to delete event', 'error')
    }
  }

  const showAlertMessage = (message, type = 'success') => {
    setAlertMessage(message)
    setAlertType(type)
    setShowAlert(true)
  }

  const handleDeleteClick = (event) => {
    if (!event?._id) {
      showAlertMessage('Cannot delete event: Invalid event data', 'error')
      return
    }
    setEventToDelete(event)
    setShowDeleteModal(true)
  }

  const handleEditClick = async (event) => {
    console.log('Edit Modal - Clicked event (full object):', event)
    console.log('Edit Modal - Event keys:', Object.keys(event || {}))
    console.log('Edit Modal - Event._id:', event?._id)
    console.log('Edit Modal - Event.title:', event?.title)
    
    if (!event?._id) {
      console.error('Edit Modal - No event ID found!')
      showAlertMessage('Cannot edit event: Invalid event data', 'error')
      return
    }
    
    console.log('Edit Modal - Clicked event:', event)
    
    setEventToEdit(event)
    setShowEditModal(true)
    setLoadingEvent(true)
    
    // Set initial data from table event (fallback)
    const fallbackDate = event.date ? new Date(event.date).toISOString().split('T')[0] : ''
    const fallbackFormData = {
      title: event.title || '',
      date: fallbackDate,
      category: event.category || 'Conference',
      image: event.image || '',
      description: event.description || '',
      featured: event.featured || false,
      status: event.status || 'upcoming'
    }
    
    console.log('Edit Modal - Setting fallback data:', fallbackFormData)
    setEditFormData(fallbackFormData)
    
    try {
      const response = await eventsApi.getById(event._id)
      console.log('Edit Modal - Raw response:', response)
      
      if (response.data) {
        console.log('Edit Modal - Event data:', response.data)
        
        // Format date for input field
        const eventDate = response.data.date ? new Date(response.data.date).toISOString().split('T')[0] : ''
        
        const formDataToSet = {
          title: response.data.title || '',
          date: eventDate,
          category: response.data.category || 'Conference',
          image: response.data.image || '',
          description: response.data.description || '',
          featured: response.data.featured || false,
          status: response.data.status || 'upcoming'
        }
        
        console.log('Edit Modal - Setting detailed form data:', formDataToSet)
        setEditFormData(formDataToSet)
      }
    } catch (error) {
      console.error('Error fetching event for edit:', error)
      showAlertMessage('Failed to load detailed event data, using basic info', 'warning')
      // Keep the fallback data that's already set
    } finally {
      setLoadingEvent(false)
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    
    if (!editFormData.title || !editFormData.date || !editFormData.category || !editFormData.image || !editFormData.description) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setLoadingEvent(true)
      await eventsApi.update(eventToEdit._id, editFormData)
      showAlertMessage('Event updated successfully!', 'success')
      
      // Refresh events list
      fetchEvents()
      
      // Close modal
      setShowEditModal(false)
      setEventToEdit(null)
      setEditFormData({})
    } catch (error) {
      console.error('Error updating event:', error)
      showAlertMessage('Failed to update event. Please try again.', 'error')
    } finally {
      setLoadingEvent(false)
    }
  }

  const handleEditInputChange = (field, value) => {
    setEditFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Category management functions
  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    
    if (!categoryFormData.name) {
      showAlertMessage('Please enter a category name', 'error')
      return
    }

    try {
      setLoadingCategories(true)
      
      if (categoryToEdit) {
        // Update existing category
        await categoriesApi.update(categoryToEdit._id, categoryFormData)
        showAlertMessage('Category updated successfully!', 'success')
      } else {
        // Create new category
        await categoriesApi.create(categoryFormData)
        showAlertMessage('Category created successfully!', 'success')
      }
      
      // Refresh categories list
      fetchCategories()
      
      // Close modal and reset form
      setShowCategoryModal(false)
      setCategoryToEdit(null)
      setCategoryFormData({})
    } catch (error) {
      console.error('Error saving category:', error)
      showAlertMessage('Failed to save category. Please try again.', 'error')
    } finally {
      setLoadingCategories(false)
    }
  }

  const handleCategoryInputChange = (field, value) => {
    setCategoryFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddCategory = () => {
    setCategoryToEdit(null)
    setCategoryFormData({
      name: '',
      description: '',
      color: '#3B82F6',
      isActive: true
    })
    setShowCategoryModal(true)
  }

  const handleEditCategory = (category) => {
    setCategoryToEdit(category)
    setCategoryFormData({
      name: category.name || '',
      description: category.description || '',
      color: category.color || '#3B82F6',
      isActive: category.isActive !== undefined ? category.isActive : true
    })
    setShowCategoryModal(true)
  }

  const handleDeleteCategory = async (id) => {
    if (!id) {
      showAlertMessage('Cannot delete category: Invalid ID', 'error')
      return
    }
    
    try {
      await categoriesApi.delete(id)
      setCategories(categories.filter(cat => cat._id !== id))
      showAlertMessage('Category deleted successfully', 'success')
      setShowDeleteCategoryModal(false)
      setCategoryToDelete(null)
    } catch (error) {
      console.error('Error deleting category:', error)
      showAlertMessage('Failed to delete category', 'error')
    }
  }

  const handleDeleteCategoryClick = (category) => {
    if (!category?._id) {
      showAlertMessage('Cannot delete category: Invalid category data', 'error')
      return
    }
    setCategoryToDelete(category)
    setShowDeleteCategoryModal(true)
  }

  // Category form fields
  const categoryFormFields = [
    {
      name: 'name',
      label: 'Category Name',
      type: 'text',
      required: true,
      placeholder: 'Enter category name',
      icon: Tag,
      onChange: (value) => handleCategoryInputChange('name', value)
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Enter category description (optional)',
      rows: 3,
      onChange: (value) => handleCategoryInputChange('description', value)
    },
    {
      name: 'color',
      label: 'Category Color',
      type: 'color',
      onChange: (value) => handleCategoryInputChange('color', value)
    },
    {
      name: 'isActive',
      label: 'Active Status',
      type: 'checkbox',
      onChange: (value) => handleCategoryInputChange('isActive', value),
      description: 'Active categories are available for selection'
    }
  ]



  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full"
    if (status === 'upcoming') {
      return `${baseClasses} bg-blue-100 text-blue-800`
    } else if (status === 'completed') {
      return `${baseClasses} bg-green-100 text-green-800`
    }
    return `${baseClasses} bg-gray-100 text-black`
  }

  const getStatusLabel = (status) => {
    if (!status) return 'Unknown'
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  const columns = [
    {
      key: 'image',
      label: 'Image',
      render: (event) => (
        <img 
          src={event.image} 
          alt={event.title}
          className="w-16 h-16 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = '/placeholder-image.png'
          }}
        />
      )
    },
    {
      key: 'title',
      label: 'Title',
      render: (event) => (
        <div className="flex items-center">
          <span className="font-medium">{event.title}</span>
          {event.featured && (
            <Star className="w-4 h-4 text-yellow-500 ml-2 fill-current" />
          )}
        </div>
      )
    },
    {
      key: 'date',
      label: 'Date',
      render: (event) => (
        <span>
          {event.date ? new Date(event.date).toLocaleDateString() : 'No date'}
        </span>
      )
    },
    {
      key: 'category',
      label: 'Category'
    },
    {
      key: 'status',
      label: 'Status',
      render: (event) => {
        const status = event?.status || 'unknown'
        return (
          <span className={getStatusBadge(status)}>
            {getStatusLabel(status)}
          </span>
        )
      }
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (event) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditClick(event)}
            className="p-1 text-blue-600 hover:text-blue-800"
            disabled={!event?._id}
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteClick(event)}
            className="p-1 text-red-600 hover:text-red-800"
            disabled={!event?._id}
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
          <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
          <p className="text-gray-600">Manage company events, conferences, and team activities</p>
        </div>
        <Link href="/admin/events/new">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        </Link>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Events</h3>
          <p className="text-2xl font-bold text-gray-900">{Array.isArray(events) ? events.length : 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Upcoming Events</h3>
          <p className="text-2xl font-bold text-blue-600">
            {Array.isArray(events) ? events.filter(e => e?.status === 'upcoming').length : 0}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Completed Events</h3>
          <p className="text-2xl font-bold text-green-600">
            {Array.isArray(events) ? events.filter(e => e?.status === 'completed').length : 0}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Featured Events</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {Array.isArray(events) ? events.filter(e => e?.featured).length : 0}
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>

            <div className="flex items-center space-x-2">
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Categories</option>
                {categories.filter(cat => cat.isActive).map(category => (
                  <option key={category._id || category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddCategory}
                className="p-2 text-gray-600 hover:text-indigo-600 border border-gray-300 rounded-md hover:bg-gray-50"
                title="Manage Categories"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            <select
              value={filters.featured}
              onChange={(e) => setFilters({...filters, featured: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Events</option>
              <option value="featured">Featured Only</option>
              <option value="regular">Regular Only</option>
            </select>
          </div>

          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow">
        <EventsDataTable
          data={filteredEvents}
          columns={columns}
          loading={loading}
          emptyMessage="No events found"
        />
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Event"
      >
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete "{eventToDelete?.title}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(eventToDelete._id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Event Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setEventToEdit(null)
          setEditFormData({})
        }}
        title="Edit Event"
        size="lg"
      >
        <div className="p-6">
          {loadingEvent ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <Loader className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600">Loading event data...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Event Preview */}
              {(editFormData.image || editFormData.title) && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Event Preview</h4>
                  <div className="flex items-start space-x-4">
                    {editFormData.image ? (
                      <img 
                        src={editFormData.image} 
                        alt={editFormData.title || 'Event preview'}
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
                          {editFormData.title || 'Event Title'}
                        </h5>
                        {editFormData.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {editFormData.date ? new Date(editFormData.date).toLocaleDateString() : 'Event Date'}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {editFormData.category}
                        </span>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          editFormData.status === 'upcoming' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {editFormData.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Edit Form */}
              <Form
                key={`edit-form-${eventToEdit?._id}-${Object.keys(editFormData).length}`}
                fields={editFormFields}
                initialData={editFormData}
                onSubmit={handleEditSubmit}
                passEventToOnSubmit={true}
                submitLabel={loadingEvent ? "Updating..." : "Update Event"}
              />
            </>
          )}
        </div>
      </Modal>

      {/* Category Management Modal */}
      <Modal
        isOpen={showCategoryModal}
        onClose={() => {
          setShowCategoryModal(false)
          setCategoryToEdit(null)
          setCategoryFormData({})
        }}
        title={categoryToEdit ? "Edit Category" : "Add New Category"}
        size="md"
      >
        <div className="p-6">
          {/* Category Preview */}
          {categoryFormData.name && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Category Preview</h4>
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: categoryFormData.color }}
                ></div>
                <div>
                  <span className="font-medium text-gray-900">{categoryFormData.name}</span>
                  {categoryFormData.description && (
                    <p className="text-sm text-gray-600 mt-1">{categoryFormData.description}</p>
                  )}
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      categoryFormData.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {categoryFormData.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Form */}
          <Form
            key={`category-form-${categoryToEdit?._id}-${Object.keys(categoryFormData).length}`}
            fields={categoryFormFields}
            initialData={categoryFormData}
            onSubmit={handleCategorySubmit}
            passEventToOnSubmit={true}
            submitLabel={loadingCategories ? "Saving..." : (categoryToEdit ? "Update Category" : "Add Category")}
          />

          {/* Existing Categories List */}
          <div className="mt-8 border-t pt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Existing Categories</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <div key={category._id || category.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <div>
                      <span className="font-medium text-gray-900">{category.name}</span>
                      {category.description && (
                        <p className="text-sm text-gray-600">{category.description}</p>
                      )}
                    </div>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      category.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="p-1 text-blue-600 hover:text-blue-800"
                      disabled={!category._id}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategoryClick(category)}
                      className="p-1 text-red-600 hover:text-red-800"
                      disabled={!category._id}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Delete Category Confirmation Modal */}
      <Modal
        isOpen={showDeleteCategoryModal}
        onClose={() => setShowDeleteCategoryModal(false)}
        title="Delete Category"
      >
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete the category "{categoryToDelete?.name}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowDeleteCategoryModal(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDeleteCategory(categoryToDelete._id)}
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
