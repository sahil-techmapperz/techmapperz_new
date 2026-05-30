// Clean Portfolio Data Structure - Separated IT and GIS Arrays

// IT Portfolio Data Structure
const itPortfolioData = [
    {
        image: "/Photos/IT_portfolio/ambientconstruction/1.webp",
        category: "IT",
        techStack: "CI4, MySQL, HTML, CSS, JavaScript",
        name: "Information-Rich & Dynamic Website for a Construction Company",
        link: "/portfolios/construction-company-dynamic-website",
        slug: "construction-company-dynamic-website",
        details: [
            "We designed and developed an information-rich and dynamic corporate website for a construction firm that wanted to showcase their services, projects, and achievements through a professional digital platform.",
            "The website provides a structured online presence where potential clients can explore the company's projects, services, and expertise while enabling administrators to manage content through a powerful admin dashboard."
        ],
        projectDetails: {
            year: "2024",
            location: "Global",
            duration: "4 months",
            teamSize: "8 developers",
            industry: "Construction",
            projectType: "Dynamic Business Website"
        },
        challenges: [
            {
                title: "Limited Online Visibility",
                description: "Before implementation, the construction company lacked visibility for their projects and had no structured digital platform to showcase their completed architectural achievements."
            },
            {
                title: "Inefficient Content Management",
                description: "They faced extreme difficulty updating project information and gallery images, leading to manual and tedious handling of client inquiries without a centralized system."
            },
            {
                title: "Lack of Industry Engagement",
                description: "The absence of an integrated blog system for industry updates and company insights severely hindered organic reach, exposing the need for a scalable, professional website."
            }
        ],
        solutions: [
            {
                title: "Customer-Facing Public Website",
                description: "Techmapperz developed a dynamic construction company UI powered by CI4, providing visitors a structured interface to explore service and portfolio architecture.",
                features: [
                    "Browse extensive construction services and capabilities",
                    "Explore interactive project galleries and completion details",
                    "View automated project tracking and progress imagery",
                    "Read categorized industry insights and blog updates",
                    "Submit organized inquiries directly to the team"
                ]
            },
            {
                title: "Powerful Admin Management System",
                description: "We built a scalable backend management dashboard that empowers administrators to oversee, update, and deploy website content seamlessly.",
                features: [
                    "Quickly add and archive construction projects",
                    "Securely upload progression images and updates",
                    "Publish and manage industry-focused technical blogs",
                    "Manage client inquiries and respond to contact requests",
                    "Track real-time website engagement and user analytics"
                ]
            }
        ],
        results: [
            {
                label: "Digital Portfolio",
                value: "Showcase Ready",
                description: "A highly professional digital portfolio ensuring vastly stronger online presence.",
                icon: "🏗️"
            },
            {
                label: "Admin Updates",
                value: "Streamlined",
                description: "Significantly easier centralized management of service pages, project images, and leads.",
                icon: "🔄"
            },
            {
                label: "Client Inquiries",
                value: "Centralized",
                description: "A seamless lead-generation pipeline with an internally managed inquiry database.",
                icon: "📊"
            },
            {
                label: "Brand Trust",
                value: "Elevated",
                description: "Dramatically increased credibility and visibility for the company across the digital industry.",
                icon: "⭐"
            }
        ],
        conclusion: "The new website significantly improved the construction company's digital presence and ability to present projects online. The platform now serves as a robust central hub for showcasing projects, capabilities, and company achievements, driven by efficient Laravel-based content management."
    },
    {
        image: "/Photos/Welho_banner.webp",
        category: "IT",
        techStack: "React, Node.js, PostgreSQL, Express, Dynamic CMS, Mobile-First Design",
        name: "Information-Rich & Dynamic Website for a Modern Dairy & Wellness Brand",
        link: "/portfolios/welho",
        slug: "welho",
        details: [
            "Techmapperz designed and developed a dynamic, information-driven website for a brand positioned around natural wellness-focused products. The objective was to create a strong digital presence that would help the company present its brand story, showcase product value clearly, and offer visitors a smooth, trustworthy browsing experience across devices.",
            "The project was planned not just as a website, but as a brand communication platform. A website that could support visibility, trust-building, and future growth for a consumer-facing dairy and wellness business."
        ],
        projectDetails: {
            year: "2023",
            location: "California, USA",
            duration: "9 months",
            industry: "Dairy, Wellness & Consumer Brand",
            projectType: "Dynamic Business Website",
            coreFunctionality: "Brand Visibility + Information Delivery"
        },
        challenges: [
            {
                title: "Information Balance",
                description: "The brand needed to balance depth of product information with a clean, user-friendly presentation to avoid cluttering the interface while building trust."
            },
            {
                title: "Consumer Engagement",
                description: "As a growing wellness brand, Welho required a digital presence that could effectively communicate its value proposition to new visitors from the very first click."
            },
            {
                title: "Device Responsiveness",
                description: "Ensuring high performance across both desktop and mobile devices was critical for helping potential customers access info on the go."
            }
        ],
        solutions: [
            {
                title: "Custom Dynamic Platform",
                description: "Developed a tailored website architecture that organizes complex product information into a clean, modern UI.",
                features: [
                    "Structured information delivery",
                    "Consumer-friendly browsing flow",
                    "Mobile-optimized responsive layout",
                    "Trust-oriented professional design"
                ]
            },
            {
                title: "Brand Storytelling",
                description: "Created dedicated sections for brand identity and wellness insights, helping convert passive visitors into engaged brand followers.",
                features: [
                    "Product value showcase",
                    "Clean visual hierarchy",
                    "Scalable content management",
                    "SEO-friendly page organization"
                ]
            }
        ],
        results: [
            {
                label: "Brand Trust",
                value: "+85%",
                description: "Increase in digital brand credibility",
                icon: "🌿"
            },
            {
                label: "Engagement",
                value: "High",
                description: "Improved consumer interaction level",
                icon: "🔄"
            },
            {
                label: "Usability",
                value: "Score High",
                description: "Optimized mobile/desktop experiences",
                icon: "⚡"
            },
            {
                label: "Growth",
                value: "Scalable",
                description: "Foundation for future expansion",
                icon: "💹"
            }
        ],
        conclusion: "The Welho website successfully transformed the brand's digital identity, providing a clear, trustworthy, and informative platform that supports long-term consumer growth.",
        testimonial: {
            quote: "The platform has revolutionized how we connect with customers and provide personalized wellness solutions.",
            author: "Dr. Lisa Chen",
            position: "Founder, Welho"
        }
    },
    {
        image: "/Photos/whitespreadfoods_banner.webp",
        category: "IT",
        techStack: "React, Node.js, MongoDB, ERP Integration, Role-Based Access Control, Hierarchy Approval Logic, APK Connectivity",
        name: "B2B E-commerce Platform with Sales Dashboard and Hierarchy-Based Order Approval for a Dairy Company",
        link: "/portfolios/white-spread-foods",
        slug: "white-spread-foods",
        details: [
            "Techmapperz designed and developed a B2B e-commerce platform and sales dashboard for White Spread Foods, built to support structured order placement, approval-based sales workflows, and better operational control for a growing dairy business. The solution integrates seamlessly with existing ERP systems and multiple APK-based applications for end-to-end operational visibility."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "7 months",
            industry: "Dairy / FMCG / Distribution",
            projectType: "B2B E-commerce + Sales Dashboard",
            coreFunctionality: "Hierarchy-Based Order Approval + ERP-Connected Sales Flow"
        },
        challenges: [
            {
                title: "Complex Distribution Dynamics",
                description: "Dairy and FMCG distribution involves multi-role workflows—field sales, order collection, and supply coordination—that required a unified digital ecosystem."
            },
            {
                title: "Governance & Control",
                description: "The client needed a platform where orders could move through a defined approval chain based on hierarchy, ensuring strict sales governance."
            },
            {
                title: "Siloed Legacy Systems",
                description: "Sales data was isolated from broader operations, necessitating integration with a full ERP solution and multiple APK-based field applications."
            }
        ],
        solutions: [
            {
                title: "Custom B2B Sales Portal",
                description: "Developed a secure, authentication-based portal that handles role-specific order entry and real-time dashboard visibility.",
                features: [
                    "Hierarchy-based order approval workflow",
                    "Detailed sales dashboard for business visibility",
                    "ERP-connected sales and operations environment",
                    "Integration with multiple APK-based business applications"
                ]
            },
            {
                title: "Business Process Continuity",
                description: "Built an integration-oriented architecture that connects the dashboard to the larger operational ecosystem, supporting real business continuity.",
                features: [
                    "Structured role-based processing",
                    "Scalable architecture for distribution-led growth",
                    "Real-time operational coordination",
                    "Automated sync with ERP dispatch modules"
                ]
            }
        ],
        results: [
            {
                label: "Order Governance",
                value: "+100%",
                description: "Structured order movement control",
                icon: "🛡️"
            },
            {
                label: "Approval Speed",
                value: "Real-time",
                description: "Hierarchy-based order reviews",
                icon: "⚡"
            },
            {
                label: "Integration",
                value: "ERP/APK",
                description: "Connected operational ecosystem",
                icon: "🔗"
            }
        ],
        conclusion: "The B2B sales portal transformed White Spread Foods' distribution model, replacing manual coordination with a highly governed, integrated, and visible digital workflow.",
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
        name: "Information-Rich Hotel & Room Booking Website for a Nature-Centric Stay Experience",
        link: "/portfolios/manusher-ghorbari",
        slug: "manusher-ghorbari",
        details: [
            "Techmapperz developed a dynamic hospitality website for Manusher Ghorbari that combines property storytelling, room discovery, direct booking flow, and payment-ready reservation support to help the business build trust and generate more direct bookings."
        ],
        projectDetails: {
            year: "2023",
            location: "Kolkata, India",
            duration: "11 months",
            industry: "Hotel / Homestay / Travel & Hospitality",
            projectType: "Dynamic Hospitality Website + Direct Booking System",
            coreFunctionality: "Room Booking + Online Payment Integration"
        },
        challenges: [
            {
                title: "Experience Storytelling",
                description: "The property has a unique atmosphere (Mud Houses, nature-centric stay) that needed to be communicated emotionally while maintaining practical booking utility."
            },
            {
                title: "Direct Conversion",
                description: "Moving from a purely phone-based inquiry model to a self-service digital booking journey with real-time room selection and payment readiness."
            },
            {
                title: "Information Architecture",
                description: "Balancing multiple categories—rooms, dining, activities, gallery, and blog—into a cohesive, non-overwhelming user journey."
            }
        ],
        solutions: [
            {
                title: "Direct Reservation Flow",
                description: "Created a dedicated booking interface where users can select from various room types (Standard, Deluxe, Mud House) and proceed to secure payment.",
                features: [
                    "Direct room selection engine",
                    "Payment-ready booking journey",
                    "Real-time tariff visibility",
                    "Mobile-optimized reservation view"
                ]
            },
            {
                title: "Hospitality Content Hub",
                description: "Structured the website around the guest experience, integrating dining, activities, and location storytelling to build trust before the booking.",
                features: [
                    "Comprehensive property gallery",
                    "Dining & activities showcase",
                    "SEO-friendly hospitality architecture",
                    "Trust-building experience layout"
                ]
            }
        ],
        results: [
            {
                label: "Direct Bookings",
                value: "+80%",
                description: "Shift from manual to digital reservations",
                icon: "🏨"
            },
            {
                label: "User Trust",
                value: "High",
                description: "Professional digital brand presence",
                icon: "⭐"
            },
            {
                label: "Conversion",
                value: "Optimized",
                description: "Reduced friction in the booking cycle",
                icon: "⚡"
            },
            {
                label: "Revenue Hub",
                value: "Ready",
                description: "Payment-linked revenue opportunities",
                icon: "💰"
            }
        ],
        conclusion: "The final website gave Manusher Ghorbari a conversion-ready digital presence that successfully balances emotional destination storytelling with practical hospitality booking features.",
        testimonial: {
            quote: "This platform has revolutionized our hotel management operations and significantly increased our direct bookings and revenue.",
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
        techStack: "React, Node.js, MongoDB, Express, Redux, E-commerce Catalog Architecture, Cart & Direct Purchase Flow",
        name: "E-commerce Website for a Growing Educational Book Publisher",
        link: "/portfolios/aahelipublishers",
        slug: "aahelipublishers",
        details: [
            "Techmapperz developed a complete e-commerce website for Aaheli Publishers to help the brand present its educational catalog more effectively, support direct book purchases, and build a stronger digital sales presence. The platform includes category-based browsing, featured sections, and a smooth buying experience for students and academic readers."
        ],
        projectDetails: {
            year: "2023",
            location: "Kolkata, India",
            duration: "8 months",
            industry: "Publishing / Educational Books",
            projectType: "E-commerce Website + Online Book Sales Platform",
            coreFunctionality: "Online Book Discovery, Cart, and Direct Purchase"
        },
        challenges: [
            {
                title: "Broad Catalog Management",
                description: "Managing a deep catalog spanning B.Ed, M.Ed, university, and competitive exam books required a highly structured digital experience to prevent user confusion."
            },
            {
                title: "Direct Sales Transition",
                description: "Moving from manual inquiry-based ordering to a direct, self-service e-commerce model with real-time pricing, stock visibility, and 'Buy Now' actions."
            },
            {
                title: "Demand Capture",
                description: "Creating a way to capture demand for out-of-stock or unavailable titles through a 'Request a Book' feature to maintain customer engagement."
            }
        ],
        solutions: [
            {
                title: "Structured Catalog Discovery",
                description: "Built a storefront organized around academic categories and merchandising blocks like 'New Arrivals', 'Bestsellers', and 'Daily Deals'.",
                features: [
                    "Category-based book browsing",
                    "Merchandising discovery sections",
                    "Search & filtering for exam books",
                    "Responsive mobile shopping experience"
                ]
            },
            {
                title: "Direct Purchase Flow",
                description: "Developed a conversion-oriented product page with clear pricing, discount visibility, and integrated cart/account functionality.",
                features: [
                    "Add to Cart and Buy Now actions",
                    "User account & order history",
                    "Stock & discount display engine",
                    "Request a Book lead-capture channel"
                ]
            }
        ],
        results: [
            {
                label: "Digital Visibility",
                value: "+150%",
                description: "Increased catalog reach and discovery",
                icon: "📚"
            },
            {
                label: "Order Speed",
                value: "Instant",
                description: "Seamless direct purchase journey",
                icon: "⚡"
            },
            {
                label: "Engagement",
                value: "High",
                description: "Improved student/educator interaction",
                icon: "👥"
            },
            {
                label: "Scalability",
                value: "Built-In",
                description: "Ready for future catalog expansion",
                icon: "📈"
            }
        ],
        conclusion: "The Aaheli Publishers platform successfully modernized the publishing business, establishing a true digital sales channel that simplifies the book-buying journey for educators and students alike.",
        testimonial: {
            quote: "This platform has transformed our ability to serve our community efficiently and transparently. The impact on our direct sales has been remarkable.",
            author: "Abhijit Roy",
            position: "Publisher, Aaheli Publishers"
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
        techStack: "React, Next.js, Node.js, Dynamic Content Management, Responsive UI",
        name: "Informative Dynamic Website for an Interior Design and Creative Solutions Company",
        link: "/portfolios/expoguru",
        slug: "expoguru",
        details: [
            "Techmapperz designed and developed an informative, dynamic business website for Project Expo Guru, a creative brand working across interior design and experience-driven service areas. The goal was to create a digital platform that presents the company in a structured, professional, and convincing way while improving digital trust and lead generation."
        ],
        projectDetails: {
            year: "2023",
            location: "Mumbai, India",
            duration: "8 months",
            industry: "Interior Design / Creative Services",
            projectType: "Dynamic Informative Business Website",
            coreFunctionality: "Service Presentation + Brand Positioning"
        },
        challenges: [
            {
                title: "Visual Trust Gap",
                description: "In the interior design space, visual impression and service trust are critical. The client needed a website that reflects capability, professionalism, and confidence from the first click."
            },
            {
                title: "Positioning Range",
                description: "The brand operates across interior design, exhibitions, and retail branding. The website had to support this broad narrative without feeling fragmented or confusing."
            },
            {
                title: "Inquiry Readiness",
                description: "Developing a digital presence that doesn't just mention services but actually supports lead generation by communicating trust and design-oriented business value."
            }
        ],
        solutions: [
            {
                title: "Structured Service Storytelling",
                description: "Organized the website around dedicated 'Who We Are' and 'What We Do' sections to guide visitors through the creative expertise and service range.",
                features: [
                    "Dynamic service presentation",
                    "Modern design-oriented layout",
                    "Targeted business storytelling",
                    "Responsive user browsing"
                ]
            },
            {
                title: "Scalable Brand Platform",
                description: "Built as a dynamic platform rather than a static brochure site, allowing the client to manage future service and portfolio expansion effortlessly.",
                features: [
                    "Trust-building content structure",
                    "SEO-friendly page organization",
                    "Lead-generation focused UX",
                    "Scalable architecture for updates"
                ]
            }
        ],
        results: [
            {
                label: "Brand Impression",
                value: "Premium",
                description: "Polished and business-ready presence",
                icon: "🎨"
            },
            {
                label: "Inquiry Ready",
                value: "Score High",
                description: "Strengthened lead generation foundation",
                icon: "📈"
            },
            {
                label: "Trust Score",
                value: "+95%",
                description: "Improved credibility for new visitors",
                icon: "⭐"
            },
            {
                label: "Visibility",
                value: "Global",
                description: "Enhanced online brand positioning",
                icon: "🌍"
            }
        ],
        conclusion: "The Project Expo Guru website successfully established a structured, professional digital presence that converts design interest into business inquiries while supporting a broad creative narrative.",
        testimonial: {
            quote: "Techmapperz delivered a website that perfectly communicates our brand's creative value and professionalism. It has already improved our lead generation quality.",
            author: "Sayak Pal",
            position: "Director, Project Expo Guru"
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
        name: "Drone-Based LiDAR Topographic Survey for Railway Corridor Mapping",
        link: "/portfolios/topographical_railway_survey",
        slug: "topographical_railway_survey",
        details: [
            "Drone-based aerial LiDAR surveying technology was deployed to perform a detailed topographical survey and mapping of the proposed elevated railway corridor between Gonda Railway Station and Anand Nagar Railway Station. The survey covered a 100-metre wide corridor across a 173 km railway alignment in Uttar Pradesh using UAV-mounted LiDAR sensors. The project aimed to capture high-precision terrain data, elevation profiles, and infrastructure features across rural, semi-urban, and agricultural landscapes. Accurate topographic mapping is critical for railway corridor design, safety assessment, and infrastructure planning."
        ],
        projectDetails: {
            year: "2024",
            location: "Uttar Pradesh, India",
            duration: "6 months",
            teamSize: "14 specialists",
            industry: "Railway Infrastructure Solution",
            projectType: "Topographical Survey & LiDAR Mapping"
        },
        objectives: [
            {
                title: "High-Resolution Mapping",
                description: "Prepare a high-precision railway corridor map with a Ground Sampling Distance (GSD) of ≤3 cm/pixel, enabling detailed analysis of terrain and existing infrastructure."
            },
            {
                title: "Advanced LiDAR Usage",
                description: "Utilise Light Detection and Ranging (LiDAR) to accurately detect railway assets, terrain variations, vegetation, and built structures along the corridor."
            },
            {
                title: "Real-Time Data Fusion",
                description: "Combine LiDAR point cloud datasets with high-resolution RGB aerial imagery to improve spatial accuracy and enable realistic visualisation of mapped features."
            },
            {
                title: "Feature Mapping",
                description: "Perform detailed mapping of railway infrastructure components including: Approach roads, Shoulders and embankments, Foot Over Bridges (FOBs), Underpasses, Railway bridges, Nearby structures and buildings."
            }
        ],
        solutions: [
            {
                title: "Drone-Based LiDAR Survey",
                description: "High-density LiDAR sensors mounted on UAVs were used to capture precise terrain and infrastructure data along the railway corridor. This approach enabled rapid data collection even in large and difficult terrains.",
                features: [
                    "High-density LiDAR sensors",
                    "UAV-based corridor data acquisition",
                    "100-metre corridor coverage",
                    "Accurate terrain and structural mapping"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/2.webp"
            },
            {
                title: "Aerial Imagery Acquisition",
                description: "High-resolution RGB aerial images were captured simultaneously with LiDAR scans to enhance visualisation and feature identification.",
                features: [
                    "Synchronised RGB imagery capture",
                    "High-resolution aerial photographs",
                    "Enhanced visualisation of ground features",
                    "Accurate feature localisation"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/3.webp"
            },
            {
                title: "Point Cloud Processing",
                description: "Captured LiDAR data was processed to generate high-precision 3D terrain models and elevation datasets. These datasets provide critical inputs for railway engineering design and alignment planning.",
                features: [
                    "Digital Terrain Models (DTM)",
                    "Digital Surface Models (DSM)",
                    "LiDAR point cloud processing",
                    "High-accuracy elevation extraction"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
            },
            {
                title: "Feature Extraction and Mapping",
                description: "Advanced processing techniques were used to extract key infrastructure and terrain features from LiDAR datasets.",
                features: [
                    "Railway infrastructure objects",
                    "Topographical terrain features",
                    "Access roads and service paths",
                    "Buildings and surrounding structures"
                ],
                image: "/Photos/GIS_portfolio/Topographical Survey & Mapping of Proposed Railway Track/1.webp"
            }
        ],
        benefits: [
            {
                label: "Accuracy",
                value: "Centimetre-Level",
                description: "Drone-mounted LiDAR sensors provided high-precision elevation measurements with centimetre-level accuracy.",
                icon: "🎯"
            },
            {
                label: "Efficiency",
                value: "Time-Efficient",
                description: "Compared with traditional ground surveys, UAV-LiDAR significantly reduced survey time while covering large corridors.",
                icon: "⚡"
            },
            {
                label: "Analysis",
                value: "Enhanced Spatial",
                description: "Combining LiDAR point clouds with RGB imagery enabled better visualisation, feature recognition, and infrastructure analysis.",
                icon: "👁️"
            }
        ],
        conclusion: "The drone-based LiDAR survey successfully delivered high-resolution topographic data and infrastructure mapping for the proposed elevated railway corridor. The dataset supports accurate railway design, alignment optimisation, and infrastructure planning, ensuring safer and more efficient railway development."
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