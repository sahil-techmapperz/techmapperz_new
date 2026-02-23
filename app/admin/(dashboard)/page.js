'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  Briefcase, 
  FileText, 
  MessageSquare,
  Star,
  BookOpen,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import { 
  jobsApi, 
  articlesApi, 
  blogPostsApi, 
  testimonialsApi, 
  contactsApi,
  commentsApi 
} from '@/app/admin/_utils/api'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    jobs: 0,
    articles: 0,
    blogPosts: 0,
    testimonials: 0,
    contacts: 0,
    comments: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const [
        jobsRes,
        articlesRes,
        blogPostsRes,
        testimonialsRes,
        contactsRes,
        commentsRes
      ] = await Promise.all([
        jobsApi.getAll(),
        articlesApi.getAll(),
        blogPostsApi.getAll(),
        testimonialsApi.getAll(),
        contactsApi.getAll(),
        commentsApi.getAll()
      ])

      setStats({
        jobs: jobsRes.data.length,
        articles: articlesRes.data.length,
        blogPosts: blogPostsRes.data.length,
        testimonials: testimonialsRes.data.length,
        contacts: contactsRes.data.length,
        comments: commentsRes.data.length,
      })
      setError(null)
    } catch (err) {
      console.error('Error fetching stats:', err)
      setError('Failed to fetch dashboard statistics')
    } finally {
      setIsLoading(false)
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

  const statCards = [
    { 
      title: 'Total Jobs', 
      value: stats.jobs, 
      icon: Briefcase,
      color: 'bg-blue-500',
      trend: { 
        icon: TrendingUp, 
        value: '+12%', 
        text: 'from last month' 
      }
    },
    { 
      title: 'Articles', 
      value: stats.articles, 
      icon: FileText,
      color: 'bg-purple-500',
      trend: { 
        icon: TrendingDown, 
        value: '-5%', 
        text: 'from last month' 
      }
    },
    { 
      title: 'Blog Posts', 
      value: stats.blogPosts, 
      icon: BookOpen,
      color: 'bg-yellow-500',
      trend: { 
        icon: TrendingUp, 
        value: '+18%', 
        text: 'from last month' 
      }
    },
    { 
      title: 'Testimonials', 
      value: stats.testimonials, 
      icon: Star,
      color: 'bg-pink-500',
      trend: { 
        icon: TrendingUp, 
        value: '+8%', 
        text: 'from last month' 
      }
    },
    { 
      title: 'Contacts', 
      value: stats.contacts, 
      icon: Users,
      color: 'bg-green-500',
      trend: { 
        icon: TrendingUp, 
        value: '+23%', 
        text: 'from last month' 
      }
    },
    { 
      title: 'Comments', 
      value: stats.comments, 
      icon: MessageSquare,
      color: 'bg-indigo-500',
      trend: { 
        icon: TrendingUp, 
        value: '+42%', 
        text: 'from last month' 
      }
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend.icon
          return (
            <div
              key={stat.title}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <TrendIcon className={`h-4 w-4 ${
                  stat.trend.value.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`} />
                <span className={`ml-2 ${
                  stat.trend.value.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trend.value}
                </span>
                <span className="ml-2 text-gray-500">{stat.trend.text}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              <span className="text-gray-500">New job posted: Frontend Developer</span>
              <span className="ml-auto text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
              <span className="text-gray-500">New article published: "Tech Trends 2024"</span>
              <span className="ml-auto text-gray-400">5 hours ago</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
              <span className="text-gray-500">New testimonial received</span>
              <span className="ml-auto text-gray-400">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <FileText className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">New Article</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <Briefcase className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Post Job</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <BookOpen className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">New Blog Post</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <Star className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Add Testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 
