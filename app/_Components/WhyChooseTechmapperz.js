import Image from 'next/image';

export const defaultFeatures = [
    {
        img: '/flexibility.svg',
        title: 'Flexibility',
        description: 'We understand your need, and sometime we know that it can be time critical yet should be affordable.'
    },
    {
        img: '/Quality.svg',
        title: 'Quality',
        description: 'Quality makes us excel. Our approach is designed to provide it at all levels of functioning up to the micro level details.'
    },
    {
        img: '/Friendly.svg',
        title: 'Security',
        description: 'Our team planning is so efficient that the project overall time is not extended, thus keeping the overall cost in check.'
    },
    {
        img: '/reduce_cost.svg',
        title: 'Reduce cost',
        description: 'Our team planning is so efficient that the project overall time is not extended and thus keeping the overall cost in check.'
    }
];

const WhyChooseTechmapperz = ({ features = defaultFeatures, heading }) => {
    // Safety check: ensure features is an array
    const featuresList = Array.isArray(features) ? features : defaultFeatures;
    
    return (

        <div className="px-20 max-sm:px-2 py-10 relative max-w-[1600px] m-auto">
            <div className="absolute bottom-[-5rem] right-[5rem] text-[150px] leading-[968px] text-white opacity-5"></div>
            <h3 className="text-4xl max-sm:text-2xl font-semibold text-center mb-8">
                {heading}
            </h3>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:w-[90vw] max-sm:gap-2 gap-4 w-full  m-auto">
                {featuresList.map((feature, index) => (
                    <div key={index} className={`p-4 rounded-[20px] bg-gray-800`}>
                        <div className='flex flex-col justify-around gap-2 items-center'>
                            <Image src={feature.img} alt={feature.title} width={50} height={50} className='brightness-0 invert' />
                            <h1 className="text-2xl font-semibold mt-4 text-center">{feature.title}</h1>
                            <p className="text-center mt-4 text-gray-300" title={feature.description}>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseTechmapperz;