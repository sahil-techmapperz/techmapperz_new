// Clean Portfolio Data Structure - Separated IT and GIS Arrays

// IT Portfolio Data Structure
const itPortfolioData = [


    {
        image: "/Photos/Welho_banner.webp",
        category: "IT",
        techStack: "React, Node.js, PostgreSQL, Express, Material-UI, PayPal, Shopify API",
        name: "Information-Rich & Dynamic Dairy Company Website",
        link: "/portfolios/welho",
        slug: "welho",
        details: [
            "A comprehensive health and wellness e-commerce platform offering organic products, supplements, and health services with personalized recommendations and expert consultations."
        ],
        projectDetails: {
            year: "2023",
            location: "California, USA",
            duration: "9 months",
            teamSize: "14 developers",
            industry: "Food and Direy",
            projectType: "E-commerce Platform"
        },
        challenges: [
            {
                title: "Health Product Regulations",
                description: "Ensuring compliance with health product regulations and FDA requirements for supplement sales."
            },
            {
                title: "Personalized Recommendations",
                description: "Creating an AI-driven recommendation system based on user health profiles and preferences."
            },
            {
                title: "Expert Integration",
                description: "Integrating certified health experts for consultations and product recommendations."
            }
        ],
        solutions: [
            {
                title: "Compliance Management System",
                description: "Implemented comprehensive compliance tracking for all health products and regulatory requirements.",
                features: [
                    "FDA compliance tracking",
                    "Product certification management",
                    "Regulatory documentation",
                    "Quality assurance protocols"
                ]
            },
            {
                title: "AI-Powered Recommendation Engine",
                description: "Developed machine learning algorithms for personalized product recommendations based on health profiles.",
                features: [
                    "Health profile assessment",
                    "Personalized product suggestions",
                    "Goal-based recommendations",
                    "Progress tracking"
                ]
            }
        ],
        results: [
            {
                label: "Product Catalog",
                value: "5,000+",
                description: "Health and wellness products",
                icon: "🌿"
            },
            {
                label: "Customer Retention",
                value: "85%",
                description: "Customer retention rate",
                icon: "🔄"
            },
            {
                label: "Expert Consultations",
                value: "10,000+",
                description: "Health consultations conducted",
                icon: "👨‍⚕️"
            },
            {
                label: "Revenue Growth",
                value: "+180%",
                description: "Year-over-year revenue increase",
                icon: "💹"
            }
        ],
        conclusion: "Welho successfully created a trusted health and wellness marketplace that combines e-commerce with expert guidance for better health outcomes.",
        testimonial: {
            quote: "The platform has revolutionized how we connect with customers and provide personalized health solutions.",
            author: "Dr. Lisa Chen",
            position: "Founder, Welho"
        }
    },
    {
        image: "/Photos/whitespreadfoods_banner.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Chart.js, D3.js, Python",
        name: "Integrated Sales and E-Commerce Dashboard",
        link: "/portfolios/white-spread-foods",
        slug: "white-spread-foods",
        details: [
            "A comprehensive business intelligence and analytics dashboard for food manufacturing company to track production, sales, inventory, and supply chain metrics with real-time data visualization."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "7 months",
            teamSize: "12 developers",
            industry: "E-commerce Platform",
            projectType: "Business Intelligence Platform"
        },
        challenges: [
            {
                title: "Real-time Data Integration",
                description: "Integrating data from multiple sources including production systems, sales platforms, and inventory management."
            },
            {
                title: "Complex Analytics Requirements",
                description: "Creating meaningful insights from large volumes of operational data across different business functions."
            },
            {
                title: "Scalable Reporting System",
                description: "Building a flexible reporting system that can handle growing data volumes and user demands."
            }
        ],
        solutions: [
            {
                title: "Unified Data Integration Platform",
                description: "Developed a centralized data integration system connecting all business systems for real-time analytics.",
                features: [
                    "Multi-source data integration",
                    "Real-time data synchronization",
                    "Data quality assurance",
                    "Automated data pipelines"
                ]
            },
            {
                title: "Advanced Analytics Engine",
                description: "Built sophisticated analytics capabilities with predictive insights and trend analysis.",
                features: [
                    "Predictive analytics",
                    "Trend analysis",
                    "Performance benchmarking",
                    "Anomaly detection"
                ]
            }
        ],
        results: [
            {
                label: "Data Processing",
                value: "1TB+",
                description: "Daily data processing capacity",
                icon: "💾"
            },
            {
                label: "Decision Speed",
                value: "+70%",
                description: "Faster business decision making",
                icon: "⚡"
            },
            {
                label: "Cost Optimization",
                value: "-25%",
                description: "Operational cost reduction",
                icon: "💰"
            },
            {
                label: "Efficiency Gain",
                value: "+45%",
                description: "Overall operational efficiency improvement",
                icon: "📊"
            }
        ],
        conclusion: "The BI dashboard transformed White Spread Foods' decision-making process with real-time insights and predictive analytics for better business outcomes.",
        testimonial: {
            quote: "This dashboard has given us unprecedented visibility into our operations and helped us make data-driven decisions that significantly improved our profitability.",
            author: "Rajesh Gupta",
            position: "Operations Director, White Spread Foods"
        }
    },
    {
        image: "/Photos/manuser-ghorbaari1.webp",
        category: "IT",
        techStack: "React, Node.js, MySQL, Express, Booking Engine, Payment Gateway, Maps API",
        name: "Interactive Hotel Booking Platform with Complete Property Insights",
        link: "/portfolios/manusher-ghorbari",
        slug: "manusher-ghorbari",
        details: [
            "A comprehensive hotel and accommodation booking platform designed for the hospitality industry with features for property management, booking systems, and guest services."
        ],
        projectDetails: {
            year: "2023",
            location: "Kolkata, India",
            duration: "11 months",
            teamSize: "16 developers",
            industry: "Hospitality & Tourism",
            projectType: "Booking & Management Platform"
        },
        challenges: [
            {
                title: "Real-time Inventory Management",
                description: "Managing real-time room availability across multiple properties with dynamic pricing and booking conflicts."
            },
            {
                title: "Multi-Property Operations",
                description: "Creating a unified platform that can handle multiple properties with different amenities and pricing structures."
            },
            {
                title: "Guest Experience Integration",
                description: "Integrating guest services from booking to checkout including special requests and feedback management."
            }
        ],
        solutions: [
            {
                title: "Advanced Booking Engine",
                description: "Developed a sophisticated booking system with real-time availability and dynamic pricing algorithms.",
                features: [
                    "Real-time room availability",
                    "Dynamic pricing engine",
                    "Booking conflict resolution",
                    "Multi-channel integration"
                ]
            },
            {
                title: "Property Management System",
                description: "Built comprehensive property management tools for hotel operations and staff coordination.",
                features: [
                    "Multi-property dashboard",
                    "Staff management tools",
                    "Maintenance scheduling",
                    "Financial reporting"
                ]
            }
        ],
        results: [
            {
                label: "Properties Managed",
                value: "150+",
                description: "Hotels and accommodations on platform",
                icon: "🏨"
            },
            {
                label: "Booking Efficiency",
                value: "+80%",
                description: "Improvement in booking processing speed",
                icon: "⚡"
            },
            {
                label: "Revenue Growth",
                value: "+65%",
                description: "Average revenue increase for properties",
                icon: "💰"
            },
            {
                label: "Guest Satisfaction",
                value: "4.8/5",
                description: "Average guest satisfaction score",
                icon: "⭐"
            }
        ],
        conclusion: "The platform successfully modernized hotel operations and improved booking efficiency while enhancing the overall guest experience.",
        testimonial: {
            quote: "This platform has revolutionized our hotel management operations and significantly increased our bookings and revenue.",
            author: "Amit Das",
            position: "Managing Director, Manusher Ghorbari"
        }
    },
    {
        image: "/Photos/shrc_banner.webp",
        category: "IT",
        techStack: "React, Node.js, MySQL, Express, Bootstrap, JWT, Payment Gateway",
        name: "NGO Website for Member Onboarding and Complaint Management",
        link: "/portfolios/shrc",
        slug: "shrc",
        details: [
            "A comprehensive welfare society management platform designed to streamline operations, member management, and community services for social welfare organizations."
        ],
        projectDetails: {
            year: "2023",
            location: "Delhi, India",
            duration: "10 months",
            teamSize: "15 developers",
            industry: "Social Welfare",
            projectType: "Web Application Platform"
        },
        challenges: [
            {
                title: "Member Management Complexity",
                description: "Managing large numbers of members with different categories, benefits, and service requirements."
            },
            {
                title: "Multi-Service Integration",
                description: "Integrating various welfare services like healthcare, education, and financial aid into a single platform."
            },
            {
                title: "Transparent Operations",
                description: "Ensuring transparency in fund management and service delivery to maintain trust and accountability."
            }
        ],
        solutions: [
            {
                title: "Comprehensive Member Management System",
                description: "Developed a robust member registration and management system with category-wise benefits tracking.",
                features: [
                    "Member registration and verification",
                    "Category-based benefit allocation",
                    "Service request tracking",
                    "Communication portal"
                ]
            },
            {
                title: "Integrated Service Platform",
                description: "Created a unified platform for all welfare services with automated workflows and approval processes.",
                features: [
                    "Healthcare service booking",
                    "Education program enrollment",
                    "Financial aid applications",
                    "Community event management"
                ]
            }
        ],
        results: [
            {
                label: "Member Enrollment",
                value: "25,000+",
                description: "Active members registered on platform",
                icon: "👥"
            },
            {
                label: "Service Efficiency",
                value: "+60%",
                description: "Improvement in service delivery time",
                icon: "⚡"
            },
            {
                label: "Transparency Score",
                value: "4.9/5",
                description: "Member satisfaction with transparency",
                icon: "🌟"
            },
            {
                label: "Cost Reduction",
                value: "-35%",
                description: "Reduction in administrative costs",
                icon: "💰"
            }
        ],
        conclusion: "The SHRC platform successfully digitized welfare society operations, improving efficiency and transparency while serving thousands of community members effectively.",
        testimonial: {
            quote: "This platform has transformed our ability to serve our community efficiently and transparently. The impact has been remarkable.",
            author: "Dr. Priya Sharma",
            position: "Director, SHRC"
        }
    },
    {
        image: "/Photos/premierautosource_banner.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Redux, Stripe, AWS",
        name: "Interactive & Dynamic Automobile Company Website",
        link: "/portfolios/pas-auto-source",
        slug: "pas-auto-source",
        details: [
            "A comprehensive automotive marketplace platform connecting buyers, sellers, and service providers in the automotive industry with features for vehicle listings, financing, and service management."
        ],
        projectDetails: {
            year: "2023",
            location: "Chicago, USA",
            duration: "12 months",
            teamSize: "18 developers",
            industry: "Automotive",
            projectType: "E-commerce Platform"
        },
        challenges: [
            {
                title: "Multi-Vendor Marketplace",
                description: "Creating a platform that accommodates multiple dealers, private sellers, and service providers with different needs."
            },
            {
                title: "Vehicle Verification System",
                description: "Implementing robust vehicle verification and history reporting to ensure buyer confidence."
            },
            {
                title: "Integrated Financial Services",
                description: "Integrating loan and insurance services seamlessly into the buying process."
            }
        ],
        solutions: [
            {
                title: "Advanced Marketplace Architecture",
                description: "Built a scalable multi-vendor platform with separate dashboards for different user types.",
                features: [
                    "Dealer management portal",
                    "Private seller interface",
                    "Service provider dashboard",
                    "Advanced search and filtering"
                ]
            },
            {
                title: "Vehicle Verification Engine",
                description: "Developed comprehensive vehicle verification system with history reports and inspection scheduling.",
                features: [
                    "VIN-based verification",
                    "Vehicle history reports",
                    "Inspection scheduling",
                    "Quality assurance protocols"
                ]
            }
        ],
        results: [
            {
                label: "Active Listings",
                value: "15,000+",
                description: "Vehicles listed on the platform",
                icon: "🚗"
            },
            {
                label: "Transaction Volume",
                value: "$50M+",
                description: "Total transaction value processed",
                icon: "💵"
            },
            {
                label: "User Satisfaction",
                value: "4.7/5",
                description: "Average user rating",
                icon: "⭐"
            },
            {
                label: "Platform Growth",
                value: "+200%",
                description: "Year-over-year user growth",
                icon: "📈"
            }
        ],
        conclusion: "PAS Auto Source successfully created a trusted automotive marketplace that streamlined the buying and selling process while maintaining high quality standards.",
        testimonial: {
            quote: "Techmapperz delivered a platform that exceeded our expectations. Our business has grown exponentially since launch.",
            author: "Mike Rodriguez",
            position: "CEO, Premier Auto Source"
        }
    },
    {
        image: "/Photos/IT_1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "Fabcon - Interior Design Mobile App",
        link: "/portfolios/fabcon",
        slug: "fabcon",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/CRM_Mockup_banner.webp",
        category: "IT",
        techStack: "React, Node.js, PostgreSQL, Express, Socket.io, Chart.js, JWT",
        name: "Techmapperz CRM - Internal CRM System",
        link: "/portfolios/techmapperz-crm",
        slug: "techmapperz-crm",
        details: [
            "A comprehensive customer relationship management system designed specifically for Techmapperz to streamline client interactions, project management, and business operations."
        ],
        projectDetails: {
            year: "2023",
            location: "Kolkata, India",
            duration: "8 months",
            teamSize: "10 developers",
            industry: "Technology Services",
            projectType: "Internal CRM System"
        },
        challenges: [
            {
                title: "Complex Project Tracking",
                description: "Managing multiple client projects with different phases, deliverables, and team assignments simultaneously."
            },
            {
                title: "Client Communication Integration",
                description: "Centralizing all client communications and maintaining comprehensive interaction history."
            },
            {
                title: "Performance Analytics",
                description: "Creating detailed analytics and reporting for business performance and team productivity."
            }
        ],
        solutions: [
            {
                title: "Integrated Project Management",
                description: "Developed comprehensive project tracking with milestone management and team collaboration tools.",
                features: [
                    "Project milestone tracking",
                    "Team assignment management",
                    "Deliverable scheduling",
                    "Progress visualization"
                ]
            },
            {
                title: "Unified Communication Hub",
                description: "Created centralized communication system with automated notifications and interaction logging.",
                features: [
                    "Email integration",
                    "Call logging system",
                    "Meeting scheduling",
                    "Communication history"
                ]
            }
        ],
        results: [
            {
                label: "Project Efficiency",
                value: "+55%",
                description: "Improvement in project delivery time",
                icon: "📈"
            },
            {
                label: "Client Satisfaction",
                value: "95%",
                description: "Client satisfaction rate",
                icon: "😊"
            },
            {
                label: "Team Productivity",
                value: "+40%",
                description: "Increase in team productivity",
                icon: "🎯"
            },
            {
                label: "Business Growth",
                value: "+75%",
                description: "Business revenue growth",
                icon: "📊"
            }
        ],
        conclusion: "The internal CRM system significantly improved Techmapperz's operational efficiency and client relationship management capabilities.",
        testimonial: {
            quote: "Our internal CRM has transformed how we manage projects and interact with clients. It's been instrumental in our business growth.",
            author: "Ravi Sharma",
            position: "CEO, Techmapperz"
        }
    },



    {
        image: "/Photos/IT_portfolio/aahelipublishers/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "End-To-End E-Commerce Platform for A Book Publisher",
        link: "/portfolios/aahelipublishers",
        slug: "aahelipublishers",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/ambientconstruction/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "Information Rich & Dynamic Construction Company Website",
        link: "/portfolios/ambientconstruction",
        slug: "ambientconstruction",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/Expoguru/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "Dynamic & Interactive Interior Company Website",
        link: "/portfolios/expoguru",
        slug: "expoguru",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/FacultiesOnline/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "An Interactive Platform Connecting Students & Teachers Worldwide",
        link: "/portfolios/facultiesOnline",
        slug: "facultiesOnline",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/KalkiIndia/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "Kalki India Dynamic Information Portal",
        link: "/portfolios/kalkiindia",
        slug: "kalkiindia",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/Novustech/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "Dynamic Drone Service Company Website",
        link: "/portfolios/novustech",
        slug: "novustech",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },
    {
        image: "/Photos/IT_portfolio/Urpayroll/1.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, Express, Material-UI, Redux, Socket.io",
        name: "HRM App for Effortless Attendance, Employee Workflows and Client Management",
        link: "/portfolios/urpayroll",
        slug: "urpayroll",
        details: [
            "A comprehensive interior design mobile application that connects customers with professional designers and vendors. The platform streamlines the entire interior design process from consultation to project completion."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            teamSize: "12 developers",
            industry: "Interior Design",
            projectType: "Mobile Application"
        },
        challenges: [
            {
                title: "Complex User Journey Management",
                description: "Managing multiple user types (customers, designers, vendors) with different needs and workflows within a single platform."
            },
            {
                title: "Real-time Collaboration Features",
                description: "Implementing seamless real-time communication and project tracking between customers, designers, and vendors."
            },
            {
                title: "Scalable Architecture Design",
                description: "Creating a robust backend architecture that could handle growing user base and complex business logic."
            }
        ],
        solutions: [
            {
                title: "Multi-Role Dashboard System",
                description: "Developed comprehensive role-based dashboards with customized interfaces for each user type.",
                features: [
                    "Customer project management interface",
                    "Designer portfolio and project tools",
                    "Vendor inventory and order management",
                    "Admin oversight and analytics dashboard"
                ]
            },
            {
                title: "Real-Time Communication Hub",
                description: "Integrated Socket.io for instant messaging, project updates, and collaborative design sessions.",
                features: [
                    "Instant messaging system",
                    "File sharing and collaboration",
                    "Real-time project status updates",
                    "Push notifications for important events"
                ]
            }
        ],
        results: [
            {
                label: "User Acquisition",
                value: "10,000+",
                description: "Active users within first 6 months",
                icon: "👥"
            },
            {
                label: "Project Completion Rate",
                value: "95%",
                description: "Successful project completion through platform",
                icon: "✅"
            },
            {
                label: "Response Time",
                value: "<2s",
                description: "Average API response time optimization",
                icon: "⚡"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average rating from customer feedback",
                icon: "⭐"
            }
        ],
        conclusion: "The Fabcon mobile application successfully revolutionized the interior design industry workflow by creating a unified platform that seamlessly connects all stakeholders.",
        testimonial: {
            quote: "Techmapperz delivered exactly what we envisioned and more. The app has transformed how we manage our interior design projects and communicate with clients.",
            author: "Rajesh Sharma",
            position: "CEO, Fabcon"
        }
    },


    
];

