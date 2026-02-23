'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Import Navbar and Footer
import Navbar from './Navbar'
const Footer = dynamic(() => import('./Footer'))
const SocialMediaIcons = dynamic(() => import('./SocialMediaIcons'))
const SlickCarouselProvider = dynamic(() => import('./SlickCarouselProvider'))

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  // For admin routes, don't show Navbar and Footer
  if (isAdminRoute) {
    return <main>{children}</main>
  }

  // For regular routes, show Navbar and Footer
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">{children}</main>
      <SlickCarouselProvider>
        <SocialMediaIcons />
        <Footer />
      </SlickCarouselProvider>
    </>
  )
}

