'use client'

import { useState, useEffect } from 'react'
import ImageUpload from './ImageUpload'

export default function Form({ 
  fields, 
  initialData = {}, 
  onSubmit,
  submitLabel = 'Submit',
  hideSubmitButton = false,
  passEventToOnSubmit = false // New prop to control behavior
}) {
  // Initialize form data with field values if provided
  const getInitialData = () => {
    const data = { ...initialData }
    fields.forEach(field => {
      if (field.value !== undefined && data[field.name] === undefined) {
        data[field.name] = field.value
      }
    })
    return data
  }
  
  const [formData, setFormData] = useState(getInitialData())
  const [errors, setErrors] = useState({})

  // Update form data when field values change (for edit mode)
  useEffect(() => {
    const updatedData = {}
    let hasChanges = false
    
    fields.forEach(field => {
      if (field.value !== undefined) {
        updatedData[field.name] = field.value
        if (formData[field.name] !== field.value) {
          hasChanges = true
        }
      }
    })
    
    if (hasChanges) {
      setFormData(prev => ({
        ...prev,
        ...updatedData
      }))
    }
  }, [fields])

  // Update form data when initialData changes (for edit mode)
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      const hasValidData = Object.values(initialData).some(value => 
        value !== undefined && value !== '' && value !== null
      )
      
      if (hasValidData) {
        console.log('Form - Updating with initialData:', initialData)
        setFormData(prev => ({
          ...prev,
          ...initialData
        }))
      }
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

    // Call field-specific onChange if it exists
    const field = fields.find(f => f.name === name)
    if (field && field.onChange) {
      field.onChange(newValue)
    }
  }

  const handleImageChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Call field-specific onChange if it exists
    const field = fields.find(f => f.name === name)
    if (field && field.onChange) {
      field.onChange(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    const newErrors = {}
    
    fields.forEach(field => {
      if (field.required) {
        const value = formData[field.name]
        
        // For checkboxes, we don't require them to be checked, just that they have a value (true/false)
        if (field.type === 'checkbox') {
          if (value === undefined || value === null) {
            newErrors[field.name] = `${field.label} is required`
          }
        } else {
          // For other fields, check if they're empty
          if (!value) {
            newErrors[field.name] = `${field.label} is required`
          }
        }
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Support both old and new patterns
    if (passEventToOnSubmit) {
      // Old pattern: pass the event object (for compatibility with existing pages)
      onSubmit(e)
    } else {
      // New pattern: pass the form data (recommended)
      onSubmit(formData)
    }
  }

  const renderField = (field) => {
    if (field.type === 'custom' && field.component) {
      const CustomComponent = field.component
      return (
        <CustomComponent
          value={formData[field.name] || ''}
          onChange={(value) => handleImageChange(field.name, value)}
          label={field.label}
          {...(field.props || {})}
        />
      )
    }
    
    if (field.component) {
      return field.component({
        value: formData[field.name] || '',
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
            value={formData[field.name] || ''}
            onChange={handleChange}
            rows={4}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors[field.name] ? 'border-red-500' : ''
            }`}
            placeholder={field.placeholder}
          />
        )
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors[field.name] ? 'border-red-500' : ''
            }`}
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
              onChange={(value) => handleImageChange(field.name, value)}
              label={field.label}
              accept={field.accept || 'image/*'}
            />
          </div>
        )
      case 'checkbox':
        return (
          <div className="mt-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={field.name}
                name={field.name}
                checked={formData[field.name] || false}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900">
                {field.description || field.label}
              </label>
            </div>
          </div>
        )
      default:
        return (
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={`mt-1 py-2 px-4  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors[field.name] ? 'border-red-500' : ''
            }`}
            placeholder={field.placeholder}
          />
        )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          {/* Don't render label for custom components and checkboxes as they handle their own labels */}
          {field.type !== 'custom' && field.type !== 'checkbox' && (
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
          )}
          
          {renderField(field)}
          
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {!hideSubmitButton && (
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  )
} 
