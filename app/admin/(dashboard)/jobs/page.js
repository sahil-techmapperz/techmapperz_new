'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/app/admin/_components/DataTable'
import Form from '@/app/admin/_components/Form'
import Modal from '@/app/admin/_components/Modal'
import { Plus } from 'lucide-react'
import { jobsApi } from '@/app/admin/_utils/api'

const columns = [
  { key: 'designetion', label: 'Job Title' },
  { key: 'Jobtype', label: 'Job Type' },
  { key: 'location', label: 'Location' },
  { key: 'experience', label: 'Experience' },
  { key: 'JobID', label: 'Job ID' },
]

const formFields = [
  { name: 'designetion', label: 'Job Title', type: 'text', required: true },
  { 
    name: 'Jobtype', 
    label: 'Job Type', 
    type: 'select', 
    required: true,
    options: [
      { value: 'Full Time', label: 'Full Time' },
      { value: 'Part Time', label: 'Part Time' },
      { value: 'Contract', label: 'Contract' },
      { value: 'Internship', label: 'Internship' },
    ]
  },
  { name: 'location', label: 'Location', type: 'text', required: true },
  { name: 'experience', label: 'Experience', type: 'text', required: true },
  { name: 'JobID', label: 'Job ID', type: 'text', required: true },
  { 
    name: 'description', 
    label: 'Job Description', 
    type: 'textarea', 
    required: true 
  },
  { 
    name: 'education', 
    label: 'Education Requirements', 
    type: 'textarea' 
  },
  { 
    name: 'perksBenefits', 
    label: 'Perks & Benefits', 
    type: 'textarea' 
  },
  { 
    name: 'candidateProfile', 
    label: 'Candidate Profile', 
    type: 'textarea' 
  },
  { 
    name: 'roleResponsibility', 
    label: 'Role & Responsibilities', 
    type: 'textarea' 
  },
  { 
    name: 'salary', 
    label: 'Salary Range', 
    type: 'text' 
  },
]

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setIsLoading(true)
      const response = await jobsApi.getAll()
      const jobsData = Array.isArray(response.data) ? response.data : []
      setJobs(jobsData)
      setError(null)
    } catch (err) {
      setError('Failed to fetch jobs')
      console.error('Error fetching jobs:', err)
      setJobs([]) // Set empty array on error
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (job) => {
    console.log('Editing job:', job)
    setEditingJob(job)
    setIsModalOpen(true)
  }

  const handleDelete = async (job) => {
    if (!window.confirm('Are you sure you want to delete this job listing?')) {
      return
    }

    try {
      await jobsApi.delete(job._id)
      setJobs(jobs.filter(j => j._id !== job._id))
      fetchJobs(); // Refresh the list
    } catch (err) {
      console.error('Error deleting job:', err)
      alert('Failed to delete job')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingJob) {
        const response = await jobsApi.update(editingJob._id, formData)
        const updatedJob = response.data || response
        setJobs(jobs.map(job => 
          job._id === editingJob._id 
            ? updatedJob
            : job
        ))
        fetchJobs(); // Refresh the list
      } else {
        const response = await jobsApi.create(formData)
        const newJob = response.data || response
        setJobs([...jobs, newJob])
        fetchJobs(); // Refresh the list
      }
      setIsModalOpen(false)
      setEditingJob(null)
    } catch (err) {
      console.error('Error saving job:', err)
      alert('Failed to save job')
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
        <h1 className="text-2xl font-semibold text-black">Job Listings</h1>
        <button 
          onClick={() => {
            setEditingJob(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <Plus className="h-5 w-5" />
          Add New Job
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={jobs}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingJob(null)
        }}
        title={editingJob ? 'Edit Job Listing' : 'Add New Job Listing'}
      >
        <Form
          fields={formFields}
          initialData={editingJob}
          onSubmit={handleSubmit}
          submitLabel={editingJob ? 'Update Job' : 'Create Job'}
        />
      </Modal>
    </div>
  )
} 
