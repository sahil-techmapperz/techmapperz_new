# Techmapperz Next.js 16 Application

This is the Next.js 16 version of the Techmapperz website, migrated from Next.js 14.

## 🚀 Project Structure

```
Techmapperz_Nextjs16/
├── app/                    # Next.js App Router (Frontend)
│   ├── _Components/       # Reusable UI components
│   ├── _hooks/            # Custom React hooks
│   ├── api/               # API routes
│   └── [pages]/          # Route pages
├── backend/               # Express.js Backend API
│   ├── src/
│   │   ├── config/       # Database and mail configuration
│   │   ├── model/        # Database models
│   │   └── routes/       # API routes
│   └── package.json
├── lib/                   # Utility functions
├── hooks/                 # Global hooks
├── public/                # Static assets
└── package.json           # Frontend dependencies

## 📦 Technology Stack

### Frontend
- **Next.js**: 16.0.0
- **React**: 19.0.0
- **Tailwind CSS**: 3.4.1
- **Chakra UI**: 2.8.2
- **Framer Motion**: 11.3.19
- **Three.js**: 0.172.0

### Backend
- **Express.js**: 4.18.2
- **Mongoose**: 6.8.0
- **Node.js**: 18+

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:3001
   NEXT_PUBLIC_Site_URL=http://localhost:3000
   ```

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   # Add other backend environment variables
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   npm run backend:dev
   ```
   Backend will run on `http://localhost:3001`

2. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

### Build for Production

1. **Build Frontend**
   ```bash
   npm run build
   npm start
   ```

2. **Start Backend in Production**
   ```bash
   cd backend
   npm start
   ```

## 📁 Key Features

- ✅ Next.js 16 with App Router
- ✅ React 19
- ✅ Full-stack application with Express backend
- ✅ MongoDB integration
- ✅ Responsive design with Tailwind CSS
- ✅ Component-based architecture
- ✅ API routes for server-side functionality

## 🔧 Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run backend:dev` - Start backend development server
- `npm run backend:start` - Start backend production server

## 📝 Notes

- This is a migration from Next.js 14 to Next.js 16
- All existing frontend and backend code has been preserved
- Make sure to update environment variables for your setup
- Backend runs separately on port 3001
- Frontend runs on port 3000

## 🤝 Contributing

This project maintains the same structure and functionality as the original Next.js 14 version, now upgraded to Next.js 16 for better performance and features.

