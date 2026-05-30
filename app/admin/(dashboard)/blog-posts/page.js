'use client'

import { useState, useEffect, useRef } from 'react'
import DataTable from '@/app/admin/_components/DataTable'
import Form from '@/app/admin/_components/Form'
import Modal from '@/app/admin/_components/Modal'
import { Plus } from 'lucide-react'
import { blogPostsApi } from '@/app/admin/_utils/api'
import dynamic from 'next/dynamic'
import BlogPostForm from './BlogPostForm'
import CreateBlogPostForm from './CreateBlogPostForm'

// Dynamically import TinyMCE Editor with no SSR
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
            // Image upload configuration
            images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append('image', blobInfo.blob(), blobInfo.filename());

              fetch('/api/admin-upload/upload', {
                method: 'POST',
                body: formData
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('HTTP Error: ' + response.status);
                  }
                  return response.json();
                })
                .then(result => {
                  console.log('Upload response:', result);
                  if (result.error) {
                    reject({ message: result.error, remove: true });
                  } else {
                    // The server should return the URL in the 'url' or 'location' field
                    const imageUrl = result.url || result.location;
                    if (!imageUrl) {
                      reject('Invalid JSON response: No URL found');
                      return;
                    }
                    resolve(imageUrl);
                  }
                })
                .catch(error => {
                  console.error('Upload error:', error);
                  reject(error.message || 'Image upload failed');
                });
            }),
            // Image upload settings
            automatic_uploads: true,
            images_reuse_filename: true,
            paste_data_images: true,
            image_uploadtab: true,
            file_picker_types: 'image',
            // Image editing features
            image_advtab: true,
            image_title: true,
            image_description: true,
            image_dimensions: true,
            image_class_list: [
              { title: 'Responsive', value: 'img-fluid' },
              { title: 'Thumbnail', value: 'img-thumbnail' }
            ],
            // Additional settings for better image handling
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
    name: 'images',
    label: 'Images',
    type: 'image',
    accept: 'image/*',
    multiple: true
  }
]

