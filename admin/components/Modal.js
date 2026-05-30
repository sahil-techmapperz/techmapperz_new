import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children, size = 'md', fullPage = false }) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'w-full h-full m-0 rounded-none'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className={`relative bg-white rounded-lg w-[50vw] shadow-xl transform transition-all ${fullPage ? sizeClasses.full : sizeClasses[size]}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className={`${fullPage ? 'h-[calc(100vh-4rem)] overflow-y-auto' : 'p-4'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 