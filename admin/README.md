# Admin Dashboard

A modern admin dashboard built with Next.js for managing your backend content.

## Features

- 🔐 Secure authentication
- 📊 Dashboard overview with statistics
- 📝 Content management for:
  - Jobs
  - Articles
  - Blog posts
  - Testimonials
  - Contacts
  - Comments
  - Authors
  - Banners
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 📈 Interactive data tables with sorting and pagination
- 🔍 Search and filtering capabilities
- 🚀 Quick actions for common tasks

## Prerequisites

- Node.js 18+ and npm
- Backend API running on http://localhost:3001 (or update NEXT_PUBLIC_API_URL in .env.local)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd admin-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
admin-dashboard/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Dashboard routes
│   │   ├── layout.js      # Dashboard layout with sidebar
│   │   ├── page.js        # Dashboard overview page
│   │   └── jobs/          # Jobs management
│   └── login/             # Authentication pages
├── components/            # Reusable components
│   ├── DataTable.js       # Generic data table component
│   ├── Form.js            # Generic form component
│   ├── Modal.js           # Modal dialog component
│   └── Sidebar.js         # Navigation sidebar
├── utils/                 # Utility functions
│   └── api.js             # API client configuration
└── public/                # Static files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
