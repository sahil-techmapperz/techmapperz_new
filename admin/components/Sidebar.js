"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Users, 
  Image, 
  MessageCircle,
  Briefcase,
  UserCircle,
  Settings,
  ClipboardList,
  LogOut,
  Mail,
  Calendar,
  Heart,
  Building
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Culture', href: '/culture', icon: Heart },
  { name: 'Workspace', href: '/workspace', icon: Building },
  { name: 'Blog Posts', href: '/blog-posts', icon: FileText },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Jobs', href: '/jobs', icon: ClipboardList },
  { name: 'Career', href: '/career', icon: Briefcase },
  { name: 'Comments', href: '/comments', icon: MessageCircle },
  { name: 'Authors', href: '/authors', icon: UserCircle },
  { name: 'Banners', href: '/banners', icon: Image },
  { name: 'Newsletter', href: '/newsletter', icon: Mail },
  { name: 'Logout', href: '/logout', icon: LogOut },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
} 