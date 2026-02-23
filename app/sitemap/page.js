'use client';

import Link from 'next/link';
import { 
  FiHome, 
  FiInfo, 
  FiBriefcase, 
  FiLayers, 
  FiCode, 
  FiBookOpen, 
  FiGlobe, 
  FiUsers, 
  FiHelpCircle, 
  FiMail,
  FiChevronRight,
  FiMap,
  FiSmartphone,
  FiServer,
  FiFileText,
  FiShield
} from 'react-icons/fi';
import ScrollToTop from '../_Components/ScrollToTop';

const Sitemap = () => {
  const sections = [
    {
      title: 'Home',
      icon: <FiHome className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Our Services', href: '/#Our_Services' },
        { name: 'Some Of Our Works', href: '/#some_of_our_works' },
        { name: 'Technology', href: '/#technology' },
        { name: 'Industry Expertise', href: '/#Industry_Expertise' },
        { name: 'Why Choose Us', href: '/#partners' },
        { name: 'Blogs', href: '/#blog' },
        { name: 'Testimonials', href: '/#testimonials' },
      ]
    },
    {
      title: 'About Us',
      icon: <FiInfo className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      mainLink: '/about',
      links: [
        { name: 'About Techmapperz', href: '/about' },
        { name: 'Our Mission & Vision', href: '/about#mission&Vision' },
        { name: 'Our Process', href: '/about#Process' },
        { name: 'How Do We Work', href: '/about#how-we-work' },
        { name: 'Agile Methodology', href: '/about#Agile_Methodology' },
        { name: 'Life @ Techmapperz', href: '/about#Office_Life' },
        { name: 'Company Values', href: '/about#values' },
      ]
    },
    {
      title: 'Geospatial Services',
      icon: <FiMap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      mainLink: '/service',
      links: [
        { 
          name: 'GIS Services', 
          href: '/service/gis/gisservice',
          subLinks: [
            { name: 'GIS Mapping', href: '/service/gis/gisservice/gismapping' },
            { name: 'Data Digitization', href: '/service/gis/gisservice/datadigitization' },
            { name: 'GIS Consulting', href: '/service/gis/gisservice/gisconsulting' },
            { name: 'Web GIS Development', href: '/service/gis/gisservice/webgisdevelopment' },
            { name: 'GIS Surveying', href: '/service/gis/gisservice/gissurveying' },
          ]
        },
        { 
          name: 'Drone Services', 
          href: '/service/gis/droneservice',
          subLinks: [
            { name: 'Drone Survey and Mapping', href: '/service/gis/droneservice/dronesurveyandmapping' },
            { name: 'Inspection and Analysis', href: '/service/gis/droneservice/inspectionandanalysis' },
            { name: 'Drone Data Processing', href: '/service/gis/droneservice/dronedataprocessing' },
          ]
        },
      ]
    },
    {
      title: 'IT Services',
      icon: <FiCode className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      mainLink: '/service',
      links: [
        { name: 'Mobile App Development', href: '/service/it/mobiledevelopment' },
        { name: 'Website Development', href: '/service/it/webdevelopment' },
        { name: 'CRM Software Solution', href: '/service/it/crmservice' },
        { name: 'IT Consultancy', href: '/service/it/itconsultingservice' },
      ]
    },
    {
      title: 'Resources',
      icon: <FiBookOpen className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
      mainLink: '/blog',
      links: [
        { name: 'Blogs', href: '/blog' },
        { name: 'Portfolio', href: '/portfolios' },
      ]
    },
    {
      title: 'Industries',
      icon: <FiGlobe className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      mainLink: '/industry',
      links: [
        { name: 'E-Commerce', href: '/industry/e-commerce' },
        { name: 'Education & E-Learning', href: '/industry/education-e-learning' },
        { name: 'Government & Public Sector', href: '/industry/government-public-sector' },
        { name: 'Healthcare', href: '/industry/healthcare' },
        { name: 'Logistics & Supply Chain', href: '/industry/logistics-supply-chain' },
        { name: 'Manufacturing', href: '/industry/manufacturing' },
        { name: 'Retail', href: '/industry/retail' },
        { name: 'Travel & Hospitality', href: '/industry/travel-hospitality' },
      ]
    },
    {
      title: 'Career',
      icon: <FiBriefcase className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      mainLink: '/career',
      links: [
        { name: 'Current Openings', href: '/career' },
        { name: 'Our Culture', href: '/career#culture' },
      ]
    },
    {
      title: 'Help & Support',
      icon: <FiHelpCircle className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      mainLink: '/help',
      links: [
        { name: 'Getting Started', href: '/help#getting-started' },
        { name: 'Frequently Asked Questions', href: '/help#faqs' },
        { name: 'Technical Support', href: '/help#technical-support' },
        { name: 'Privacy and Security', href: '/help#privacy-security' },
        { name: 'Contact Information', href: '/help#contact' },
      ]
    },
    {
      title: 'Important Links',
      icon: <FiShield className="w-6 h-6" />,
      color: 'from-gray-600 to-gray-800',
      mainLink: '/contact',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Help', href: '/help' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <ScrollToTop />

      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-r from-[#2d5689] via-[#396BA9] to-[#a82123] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/Photos/banner_2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FiGlobe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-6">
              Navigate through all sections of our website
            </p>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Link href="/" className="hover:text-blue-200 transition-colors flex items-center gap-1">
                <FiHome className="w-4 h-4" />
                Home
              </Link>
              <span className="text-white/60">/</span>
              <span className="text-white/80">Sitemap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-transparent"
            >
              {/* Section Header */}
              <Link href={section.mainLink || '/'}>
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                      <p className="text-white/80 text-sm">Explore {section.title.toLowerCase()}</p>
                    </div>
                    <FiChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {/* Section Links */}
              <div className="p-6">
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} opacity-60 group-hover/link:opacity-100 transition-opacity`}></div>
                        <span className="flex-1 text-gray-700 group-hover/link:text-gray-900 font-medium transition-colors">
                          {link.name}
                        </span>
                        <FiChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                      
                      {/* Sub Links */}
                      {link.subLinks && (
                        <ul className="ml-5 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                          {link.subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subLink.href}
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors group/sublink"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color} opacity-40 group-hover/sublink:opacity-100 transition-opacity`}></div>
                                <span className="text-sm text-gray-600 group-hover/sublink:text-gray-900 transition-colors">
                                  {subLink.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <FiFileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Quick Access</h3>
                <p className="text-gray-600 text-sm">Find what you need faster</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <FiMail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Need Help?</h3>
                <Link href="/contact" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Join Our Team</h3>
                <Link href="/career" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View Careers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
