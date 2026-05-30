'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'

export default function ImageUpload({ 
  value, 
  onChange, 
  label = 'Upload Image',
  className = '',
  accept = 'image/*'
}) {
  const [preview, setPreview] = useState(value)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Create a preview URL
    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)
    
    // Pass the file to parent
    onChange(file)
  }

  const handleRemove = () => {
    setPreview('')
    onChange(null)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="flex items-center gap-4">
        {preview ? (
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center h-32 w-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
            <Upload className="h-8 w-8 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">Click to upload</span>
            <input
              type="file"
              className="hidden"
              accept={accept}
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  )
} 
