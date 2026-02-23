'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import ImageUpload from '@/app/admin/_components/ImageUpload'
import BlockEditor from '@/app/admin/_components/BlockEditor/BlockEditor'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

// Image upload handler for the block editor
const handleImageUpload = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  try {
    const response = await fetch('/api/admin-upload/upload', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      const data = await response.json()
      return data.url
    }
  } catch (error) {
    console.error('Image upload failed:', error)
  }
  return null
}

// Wrapper component for BlockEditor with image upload
const RichTextEditor = ({ value, onChange, name }) => {
  return (
    <div className="min-h-[400px]">
      <BlockEditor
        value={value}
        onChange={onChange}
        name={name}
        onImageUpload={handleImageUpload}
      />
    </div>
  )
}

const formFields = [
  {
    name: 'featuredImage',
    label: 'Featured Image',
    type: 'image',
    accept: 'image/*',
    multiple: false,
    required: true,
    component: ({ value, onChange, name }) => (
      <div className="space-y-4">
        {value && (
          <div className="relative w-full h-48 mb-4">
            <img
              src={value}
              alt="Featured"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-1 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                try {
                  const formData = new FormData();
                  formData.append('image', file);

                  const response = await fetch('/api/admin-upload/upload', {
                    method: 'POST',
                    body: formData
                  });

                  const data = await response.json();
                  if (data.url) {
                    onChange({ target: { name, value: data.url } });
                  }
                } catch (error) {
                  console.error('Error uploading image:', error);
                  alert('Failed to upload image');
                }
              }}
            />
          </label>
        </div>
      </div>
    )
  },
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true,
    className: 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
  },
  {
    name: 'maincontent',
    label: 'Main Content',
    type: 'richtext',
    required: true,
    component: (props) => <RichTextEditor {...props} />
  },
  {
    name: 'category',
    label: 'Category',
    type: 'text',
    required: true,
    className: 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
  },
  {
    name: 'selectedAuthor',
    label: 'Select Author',
    type: 'select',
    required: true,
    options: [], // Will be populated with authors
    className: 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
  }
]

export default function CreateBlogPostForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    featuredImage: null,
    title: '',
    maincontent: '',
    category: '',
    selectedAuthor: '',
    images: []
  })
  const [authors, setAuthors] = useState([])
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(true)
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState(false)
  const [credentialForm, setCredentialForm] = useState({
    email: '',
    password: ''
  })
  const [isVerifying, setIsVerifying] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    fetchAuthors()
  }, [])

  const fetchAuthors = async () => {
    try {
      setIsLoadingAuthors(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/author`)
      const data = await response.json()
      setAuthors(data)

      // Update the formFields options for author selection
      const authorField = formFields.find(field => field.name === 'selectedAuthor')
      if (authorField) {
        authorField.options = data.map(author => ({
          value: author._id,
          label: author.name
        }))
      }
    } catch (err) {
      console.error('Error fetching authors:', err)
    } finally {
      setIsLoadingAuthors(false)
    }
  }

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInitialSubmit = (e) => {
    e.preventDefault()

    // Validate required fields
    const missingFields = []
    if (!formData.title) missingFields.push('Title')
    if (!formData.maincontent) missingFields.push('Main Content')
    if (!formData.category) missingFields.push('Category')
    if (!formData.selectedAuthor) missingFields.push('Author')

    if (missingFields.length > 0) {
      console.log('Validation Failed. Missing:', missingFields, 'Current Data:', formData)
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`)
      return
    }

    if (!formData.featuredImage) {
      alert('Please upload a featured image')
      return;
    }

    setIsCredentialModalOpen(true)
  }

  const handleCredentialVerification = async (e) => {
    e.preventDefault()
    setIsVerifying(true)

    try {
      // 1. Verify credentials against login API
      const response = await fetch('/api/author/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentialForm)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      // 2. Check if verified author matches selected author
      if (data.author._id !== formData.selectedAuthor) {
        throw new Error('Credentials do not match the selected author');
      }

      // 3. Proceed to create blog post
      await createBlogPost(data.author._id);

      // Reset and close modal
      setIsCredentialModalOpen(false);
      setCredentialForm({ email: '', password: '' });

    } catch (error) {
      alert(error.message);
    } finally {
      setIsVerifying(false);
    }
  }

  const createBlogPost = async (authorId) => {
    const postData = {
      title: formData.title,
      content: formData.maincontent,
      maincontent: formData.maincontent,
      category: formData.category,
      images: [formData.featuredImage].filter(Boolean),
      author: authorId
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newblogpost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create blog post');
      }

      const data = await response.json();
      console.log('Blog post created successfully:', data);
      onSubmit(data); // Pass the created post data back to parent
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert(error.message || 'Failed to create blog post');
    }
  }

  const renderField = (field) => {
    if (field.component) {
      return field.component({
        value: formData[field.name] || '',
        onChange: (e) => handleChange(field.name, e.target.value),
        name: field.name
      })
    }

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            rows={4}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${field.className || ''}`}
            placeholder={field.placeholder}
          />
        )
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${field.className || ''}`}
            disabled={isLoadingAuthors}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'image':
        return (
          <div className="mt-1">
            <ImageUpload
              value={formData[field.name] || ''}
              onChange={(value) => handleChange(field.name, value)}
              label={field.label}
              accept={field.accept || 'image/*'}
              multiple={field.multiple || false}
            />
          </div>
        )
      default:
        return (
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${field.className || ''}`}
            placeholder={field.placeholder}
          />
        )
    }
  }

  return (
    <>
      <form onSubmit={handleInitialSubmit} className="space-y-6">
        {/* Featured Image Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h3>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
            {formFields
              .filter(field => field.name === 'featuredImage')
              .map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}
          </div>
        </div>

        {/* Title, Category, and Author Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 p-6 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            {formFields
              .filter(field => ['title'].includes(field.name))
              .map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}
          </div>
          <div className="space-y-4">
            {formFields
              .filter(field => ['category'].includes(field.name))
              .map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}
          </div>
          <div className="space-y-4">
            {formFields
              .filter(field => ['selectedAuthor'].includes(field.name))
              .map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                  {isLoadingAuthors && (
                    <p className="mt-1 text-sm text-gray-500">Loading authors...</p>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
          <div className="prose w-full">
            {formFields
              .filter(field => ['maincontent'].includes(field.name))
              .map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Create Post
          </button>
        </div>
      </form>

      {/* Credential Verification Modal */}
      {isCredentialModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setIsCredentialModalOpen(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Verify Author Credentials
                    </h3>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Please enter the credentials for the selected author to verify your identity.</p>
                    </div>

                    <form onSubmit={handleCredentialVerification} className="mt-5 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                          value={credentialForm.email}
                          onChange={(e) => setCredentialForm({ ...credentialForm, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                            value={credentialForm.password}
                            onChange={(e) => setCredentialForm({ ...credentialForm, password: e.target.value })}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                        <button
                          type="submit"
                          disabled={isVerifying}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                        >
                          {isVerifying ? 'Verifying...' : 'Verify & Create'}
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                          onClick={() => setIsCredentialModalOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