export default function BlogPostsPage() {
  const [posts, setPosts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalBlogPosts, setTotalBlogPosts] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [authors, setAuthors] = useState([])
  const perPage = 10 // Number of posts per page

  const handleImageClick = (imageUrl) => {

    if (!imageUrl) {
      console.error('No image URL provided');
      return;
    }
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  }

  const columns = [
    { key: 'title', label: 'Title' },
    {
      key: 'author',
      label: 'Author',
      render: (author) => {
        return author?.name || 'Unknown Author';
      }
    },
    { key: 'category', label: 'Category' },
    { key: 'created_at', label: 'Created At' },
    { key: 'comments.length', label: 'Comments' },
    {
      key: 'images',
      label: 'Images',
      render: (images) => {

        return (
          <div className="flex gap-2">
            {Array.isArray(images) && images.map((image, index) => {

              return (
                <div key={index} className="relative group cursor-pointer" onClick={() => handleImageClick(image)}>
                  <img
                    src={image}
                    alt={`Blog image ${index + 1}`}
                    className="w-12 h-12 object-cover rounded"
                    onError={(e) => {
                      console.error('Image load error:', image);
                      e.target.src = '/placeholder-image.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded flex items-center justify-center">
                    <span className="text-white text-xs opacity-0 group-hover:opacity-100">Click to view</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    },
  ]

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const response = await blogPostsApi.getAll(currentPage, perPage)
      //   console.log('API Response:', response.data); // Debug log
      //   console.log('Blog Posts:', response.data.blogPosts); // Debug log

      // Ensure images are properly formatted
      const formattedPosts = response.data.blogPosts.map(post => ({
        ...post,
        images: Array.isArray(post.images) ? post.images : []
      }));

      setPosts(formattedPosts)
      setTotalPages(response.data.totalPages)
      setTotalBlogPosts(response.data.totalBlogPosts)
      setError(null)
    } catch (err) {
      setError('Failed to fetch blog posts')
      console.error('Error fetching blog posts:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleEdit = (post) => {
    console.log('Editing post:', post)

    const formattedPost = {
      _id: post._id,
      featuredImage: post.images?.[0] || null,
      title: post.title || '',
      maincontent: post.maincontent || '',
      category: post.category || '',
      images: post.images || [],
      selectedAuthor: post.author?._id || '' // Keep the ID for the form
    }

    setEditingPost(formattedPost)
    setIsModalOpen(true)
  }

  const handleDelete = async (post) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) {
      return
    }

    try {
      await blogPostsApi.delete(post._id)
      setPosts(posts.filter(p => p._id !== post._id))
    } catch (err) {
      console.error('Error deleting blog post:', err)
      alert('Failed to delete blog post')
    }
  }

  const fetchAuthors = async () => {
    try {
      const response = await fetch('/api/author')
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
    }
  }

  useEffect(() => {
    fetchAuthors()
  }, [])

  const createBlogPost = async (postData) => {
    try {
      setPosts([...posts, postData]);
      setIsModalOpen(false);
      setEditingPost(null);
      fetchPosts(); // Refresh the blog posts list
    } catch (err) {
      console.error('Error handling blog post creation:', err);
      alert('Failed to handle blog post creation');
    }
  };

  const updateBlogPost = async (formData) => {
    try {
      console.log('Form data:', formData)

      // Validate required fields
      if (!formData.title || !formData.category) {
        alert('Please fill in all required fields (Title, and Category )');
        return;
      }

      const response = await blogPostsApi.update(editingPost._id, formData);
      setPosts(posts.map(post =>
        post._id === editingPost._id ? response.data : post
      ));
      setIsModalOpen(false);
      setEditingPost(null);
      fetchPosts(); // Refresh the blog posts list
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert(error.message || 'Failed to create blog post');
    }
  };

  const handleSubmit = async (formData) => {
    if (formData.createPost) {
      await createBlogPost(formData);
    } else {
      await updateBlogPost(formData);
    }
  };

  // Add a function to get initial form data
  const getInitialFormData = () => {
    if (editingPost) {
      return editingPost
    }
    return {
      featuredImage: null,
      title: '',
      maincontent: '',
      category: '',
      images: []
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
        <div>
          <h1 className="text-2xl font-semibold text-black">Blog Posts</h1>
          <p className="text-gray-600 mt-1">
            Showing {((currentPage - 1) * perPage) + 1} to {Math.min(currentPage * perPage, totalBlogPosts)} of {totalBlogPosts} posts
          </p>
        </div>
        <button
          onClick={() => {
            setEditingPost(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          Add New Post
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Image Preview Modal */}
      <Modal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        title="Image Preview"
        size="xl"
      >
        <div className="relative w-full">
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              console.error('Preview image load error:', e);
              e.target.src = '/placeholder.png';
            }}
          />
        </div>
      </Modal>

      {/* Blog Post Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingPost(null)
        }}
        title={editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
        fullPage={true}
      >
        <div className="max-w-full mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {editingPost ? (
              // Edit form using BlogPostForm
              <div className="space-y-6">
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
                          <BlogPostForm
                            field={field}
                            initialData={getInitialFormData()}
                            onFieldChange={(name, value) => {
                              setEditingPost(prev => ({
                                ...prev,
                                [name]: value
                              }))
                            }}
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {/* Title and Category Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-6 bg-gray-50 rounded-lg">
                  <div className="space-y-4">
                    {formFields
                      .filter(field => ['title'].includes(field.name))
                      .map(field => (
                        <div key={field.name}>
                          <label className="block text-sm font-medium text-gray-700">
                            {field.label}
                            {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <BlogPostForm
                            field={field}
                            initialData={getInitialFormData()}
                            onFieldChange={(name, value) => {
                              setEditingPost(prev => ({
                                ...prev,
                                [name]: value
                              }))
                            }}
                          />
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
                          <BlogPostForm
                            field={field}
                            initialData={getInitialFormData()}
                            onFieldChange={(name, value) => {
                              setEditingPost(prev => ({
                                ...prev,
                                [name]: value
                              }))
                            }}
                          />
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
                          <BlogPostForm
                            field={field}
                            initialData={getInitialFormData()}
                            onFieldChange={(name, value) => {
                              setEditingPost(prev => ({
                                ...prev,
                                [name]: value
                              }))
                            }}
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => {
                      handleSubmit(editingPost);
                    }}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    Update Post
                  </button>
                </div>
              </div>
            ) : (
              // Create form using CreateBlogPostForm
              <CreateBlogPostForm onSubmit={createBlogPost} />
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}






