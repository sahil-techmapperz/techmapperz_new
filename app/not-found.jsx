import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found | Techmapperz',
  description: 'The page you are looking for could not be found. Explore our IT and GIS services or return to the homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Sorry, the page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#00B0FE] text-white px-6 py-3 rounded-lg hover:bg-[#0090d4] transition-colors duration-300"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link
              href="/portfolios"
              className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">Our Services</h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore our comprehensive IT and GIS solutions
            </p>
            <Link href="/service" className="text-[#00B0FE] hover:underline text-sm">
              View All Services →
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">
              Check out our latest projects and case studies
            </p>
            <Link href="/portfolios" className="text-[#00B0FE] hover:underline text-sm">
              View Portfolio →
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get in touch for custom solutions
            </p>
            <Link href="/contact" className="text-[#00B0FE] hover:underline text-sm">
              Contact Now →
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-[#00B0FE] hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}