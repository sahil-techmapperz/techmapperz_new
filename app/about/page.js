
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '../_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import How_do_we_work_imgWebp from '@/public/Photos/How_do_we_work_img.webp';
import about_us_banner_img from '@/public/Photos/about_us_banner.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { IMAGE_CONFIGS, createOptimizedLoader, ISR_CONFIGS } from '../lib/utils/performanceOptimizer';

// Critical above-the-fold components - load immediately
const Missionvision = dynamic(() => import('../_Components/Missionvision'), {
  ssr: true,
  ...createOptimizedLoader("300px", "bg-gray-900")
});

// Below-the-fold components - lazy load with intersection observer
const Choose = dynamic(() => import('./choose'), {
  ...createOptimizedLoader("400px", "bg-black")
});

const OfficeLive = dynamic(() => import('./OfficeLive'), {
  ...createOptimizedLoader("500px", "bg-gray-800")
});

const CompanyValues = dynamic(() => import('./CompanyValues'), {
  ...createOptimizedLoader("400px", "bg-gray-900")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (86400 seconds = 24 hours)
export const revalidate = 86400;

export const metadata = {
  title: "Optimizing Businesses with Smart IT & Geospatial Technologies | India",
  description: "Techmapperz is a leading IT & GIS solutions provider in India, specializing in GIS mapping, drone services, software development, and IT consultancy. We empower businesses in urban planning, agriculture, real estate, logistics, and more with cutting-edge technology, precision, and innovation.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const About = () => {
  return (

    <div className="bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
      <ScrollToTop />

      <div className="max-w-full">
        <div className="mx-auto">
          {/* Banner Section */}
          <div className='relative w-full'>
            <Image
              src={about_us_banner_img}
              className='w-full h-[600px] object-cover transition-transform duration-1000 filter hover:brightness-110'
              alt="About Us Banner"
              {...IMAGE_CONFIGS.banner}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 to-black/50 flex flex-col justify-center items-center'>
              <h1 className='text-center text-7xl max-sm:text-4xl text-white font-bold tracking-tight'>
                About Us
              </h1>
              <p className='text-center text-2xl text-gray-200 mt-6 px-4 md:px-8 md:w-[50%] leading-relaxed'>
                Empowering Businesses with Smart IT & Geospatial Solutions!
              </p>
              <div className="flex gap-4 text-white mt-8">
                <Link href="/contact">
                  <button
                    className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
                  >
                    Get A  Quote
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>



          <div className="absolute rotate-[270deg] text-[80px] text-[rgba(238,237,237,0.03)] font-bold left-[-13rem] top-[67rem]">
            About Company
          </div>

          {/* About Section */}
          <section className="w-full mx-auto p-[4rem_5rem] max-sm:py-[10px] max-sm:px-[15px] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B0FE] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>

            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 gap-[5rem] max-sm:grid-cols-1 max-sm:gap-8 items-stretch relative min-h-[600px]">
              <div className="flex flex-col justify-between space-y-6 transform hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm bg-black/20 p-8 rounded-2xl h-full">
                <div className="space-y-6">
                  {[
                    "Techmapperz is one of the leading IT & GIS solutions provider in India. Our company provides solutions combining GIS mapping with drone services and software development as well as Web and Mobile Application Development and IT consultancy to serve sectors such as urban planning alongside agriculture, real estate, logistics, environmental management and infrastructure development.",
                    "At Techmapperz, we believe in the power of imagination. Letting ideas fly has always been the spirit that made Techmapperz possible. We have always been free-thinkers, a team that believes complex problems don’t always require complex solutions. Instead, the best solutions are often simple, and this is the change we believe in.",
                    "Our approach blends trusted GIS platforms such as ArcGIS, QGIS, Agisoft, AutoCAD, etc. and Drone solutions (Drone-based LiDAR, Image processing, etc.) with modern software tools like JavaScript, React, Next.js, Node.js, Tailwind CSS, PHP, MySQL, etc."
                  ].map((text, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-[#00B0FE] to-transparent rounded-full group-hover:h-[120%] transition-all duration-300"></div>
                      <p className="text-lg max-sm:text-base leading-relaxed text-gray-300 text-justify pl-4 group-hover:text-white transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6 transform hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm bg-black/20 p-8 rounded-2xl h-full">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-[#00B0FE] to-transparent rounded-full"></div>
                    {/* <h1 className="text-2xl max-sm:text-xl font-bold text-[#00B0FE] pl-4 animate-pulse">Get to know us</h1> */}
                    <h2 className="text-5xl max-sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00B0FE] to-gray-500 pl-4">About Techmapperz</h2>
                  </div>

                  <div className="space-y-6 mt-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#00B0FE] to-[#396ba9] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <video autoPlay controls loop muted className="relative w-full rounded-2xl shadow-[0_0_20px_rgba(0,176,254,0.15)] transform group-hover:scale-[1.02] transition-all duration-500">
                        <source src="/media/Introducation_video.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="relative group">
                      <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-[#00B0FE] to-transparent rounded-full group-hover:h-[120%] transition-all duration-300"></div>
                      <p className="text-lg max-sm:text-base leading-relaxed text-gray-300 text-justify pl-4 group-hover:text-white transition-colors duration-300">
                        We aim for a Digital transformation towards innovation with simplicity, striving to be a Company that delivers cutting-edge solutions, helping the world, mankind, enterprise and fortune 500 companies, all in one go.                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-auto">
                      <Link href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#00B0FE] to-[#396ba9] px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-[0px_0px_15px_0px_#00B0FE] hover:shadow-[0px_0px_25px_0px_#00B0FE] transform hover:scale-105 hover:translate-x-2">
                      Know More 
                      <FaArrowRightLong className="text-lg group-hover:translate-x-2 transition-all duration-300" />
                      </Link>
                    </div> */}
              </div>
            </div>

          </section>


          {/* About Section end */}

          <section className="p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px] bg-[rgba(33,33,33,1)]">
            <Missionvision />
          </section>

          <section>
            <Choose />
          </section>

          {/* How Do We Work Section */}
          <section className="mx-auto w-full p-[4rem_5rem] max-sm:py-[10px] max-sm:px-[15px] bg-[rgba(14,14,14,1)] relative overflow-hidden">
            {/* Background decoration */}
            {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00B0FE] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div> */}

            <div className="flex w-full max-w-[1600px] mx-auto h-full items-center justify-around max-sm:flex-col gap-12 relative">
              <div className="w-1/2 h-3/5 max-sm:w-full max-sm:h-auto group">
                <div className="relative">
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#00B0FE] to-[#396ba9] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div> */}
                  <Image
                    src={How_do_we_work_imgWebp}
                    alt="How we work"
                    className="relative w-[85%] rounded-2xl shadow-[0_0_20px_rgba(0,176,254,0.15)] transform group-hover:scale-105 transition-all duration-500 max-sm:w-full max-sm:mx-auto"
                  />
                </div>
              </div>

              <div className="w-1/2 max-sm:w-full space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
                <div className="text-4xl max-sm:text-2xl font-bold text-white relative">
                  <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-[#00B0FE] to-transparent rounded-full"></div>
                  <h1 className="pl-4">How Do We Work</h1>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-lg max-sm:text-base leading-relaxed text-gray-300 text-justify">
                    Techmapperz implements Agile methodology to secure leadership in fast-moving environments of advancing technology together with dynamic markets and evolving customer needs. The system we follow delivers solutions through flexible and efficient processes which drive results for our clients:
                  </p>
                  <ul className="space-y-6 list-none">
                    {[
                      { title: "Individuals & Interactions over Processes & Tools", desc: "Our company manages and believes that Individuals & Interactions are efficient and equal as compared to Processes & Tools to enable effective teamwork that brings innovative solutions." },
                      { title: "Working Solutions over Extensive Documentation", desc: "Techmapperz focuses on providing operational delivery systems instead of pursuing needless written records." },
                      { title: "Customer Collaboration over Contract Negotiation", desc: "Customer partnership takes precedence over traditional contract discussions because client prosperity remains our top priority." },
                      { title: "Responding to Change over Following a Fixed Plan", desc: "Our organization takes prompt action against new challenges instead of sticking to predetermined plans." }
                    ].map((item, index) => (
                      <li key={index} className="flex gap-4 items-start group relative">
                        <div className="min-w-[8px] h-8 bg-gradient-to-b from-[#00B0FE] to-[#396ba9] rounded-full mt-1 group-hover:h-12 transition-all duration-300"></div>
                        <div className="transform group-hover:translate-x-2 transition-all duration-300">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B0FE] transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center gap-12 py-20 px-[5rem] max-sm:px-[15px] bg-gradient-to-b from-[rgba(14,14,14,1)] to-[rgba(24,24,24,1)] relative overflow-hidden">
            {/* Background decoration */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B0FE] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div> */}

            <div className="relative space-y-4 text-center">
              <h2 className="text-3xl max-sm:text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00B0FE] to-white">Benefits of Our Agile Methodology</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00B0FE] to-[#396ba9] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto max-sm:grid-cols-1 relative">
              {[
                "Cost protection and the time frame required",
                "Constant feedback and a superior product result",
                "Possibility of change during the process",
                "Reduce the risk of error and the investment"
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1  rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-[rgba(57,107,169,0.1)] p-6 rounded-xl backdrop-blur-sm hover:bg-black/20 transition-all duration-300">
                    <div className="flex gap-4 items-center transform group-hover:translate-x-2 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#00B0FE] to-[#396ba9] rounded-full group-hover:scale-150 transition-all duration-300"></div>
                      <p className="text-white text-lg group-hover:text-[#00B0FE] transition-colors duration-300">{benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <OfficeLive />

          <CompanyValues />

        </div>
      </div>
    </div>
  );
};

export default About;
