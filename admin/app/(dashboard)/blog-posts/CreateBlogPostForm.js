'use client'

import { useState, useEffect } from 'react'
import ImageUpload from '@/components/ImageUpload'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <div className="border rounded-md p-4 min-h-[400px] flex items-center justify-center">Loading editor...</div>
})

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
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
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
                  
                  const response = await fetch('/api/upload', {
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
    component: ({ value, onChange, name }) => (
      <div className="border rounded-md">
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
          value={value}
          onEditorChange={(content) => onChange({ target: { name, value: content } })}
          init={{
            height: 500,
            width: '100%',
            plugins: [
              'lists', 'link', 'image', 'table', 'code', 'help',
              'wordcount', 'media', 'searchreplace', 'visualblocks', 'fullscreen'
            ].join(' '),
            toolbar: [
              'undo redo | formatselect | bold italic | forecolor backcolor',
              'alignleft aligncenter alignright | bullist numlist | link image',
              'table code help | fullscreen'
            ].join(' | '),
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; max-width: 100%; margin: 0; padding: 1rem; }',
            images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append('image', blobInfo.blob(), blobInfo.filename());
              
              fetch('/api/upload', {
                method: 'POST',
                body: formData
              })
              .then(response => response.json())
              .then(result => {
                if (result.error) {
                  reject({ message: result.error, remove: true });
                } else {
                  resolve(result.url);
                }
              })
              .catch(error => {
                reject(error.message || 'Image upload failed');
              });
            }),
            automatic_uploads: true,
            images_reuse_filename: true,
            paste_data_images: true,
            image_uploadtab: true,
            file_picker_types: 'image',
            image_advtab: true,
            image_title: true,
            image_description: true,
            image_dimensions: true,
            image_class_list: [
              {title: 'Responsive', value: 'img-fluid'},
              {title: 'Thumbnail', value: 'img-thumbnail'}
            ],
            convert_urls: false,
            relative_urls: false,
            remove_script_host: false,
          }}
        />
      </div>
    )
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.title || !formData.maincontent || !formData.category || !formData.selectedAuthor) {
      alert('Please fill in all required fields (Title, Content, Category, and Author)')
      return
    }

    // Find the selected author from the authors list
    const selectedAuthor = authors.find(author => author._id === formData.selectedAuthor)
    
    if (!selectedAuthor) {
      alert('Please select an author')
      return
    }

    // Format the data according to the API's expected structure
    const postData = {
      title: formData.title,
      content: formData.maincontent,
      maincontent: formData.maincontent,
      category: formData.category,
      images: [formData.featuredImage].filter(Boolean),
      author: selectedAuthor._id // Send just the author ID
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/NewBlogpost`, {
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
    <form onSubmit={handleSubmit} className="space-y-6">
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
  )
} 