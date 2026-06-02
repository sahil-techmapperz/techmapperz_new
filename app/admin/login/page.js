'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { Lock, Mail, ArrowRight, Loader2, ShieldCheck } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ show: false, message: '', type: '' })

    try {
      const baseURL = typeof window !== 'undefined' 
        ? window.location.origin 
        : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
        
      const response = await fetch(`${baseURL}/api/admin/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      const data = await response.json()
      const { token, user } = data
      
      // Store token and email in cookies
      Cookies.set('token', token, { expires: 7 }) 
      if (user && user.length > 0 && user[0].email) {
        Cookies.set('adminEmail', user[0].email, { expires: 7 })
      }
      
      setAlert({ show: true, message: 'Authentication successful', type: 'success' })
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1000)
    } catch (error) {
      setAlert({ show: true, message: error.message || 'Login failed', type: 'error' })
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0f172a]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-teal-500/20 blur-[90px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="relative z-10 w-full max-w-md px-6 py-12">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 sm:p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.5)] group">
          
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-tight">Admin Portal</h2>
            <p className="text-center text-gray-300 text-sm mb-8">Enter your credentials to access the dashboard</p>

            {alert.show && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center transform transition-all duration-300 translate-y-0 opacity-100 ${
                alert.type === 'success' ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30' : 'bg-red-500/20 text-red-200 border border-red-500/30'
              }`}>
                {alert.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-900/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-gray-900/60 transition-all duration-300"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-900/40 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-gray-900/60 transition-all duration-300"
                    placeholder="Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Techmapperz. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
