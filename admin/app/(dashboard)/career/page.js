'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import { Download } from 'lucide-react'

const columns = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'designetion', label: 'Position Applied For' },
  { key: 'mobile', label: 'Contact Number' },
  { key: 'Date', label: 'Application Date' },
  { 
    key: 'message', 
    label: 'Message',
    render: (value) => (
      <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:bg-gray-50 p-2 rounded cursor-pointer">
        {value}
      </div>
    )
  },
]

export default function CareerPage() {
  const [applications, setApplications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`)
      if (!response.ok) {
        throw new Error('Failed to fetch applications')
      }
      const data = await response.json()
      setApplications(data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch applications')
      console.error('Error fetching applications:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (application) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedCareerIds: [application._id] }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete application')
      }

      setApplications(applications.filter(app => app._id !== application._id))
    } catch (err) {
      console.error('Error deleting application:', err)
      alert('Failed to delete application')
    }
  }

  const handleDownloadResume = (resumeUrl) => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    } else {
      alert('No resume available')
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
        <h1 className="text-2xl font-semibold">Job Applications</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={applications}
          onDelete={handleDelete}
          actions={[
            {
              label: 'Download Resume',
              icon: Download,
              onClick: (application) => handleDownloadResume(application.resume),
              show: (application) => !!application.resume,
            },
          ]}
        />
      </div>
    </div>
  )
} 