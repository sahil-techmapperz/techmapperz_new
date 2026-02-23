'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/DataTable'
import Form from '@/components/Form'
import Modal from '@/components/Modal'
import { Plus } from 'lucide-react'
import { blogPostsApi, commentsApi } from '@/utils/api'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'content', label: 'Comment' },
  { key: 'blogTitle', label: 'Blog Title' },
]



export default function CommentsPage() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setIsLoading(true)
      const response = await commentsApi.getAll();
      
      // Wait for all blog titles to be fetched
      const commentsWithBlogTitles = await Promise.all(
        response.data.map(async (comment) => {
          const blog = await blogPostsApi.getsingalepostById(comment.postId);
          return {
            ...comment,
            blogTitle: blog.data.title
          };
        })
      );

    

      setComments(commentsWithBlogTitles);
      setError(null);
    } catch (err) {
      setError('Failed to fetch comments');
      console.error('Error fetching comments:', err);
    } finally {
      setIsLoading(false);
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
        <h1 className="text-2xl font-semibold">Comments</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={comments}
        />
      </div>
    </div>
  )
} 