'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Alert({ 
  message, 
  type = 'error', 
  onClose, 
  duration = 5000 
}) {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const bgColor = {
    error: 'bg-red-50 text-red-800 border-red-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  }[type]

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg border ${bgColor} shadow-lg flex items-center gap-3`}>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="p-1 hover:bg-opacity-10 hover:bg-black rounded-full"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
} 
