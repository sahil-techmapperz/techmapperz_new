import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(request, { params }) {
  try {
    const { path: filePath } = params
    
    if (!filePath || filePath.length === 0) {
      return new NextResponse('File path is required', { status: 400 })
    }

    // Join the path segments
    const requestedPath = Array.isArray(filePath) ? filePath.join('/') : filePath
    console.log('Static Files API - Requested path:', requestedPath)
    
    // Construct the full file path
    const fullPath = path.join(process.cwd(), 'public', 'uploads', requestedPath)
    console.log('Static Files API - Full path:', fullPath)
    
    // Security check: ensure the path is within the uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    const resolvedPath = path.resolve(fullPath)
    const resolvedUploadsDir = path.resolve(uploadsDir)
    
    console.log('Static Files API - Resolved path:', resolvedPath)
    console.log('Static Files API - Uploads dir:', resolvedUploadsDir)
    console.log('Static Files API - Path is safe:', resolvedPath.startsWith(resolvedUploadsDir))
    
    if (!resolvedPath.startsWith(resolvedUploadsDir)) {
      console.log('Static Files API - Security violation: path traversal attempt')
      return new NextResponse('Forbidden', { status: 403 })
    }
    
    // Check if file exists
    if (!fs.existsSync(resolvedPath)) {
      console.log('Static Files API - File not found:', resolvedPath)
      return new NextResponse('File not found', { status: 404 })
    }
    
    // Get file stats
    const stats = fs.statSync(resolvedPath)
    if (!stats.isFile()) {
      console.log('Static Files API - Not a file:', resolvedPath)
      return new NextResponse('Not a file', { status: 404 })
    }
    
    // Determine content type based on file extension
    const ext = path.extname(resolvedPath).toLowerCase()
    const contentTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.txt': 'text/plain',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.html': 'text/html',
      '.ico': 'image/x-icon'
    }
    
    const contentType = contentTypes[ext] || 'application/octet-stream'
    console.log('Static Files API - Content type:', contentType, 'for extension:', ext)
    
    // Read the file as a buffer
    const fileBuffer = fs.readFileSync(resolvedPath)
    console.log('Static Files API - File size:', fileBuffer.length, 'bytes')
    
    // Create headers
    const headers = new Headers()
    headers.set('Content-Type', contentType)
    headers.set('Content-Length', fileBuffer.length.toString())
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    headers.set('ETag', `"${stats.mtime.getTime()}-${stats.size}"`)
    headers.set('Last-Modified', stats.mtime.toUTCString())
    headers.set('X-Content-Type-Options', 'nosniff')
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'GET')
    headers.set('X-Public-Route', 'true')
    
    // For images, add additional headers
    if (contentType.startsWith('image/')) {
      headers.set('Accept-Ranges', 'bytes')
    }
    
    console.log('Static Files API - Serving file with headers:', Object.fromEntries(headers.entries()))
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers
    })
    
  } catch (error) {
    console.error('Static Files API - Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 