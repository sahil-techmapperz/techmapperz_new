# Static Files API Route - Debug & Test Guide

## 🔧 Configuration Summary

### Files Updated:
1. **`app/api/static-files/[...path]/route.js`** - Main API route for serving files
2. **`app/api/test-static/route.js`** - Debug/test endpoint  
3. **`app/api/auth-test/route.js`** - Authentication test endpoint
4. **`next.config.mjs`** - Rewrite configuration
5. **`middleware.js`** - Updated to exclude static file routes from authentication

### Rewrite Configuration:
```javascript
// next.config.mjs
async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/static-files/:path*',
      },
    ];
}
```

## 🧪 Testing Steps

### 1. Test Authentication Exclusions
First, verify that static file routes are excluded from authentication:
```
GET /api/auth-test
```

This will return:
- List of public routes (no authentication required)
- List of protected routes (authentication required)
- Test URLs to verify

### 2. Test File Discovery
Check what files exist on your server:
```
GET /api/test-static
```

This will return:
- Directory structure
- Available files
- File stats for test file
- Suggested URLs to test

### 3. Test API Route Directly
```
GET /api/static-files/events/1751257922269-cbcbswsdsku.webp
```

Should return:
- **Content-Type**: `image/webp`
- **Content-Length**: File size in bytes
- **Cache-Control**: `public, max-age=31536000, immutable`

### 4. Test Rewrite URL
```
GET /uploads/events/1751257922269-cbcbswsdsku.webp
```

This should be rewritten to the API route above.

## 🔍 Debug Information

### Expected Response Headers:
```
HTTP/1.1 200 OK
Content-Type: image/webp
Content-Length: [file-size]
Cache-Control: public, max-age=31536000, immutable
ETag: "[timestamp]-[size]"
Last-Modified: [date]
X-Content-Type-Options: nosniff
Accept-Ranges: bytes
```

### Console Logs to Watch:
The API route logs the following information:
- Requested path
- Full file path
- Security checks
- Content type detection
- File size
- Headers being set

## 🐛 Troubleshooting

### Problem: Getting HTML instead of image
**Causes:**
1. Rewrite not working
2. API route not found
3. File path issues

**Solutions:**
1. Test API route directly: `/api/static-files/events/filename.webp`
2. Check browser network tab for actual request URL
3. Verify file exists with `/api/test-static`

### Problem: 404 File Not Found
**Causes:**
1. File doesn't exist in `public/uploads/`
2. Wrong path structure
3. Case sensitivity issues

**Solutions:**
1. Check file exists: `/api/test-static`
2. Verify file permissions
3. Check exact filename and path

### Problem: Wrong Content-Type
**Causes:**
1. File extension not recognized
2. API route not processing correctly

**Solutions:**
1. Check console logs for content-type detection
2. Verify file extension is supported
3. Add new MIME types if needed

## 📊 Quick Test Commands

### cURL Tests:
```bash
# Test discovery
curl -s https://newadmin.techmapperz.com/api/test-static | jq .

# Test API route directly
curl -I https://newadmin.techmapperz.com/api/static-files/events/1751257922269-cbcbswsdsku.webp

# Test rewrite URL
curl -I https://newadmin.techmapperz.com/uploads/events/1751257922269-cbcbswsdsku.webp
```

### Browser Tests:
1. Open: `https://newadmin.techmapperz.com/api/test-static`
2. Open: `https://newadmin.techmapperz.com/api/static-files/events/1751257922269-cbcbswsdsku.webp`
3. Open: `https://newadmin.techmapperz.com/uploads/events/1751257922269-cbcbswsdsku.webp`

## 📁 File Structure

```
public/
└── uploads/
    ├── events/
    │   ├── 1751257922269-cbcbswsdsku.webp
    │   └── [other-files...]
    ├── workspace/
    └── culture/

app/
└── api/
    ├── static-files/
    │   └── [...path]/
    │       └── route.js
    └── test-static/
        └── route.js
```

## 🔄 Deployment Checklist

1. **Build & Deploy:**
   ```bash
   npm run build
   npm start
   ```

2. **Test Discovery:**
   - Visit `/api/test-static`
   - Verify files are found

3. **Test API Route:**
   - Visit `/api/static-files/events/filename.webp`
   - Check content-type header

4. **Test Rewrite:**
   - Visit `/uploads/events/filename.webp`
   - Should show same result as API route

5. **Verify Headers:**
   - Use browser dev tools
   - Check content-type is `image/webp` not `text/html`

## 🚨 Common Issues

### Issue: Rewrite Not Working
```javascript
// Make sure this is in next.config.mjs:
async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/static-files/:path*',
      },
    ];
}
```

### Issue: API Route 404
Check the file structure:
```
app/api/static-files/[...path]/route.js
```

The `[...path]` folder name is crucial for catch-all routes.

### Issue: File Permissions
Make sure files are readable:
```bash
chmod 644 public/uploads/**/*
chmod 755 public/uploads/*/
```

## 🎯 Success Criteria

✅ `/api/test-static` shows available files  
✅ `/api/static-files/events/file.webp` returns image with correct headers  
✅ `/uploads/events/file.webp` returns same result as above  
✅ Content-Type is `image/webp` not `text/html`  
✅ Content-Length matches file size  
✅ Cache headers are set correctly  

When all criteria are met, your static file serving is working correctly! 🎉 