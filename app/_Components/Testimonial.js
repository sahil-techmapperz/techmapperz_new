import { FaStar, FaCheckCircle, FaQuoteRight } from 'react-icons/fa';
import CarouselWrapper from './CarouselWrapper';
import MessageTooltip from "./MessageTooltip";
import logger from '@/app/lib/utils/logger';

async function getTestimonials() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = baseUrl ? `${baseUrl}/api/testimonial` : '/api/testimonial';
    logger.log('Fetching testimonials from:', url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(`HTTP error fetching testimonials! status: ${response.status}, message: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const testimonials = Array.isArray(data) ? data : (data?.data && Array.isArray(data.data)) ? data.data : [];
    logger.log(`Successfully fetched ${testimonials.length} testimonials`);
    return testimonials;
  } catch (error) {
    logger.error('Error fetching testimonials data:', error.message || error);
    if (process.env.NODE_ENV === 'production') {
      return [];
    } else {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }
}

const Testimonial = async () => {
  const testimonials = await getTestimonials();
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="relative bg-[#070A11] py-24 px-4 overflow-hidden border-t border-white/5">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">Testimonials</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Hear From Our Clients
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#05D7DE] mx-auto rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <CarouselWrapper responsive={responsive}>
          {safeTestimonials.length > 0 ? safeTestimonials.map((data, idx) => (
            <div
              key={data._id || data.userId || `testimonial-${idx}`}
              className="group relative bg-[#111622] border border-white/5 rounded-[2rem] p-8 md:p-10 mx-4 min-h-[350px] h-full flex flex-col transition-all duration-500 hover:border-[#05D7DE]/30 hover:bg-[#161C28] shadow-2xl overflow-hidden"
            >
              {/* Subtle gradient hover reveal */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#05D7DE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Large faded quote icon */}
              <FaQuoteRight className="absolute top-8 right-8 text-white/5 text-6xl group-hover:text-[#05D7DE]/10 transition-colors duration-500" />

              <div className="relative z-10 flex items-center mb-8">
                <span className="text-4xl font-extrabold text-white mr-4">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#05D7DE] text-xl drop-shadow-[0_0_8px_rgba(5,215,222,0.6)]" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-grow mb-8 text-gray-300 text-base md:text-lg leading-relaxed italic font-light">
                <MessageTooltip message={data.message} />
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-white font-bold text-lg tracking-wide">{data.name || 'Anonymous Client'}</h4>
                  {data.Companyname && (
                    <p className="text-[#05D7DE] text-sm font-medium mt-1 uppercase tracking-wider">{data.Companyname}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 bg-[#05D7DE]/10 px-3 py-1.5 rounded-full border border-[#05D7DE]/20">
                  <FaCheckCircle className="text-[#05D7DE] text-sm" />
                  <span className="text-[#05D7DE] text-xs font-bold tracking-wide uppercase">Verified</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="bg-[#111622] border border-white/5 text-white p-10 rounded-[2rem] shadow-2xl mx-4 min-h-[300px] flex flex-col justify-center items-center">
              <p className="text-lg text-gray-400 font-light">No testimonials available at the moment.</p>
            </div>
          )}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonial;


