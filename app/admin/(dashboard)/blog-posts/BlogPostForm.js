'use client'

import { useState } from 'react'
import ImageUpload from '@/app/admin/_components/ImageUpload'
import BlockEditor from '@/app/admin/_components/BlockEditor/BlockEditor'

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

export default function BlogPostForm({ field, initialData, onFieldChange }) {
  const [value, setValue] = useState(initialData[field.name] || '')

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    onFieldChange(field.name, newValue)
  }

  const handleImageChange = (newValue) => {
    setValue(newValue)
    onFieldChange(field.name, newValue)
  }

  const handleEditorChange = (content) => {
    setValue(content)
    onFieldChange(field.name, content)
  }

  if (field.component) {
    return field.component({
      value,
      onChange: handleChange,
      name: field.name
    })
  }

  switch (field.type) {
    case 'textarea':
      return (
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={handleChange}
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
          value={value}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${field.className || ''}`}
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
            value={value}
            onChange={handleImageChange}
            label={field.label}
            accept={field.accept || 'image/*'}
            multiple={field.multiple || false}
          />
        </div>
      )
    case 'richtext':
      return (
        <div className="min-h-[400px]">
          <BlockEditor
            value={value}
            onChange={handleEditorChange}
            name={field.name}
            onImageUpload={handleImageUpload}
          />
        </div>
      )
    default:
      return (
        <input
          type={field.type || 'text'}
          id={field.name}
          name={field.name}
          value={value}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${field.className || ''}`}
          placeholder={field.placeholder}
        />
      )
  }
}
