'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import Form from '@/components/Form'
import Modal from '@/components/Modal'
import { contactsApi } from '@/utils/api'

const formFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
  { name: 'projectType', label: 'Project Type', type: 'text', required: true },
  { 
    name: 'projectdetails', 
    label: 'Project Details', 
    type: 'textarea', 
    required: true 
  },
  { name: 'Date', label: 'Date', type: 'date', required: true },
  { name: 'userId', label: 'User ID', type: 'number', required: true }
]

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [selectedDetails, setSelectedDetails] = useState('')
  const [editingContact, setEditingContact] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleViewDetails = (details) => {
    setSelectedDetails(details)
    setIsDetailsModalOpen(true)
  }

  const columns = [
    { 
      key: 'name', 
      label: 'Name',
      width: '15%',
      render: (value) => (
        <div className="font-medium truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'email', 
      label: 'Email',
      width: '20%',
      render: (value) => (
        <div className="text-indigo-600 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'mobile', 
      label: 'Mobile',
      width: '12%',
      render: (value) => (
        <div className="text-gray-700 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'projectType', 
      label: 'Project Type',
      width: '15%',
      render: (value) => (
        <div className="font-medium text-gray-900 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'projectdetails', 
      label: 'Project Details',
      width: '25%',
      render: (value) => (
        <div 
          className="truncate cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => handleViewDetails(value)}
        >
          {value && typeof value === 'string' ? `${value.substring(0, 50)}...` : '-'}
        </div>
      )
    },
    { 
      key: 'Date', 
      label: 'Date',
      width: '8%',
      render: (value) => (
        <div className="text-gray-500 whitespace-nowrap">
          {value || '-'}
        </div>
      )
    },
    { 
      key: 'userId', 
      label: 'User ID',
      width: '5%',
      render: (value) => (
        <div className="text-gray-600">
          {value || '-'}
        </div>
      )
    }
  ]

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setIsLoading(true)
      const response = await contactsApi.getAll()
      if (response && response.data) {
        // Ensure we have an array of contacts
        const contactsArray = Array.isArray(response.data) ? response.data : [response.data]
        
        // Map the data to ensure all fields are present
        const processedContacts = contactsArray.map(contact => ({
          _id: contact._id || '',
          userId: contact.userId || '',
          name: contact.name || '',
          email: contact.email || '',
          mobile: contact.mobile || '',
          projectType: contact.projectType || '',
          projectdetails: contact.projectdetails || '',
          Date: contact.Date || '',
        }))
        
        setContacts(processedContacts)
        setError(null)
      } else {
        setError('No data received from the API')
      }
    } catch (err) {
      setError('Failed to fetch contacts')
      console.error('Error fetching contacts:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (contact) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }

  const handleDelete = async (contact) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return
    }

    try {
      await contactsApi.delete(contact._id)
      setContacts(contacts.filter(c => c._id !== contact._id))
    } catch (err) {
      console.error('Error deleting contact:', err)
      alert('Failed to delete contact')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingContact) {
        const response = await contactsApi.update(editingContact._id, formData)
        setContacts(contacts.map(contact => 
          contact._id === editingContact._id 
            ? response.data
            : contact
        ))
      } else {
        const response = await contactsApi.create(formData)
        setContacts([...contacts, response.data])
      }
      setIsModalOpen(false)
      setEditingContact(null)
    } catch (err) {
      console.error('Error saving contact:', err)
      alert('Failed to save contact')
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
        <h1 className="text-2xl font-semibold">Contact Messages</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
        <div className="min-w-full">
          <DataTable
            columns={columns}
            data={contacts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingContact(null)
        }}
        title={editingContact ? 'Edit Contact' : 'View Contact'}
      >
        <Form
          fields={formFields}
          initialData={editingContact}
          onSubmit={handleSubmit}
          submitLabel={editingContact ? 'Update Contact' : 'Save Contact'}
        />
      </Modal>

      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title="Project Details"
        size="lg"
      >
        <div className="p-4">
          <div className="whitespace-pre-wrap text-gray-700">
            {selectedDetails || '-'}
          </div>
        </div>
      </Modal>
    </div>
  )
} 