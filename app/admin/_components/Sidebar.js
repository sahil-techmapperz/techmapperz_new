"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Users, 
  MessageCircle,
  Briefcase,
  UserCircle,
  Settings,
  ClipboardList,
  LogOut,
  Mail,
  Calendar,
  Heart,
  Building,
  FolderOpen
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Culture', href: '/admin/culture', icon: Heart },
  { name: 'Workspace', href: '/admin/workspace', icon: Building },
  { name: 'Blog Posts', href: '/admin/blog-posts', icon: FileText },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'Contacts', href: '/admin/contacts', icon: Users },
  { name: 'Jobs', href: '/admin/jobs', icon: ClipboardList },
  { name: 'Career', href: '/admin/career', icon: Briefcase },
  { name: 'Comments', href: '/admin/comments', icon: MessageCircle },
  { name: 'Authors', href: '/admin/authors', icon: UserCircle },
  { name: 'Newsletter', href: '/admin/newsletter', icon: Mail },
  { name: 'Portfolios', href: '/admin/portfolio', icon: FolderOpen },
  { name: 'Logout', href: '/admin/logout', icon: LogOut },
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
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
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
