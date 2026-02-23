'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@/components/Form'
import Alert from '@/components/Alert'
import Cookies from 'js-cookie'

const formFields = [
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
]

export default function LoginPage() {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('error')

  const handleSubmit = async (formData) => {
    try {
      // Use the signin endpoint instead of login
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      const { token } = data
      
      // Store token in cookie
      Cookies.set('token', token, { expires: 7 }) // Token expires in 7 days
      
      setAlertMessage('Login successful! Redirecting...')
      setAlertType('success')
      setShowAlert(true)
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (error) {
      setAlertMessage(error.message || 'Login failed. Please try again.')
      setAlertType('error')
      setShowAlert(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form
            fields={formFields}
            onSubmit={handleSubmit}
            submitLabel="Sign in"
          />
        </div>
      </div>
      {showAlert && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  )
} 