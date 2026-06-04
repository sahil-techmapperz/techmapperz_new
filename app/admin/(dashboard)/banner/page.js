'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/app/admin/_components/DataTable'
import Form from '@/app/admin/_components/Form'
import Modal from '@/app/admin/_components/Modal'
import { Plus } from 'lucide-react'
import { bannerApi } from '@/app/admin/_utils/api'

const columns = [
  { key: 'pageName', label: 'Page Name' },
  { key: 'heading', label: 'Heading' },
  { key: 'subTitle', label: 'Subtitle' },
  { 
    key: 'banner_img_url', 
    label: 'Background Image',
    render: (value) => (
      <div className="w-24 h-12 rounded overflow-hidden">
        <img 
          src={value || '/background_image/home_hero_v3.png'} 
          alt="Banner Image" 
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
]

const formFields = [
  { name: 'pageName', label: 'Page Name (e.g. Home, Services)', type: 'text', required: true },
  { name: 'heading', label: 'Main Heading', type: 'text', required: true },
  { 
    name: 'subTitle', 
    label: 'Subtext / Description', 
    type: 'textarea', 
    required: true 
  },
  { 
    name: 'banner_img_url', 
    label: 'Background Image', 
    type: 'image',
    accept: 'image/*'
  },
]

export default function BannerPage() {
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
        // Adjust for response shape: if data is nested or not
        const newBanner = response.data.data ? response.data.data : response.data
        setBanners([...banners, newBanner])
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
        <h1 className="text-2xl font-semibold text-black">Home Banners</h1>
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
          submitLabel={editingBanner ? 'Update Banner' : 'Publish Banner'}
        />
      </Modal>
    </div>
  )
}
