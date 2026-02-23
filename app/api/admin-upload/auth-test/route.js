import { NextResponse } from 'next/server'

export async function GET(request) {
  const testRoutes = [
    '/api/static-files/events/1751257922269-cbcbswsdsku.webp',
    '/api/test-static',
    '/uploads/events/1751257922269-cbcbswsdsku.webp',
    '/api/upload',
    '/api/local-upload',
    '/login',
    '/dashboard' // This should require auth
  ]

  const results = {
    timestamp: new Date().toISOString(),
    message: 'Authentication test for static file routes',
    publicRoutes: [
      '/api/static-files/*',
      '/api/test-static',
      '/uploads/*',
      '/api/upload',
      '/api/local-upload',
      '/login'
    ],
    protectedRoutes: [
      '/dashboard',
      '/* (all other routes)'
    ],
    testUrls: testRoutes.map(route => ({
      url: route,
      shouldBePublic: route !== '/dashboard',
      fullUrl: `${request.nextUrl.origin}${route}`
    })),
    middleware: {
      excludedPaths: [
        'api/static-files',
        'api/test-static', 
        'api/upload',
        'api/local-upload',
        'uploads',
        '_next/static',
        '_next/image',
        'favicon.ico'
      ]
    }
  }

  return NextResponse.json(results, { 
    status: 200,
    headers: {
      'X-Public-Route': 'true',
      'Access-Control-Allow-Origin': '*'
    }
  })
} 