// GIS Portfolio Data Structure
const gisPortfolioData = [
    {
        image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp",
        category: "GIS",
        techStack: "LiDAR Survey , Railway Corridor Mapping , Point Cloud Data",
        name: "Drone based LiDAR Topographic Survey for Railway Corridor Mapping",
        link: "/portfolios/topographical_railway_survey",
        slug: "topographical_railway_survey",
        details: [
            "The drone-based aerial LiDAR technology was used in the Topographical Survey and Mapping Project to conduct a detailed topography and elevation survey of the proposed elevated railway track path (100 m wide) between Gonda Railway Station and Anand Nagar Railway Station (173 KM) in Uttar Pradesh, India. This section is an important element of the regional railroad system that passes through rural, semi-urban, and agricultural areas, and the topography is the key factor in ensuring the accuracy of design and safety of infrastructure."
        ],
        projectDetails: {
            year: "2024",
            location: "Uttar Pradesh, India",
            duration: "6 months",
            teamSize: "14 specialists",
            industry: "Railway Infrastructure",
            projectType: "Topographical Survey & LiDAR Mapping"
        },
        objectives: [
            {
                title: "High-Resolution Mapping",
                description: "Prepare a precise map of the railway track of the proposed elevated corridor with not less than 3cm GSD/pixel standard."
            },
            {
                title: "Developed LiDAR Usage",
                description: "Use LiDAR technology to provide a clear identification and demarcation of the features, objects and assets of railways."
            },
            {
                title: "Real-Time Data Fusion",
                description: "Add LiDAR Point cloud data to RGB imagery to improve the quality of spatial data and display features on true color."
            },
            {
                title: "Feature Mapping",
                description: "Detailed mapping of approach roads, shoulders, FOBs, underpasses and bridges."
            }
        ],
        solutions: [
            {
                title: "Drone-Based LiDAR Survey",
                description: "The high-density LiDAR sensors are used on the 100 m wide corridor to be covered by the UAV flights to collect accurate data on terrain and structures.",
                features: [
                    "High-density LiDAR sensors",
                    "100m wide corridor coverage",
                    "UAV-based data collection",
                    "Terrain and structure mapping"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/2.webp"
            },
            {
                title: "Aerial Imagery Acquisition",
                description: "Obtained synchronized high-resolution RGB images that are nurtured towards better data visualizations and feature localization.",
                features: [
                    "Synchronized RGB imagery",
                    "High-resolution capture",
                    "Enhanced data visualization",
                    "Precise feature localization"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/3.webp"
            },
            {
                title: "Point Cloud Processing",
                description: "Creation of Digital Terrain Models (DTM) and Digital Surface Models (DSM) creation with processed LiDAR data.",
                features: [
                    "Digital Terrain Models (DTM)",
                    "Digital Surface Models (DSM)",
                    "Point cloud processing",
                    "Elevation data extraction"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
            },
            {
                title: "Feature Extraction and Mapping",
                description: "Identification and feature extraction of railway objects, topographical objects, access roads and buildings.",
                features: [
                    "Railway object extraction",
                    "Topographical feature mapping",
                    "Access road identification",
                    "Building detection and mapping"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
            }
        ],
        benefits: [
            {
                label: "High Accuracy",
                value: "Centimeter-level",
                description: "Centimeter-level accuracy of elevation obtained with the help of drone-mounted LiDAR sensors",
                icon: "🎯"
            },
            {
                label: "Quick Data Imaging",
                value: "Time Efficient",
                description: "LiDAR in drones saves a lot of time in comparison to traditional surveys",
                icon: "⚡"
            },
            {
                label: "Improved Visualization",
                value: "Enhanced Analysis",
                description: "LiDAR fusion with true colour is capable of greater feature recognition and analysis of space",
                icon: "👁️"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/1.webp",
        category: "GIS",
        techStack: "Drone Survey , Pipeline mapping , Asset Mapping",
        name: "Ammonia and Water Pipeline Drone Survey & Digitization Project",
        link: "/portfolios/ammonia_water_pipeline",
        slug: "ammonia_water_pipeline",
        details: [
            "The Ammonia and Water Pipeline Drone Survey and Digitization Project in Gujarat was done to prepare an accurate digital geospatial database of a 45 km length pipeline network. The project was to be conducted with a pair of drone-based aerial mapping and GIS digitization tools in order to obtain detailed spatial information on the pipeline route and other assets. This project helps to facilitate effective management of assets, safety and maintenance planning through the latest development of UAV (Unmanned Aerial Vehicle) and Geographic Information System (GIS) system."
        ],
        projectDetails: {
            year: "2024",
            location: "Gujarat, India",
            duration: "8 months",
            teamSize: "12 specialists",
            industry: "Chemical & Water Distribution",
            projectType: "Drone Survey & Digitization"
        },
        objectives: [
            {
                title: "High-Resolution Mapping",
                description: "Obtaining accurate aerial images of the 45 km pipeline corridor with the help of drone technology."
            },
            {
                title: "Correct Asset Digitization",
                description: "Building ammonia and water pipelines, valves, and related infrastructure in detail in GIS."
            },
            {
                title: "Encroachment Detection",
                description: "This is to determine the current land-use pattern and the risks that may occur near the pipeline alignment."
            },
            {
                title: "Operational Efficiency",
                description: "Be able to make decisions faster and optimize the field operations with the help of precise spatial information."
            }
        ],
        solutions: [
            {
                title: "Drone Data Acquisition",
                description: "High-resolution sensors on the arm of the UAVs to capture an image of the area accurately.",
                features: [
                    "High-resolution UAV sensors",
                    "Accurate area imaging",
                    "Real-time data capture",
                    "Comprehensive coverage"
                ],
                image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/2.webp"
            },
            {
                title: "Ortho-mosaic and 3D Modeling",
                description: "Generation orthophotos, digital surface models (DSM) and elevation maps with processed drone-data.",
                features: [
                    "Orthophoto generation",
                    "Digital surface modeling",
                    "Elevation mapping",
                    "3D visualization"
                ],
                image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/3.webp"
            },
            {
                title: "Monitoring and Analysis",
                description: "Visualization of land-use changes, encroachment hazard and terrain problems by GIS programs.",
                features: [
                    "Land-use change detection",
                    "Encroachment monitoring",
                    "Terrain analysis",
                    "GIS-based visualization"
                ],
                image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/1.webp"
            },
            {
                title: "Decision Support System",
                description: "Provided a high-user-friendly GIS interface to enable clients to analyse real time spatial information.",
                features: [
                    "User-friendly interface",
                    "Real-time analysis",
                    "Spatial information access",
                    "Decision support tools"
                ],
                image: "/Photos/GIS_portfolio/Ammonia and Water Pipeline Drone Survey & Digitization Project/1.webp"
            }
        ],
        benefits: [
            {
                label: "High Precision",
                value: "Centimeter-level",
                description: "Aerial imagery by drones can be done with a centimeter-level accuracy of mapping and tracking of assets",
                icon: "🎯"
            },
            {
                label: "Cooperative Visualization",
                value: "Comprehensive View",
                description: "Viewing of the pipeline and environment in a comprehensive manner",
                icon: "👁️"
            },
            {
                label: "Enhanced Maintenance",
                value: "Proactive Planning",
                description: "Allows inspection proactiveness, planning and risks reduction",
                icon: "🔧"
            },
            {
                label: "Cost/Time Effectiveness",
                value: "Faster Surveys",
                description: "Saves time in the field survey and increases the speed of data gathering",
                icon: "⚡"
            },
            {
                label: "Improved Safety",
                value: "Risk Identification",
                description: "Identifies any form of encroachments and unsafe constructions near the pipeline line",
                icon: "🛡️"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/1.webp",
        category: "GIS",
        techStack: "Gas Pipeline Mapping, Hazard Mapping, Infrastructure Mapping",
        name: "Gas Pipeline Digitization and Digital Asset Registry",
        link: "/portfolios/gas_pipeline_digitization",
        slug: "gas_pipeline_digitization",
        details: [
            "The Gas Pipeline Digitization Project is a historic project whose aim is to build up an overall GIS-based digital asset management framework to the vast natural gas transmission system in India. The project covers a total length of 6000 km. The given project is devoted to the computerization and geographic mapping of the pipeline network of Gas along with all related facilities, i.e. the valve stations, compressor stations as well as the cathodic protection points. The project saves time, improves the safety and decision-making of the pipeline management by combining and balancing geospatial intelligence with engineering information."
        ],
        projectDetails: {
            year: "2024",
            location: "India",
            duration: "18 months",
            teamSize: "15 specialists",
            industry: "Oil & Gas",
            projectType: "Pipeline Infrastructure Digitization"
        },
        objectives: [
            {
                title: "Single Data Store",
                description: "Develop a single geospatial database on all pipeline assets and components."
            },
            {
                title: "Accurate Asset Mapping",
                description: "Map pipelines and other infrastructure digitally so as to provide a high accuracy spatial representation."
            },
            {
                title: "Real-Time Monitoring",
                description: "Allow live monitoring and evaluation of the conditions with GIS-integrated systems."
            }
        ],
        solutions: [
            {
                title: "Developed Spatial Mapping",
                description: "The high-resolution imagery, GPS survey, and ArcGIS technology are used in mapping of pipelines accurately.",
                features: [
                    "High-resolution spatial mapping",
                    "GPS-based surveying",
                    "ArcGIS technology integration",
                    "Pipeline accuracy verification"
                ],
                image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/2.webp"
            },
            {
                title: "Risk & Impact Assessment",
                description: "The spatial overlays of the environmental data, land use, and demographic data, to make decisions.",
                features: [
                    "Environmental data overlay",
                    "Land use analysis",
                    "Demographic data integration",
                    "Decision support systems"
                ],
                image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/3.webp"
            },
            {
                title: "Data-Driven Operations",
                description: "Changing the conventional asset management framework to a predictive and analytics-driven workflow.",
                features: [
                    "Predictive analytics",
                    "Asset management optimization",
                    "Analytics-driven workflows",
                    "Performance monitoring"
                ],
                image: "/Photos/GIS_portfolio/Gas Pipeline Digitization and Report Making/1.webp"
            }
        ],
        benefits: [
            {
                label: "Improved Safety",
                value: "Early Detection",
                description: "Risk zones, encroachments, and hazards on operation were early identified",
                icon: "🛡️"
            },
            {
                label: "Effective Asset Control",
                value: "Digital Access",
                description: "Digital stored data where data can easily be accessed and updated",
                icon: "📊"
            },
            {
                label: "Better Decision-Making",
                value: "Spatial Insights",
                description: "Spatial insights in service of planning, expansion, and maintenance",
                icon: "🎯"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/1.webp",
        category: "GIS",
        techStack: "CAD Mapping, Land Use Mapping, Mine Boundary Mapping",
        name: "Drone-Based 2D Feature Extraction & CAD GIS Integration of Mining Area",
        link: "/portfolios/mining_area_extraction",
        slug: "mining_area_extraction",
        details: [
            "The Drone-Based 2D Feature Extraction and CAD Mapping Project was aimed at developing a high-resolution digital map of different mining areas (556.674 sq.km) with the help of high-resolution drone images. Its aim was to mine, analyse and map major surface and infrastructure aspects to create CAD compatible outputs that can be used to enhance mine planning, land use management and monitoring. Through this endeavour, there was a comprehensive understanding of mine infrastructure, utilities, water bodies, and land classification that constituted a useful geospatial database to the operational and environmental management."
        ],
        projectDetails: {
            year: "2024",
            location: "Various Mining Sites, India",
            duration: "14 months",
            teamSize: "16 specialists",
            industry: "Mining & Natural Resources",
            projectType: "Drone-Based Feature Extraction & CAD Mapping"
        },
        objectives: [
            {
                title: "Digital Documentation",
                description: "Photograph mine infrastructure and other features in its surrounding with drone photos."
            },
            {
                title: "Land Use Assessment",
                description: "Support Analysis of land cover, infrastructure location and resource areas in the mining area."
            },
            {
                title: "Infrastructure Planning",
                description: "Supply the spatial data in details to facilitate further growth and utility management."
            },
            {
                title: "Operation Effectiveness",
                description: "Provide the possibility of making decisions based on data on mine operations and environmental monitoring."
            }
        ],
        solutions: [
            {
                title: "Extracting of the surface features",
                description: "All features (infrastructure, poles, drains, bridges), water bodies (ponds, streams, wells), land classes (agricultural, built-up, barren, mine, plantation) and utilities (streetlights, solar panels) were identified and mapped.",
                features: [
                    "Infrastructure feature extraction",
                    "Water body identification",
                    "Land class classification",
                    "Utility mapping"
                ],
                image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/2.webp"
            },
            {
                title: "Mapping and Data Processing",
                description: "Manipulated drone image to generate thematic layers and CAD compatible final product to be used in design and monitoring processes.",
                features: [
                    "Thematic layer generation",
                    "CAD-compatible outputs",
                    "Design integration",
                    "Monitoring system setup"
                ],
                image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/3.webp"
            },
            {
                title: "Land Use and Boundary Mapping",
                description: "Developed clear boundaries of mine lands, built up areas and the built environment among other classes of land use.",
                features: [
                    "Mine land boundary mapping",
                    "Built-up area delineation",
                    "Land use classification",
                    "Environmental zone mapping"
                ],
                image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/1.webp"
            },
            {
                title: "Mapping the infrastructure and connections",
                description: "Digitization of road networks, haul routes, and drainages to improve the visibility and investigate connectivity.",
                features: [
                    "Road network digitization",
                    "Haul route mapping",
                    "Drainage system analysis",
                    "Connectivity assessment"
                ],
                image: "/Photos/GIS_portfolio/Drone-Based 2D Feature Extraction of Mining Area/1.webp"
            }
        ],
        benefits: [
            {
                label: "High-Precision Mapping",
                value: "Centimeter-level",
                description: "The accuracy of features mapping by drone images is at the centimeter level",
                icon: "🎯"
            },
            {
                label: "Extensive Spatial insight",
                value: "Comprehensive",
                description: "Records all the land use and utility information within the mining area",
                icon: "📊"
            },
            {
                label: "Enhanced Planning",
                value: "Improved Design",
                description: "Facilitates enhanced design, monitoring and management of the land resources",
                icon: "📐"
            },
            {
                label: "Cost and Time Effectiveness",
                value: "Efficient Operations",
                description: "Lessens the work undertaken in the field on surveys and enhances the precision of data",
                icon: "⚡"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/1.webp",
        category: "GIS",
        techStack: "Riverfront Mapping, Socio-Economic Development, Transport Network Mapping",
        name: "Riverfront and Local Economic Development in the Kolkata Metropolitan Area",
        link: "/portfolios/hooghly_riverfront_mapping",
        slug: "hooghly_riverfront_mapping",
        details: [
            "The Hooghly Riverfront GIS Mapping Project involved two-bank assessment of land use and its spatial analysis of the Kolkata Metropolitan Area (KMA) along the banks of Hooghly River with a total area of 100 sq. km.The project sought to map digitally all the riverfront properties, transport infrastructure and the business to aid in urban planning, tourism development and sustainable riverfront management. The project presents a geospatial database that can be used in future developments and policy-making on the riverfront area through the application of GIS-based spatial analysis and land use mapping."
        ],
        projectDetails: {
            year: "2024",
            location: "Kolkata, India",
            duration: "10 months",
            teamSize: "18 specialists",
            industry: "Urban Planning",
            projectType: "Riverfront Spatial Analysis"
        },
        objectives: [
            {
                title: "Asset Mapping",
                description: "Map creation for locating key riverfront features, public spaces, and infrastructural assets."
            },
            {
                title: "Land Use Assessment",
                description: "Evaluate the current land use of business activities of major waterfront areas."
            },
            {
                title: "Infrastructure Planning",
                description: "Urban and transport planning for Spatial data integration in support of infrastructure planning."
            },
            {
                title: "Commercial Analysis",
                description: "Learn commercial trends, market and business distribution along the riverfront."
            },
            {
                title: "Sustainable Development",
                description: "Deliver spatial intelligence of balanced development and environmental conservation."
            }
        ],
        solutions: [
            {
                title: "Riverfront Mapping",
                description: "Carried out spatial mapping of a 500 m stretch on either side of the Hooghly River, registering main assets, greenlands, sites of interest and transportation networks.",
                features: [
                    "500m corridor mapping",
                    "Asset registration",
                    "Greenland identification",
                    "Transportation network mapping"
                ],
                image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/2.webp"
            },
            {
                title: "Land Use and Land cover Mapping",
                description: "Evaluation of the land use in Barabazar and 15 major jetties such as Chuchurah, Naihati, Sreerampore, Panihati, Dakshineswar, Belur Math, Bagbazar, Sovabazar, Ahiritola, Howrah (Old and New), Armenian Ghat, Fairlie, Chandpal II, Fulleswar, and Gadiara.",
                features: [
                    "15 major jetty analysis",
                    "Barabazar land use evaluation",
                    "Comprehensive jetty mapping",
                    "Land cover classification"
                ],
                image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/3.webp"
            },
            {
                title: "Commercial & Social Data mapping",
                description: "Map of formal and informal markets, empty plots and warehouses and gender based data (owners, employees, customers).",
                features: [
                    "Market mapping (formal/informal)",
                    "Empty plot identification",
                    "Warehouse documentation",
                    "Gender-based data analysis"
                ],
                image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/1.webp"
            },
            {
                title: "Planning & Analysis Tools",
                description: "Provided interactive GIS dashboards to planners to study the trends, accessibility and development potential of land use.",
                features: [
                    "Interactive GIS dashboards",
                    "Trend analysis tools",
                    "Accessibility studies",
                    "Development potential mapping"
                ],
                image: "/Photos/GIS_portfolio/Hooghly Riverfront GIS Mapping Project/1.webp"
            }
        ],
        benefits: [
            {
                label: "Complete Spatial Database",
                value: "Comprehensive",
                description: "Accurate mapping of riverfront resources, transport system, and areas of land use",
                icon: "🗃️"
            },
            {
                label: "Urban Planning Support",
                value: "Sustainable",
                description: "Allows making decisions that are sustainable when it comes to waterfront development",
                icon: "🏙️"
            },
            {
                label: "Increased Connectivity",
                value: "Integrated",
                description: "Unites ferry, road, and pedestrian networks to increase mobility",
                icon: "🚢"
            },
            {
                label: "Socio-Economic Insights",
                value: "Detailed",
                description: "Contains information about gender participation, market patterns and business distribution",
                icon: "📊"
            },
            {
                label: "Cultural/ Heritage Mapping",
                value: "Preserved",
                description: "Listing of landmarks and heritage buildings in order to aid conservation efforts",
                icon: "🏛️"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/1.webp",
        category: "GIS",
        techStack: "Habitation Mapping, Infrastructurte Mapping, Utility",
        name: "Detailed Land-use & Land-cover Mapping of Urban & Rural Areas",
        link: "/portfolios/urban_rural_extraction",
        slug: "urban_rural_extraction",
        details: [
            "Urban & Rural Areas 2D Feature Extraction involves Landuse and Landcover mapping (400 sq.km) and creating detailed representations of human settlements using geographic information systems. This involves identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions ,i.e. making it a work of more than 15 layers . By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation."
        ],
        projectDetails: {
            year: "2024",
            location: "Various Urban & Rural Areas, India",
            duration: "12 months",
            teamSize: "20 specialists",
            industry: "Urban Planning & Development",
            projectType: "Land Use & Land Cover Mapping"
        },
        objectives: [
            {
                title: "Detailed Mapping of Habitation Areas",
                description: "GIS allows for the creation of detailed and precise maps of habitation areas, incorporating various data layers such as land use, infrastructure, and population density."
            },
            {
                title: "Promoting Sustainable Development",
                description: "Promote sustainable development by identifying areas for conservation and assessing the impact of development projects."
            },
            {
                title: "Environmentally Responsible Development",
                description: "Understanding habitation distribution and density helps decision-makers identify areas for conservation, development, and eco-friendly infrastructure improvements."
            }
        ],
        solutions: [
            {
                title: "Comprehensive Strategy for Habitation Mapping",
                description: "Addressing habitation mapping challenges requires a comprehensive strategy using crowdsourcing, ground truthing, and remote sensing (e.g., drones) to enhance accuracy.",
                features: [
                    "Crowdsourcing data collection",
                    "Ground truthing validation",
                    "Remote sensing integration",
                    "Accuracy enhancement protocols"
                ],
                image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/2.webp"
            },
            {
                title: "Defining Settlement Boundaries",
                description: "Settlement boundaries can be defined using a combination of administrative, statistical, and physical criteria for greater precision.",
                features: [
                    "Administrative boundary definition",
                    "Statistical analysis integration",
                    "Physical criteria assessment",
                    "Precision boundary mapping"
                ],
                image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/3.webp"
            },
            {
                title: "Detailed Mapping at an Optimal Scale",
                description: "A 1:50 scale provides sufficient detail, supporting the creation of multiple layers (e.g., building footprints, roads,etc.)",
                features: [
                    "1:50 scale detailed mapping",
                    "Multiple layer creation",
                    "Building footprint extraction",
                    "Road network mapping"
                ],
                image: "/Photos/GIS_portfolio/Urban & Rural Areas 2D Feature Extraction/1.webp"
            }
        ],
        benefits: [
            {
                label: "Land Use and Growth Planning",
                value: "Optimized Planning",
                description: "Determines the best use of land, infrastructural requirements, and growth patterns while helping with land conservation and zoning considerations",
                icon: "🏗️"
            },
            {
                label: "Service Optimization and Development Management",
                value: "Enhanced Services",
                description: "Optimizes service locations based on population density and manages utility, housing, and transportation developments",
                icon: "🏢"
            },
            {
                label: "Environmental and Habitation Interaction",
                value: "Sustainable Development",
                description: "Assessing the interaction between habitation and natural elements, providing insights that support sustainable development and environmentally responsible planning",
                icon: "🌱"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp",
        category: "GIS",
        techStack: "Landuse Landcover, Site Selection, Industrial Mapping",
        name: "Industrial Mapping & Planning",
        link: "/portfolios/industrial_mapping_planning",
        slug: "industrial_mapping_planning",
        details: [
            "Industrial region planning refers to the process of designing, managing, and developing industrial areas to optimize economic growth, sustainability, and quality of life. This project is comprised of mainly 10 feature class dataset and a total of more than 50 feature layers with an area of 65.45 sq.km. Industrial region planning involves designing and managing industrial areas to optimize efficiency, sustainability, and economic growth, identifying suitable locations for industrial development, designing infrastructure such as transportation, utilities, etc., Zoning and land-use planning."
        ],
        projectDetails: {
            year: "2024",
            location: "Various Industrial Regions, India",
            duration: "16 months",
            teamSize: "22 specialists",
            industry: "Industrial Development",
            projectType: "Industrial Region Planning & Mapping"
        },
        objectives: [
            {
                title: "Data-Driven Industrial Planning",
                description: "Industrial planning requires identifying and developing industrial clusters and corridors using a data-driven approach."
            },
            {
                title: "Challenges in Landbank Identification",
                description: "Identifying new landbanks for industrial development is constrained by limited spatial data coverage and availability."
            },
            {
                title: "Data Integration and Interoperability Issues",
                description: "Inadequate data integration and interoperability hinder infrastructural development decisions for new landbanks."
            },
            {
                title: "Adapting to Rapid Technological Changes",
                description: "Keeping pace with rapidly evolving technology and data requirements is challenging for monitoring industrial development activities."
            },
            {
                title: "Ensuring Data Accuracy and Precision",
                description: "Achieving data accuracy and precise land measurements is crucial for effective planning and development."
            }
        ],
        solutions: [
            {
                title: "Drone Survey for Agricultural and Industrial Regions",
                description: "Flying drones over existing agricultural regions and newly acquired landbanks for industrial development.",
                features: [
                    "Agricultural region surveying",
                    "Landbank identification",
                    "Comprehensive aerial coverage",
                    "Industrial site assessment"
                ],
                image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/2.webp"
            },
            {
                title: "Image Processing for Data Analysis",
                description: "Processing captured drone images to extract valuable insights for mapping and planning.",
                features: [
                    "Advanced image processing",
                    "Data extraction techniques",
                    "Insight generation",
                    "Planning support analysis"
                ],
                image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp"
            },
            {
                title: "GIS Software for Industrial Mapping",
                description: "Utilizing GIS software and its specialized extensions for industrial mapping, including utility networking and connectivity.",
                features: [
                    "Specialized GIS extensions",
                    "Industrial mapping tools",
                    "Utility network analysis",
                    "Connectivity assessment"
                ],
                image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp"
            },
            {
                title: "Enhanced Operations and Site Selection",
                description: "Leveraging GIS tools to improve operations, optimize utility networks, and support on-site selection for industrial regions.",
                features: [
                    "Operations optimization",
                    "Utility network design",
                    "Site selection criteria",
                    "Industrial zone planning"
                ],
                image: "/Photos/GIS_portfolio/Industrial Mapping & Planning/1.webp"
            }
        ],
        benefits: [
            {
                label: "Digitization of Vacant Landbanks",
                value: "Digital Planning",
                description: "Vacant landbanks are digitized based on industrial setup plans, aiding industrialists in new ventures",
                icon: "🏭"
            },
            {
                label: "Transport Connectivity Assessment",
                value: "Enhanced Connectivity",
                description: "Evaluates transport connectivity, including roads (NH, SH), railways, and airports leading planning and construction of road networks near industrial regions",
                icon: "🚛"
            },
            {
                label: "Infrastructure Development in Existing Regions",
                value: "Modern Infrastructure",
                description: "Creation of new infrastructure in existing industrial areas to meet market demands",
                icon: "🏗️"
            },
            {
                label: "Proper Drainage Network Planning",
                value: "Efficient Drainage",
                description: "Identification and planing of proper drainage networks for industrial regions",
                icon: "🌊"
            },
            {
                label: "LULC Mapping for Industrial Development",
                value: "Strategic Zoning",
                description: "Land use and land cover mapping (LULC) identifies land utilization areas for creating new industrial zones",
                icon: "📍"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/1.webp",
        category: "GIS",
        techStack: "Map rectification, cadastral maps, Georeferencing",
        name: "Georeferencing",
        link: "/portfolios/georeferencing",
        slug: "georeferencing",
        details: [
            "Georeferencing is the crucial process of assigning real-world geographic coordinates to scanned maps and images, transforming them from static representations into dynamic spatial data. By identifying corresponding points on the map and in a GIS, users can mathematically align the image to a specific coordinate system. A critical step following georeferencing is incorporating attributes such as plot numbers and village names to enrich the dataset. This enhances the map's utility by providing detailed information about land parcels, enabling accurate land administration, property management, and resource planning."
        ],
        projectDetails: {
            year: "2024",
            location: "Various Locations, India",
            duration: "8 months",
            teamSize: "10 specialists",
            industry: "Land Administration & Property Management",
            projectType: "Map Georeferencing & Digital Cartography"
        },
        objectives: [
            {
                title: "Efficient Land Management",
                description: "Facilitating the maintenance of accurate land records, enabling precise property assessments, and supporting effective land use planning."
            },
            {
                title: "Data Integration",
                description: "Combining cadastral data with other spatial datasets (e.g., topography, infrastructure, and environmental data) for comprehensive analysis and visualization."
            },
            {
                title: "Accurate Positioning",
                description: "Aligning cadastral maps with real-world geographic coordinates to ensure that land parcels, boundaries, and features are accurately positioned on the Earth's surface."
            }
        ],
        solutions: [
            {
                title: "Image Enhancement",
                description: "Enhancing map quality using advanced digital processing techniques.",
                features: [
                    "Advanced digital processing",
                    "Image quality enhancement",
                    "Noise reduction techniques",
                    "Clarity improvement methods"
                ],
                image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/2.webp"
            },
            {
                title: "Ground Control Point Verification",
                description: "Utilizing multiple reliable ground control points for accuracy.",
                features: [
                    "Multiple control point validation",
                    "Accuracy verification protocols",
                    "Reference point establishment",
                    "Quality assurance measures"
                ],
                image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/3.webp"
            },
            {
                title: "Scale Adjustment",
                description: "Application of appropriate scaling factors to address discrepancies in scale.",
                features: [
                    "Scale factor calculation",
                    "Discrepancy correction",
                    "Proportional adjustments",
                    "Precision scaling methods"
                ],
                image: "/Photos/GIS_portfolio/Georeferencing_of_Maps/1.webp"
            }
        ],
        benefits: [
            {
                label: "Spatial Analysis",
                value: "Enhanced Analysis",
                description: "Facilitates the identification of trends over time and this also helps in the study of overlay analysis, change detection",
                icon: "📊"
            },
            {
                label: "Land Use Planning",
                value: "Strategic Planning",
                description: "Supports decision-making by understanding environmental changes, urban planning, and disaster management",
                icon: "🗺️"
            },
            {
                label: "Legal and Boundary Disputes",
                value: "Legal Support",
                description: "Property boundaries, land ownership, and historical land disputes can be analyzed, providing valuable insights for legal and administrative purposes for further property mapping",
                icon: "⚖️"
            }
        ]
    },
    {
        image: "/Photos/GIS_portfolio/Navigation Mapping/1.webp",
        category: "GIS",
        techStack: "Transport accessibility, Route optimisation, Traffic Flow",
        name: "Navigation Mapping",
        link: "/portfolios/navigation_mapping",
        slug: "navigation_mapping",
        details: [
            "The Navigation Mapping and Geospatial data project is focused on creating a detailed and precise and smart digital map to aid more intelligent transportation planning and mobility management of a total length of 8000 km.This initiative uses the latest GIS and navigation technology to improve efficiency of infrastructure, community participation and decision making of transportation networks based on data.The project gives both the authorities and citizens the power to monitor the infrastructure through accurate routes, live updates, and by being transparent."
        ],
        projectDetails: {
            year: "2024",
            location: "India",
            duration: "12 months",
            teamSize: "20 specialists",
            industry: "Transportation",
            projectType: "Navigation & Transportation Mapping"
        },
        objectives: [
            {
                title: "Efficiency & Transparency",
                description: "Enhance project delivery, monitoring and procurement procedures in terms of efficiency and transparency."
            },
            {
                title: "Data-driven decisions",
                description: "Geospatial analytics can be used to increase the longevity of roads, decrease maintenance expenses, and increase road safety."
            },
            {
                title: "Smart Infrastructure",
                description: "Facilitate intelligent transport systems development by means of proper mapping and space integration."
            },
            {
                title: "Sustainable Planning",
                description: "Supply the planners with sound spatial information towards long-term city migration and development of infrastructure."
            }
        ],
        solutions: [
            {
                title: "Road Network Mapping",
                description: "Creation of an elaborate digital map of all types of roads with the attributes such as the type of surface, the width and the condition.",
                features: [
                    "Detailed road surface mapping",
                    "Road width documentation",
                    "Condition assessment",
                    "Comprehensive road attributes"
                ],
                image: "/Photos/GIS_portfolio/Navigation Mapping/2.webp"
            },
            {
                title: "Navigation Mapping",
                description: "Development of route systems including turn-by-turn directions and estimation of travel time at all transport modes; road, pedestrian and public.",
                features: [
                    "Turn-by-turn navigation",
                    "Travel time estimation",
                    "Multi-modal transport support",
                    "Route optimization"
                ],
                image: "/Photos/GIS_portfolio/Navigation Mapping/3.webp"
            },
            {
                title: "Geospatial Database Development",
                description: "It is the development of a centralized GIS database, which would be easily accessed, visualized, and analyzed.",
                features: [
                    "Centralized database",
                    "Easy accessibility",
                    "Advanced visualization",
                    "Comprehensive analysis tools"
                ],
                image: "/Photos/GIS_portfolio/Navigation Mapping/1.webp"
            },
            {
                title: "Data Integration & Sharing",
                description: "Smooth integration with city systems and urban planning portals and applications that face the citizens.",
                features: [
                    "City system integration",
                    "Urban planning portals",
                    "Citizen-facing applications",
                    "Seamless data sharing"
                ],
                image: "/Photos/GIS_portfolio/Navigation Mapping/1.webp"
            }
        ],
        benefits: [
            {
                label: "Actionable Geospatial Intelligence",
                value: "Precise Mapping",
                description: "Geospatial mapping that is highly precise in the way it identifies infrastructure",
                icon: "🗺️"
            },
            {
                label: "Smart Decision-Making",
                value: "ML-Powered",
                description: "Machine learning to inform investments and maintenance decisions",
                icon: "🧠"
            },
            {
                label: "Real-Time Route Optimization",
                value: "Live Updates",
                description: "Live traffic feeds and road status updates will be used to optimize the navigational process and make it more efficient",
                icon: "⚡"
            }
        ]
    },
];

// Combined portfolio data for backward compatibility
const enhancedPortfolioData = [...itPortfolioData, ...gisPortfolioData];

// Export individual arrays and combined array
export { itPortfolioData, gisPortfolioData };
export default enhancedPortfolioData;