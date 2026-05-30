import { FaStar, FaCheckCircle } from 'react-icons/fa';
import CarouselWrapper from './CarouselWrapper';
import MessageTooltip from "./MessageTooltip";

import logger from '@/app/lib/utils/logger';

async function getTestimonials() {
  try {
    // Use relative URL for API routes in Server Components (works in both dev and production)
    // Fallback to absolute URL if NEXT_PUBLIC_BASE_URL is set
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = baseUrl ? `${baseUrl}/api/testimonial` : '/api/testimonial';
    logger.log('Fetching testimonials from:', url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 }, // Cache for 10 minutes
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error(`HTTP error fetching testimonials! status: ${response.status}, message: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Ensure we return an array
    const testimonials = Array.isArray(data) ? data : (data?.data && Array.isArray(data.data)) ? data.data : [];
    logger.log(`Successfully fetched ${testimonials.length} testimonials`);
    return testimonials;
  } catch (error) {
    // Log the error for debugging
    logger.error('Error fetching testimonials data:', error.message || error);

    // During build time, return empty array to prevent build failures
    // During runtime, also return empty array but log the error
    if (process.env.NODE_ENV === 'production') {
      // In production, silently return empty array
      return [];
    } else {
      // In development, log the error but still return empty array
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }
}

const Testimonial = async () => {
  const testimonials = await getTestimonials();

  // Ensure testimonials is always an array
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="bg-[#020617] relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-[10%] w-[500px] h-[500px] bg-[#376bab]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>
      <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-[#d2292b]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]"></span>
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Happy Clients</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Discover how we've helped businesses transform their operations and achieve digital excellence.
          </p>
        </div>

        <div className="w-full">
          <CarouselWrapper responsive={responsive}>
            {safeTestimonials.length > 0 ? safeTestimonials.map((data) => (
              <div
                key={data._id || data.userId || `testimonial-${data.name}-${data.Companyname}`}
                className="bg-white/[0.02] border border-white/5 backdrop-blur-sm text-white p-8 md:p-10 rounded-3xl shadow-2xl mx-3 my-6 min-h-[420px] flex flex-col hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-white">5.0</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#d2292b] text-xl" />
                      ))}
                    </div>
                  </div>
                  {/* Subtle decorative quotation mark */}
                  <span className="text-6xl font-serif text-white/5 group-hover:text-[#4a8cd4]/10 transition-colors duration-300 transform -translate-y-4">"</span>
                </div>

                <div className="w-full flex-grow relative">
                  <div className="text-base md:text-lg text-gray-300 font-light italic leading-relaxed text-start z-10 relative">
                    <MessageTooltip message={data.message} />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-start">
                    <p className="font-bold text-lg text-white mb-1">{data.name || 'Anonymous'}</p>
                    {data.Companyname && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#4a8cd4]">{data.Companyname}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] self-start sm:self-auto">
                    <FaCheckCircle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </div>
            )) : (
              <div className="bg-white/[0.02] border border-white/5 text-white p-8 rounded-2xl shadow-lg mx-4 min-h-[300px] flex flex-col justify-center items-center">
                <p className="text-lg text-gray-400">No testimonials available at the moment.</p>
              </div>
            )}
          </CarouselWrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


