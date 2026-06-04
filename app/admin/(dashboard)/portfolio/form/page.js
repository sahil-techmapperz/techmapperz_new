'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Save, ArrowLeft, Plus, Trash2, Upload } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const isEdit = !!id

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    name: '', category: '', slug: '', image: '', link: '', techStack: '', conclusion: '',
    details: [''],
    deliverables: [''],
    executionSteps: [{ step: '', title: '', desc: '' }],
    projectDetails: { year: '', location: '', duration: '', teamSize: '', industry: '', projectType: '', coreFunctionality: '', businessGoal: '' },
    challenges: [{ title: '', description: '' }],
    solutions: [{ title: '', description: '', features: [''] }],
    results: [{ label: '', value: '', description: '', icon: '' }],
    galleryImages: [],
    highlights: [{ title: '', description: '' }],
    relatedServices: [''],
    cta: { title: '', heading: '', description: '', button1Text: '', button1Link: '', button2Text: '', button2Link: '' },
    testimonial: { quote: '', author: '', position: '' }
  })

  useEffect(() => {
    if (isEdit) {
      fetchPortfolio()
    }
  }, [id])

  const fetchPortfolio = async () => {
    try {
      const res = await fetch('/api/admin/portfolio')
      const data = await res.json()
      if (data.success) {
        const item = data.data.find(p => p._id === id)
        if (item) {
          setFormData({
            ...item,
            details: item.details?.length ? item.details : [''],
            deliverables: item.deliverables?.length ? item.deliverables : [''],
            executionSteps: item.executionSteps?.length ? item.executionSteps : [{ step: '', title: '', desc: '' }],
            challenges: item.challenges?.length ? item.challenges : [{ title: '', description: '' }],
            solutions: item.solutions?.length ? item.solutions : [{ title: '', description: '', features: [''] }],
            results: item.results?.length ? item.results : [{ label: '', value: '', description: '', icon: '' }],
            galleryImages: item.galleryImages || [],
            highlights: item.highlights?.length ? item.highlights : [{ title: '', description: '' }],
            relatedServices: item.relatedServices?.length ? item.relatedServices : [''],
            cta: item.cta || { title: '', heading: '', description: '', button1Text: '', button1Link: '', button2Text: '', button2Link: '' },
            projectDetails: item.projectDetails || { year: '', location: '', duration: '', teamSize: '', industry: '', projectType: '', coreFunctionality: '', businessGoal: '' },
            testimonial: item.testimonial || { quote: '', author: '', position: '' }
          })
        }
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData(prev => ({ ...prev, [parent]: { ...prev[parent], [child]: value } }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleArrayChange = (arrayName, index, field, value) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]]
      if (field) {
        newArray[index] = { ...newArray[index], [field]: value }
      } else {
        newArray[index] = value 
      }
      return { ...prev, [arrayName]: newArray }
    })
  }

  const handleSolutionFeatureChange = (solutionIndex, featureIndex, value) => {
    setFormData(prev => {
      const newSolutions = [...prev.solutions]
      newSolutions[solutionIndex].features[featureIndex] = value
      return { ...prev, solutions: newSolutions }
    })
  }

  const addArrayItem = (arrayName, emptyItem) => {
    setFormData(prev => ({ ...prev, [arrayName]: [...prev[arrayName], emptyItem] }))
  }

  const removeArrayItem = (arrayName, index) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]]
      newArray.splice(index, 1)
      return { ...prev, [arrayName]: newArray }
    })
  }

  const addSolutionFeature = (solutionIndex) => {
    setFormData(prev => {
      const newSolutions = [...prev.solutions]
      newSolutions[solutionIndex].features.push('')
      return { ...prev, solutions: newSolutions }
    })
  }

  const removeSolutionFeature = (solutionIndex, featureIndex) => {
    setFormData(prev => {
      const newSolutions = [...prev.solutions]
      newSolutions[solutionIndex].features.splice(featureIndex, 1)
      return { ...prev, solutions: newSolutions }
    })
  }

  const handleGenericImageUpload = async (file, callback) => {
    if (!file) return
    setUploading(true)
    const data = new FormData()
    data.append('image', file)

    try {
      const response = await fetch('/api/admin-upload/upload', {
        method: 'POST',
        body: data
      })
      const result = await response.json()
      if (response.ok) {
        callback(result.url)
      } else {
        alert("Failed to upload image")
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert("Error uploading image")
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = isEdit ? `/api/admin/portfolio/${id}` : '/api/admin/portfolio'
      const method = isEdit ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/portfolio')
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to save portfolio')
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('Error saving portfolio')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/portfolio" className="p-2 bg-white rounded-lg border hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">{isEdit ? 'Edit Portfolio' : 'Create Portfolio'}</h1>
        </div>
        <button 
          onClick={handleSubmit} 
          disabled={saving}
          className="flex items-center bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          <Save className="h-5 w-5 mr-2" />
          {saving ? 'Saving...' : 'Save Portfolio'}
        </button>
      </div>

      <div className="space-y-8">
        {/* Basic Info */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name / Title *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug *</label>
              <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} required className="w-full border rounded-lg p-2" placeholder="e.g. IT, GIS" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Live Link</label>
              <input type="text" name="link" value={formData.link} onChange={handleChange} className="w-full border rounded-lg p-2" />
            </div>
            {isEdit && (
              <div>
                <label className="block text-sm font-medium mb-1">Project ID (_id)</label>
                <input type="text" value={id} readOnly className="w-full border rounded-lg p-2 bg-gray-100 text-gray-500 cursor-not-allowed" />
              </div>
            )}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Banner Image *</label>
              <div className="flex items-center space-x-4">
                {formData.image && <img src={formData.image} alt="Banner" className="h-16 w-32 object-cover rounded" />}
                <label className="flex items-center bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? 'Uploading...' : 'Upload Image'}
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleGenericImageUpload(e.target.files?.[0], (url) => setFormData(prev => ({ ...prev, image: url })))} disabled={uploading} />
                </label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Or paste image URL" className="flex-1 border rounded-lg p-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Project Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(formData.projectDetails)
              .filter(key => key !== '_id')
              .map(key => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1 capitalize">{key}</label>
                <input type="text" name={`projectDetails.${key}`} value={formData.projectDetails[key]} onChange={handleChange} className="w-full border rounded-lg p-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Details (Array of strings) */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Details / Descriptions</h2>
            <button type="button" onClick={() => addArrayItem('details', '')} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Paragraph</button>
          </div>
          {formData.details.map((detail, index) => (
            <div key={index} className="flex space-x-2">
              <textarea value={detail} onChange={(e) => handleArrayChange('details', index, null, e.target.value)} className="flex-1 border rounded-lg p-2" rows={3}></textarea>
              <button type="button" onClick={() => removeArrayItem('details', index)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Gallery Images */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Gallery Images (Up to 5)</h2>
            {formData.galleryImages.length < 5 && (
              <button type="button" onClick={() => addArrayItem('galleryImages', { src: '', alt: '' })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Image</button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.galleryImages.map((img, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg relative pr-10">
                <button type="button" onClick={() => removeArrayItem('galleryImages', index)} className="absolute top-2 right-2 text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 className="w-4 h-4" /></button>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    {img.src ? (
                      <img src={img.src} alt={img.alt || 'Gallery item'} className="h-16 w-16 object-cover rounded" />
                    ) : (
                      <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs text-center">No Img</div>
                    )}
                    <label className="flex items-center bg-white border px-3 py-1.5 rounded cursor-pointer hover:bg-gray-50 text-sm">
                      <Upload className="w-4 h-4 mr-2" />
                      {uploading ? '...' : 'Upload'}
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleGenericImageUpload(e.target.files?.[0], (url) => handleArrayChange('galleryImages', index, 'src', url))} disabled={uploading} />
                    </label>
                  </div>
                  <input type="text" value={img.src} onChange={(e) => handleArrayChange('galleryImages', index, 'src', e.target.value)} placeholder="Image URL" className="w-full border rounded p-2 text-sm" />
                  <input type="text" value={img.alt} onChange={(e) => handleArrayChange('galleryImages', index, 'alt', e.target.value)} placeholder="Alt Text / Caption (e.g. Project Overview)" className="w-full border rounded p-2 text-sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Challenges</h2>
            <button type="button" onClick={() => addArrayItem('challenges', { title: '', description: '' })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Challenge</button>
          </div>
          {formData.challenges.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg flex space-x-4">
              <div className="flex-1 space-y-3">
                <input type="text" value={item.title} onChange={(e) => handleArrayChange('challenges', index, 'title', e.target.value)} placeholder="Challenge Title" className="w-full border rounded p-2" />
                <textarea value={item.description} onChange={(e) => handleArrayChange('challenges', index, 'description', e.target.value)} placeholder="Challenge Description" className="w-full border rounded p-2" rows={2}></textarea>
              </div>
              <button type="button" onClick={() => removeArrayItem('challenges', index)} className="text-red-500 hover:bg-red-50 p-2 rounded h-fit"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Solutions */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Solutions</h2>
            <button type="button" onClick={() => addArrayItem('solutions', { title: '', description: '', features: [''] })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Solution</button>
          </div>
          {formData.solutions.map((item, sIndex) => (
            <div key={sIndex} className="bg-gray-50 p-4 rounded-lg flex space-x-4">
              <div className="flex-1 space-y-3">
                <input type="text" value={item.title} onChange={(e) => handleArrayChange('solutions', sIndex, 'title', e.target.value)} placeholder="Solution Title" className="w-full border rounded p-2" />
                <textarea value={item.description} onChange={(e) => handleArrayChange('solutions', sIndex, 'description', e.target.value)} placeholder="Solution Description" className="w-full border rounded p-2" rows={2}></textarea>
                
                <div className="pl-4 border-l-2 border-indigo-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Features</span>
                    <button type="button" onClick={() => addSolutionFeature(sIndex)} className="text-xs text-indigo-600 flex items-center"><Plus className="w-3 h-3 mr-1"/>Add Feature</button>
                  </div>
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex space-x-2">
                      <input type="text" value={feature} onChange={(e) => handleSolutionFeatureChange(sIndex, fIndex, e.target.value)} placeholder="Feature" className="flex-1 border rounded p-1 text-sm" />
                      <button type="button" onClick={() => removeSolutionFeature(sIndex, fIndex)} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => removeArrayItem('solutions', sIndex)} className="text-red-500 hover:bg-red-50 p-2 rounded h-fit"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Technology Stack */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Technology Stack</h2>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Tech Stack (comma separated or detailed string)</label>
            <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} placeholder="e.g. React, Node.js, MongoDB" className="w-full border rounded-lg p-2" />
          </div>
        </section>

        {/* Key Features (Deliverables) */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <button type="button" onClick={() => addArrayItem('deliverables', '')} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Feature</button>
          </div>
          {formData.deliverables.map((detail, index) => (
            <div key={index} className="flex space-x-2">
              <input type="text" value={detail} onChange={(e) => handleArrayChange('deliverables', index, null, e.target.value)} placeholder="Feature description" className="flex-1 border rounded-lg p-2" />
              <button type="button" onClick={() => removeArrayItem('deliverables', index)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Project Process (Execution Steps) */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Project Process</h2>
            <button type="button" onClick={() => addArrayItem('executionSteps', { step: '', title: '', desc: '' })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Step</button>
          </div>
          {formData.executionSteps.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg flex space-x-4">
              <div className="flex-1 space-y-3">
                <div className="flex space-x-2">
                  <input type="text" value={item.step} onChange={(e) => handleArrayChange('executionSteps', index, 'step', e.target.value)} placeholder="Step (e.g. 01)" className="w-20 border rounded p-2" />
                  <input type="text" value={item.title} onChange={(e) => handleArrayChange('executionSteps', index, 'title', e.target.value)} placeholder="Step Title" className="flex-1 border rounded p-2" />
                </div>
                <textarea value={item.desc} onChange={(e) => handleArrayChange('executionSteps', index, 'desc', e.target.value)} placeholder="Step Description" className="w-full border rounded p-2" rows={2}></textarea>
              </div>
              <button type="button" onClick={() => removeArrayItem('executionSteps', index)} className="text-red-500 hover:bg-red-50 p-2 rounded h-fit"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Highlights */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Project Highlights</h2>
            <button type="button" onClick={() => addArrayItem('highlights', { title: '', description: '' })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Highlight</button>
          </div>
          {formData.highlights.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg flex space-x-4">
              <div className="flex-1 space-y-3">
                <input type="text" value={item.title} onChange={(e) => handleArrayChange('highlights', index, 'title', e.target.value)} placeholder="Highlight Title" className="w-full border rounded p-2" />
                <textarea value={item.description} onChange={(e) => handleArrayChange('highlights', index, 'description', e.target.value)} placeholder="Highlight Description" className="w-full border rounded p-2" rows={2}></textarea>
              </div>
              <button type="button" onClick={() => removeArrayItem('highlights', index)} className="text-red-500 hover:bg-red-50 p-2 rounded h-fit"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Related Services */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Related Services</h2>
            <button type="button" onClick={() => addArrayItem('relatedServices', '')} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Service</button>
          </div>
          {formData.relatedServices.map((service, index) => (
            <div key={index} className="flex space-x-2">
              <input type="text" value={service} onChange={(e) => handleArrayChange('relatedServices', index, null, e.target.value)} placeholder="Service Name" className="flex-1 border rounded-lg p-2" />
              <button type="button" onClick={() => removeArrayItem('relatedServices', index)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </section>

        {/* Results */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Results</h2>
            <button type="button" onClick={() => addArrayItem('results', { description: '' })} className="text-indigo-600 text-sm flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Result</button>
          </div>
          <div className="space-y-3 mt-4">
            {formData.results.map((item, index) => (
              <div key={index} className="flex space-x-2">
                <input type="text" value={item.description} onChange={(e) => handleArrayChange('results', index, 'description', e.target.value)} placeholder="Result Description (e.g. improved control over sales orders)" className="flex-1 border rounded-lg p-2" />
                <button type="button" onClick={() => removeArrayItem('results', index)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 className="w-5 h-5" /></button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">CTA Banner</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Sub-Title (Cyan Text)</label>
              <input type="text" value={formData.cta?.title || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, title: e.target.value } }))} placeholder="Need a high-accuracy survey for your infrastructure project?" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Main Heading</label>
              <textarea value={formData.cta?.heading || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, heading: e.target.value } }))} placeholder="Let's plan your next drone LiDAR... (Use Enter for line breaks)" className="w-full border rounded p-2" rows={2}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Description Paragraph</label>
              <textarea value={formData.cta?.description || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, description: e.target.value } }))} placeholder="Techmapperz Helps Infrastructure Teams Execute Fast, Accurate..." className="w-full border rounded p-2" rows={3}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Button 1 Text</label>
                <input type="text" value={formData.cta?.button1Text || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, button1Text: e.target.value } }))} placeholder="Request a Proposal" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Button 1 Link</label>
                <input type="text" value={formData.cta?.button1Link || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, button1Link: e.target.value } }))} placeholder="/contact" className="w-full border rounded p-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Button 2 Text</label>
                <input type="text" value={formData.cta?.button2Text || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, button2Text: e.target.value } }))} placeholder="View Our Work" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Button 2 Link</label>
                <input type="text" value={formData.cta?.button2Link || ''} onChange={(e) => setFormData(prev => ({ ...prev, cta: { ...prev.cta, button2Link: e.target.value } }))} placeholder="/portfolios" className="w-full border rounded p-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial & Conclusion */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Conclusion & Testimonial</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Conclusion Paragraph</label>
            <textarea name="conclusion" value={formData.conclusion} onChange={handleChange} className="w-full border rounded-lg p-2" rows={3}></textarea>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h3 className="font-medium">Client Testimonial</h3>
            <textarea name="testimonial.quote" value={formData.testimonial.quote} onChange={handleChange} placeholder="Quote" className="w-full border rounded p-2" rows={2}></textarea>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="testimonial.author" value={formData.testimonial.author} onChange={handleChange} placeholder="Author Name" className="w-full border rounded p-2" />
              <input type="text" name="testimonial.position" value={formData.testimonial.position} onChange={handleChange} placeholder="Position/Company" className="w-full border rounded p-2" />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
