'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { eventsApi } from '@/utils/api'
import Form from '@/components/Form'
import Alert from '@/components/Alert'
import EventImageUpload from '@/components/EventImageUpload'
import { ArrowLeft, Calendar, FileText, Image as ImageIcon, Tag, Star, Loader } from 'lucide-react'

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id
  
  const [loading, setLoading] = useState(false)
  const [loadingEvent, setLoadingEvent] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [eventNotFound, setEventNotFound] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: 'Conference',
    image: '',
    description: '',
    featured: false,
    status: 'upcoming'
  })

  const categories = [
    'Conference',
    'Team Building',
    'Hackathon',
    'Meeting',
    'Celebration',
    'Training'
  ]

  useEffect(() => {
    if (eventId) {
      fetchEvent()
    }
  }, [eventId])

  const fetchEvent = async () => {
    try {
      setLoadingEvent(true)
      const response = await eventsApi.getById(eventId)
      console.log('Edit Event - Raw response:', response)
      
      if (response.data) {
        console.log('Edit Event - Event data:', response.data)
        
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
        
        console.log('Edit Event - Setting form data:', formDataToSet)
        setFormData(formDataToSet)
      } else {
        console.log('Edit Event - No data in response')
        setEventNotFound(true)
      }
    } catch (error) {
      console.error('Error fetching event:', error)
      setEventNotFound(true)
      showAlertMessage('Failed to load event data', 'error')
    } finally {
      setLoadingEvent(false)
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
      await eventsApi.update(eventId, formData)
      showAlertMessage('Event updated successfully!', 'success')
      
      // Redirect to events list after a short delay
      setTimeout(() => {
        router.push('/events')
      }, 1500)
    } catch (error) {
      console.error('Error updating event:', error)
      showAlertMessage('Failed to update event. Please try again.', 'error')
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

  // Show loading state while fetching event
  if (loadingEvent) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading event data...</p>
        </div>
      </div>
    )
  }

  // Show error if event not found
  if (eventNotFound) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h2 className="text-xl font-bold text-red-900 mb-2">Event Not Found</h2>
          <p className="text-red-700 mb-4">The event you're looking for doesn't exist or has been deleted.</p>
          <Link href="/events">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Back to Events
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const formFields = [
    {
      name: 'title',
      label: 'Event Title',
      type: 'text',
      required: true,
      placeholder: 'Enter event title',
      icon: FileText,
      onChange: (value) => handleInputChange('title', value)
    },
    {
      name: 'date',
      label: 'Event Date',
      type: 'date',
      required: true,
      icon: Calendar,
      onChange: (value) => handleInputChange('date', value)
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: categories.map(cat => ({ value: cat, label: cat })),
      icon: Tag,
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
      onChange: (value) => handleInputChange('image', value)
    },
    {
      name: 'description',
      label: 'Event Description',
      type: 'textarea',
      required: true,
      placeholder: 'Enter event description',
      rows: 4,
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
      onChange: (value) => handleInputChange('status', value)
    },
    {
      name: 'featured',
      label: 'Featured Event',
      type: 'checkbox',
      onChange: (value) => handleInputChange('featured', value),
      description: 'Mark this event as featured to highlight it'
    }
  ]

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
          <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
          <p className="text-gray-600">Update event information and details</p>
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
                <div className="flex items-center space-x-2 mt-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {formData.category}
                  </span>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    formData.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {formData.status}
                  </span>
                </div>
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
            submitLabel="Update Event"
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