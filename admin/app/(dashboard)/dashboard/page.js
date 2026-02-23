'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  Briefcase, 
  MessageSquare,
  Star,
  BookOpen,
  Mail
} from 'lucide-react'
import { contactsApi, jobsApi, blogPostsApi, testimonialsApi, commentsApi, authApi, newsletterApi } from '@/utils/api'

const stats = [
  { name: 'Total Contacts', value: '0', icon: Users, color: 'bg-blue-500', api: contactsApi },
  { name: 'Active Jobs', value: '0', icon: Briefcase, color: 'bg-green-500', api: jobsApi },
  { name: 'Blog Posts', value: '0', icon: BookOpen, color: 'bg-yellow-500', api: blogPostsApi },
  { name: 'Testimonials', value: '0', icon: Star, color: 'bg-pink-500', api: testimonialsApi },
  { name: 'Comments', value: '0', icon: MessageSquare, color: 'bg-indigo-500', api: commentsApi },
  { name: 'Newsletter Subscribers', value: '0', icon: Mail, color: 'bg-purple-500', api: newsletterApi },
]

export default function DashboardPage() {
  const [statsData, setStatsData] = useState(stats)
  const [loginActivities, setLoginActivities] = useState([])
  const [recentSubscribers, setRecentSubscribers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
    fetchLoginActivities()
    fetchRecentSubscribers()
  }, [])

  const fetchLoginActivities = async () => {
    try {
      const response = await authApi.getRecentLogins()
      setLoginActivities(response.data)
    } catch (error) {
      console.error('Error fetching login activities:', error)
    }
  }

  const fetchRecentSubscribers = async () => {
    try {
      const response = await newsletterApi.getAll()
      setRecentSubscribers(response.data)
    } catch (error) {
      console.error('Error fetching recent subscribers:', error)
    }
  }

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const updatedStats = await Promise.all(
        stats.map(async (stat) => {
          try {
            const response = await stat.api.getAll()
            return {
              ...stat,
              value: stat.name === 'Blog Posts' 
                ? response.data.totalBlogPosts.toString()
                : response.data.length.toString()
            }
          } catch (error) {
            console.error(`Error fetching ${stat.name}:`, error)
            return stat
          }
        })
      )
      setStatsData(updatedStats)
      setError(null)
    } catch (error) {
      setError('Failed to fetch dashboard statistics')
      console.error('Error fetching stats:', error)
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

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Recent Login Activities (Last 10)</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {loginActivities.length > 0 ? (
              loginActivities.map((activity) => (
                <div key={activity._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.email}</p>
                    <p className="text-xs text-gray-500">ID: {activity._id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{activity.loginTime}</p>
                    <p className="text-xs text-green-600">Successful</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No recent login activities</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Recent Newsletter Subscribers</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {recentSubscribers.length > 0 ? (
              recentSubscribers.map((subscriber) => (
                <div key={subscriber._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{subscriber.email}</p>
                    <p className="text-xs text-gray-500">
                      Subscribed: {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600">Active</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No recent subscribers</p>
            )}
          </div>
        </div>
      </div>

      
    </div>
  )
} 