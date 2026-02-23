import Image from 'next/image';
import logo from '@/public/Short_logo.webp';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      title: "Innovation-Driven Approach",
      description: "Techmapperz develops innovative solutions through advanced AI technology and GIS and cloud-based abilities to address future business problems."
    },
    {
      id: 2,
      title: "Precision & Accuracy",
      description: "Each manufactured solution originates from data analysis and meets the exact requirements of your business operations."
    },
    {
      id: 3,
      title: "Scalable & Custom Solutions",
      description: "Individually customized delivery services exist for both startups and enterprises of all scales as per project requirements."
    },
    {
      id: 4,
      title: "Client-Centric & Agile Execution",
      description: "Techmapperz functions as an interactive partner with our clients to deliver transparent solutions that lead to significant business outcomes."
    },
    {
      id: 5,
      title: "Multi-Industry Expertise",
      description: "Our services target public sector institutions in addition to urban development, agricultural and energy and infrastructure sectors."
    },
    {
      id: 6,
      title: "Cost-Effective",
      description: "With our process optimization, we provide affordable prices while maintaining quality, delivering high-value services to businesses and organizations"
    }
  ];

  return (
    <section className="bg-gray-800">
      <div className='w-full h-full  py-8 max-sm:py-2 max-sm:px-4 '>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Why Choose Us</h2>
          </div>

          {/* Center Logo - Hidden on mobile */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full bg-white shadow-lg items-center justify-center z-10">
            <Image
              src={logo}
              alt="Techmapperz Logo"
              width={120}
              height={120}
              className="object-contain md:w-[200px] md:h-[200px]"
            />
          </div>

          {/* Features Grid - Made responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-[15rem] md:gap-y-[2rem]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`relative  px-4 md:px-6 text-center ${feature.id % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${feature.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}>
                  <div className={`md:order-${feature.id % 2 === 0 ? '1' : '2'}`}>
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold">
                      {feature.id}
                    </div>
                  </div>
                  <div className={`md:order-${feature.id % 2 === 0 ? '2' : '1'} border border-gray-500  shadow-xl rounded-md p-4 md:p-6`}>
                    <h3 className="text-lg md:text-xl font-bold text-gray-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
