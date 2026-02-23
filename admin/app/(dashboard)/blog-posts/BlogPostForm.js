'use client'

import { useState } from 'react'
import ImageUpload from '@/components/ImageUpload'
import dynamic from 'next/dynamic'

// Dynamically import TinyMCE Editor with no SSR
const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <div className="border rounded-md p-4 min-h-[400px] flex items-center justify-center">Loading editor...</div>
})

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
        <div className="border rounded-md">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={value}
            onEditorChange={handleEditorChange}
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