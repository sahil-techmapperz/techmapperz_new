'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { newsletterApi } from '@/utils/api'

function UnsubscribeComponent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleUnsubscribe = async () => {
      try {
        const email = searchParams.get('email')
        if (!email) {
          setStatus('error')
          setMessage('No email address provided')
          return
        }

        await newsletterApi.unsubscribe(email)
        setStatus('success')
        setMessage('You have been successfully unsubscribed from our newsletter.')
      } catch (error) {
        setStatus('error')
        setMessage('Failed to unsubscribe. Please try again later.')
        console.error('Unsubscribe error:', error)
      }
    }

    handleUnsubscribe()
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Newsletter Unsubscribe
          </h2>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {status === 'loading' && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing your unsubscribe request...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-gray-600">{message}</p>
              <p className="mt-2 text-sm text-gray-500">
                You can resubscribe at any time by visiting our website.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="mt-4 text-gray-600">{message}</p>
              <p className="mt-2 text-sm text-gray-500">
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ✅ Wrap component with Suspense
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UnsubscribeComponent />
    </Suspense>
  )
}
