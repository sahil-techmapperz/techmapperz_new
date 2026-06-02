'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Sidebar from '@/app/admin/_components/Sidebar'
import AdminNavbar from '@/app/admin/_components/AdminNavbar'
import Alert from '@/app/admin/_components/Alert'
import Cookies from 'js-cookie'
import { resetSessionTimeout } from '@/app/admin/_utils/api'

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      setAlertMessage('Please login to access this page')
      setShowAlert(true)
      router.push('/admin/login')
      return
    }

    // Check if user is trying to access protected routes
    const protectedRoutes = ['/admin/dashboard', '/admin/events', '/admin/culture', '/admin/workspace', '/admin/blog-posts', '/admin/testimonials', '/admin/contacts', '/admin/career', '/admin/comments', '/admin/authors', '/admin/portfolio']
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute && !token) {
      setAlertMessage('Access denied. Please login to continue.')
      setShowAlert(true)
      router.push('/admin/login')
      return
    }

    // Reset session timeout on any user activity
    const handleUserActivity = () => {
      resetSessionTimeout()
    }

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleUserActivity)
    window.addEventListener('keydown', handleUserActivity)
    window.addEventListener('click', handleUserActivity)
    window.addEventListener('scroll', handleUserActivity)

    // Initial session timeout setup
    resetSessionTimeout()

    // Load Google Fonts dynamically
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Raleway:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Lora:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap'
    document.head.appendChild(link)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleUserActivity)
      window.removeEventListener('keydown', handleUserActivity)
      window.removeEventListener('click', handleUserActivity)
      window.removeEventListener('scroll', handleUserActivity)
    }
  }, [pathname, router])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        <div className="flex-1 overflow-auto">
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
      {showAlert && (
        <Alert
          message={alertMessage}
          type="error"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  )
} 
