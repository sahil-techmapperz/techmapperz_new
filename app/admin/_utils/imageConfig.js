// Image URL Configuration
export const imageConfig = {
  // Frontend URL for locally uploaded images
  frontendUrl: typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
  
  // Backend API URL
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  
  // Helper function to convert image paths to full URLs
  getFullImageUrl: (imagePath) => {
    if (!imagePath) return imagePath
    
    // If it's already a full URL (starts with http:// or https://), return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    
    // If it's a local upload path (starts with /uploads/), prepend the frontend base URL
    if (imagePath.startsWith('/uploads/')) {
      // Use the frontend URL for uploaded images (since they're stored locally)
      return `${imageConfig.frontendUrl}${imagePath}`
    }
    
    // For other relative paths, use the API base URL
    return `${imageConfig.apiUrl}${imagePath.startsWith('/') ? imagePath : '/' + imagePath}`
  }
}

export default imageConfig 
