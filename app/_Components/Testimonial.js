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
    <div className="bg-gray-700 py-8 px-4 text-center ">
      <h1 className="text-3xl max-sm:text-xl mb-6 text-white text-center font-semibold tracking-wide drop-shadow-md leading-snug">
        Hear From Our Happy Clients
      </h1>

      <div className="w-full max-w-[1600px] mx-auto p-12 max-sm:px-2">
        <CarouselWrapper responsive={responsive}>
          {safeTestimonials.length > 0 ? safeTestimonials.map((data) => (
            <div
              key={data._id || data.userId || `testimonial-${data.name}-${data.Companyname}`}
              className="bg-[#1C1C1C] text-white p-8 rounded-lg shadow-lg mx-4 min-h-[300px] flex flex-col"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold mr-2">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-pink-500 text-xl" />
                  ))}
                </div>
              </div>

              <div className="tooltip w-full flex-grow">
                <div className="text-base text-start leading-relaxed">
                  <MessageTooltip message={data.message} />
                </div>

              </div>

              <div className="mt-6">
                <div className="mb-4 text-start">
                  <p className="font-semibold text-lg">{data.name || 'Anonymous'}</p>
                  {data.Companyname && (
                    <p className="text-gray-400">{data.Companyname}</p>
                  )}
                </div>

                <div className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  <span className="text-sm">Verified Review</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="bg-[#1C1C1C] text-white p-8 rounded-lg shadow-lg mx-4 min-h-[300px] flex flex-col justify-center items-center">
              <p className="text-lg text-gray-400">No testimonials available at the moment.</p>
            </div>
          )}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonial;


