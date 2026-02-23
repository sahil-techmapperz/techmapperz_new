'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import Form from '@/components/Form'
import Modal from '@/components/Modal'
import EventImageUpload from '@/components/EventImageUpload'
import { Plus } from 'lucide-react'
import { bannerApi } from '@/utils/api'

const columns = [
  { key: 'heading', label: 'Heading' },
  { key: 'subTitle', label: 'Subtitle' },
  { 
    key: 'banner_img_url', 
    label: 'Banner Image',
    render: (value) => (
      <div className="w-32 h-20">
        <img 
          src={value} 
          alt="Banner preview" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  { key: 'userId', label: 'User ID' },
]

const formFields = [
  { name: 'heading', label: 'Heading', type: 'text', required: true },
  { name: 'subTitle', label: 'Subtitle', type: 'textarea', required: true },
  { 
    name: 'banner_img_url', 
    label: 'Banner Image URL', 
    type: 'text',
    required: true
  },
  { 
    name: 'userId', 
    label: 'User ID', 
    type: 'text',
    required: true
  },
  {
    name: 'type',
    label: 'Banner Type',
    type: 'select',
    required: true,
    options: [
      { value: 'hero', label: 'Hero Banner' },
      { value: 'announcement', label: 'Announcement' },
      { value: 'promotion', label: 'Promotion' },
      { value: 'sidebar', label: 'Sidebar' },
    ]
  },
  {
    name: 'position',
    label: 'Position',
    type: 'select',
    required: true,
    options: [
      { value: 'top', label: 'Top' },
      { value: 'bottom', label: 'Bottom' },
      { value: 'left', label: 'Left' },
      { value: 'right', label: 'Right' },
    ]
  },
  { 
    name: 'content', 
    label: 'Content', 
    type: 'textarea', 
    required: true 
  },
  { 
    name: 'imageUrl', 
    label: 'Banner Image', 
    type: 'custom',
    component: EventImageUpload,
    props: {
      type: 'banners',
      required: false
    }
  },
  { 
    name: 'linkUrl', 
    label: 'Link URL', 
    type: 'text' 
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    required: true,
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'scheduled', label: 'Scheduled' },
    ]
  },
  { 
    name: 'startDate', 
    label: 'Start Date', 
    type: 'datetime-local' 
  },
  { 
    name: 'endDate', 
    label: 'End Date', 
    type: 'datetime-local' 
  },
  { 
    name: 'backgroundColor', 
    label: 'Background Color', 
    type: 'text', 
    placeholder: '#FFFFFF' 
  },
  { 
    name: 'textColor', 
    label: 'Text Color', 
    type: 'text', 
    placeholder: '#000000' 
  },
]

export default function BannersPage() {
  const [banners, setBanners] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBanner, setEditingBanner] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBanners()
  }, [])

  const fetchBanners = async () => {
    try {
      setIsLoading(true)
      const response = await bannerApi.getAll()
      setBanners(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch banners')
      console.error('Error fetching banners:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (banner) => {
    setEditingBanner(banner)
    setIsModalOpen(true)
  }

  const handleDelete = async (banner) => {
    if (!window.confirm('Are you sure you want to delete this banner?')) {
      return
    }

    try {
      await bannerApi.delete(banner._id)
      setBanners(banners.filter(b => b._id !== banner._id))
    } catch (err) {
      console.error('Error deleting banner:', err)
      alert('Failed to delete banner')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingBanner) {
        const response = await bannerApi.update(editingBanner._id, formData)
        setBanners(banners.map(banner => 
          banner._id === editingBanner._id 
            ? response.data
            : banner
        ))
      } else {
        const response = await bannerApi.create(formData)
        setBanners([...banners, response.data])
      }
      setIsModalOpen(false)
      setEditingBanner(null)
    } catch (err) {
      console.error('Error saving banner:', err)
      alert('Failed to save banner')
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
        <h1 className="text-2xl font-semibold">Banners</h1>
        <button 
          onClick={() => {
            setEditingBanner(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          Add New Banner
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={banners}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingBanner(null)
        }}
        title={editingBanner ? 'Edit Banner' : 'Add New Banner'}
      >
        <Form
          fields={formFields}
          initialData={editingBanner}
          onSubmit={handleSubmit}
          submitLabel={editingBanner ? 'Update Banner' : 'Create Banner'}
        />
      </Modal>
    </div>
  )
} 