import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(request) {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    
    // Check if uploads directory exists
    const uploadsExists = fs.existsSync(uploadsDir)
    
    // Get list of files in uploads directory (recursively)
    const getFilesRecursively = (dir) => {
      const files = []
      if (!fs.existsSync(dir)) return files
      
      const items = fs.readdirSync(dir)
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
          files.push(...getFilesRecursively(fullPath))
        } else {
          files.push(fullPath.replace(uploadsDir, '').replace(/\\/g, '/'))
        }
      }
      return files
    }
    
    const uploadedFiles = uploadsExists ? getFilesRecursively(uploadsDir) : []
    
    // Test specific file
    const testFile = '/events/1751257922269-cbcbswsdsku.webp'
    const testFilePath = path.join(uploadsDir, testFile)
    const testFileExists = fs.existsSync(testFilePath)
    let testFileStats = null
    
    if (testFileExists) {
      testFileStats = fs.statSync(testFilePath)
    }
    
    const result = {
      timestamp: new Date().toISOString(),
      uploadsDirectory: uploadsDir,
      uploadsExists,
      totalFiles: uploadedFiles.length,
      uploadedFiles: uploadedFiles.slice(0, 10), // Show first 10 files
      testFile: {
        path: testFile,
        fullPath: testFilePath,
        exists: testFileExists,
        stats: testFileStats ? {
          size: testFileStats.size,
          mtime: testFileStats.mtime,
          isFile: testFileStats.isFile()
        } : null
      },
      apiRoutes: {
        staticFiles: '/api/static-files/events/1751257922269-cbcbswsdsku.webp',
        directUpload: '/uploads/events/1751257922269-cbcbswsdsku.webp'
      }
    }
    
    return NextResponse.json(result, { status: 200 })
    
  } catch (error) {
    console.error('Test API Error:', error)
    return NextResponse.json({
      error: error.message,
      stack: error.stack
    }, { status: 500 })
  }
} 