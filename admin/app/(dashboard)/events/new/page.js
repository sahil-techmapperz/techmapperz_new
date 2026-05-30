'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { eventsApi, categoriesApi } from '@/utils/api'
import Form from '@/components/Form'
import Alert from '@/components/Alert'
import EventImageUpload from '@/components/EventImageUpload'
import { ArrowLeft, Calendar, FileText, Image as ImageIcon, Tag, Star } from 'lucide-react'

export default function NewEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [categories, setCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: '',
    image: '',
    description: '',
    featured: false,
    status: 'upcoming'
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true)
      const response = await categoriesApi.getAll()
      const categoriesData = response?.data || []
      
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
        // Set default category
        setFormData(prev => ({
          ...prev,
          category: 'Conference'
        }))
      } else {
        setCategories(categoriesArray)
        // Set first active category as default
        const firstActiveCategory = categoriesArray.find(cat => cat.isActive)
        if (firstActiveCategory) {
          setFormData(prev => ({
            ...prev,
            category: firstActiveCategory.name
          }))
        }
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
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
      setFormData(prev => ({
        ...prev,
        category: 'Conference'
      }))
    } finally {
      setLoadingCategories(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.date || !formData.category || !formData.image || !formData.description) {
      showAlertMessage('Please fill in all required fields', 'error')
      return
    }

    try {
      setLoading(true)
      await eventsApi.create(formData)
      showAlertMessage('Event created successfully!', 'success')
      
      // Redirect to events list after a short delay
      setTimeout(() => {
        router.push('/events')
      }, 1500)
    } catch (error) {
      console.error('Error creating event:', error)
      showAlertMessage('Failed to create event. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const showAlertMessage = (message, type = 'success') => {
    setAlertMessage(message)
    setAlertType(type)
    setShowAlert(true)
  }

  const formFields = [
    {
      name: 'title',
      label: 'Event Title',
      type: 'text',
      required: true,
      placeholder: 'Enter event title',
      icon: FileText,
      value: formData.title,
      onChange: (value) => handleInputChange('title', value)
    },
    {
      name: 'date',
      label: 'Event Date',
      type: 'date',
      required: true,
      icon: Calendar,
      value: formData.date,
      onChange: (value) => handleInputChange('date', value)
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: categories.filter(cat => cat.isActive).map(cat => ({ value: cat.name, label: cat.name })),
      icon: Tag,
      value: formData.category,
      onChange: (value) => handleInputChange('category', value)
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
      value: formData.image,
      onChange: (value) => handleInputChange('image', value)
    },
    {
      name: 'description',
      label: 'Event Description',
      type: 'textarea',
      required: true,
      placeholder: 'Enter event description',
      rows: 4,
      value: formData.description,
      onChange: (value) => handleInputChange('description', value)
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
      value: formData.status,
      onChange: (value) => handleInputChange('status', value)
    },
    {
      name: 'featured',
      label: 'Featured Event',
      type: 'checkbox',
      value: formData.featured,
      onChange: (value) => handleInputChange('featured', value),
      description: 'Mark this event as featured to highlight it'
    }
  ]

  if (loadingCategories) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/events">
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
          <p className="text-gray-600">Add a new event to your company calendar</p>
        </div>
      </div>

      {/* Event Preview */}
      {formData.image && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Event Preview</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <img 
                src={formData.image} 
                alt={formData.title || 'Event preview'}
                className="w-24 h-24 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = '/placeholder-image.svg'
                }}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-900">
                    {formData.title || 'Event Title'}
                  </h4>
                  {formData.featured && (
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {formData.date ? new Date(formData.date).toLocaleDateString() : 'Event Date'}
                </p>
                <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {formData.category}
                </span>
                {formData.description && (
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {formData.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <Form
            fields={formFields}
            initialData={formData}
            onSubmit={handleSubmit}
            passEventToOnSubmit={true}
            submitLabel="Create Event"
          />
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-3">Event Guidelines</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Use high-quality images with a minimum resolution of 800x600px</li>
          <li>• Keep event titles concise and descriptive (max 100 characters)</li>
          <li>• Write detailed descriptions to help attendees understand the event</li>
          <li>• Select the most appropriate category for better organization</li>
          <li>• Only mark important events as "Featured" to maintain exclusivity</li>
          <li>• Ensure the event date is accurate and in the correct timezone</li>
        </ul>
      </div>

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