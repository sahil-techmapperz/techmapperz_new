'use client'

import { useState, useEffect } from 'react'
import { Upload, X, Loader } from 'lucide-react'

export default function EventImageUpload({ 
  value, 
  onChange, 
  label = 'Upload Image',
  type = 'events', // events, culture, workspace
  className = '',
  accept = 'image/*',
  required = false
}) {
  const [preview, setPreview] = useState(value)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  // Update preview when value prop changes (for edit mode)
  useEffect(() => {
    if (value !== preview) {
      console.log('EventImageUpload - Value changed to:', value)
      setPreview(value)
    }
  }, [value])

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setError('')
    setUploading(true)

    try {
      // Create preview immediately
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Upload to server
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      const response = await fetch('/api/local-upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed')
      }

      // Update preview with server URL and notify parent
      setPreview(result.url)
      onChange(result.url)

    } catch (error) {
      console.error('Upload error:', error)
      setError(error.message || 'Failed to upload image')
      setPreview(value) // Revert to original value
      onChange(value) // Revert to original value
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    setPreview('')
    setError('')
    onChange('')
  }

  const handleUrlInput = (url) => {
    setPreview(url)
    setError('')
    onChange(url)
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {/* File Upload Section */}
      <div className="flex items-start gap-4">
        {preview ? (
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg border"
              onError={(e) => {
                e.target.src = '/placeholder-image.svg'
              }}
            />
            {!uploading && (
              <button
                onClick={handleRemove}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {uploading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <Loader className="h-6 w-6 text-white animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center h-32 w-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
            {uploading ? (
              <Loader className="h-8 w-8 text-gray-400 animate-spin" />
            ) : (
              <>
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500 text-center">Click to upload</span>
              </>
            )}
            <input
              type="file"
              className="hidden"
              accept={accept}
              onChange={handleFileChange}
              disabled={uploading}
            />
          </label>
        )}

        <div className="flex-1 space-y-2">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Or paste image URL:
            </label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={preview && preview.startsWith('http') ? preview : ''}
              onChange={(e) => handleUrlInput(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={uploading}
            />
          </div>
          
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          
          <div className="text-xs text-gray-500">
            <p>• Supported formats: JPEG, PNG, GIF, WebP</p>
            <p>• Maximum size: 5MB</p>
            <p>• Recommended: 800x600px or higher</p>
          </div>
        </div>
      </div>
    </div>
  )
} 