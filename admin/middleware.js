import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the pathname of the request (e.g. /blog, /about)
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || 
                      path.startsWith('/api/static-files/') ||
                      path.startsWith('/api/test-static') ||
                      path.startsWith('/api/auth-test') ||
                      path.startsWith('/uploads/') ||
                      path.startsWith('/api/upload') ||
                      path.startsWith('/api/local-upload')

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || ''

  // If the path is public and user is logged in,
  // redirect to dashboard (except for static files and uploads)
  if (isPublicPath && token && path === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // If the path is protected and user is not logged in,
  // redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/static-files (static file API routes)
     * - api/test-static (debug API route)
     * - api/upload (upload API routes)
     * - api/local-upload (local upload API route)
     * - uploads (direct static file access)
     * - _next/static (Next.js static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
         '/((?!api/static-files|api/test-static|api/auth-test|api/upload|api/local-upload|uploads|_next/static|_next/image|favicon.ico).*)',
  ],
} 