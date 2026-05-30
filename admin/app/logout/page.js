'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { authApi } from '@/utils/api'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call the logout API
        await authApi.logout()
        
        // Remove the token from cookies
        Cookies.remove('token')
        
        // Redirect to login page
        router.push('/login')
      } catch (error) {
        console.error('Logout failed:', error)
        // Even if the API call fails, we should still remove the token and redirect
        Cookies.remove('token')
        router.push('/login')
      }
    }

    handleLogout()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
    </div>
  )
} 