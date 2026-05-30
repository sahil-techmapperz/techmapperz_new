'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import Form from '@/components/Form'
import Modal from '@/components/Modal'
import { Plus } from 'lucide-react'
import { testimonialsApi } from '@/utils/api'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'Companyname', label: 'Company' },
  { key: 'message', label: 'Message' },
  { key: 'Date', label: 'Date' },
  { 
    key: 'avater', 
    label: 'Avatar',
    render: (value) => (
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img 
          src={value} 
          alt="Avatar" 
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
]

const formFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'Companyname', label: 'Company', type: 'text', required: true },
  { 
    name: 'message', 
    label: 'Message', 
    type: 'textarea', 
    required: true 
  },
  { 
    name: 'avater', 
    label: 'Profile Picture', 
    type: 'image',
    accept: 'image/*'
  },
  { 
    name: 'Date', 
    label: 'Date', 
    type: 'date', 
    required: true 
  },
]

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true)
      const response = await testimonialsApi.getAll()
      setTestimonials(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch testimonials')
      console.error('Error fetching testimonials:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial)
    setIsModalOpen(true)
  }

  const handleDelete = async (testimonial) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) {
      return
    }

    try {
      await testimonialsApi.delete(testimonial._id)
      setTestimonials(testimonials.filter(t => t._id !== testimonial._id))
    } catch (err) {
      console.error('Error deleting testimonial:', err)
      alert('Failed to delete testimonial')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingTestimonial) {
        const response = await testimonialsApi.update(editingTestimonial._id, formData)
        setTestimonials(testimonials.map(testimonial => 
          testimonial._id === editingTestimonial._id 
            ? response.data
            : testimonial
        ))
      } else {
        const response = await testimonialsApi.create(formData)
        setTestimonials([...testimonials, response.data])
      }
      setIsModalOpen(false)
      setEditingTestimonial(null)
    } catch (err) {
      console.error('Error saving testimonial:', err)
      alert('Failed to save testimonial')
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Testimonials</h1>
        <button 
          onClick={() => {
            setEditingTestimonial(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          Add New Testimonial
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={testimonials}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingTestimonial(null)
        }}
        title={editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
      >
        <Form
          fields={formFields}
          initialData={editingTestimonial}
          onSubmit={handleSubmit}
          submitLabel={editingTestimonial ? 'Update Testimonial' : 'Create Testimonial'}
        />
      </Modal>
    </div>
  )
} 