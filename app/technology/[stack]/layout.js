export async function generateMetadata({ params }) {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


	const techDescriptions = {
		'react': 'Techmapperz: React - JavaScript library for building interactive and declarative user interfaces',
		'next.js': 'Techmapperz: Next.js - React framework for server-side rendering and static site generation',
		'angular': 'Techmapperz: Angular - TypeScript-based web application framework by Google',
		'vue.js': 'Techmapperz: Vue.js - Progressive JavaScript framework for building user interfaces',
		'node.js': 'Techmapperz: Node.js - JavaScript runtime for scalable server-side applications',
		'mongodb': 'Techmapperz: MongoDB - NoSQL database for high performance and scalability',
		'docker': 'Techmapperz: Docker - Platform for containerized application development',
		'aws': 'Techmapperz: AWS - Comprehensive cloud computing services platform',
		'python': 'Techmapperz: Python - Versatile programming language for web and data science',
		'typescript': 'Techmapperz: TypeScript - Strongly typed programming language built on JavaScript',
		'java': 'Techmapperz: Java - Enterprise-grade object-oriented programming language',
		'php': 'Techmapperz: PHP - Server-side scripting language for web development',
		'graphql': 'Techmapperz: GraphQL - Query language for APIs with flexible data fetching',
		'kubernetes': 'Techmapperz: Kubernetes - Container orchestration platform for cloud applications',
		'postgresql': 'Techmapperz: PostgreSQL - Advanced open-source relational database',
		'tailwindcss': 'Techmapperz: TailwindCSS - Utility-first CSS framework for modern web design',
		'firebase': 'Techmapperz: Firebase - Platform for mobile and web application development',
		'rust': 'Techmapperz: Rust - Systems programming language focused on safety and performance',
		'git': 'Techmapperz: Git - Distributed version control system for code management',
		'html5': 'Techmapperz: HTML5 - Latest HTML standard for modern web development',
		'css3': 'Techmapperz: CSS3 - Advanced styling technology for web design',
		'kotlin': 'Techmapperz: Kotlin - Modern programming language for Android development',
		'elasticsearch': 'Techmapperz: Elasticsearch - Distributed search and analytics engine',
		'django': 'Techmapperz: Django - High-level Python web framework',
		'laravel': 'Techmapperz: Laravel - Elegant PHP framework for web artisans',
		'rubyonrails': 'Techmapperz: Ruby on Rails - Full-stack web application framework',
		'c#': 'Techmapperz: C# - Modern object-oriented language for enterprise applications',
		'.net': 'Techmapperz: .NET - Cross-platform framework for building modern applications',
		'flutter': 'Techmapperz: Flutter - UI toolkit for cross-platform application development',
		'redux': 'Techmapperz: Redux - State management container for JavaScript applications',
		'sass': 'Techmapperz: Sass - CSS preprocessor for enhanced stylesheet development',
		'webpack': 'Techmapperz: Webpack - Powerful JavaScript module bundler',
		'babel': 'Techmapperz: Babel - JavaScript compiler for next-generation features',
		'jquery': 'Techmapperz: jQuery - Feature-rich JavaScript library for DOM manipulation',
		'mysql': 'Techmapperz: MySQL - Popular open-source relational database system',
		'express.js': 'Techmapperz: Express.js - Fast, minimalist web framework for Node.js'
	};

	const { stack } = await params;
	const stackKey = stack.toLowerCase();
	const description = techDescriptions[stack.toLowerCase()] || 'Techmapperz - IT Solutions and Services';

	return {
		title: description,
		description: description,
		alternates: {
			canonical: `${BASE_URL}/technology/${stackKey}`,
		},
	};
}

export default function Layout({ children }) {
	return children;
}