'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import Form from '@/components/Form'
import Modal from '@/components/Modal'
import { Plus } from 'lucide-react'
import { authorsApi } from '@/utils/api'
import ImageKit from 'imagekit-javascript'

// Initialize ImageKit
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  authenticationEndpoint: '/api/imagekit/auth'
});

const columns = [
  { 
    key: 'picture', 
    label: 'Profile Picture',
    render: (value) => (
      value ? (
        <img src={value} alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-200">
          <span className="text-gray-500">-</span>
        </div>
      )
    )
  },
  { 
    key: 'name', 
    label: 'Name',
    render: (value) => (
      <div className="font-medium">{value || '-'}</div>
    )
  },
  { 
    key: 'email', 
    label: 'Email',
    render: (value) => (
      <div className="text-indigo-600">{value || '-'}</div>
    )
  },
  { 
    key: 'authorDetails', 
    label: 'Bio',
    render: (value) => (
      <div className="max-w-md text-gray-600">{value || '-'}</div>
    )
  },
  { 
    key: 'socialLinks', 
    label: 'Social Links',
    render: (value) => (
      <div className="flex gap-3">
        {value?.facebook && (
          <a href={value.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            FB
          </a>
        )}
        {value?.twitter && (
          <a href={value.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            TW
          </a>
        )}
        {value?.linkedin && (
          <a href={value.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            IN
          </a>
        )}
        {!value?.facebook && !value?.twitter && !value?.linkedin && '-'}
      </div>
    )
  }
]

const formFields = [
  { 
    name: 'name', 
    label: 'Full Name', 
    type: 'text', 
    required: true,
    validation: (value) => value.length >= 2 || 'Name must be at least 2 characters'
  },
  { 
    name: 'email', 
    label: 'Email', 
    type: 'email', 
    required: true,
    validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format'
  },
  { 
    name: 'bio', 
    label: 'Biography', 
    type: 'textarea', 
    required: true,
    validation: (value) => value.length >= 50 || 'Biography must be at least 50 characters'
  },
  { 
    name: 'image', 
    label: 'Profile Picture', 
    type: 'file',
    accept: 'image/*',
    required: false,
    validation: (value) => {
      if (!value) return true;
      const file = value;
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        return 'Please upload a valid image file (JPEG, PNG, or GIF)';
      }
      if (file.size > maxSize) {
        return 'Image size should be less than 5MB';
      }
      return true;
    }
  },
  { 
    name: 'socialLinks', 
    label: 'Social Media Links (one per line)', 
    type: 'textarea',
    help: 'Enter each social media link on a new line',
    transform: (value) => value.split('\n').filter(link => link.trim()),
    validation: (value) => {
      if (!value) return true;
      const links = value.split('\n').filter(link => link.trim());
      return links.every(link => {
        try {
          new URL(link);
          return true;
        } catch {
          return false;
        }
      }) || 'Invalid URL format in social links';
    }
  },
  { 
    name: 'expertise', 
    label: 'Areas of Expertise (one per line)', 
    type: 'textarea',
    help: 'Enter each expertise area on a new line',
    transform: (value) => value.split('\n').filter(exp => exp.trim()),
    validation: (value) => {
      if (!value) return true
      const expertise = value.split('\n').filter(exp => exp.trim())
      return expertise.length > 0 || 'At least one expertise area is required'
    }
  },
]

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAuthor, setEditingAuthor] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  useEffect(() => {
    fetchAuthors()
  }, [])

  const fetchAuthors = async () => {
    try {
      setIsLoading(true)
      const response = await authorsApi.getAll()
      console.log('Raw API Response:', response) // Debug log
      
      if (response && response.data) {
        // Ensure we have an array of authors
        const authorsArray = Array.isArray(response.data) ? response.data : [response.data]
        console.log('Processed Authors:', authorsArray) // Debug log
        
        // Map the data to ensure all fields are present
        const processedAuthors = authorsArray.map(author => ({
          _id: author._id || '',
          name: author.name || '',
          email: author.email || '',
          picture: author.picture || '',
          authorDetails: author.authorDetails || '',
          socialLinks: author.socialLinks || {
            facebook: '',
            twitter: '',
            linkedin: ''
          },
          expertise: author.expertise || []
        }))
        
        console.log('Final Processed Authors:', processedAuthors) // Debug log
        setAuthors(processedAuthors)
      } else {
        console.error('Invalid response format:', response) // Debug log
        setError('No data received from the API')
      }
      setError(null)
    } catch (err) {
      console.error('Error fetching authors:', err)
      setError('Failed to fetch authors')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (author) => {
    // Transform the author data for the form
    const authorForForm = {
      _id: author._id || '',
      name: author.name || '',
      email: author.email || '',
      bio: author.authorDetails || '',
      avatarUrl: author.picture || '',
      socialLinks: Object.entries(author.socialLinks || {})
        .map(([platform, url]) => url)
        .filter(url => url)
        .join('\n'),
      expertise: author.expertise || ''
    };
    setEditingAuthor(authorForForm);
    setIsModalOpen(true);
  };

  const handleDelete = async (author) => {
    if (!window.confirm('Are you sure you want to delete this author?')) {
      return
    }

    try {
      await authorsApi.delete(author._id)
      setAuthors(authors.filter(a => a._id !== author._id))
    } catch (err) {
      console.error('Error deleting author:', err)
      alert('Failed to delete author')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      setIsLoading(true);
      
      // Create FormData object
      const submitData = new FormData();
      
      // Add all form fields with null checks
      submitData.append('name', formData.name || '');
      submitData.append('email', formData.email || '');
      submitData.append('authorDetails', formData.bio || '');
      submitData.append('password', 'defaultPassword123');
      submitData.append('socialLinks', JSON.stringify({
        facebook: formData.socialLinks?.split('\n').find(link => link.includes('facebook')) || '',
        twitter: formData.socialLinks?.split('\n').find(link => link.includes('x.com')) || '',
        linkedin: formData.socialLinks?.split('\n').find(link => link.includes('linkedin')) || ''
      }));

      // Add image file if selected
      if (formData.image) {
        submitData.append('image', formData.image);
      }

      let result;
      if (editingAuthor) {
        result = await authorsApi.update(editingAuthor._id, submitData);
      } else {
        result = await authorsApi.create(submitData);
      }

      if (editingAuthor) {
        setAuthors(authors.map(author => 
          author._id === editingAuthor._id 
            ? result.data
            : author
        ));
      } else {
        // For new authors, add to the beginning of the list
        setAuthors([result.data.author, ...authors]);
      }

      setIsModalOpen(false);
      setEditingAuthor(null);
      // Refresh the authors list to ensure we have the latest data
      await fetchAuthors();
    } catch (err) {
      console.error('Error saving author:', err);
      alert('Failed to save author: ' + (err.response?.data?.error || err.message));
    } finally {
      setIsLoading(false);
    }
  };

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
        <h1 className="text-2xl font-semibold">Authors</h1>
        <button 
          onClick={() => {
            setEditingAuthor(null);
            setIsModalOpen(true);
            setUploadProgress(0);
          }}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          Add New Author
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={authors}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAuthor(null);
          setUploadProgress(0);
        }}
        title={editingAuthor ? 'Edit Author' : 'Add New Author'}
      >
        <Form
          fields={formFields}
          initialData={editingAuthor || {
            name: '',
            email: '',
            bio: '',
            socialLinks: '',
            expertise: ''
          }}
          onSubmit={handleSubmit}
          submitLabel={editingAuthor ? 'Update Author' : 'Create Author'}
        />
      </Modal>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-sm w-full mx-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {editingAuthor ? 'Updating Author...' : 'Creating New Author...'}
            </h3>
            <p className="text-gray-600 text-center">
              {editingAuthor 
                ? 'Please wait while we update the author information and upload the image.'
                : 'Please wait while we create the new author and upload the image.'}
            </p>
            {uploadProgress > 0 && (
              <div className="w-full mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Uploading image: {uploadProgress}%
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 