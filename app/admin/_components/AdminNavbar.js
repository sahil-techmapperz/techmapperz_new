'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LogOut, Mail } from 'lucide-react'
import Cookies from 'js-cookie'
import company_logo from '@/public/logo.webp'

export default function AdminNavbar() {
  const router = useRouter()
  const [adminEmail, setAdminEmail] = useState('')

  useEffect(() => {
    // Get admin email from cookies
    const email = Cookies.get('adminEmail')
    if (email) {
      setAdminEmail(email)
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('adminEmail')
    router.push('/admin/login')
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/admin/dashboard" className="flex items-center">
              <Image
                src={company_logo}
                alt="Techmapperz Logo"
                priority
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Right side: Email and Logout */}
          <div className="flex items-center space-x-4">
            {/* Admin Email */}
            {adminEmail && (
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{adminEmail}</span>
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

