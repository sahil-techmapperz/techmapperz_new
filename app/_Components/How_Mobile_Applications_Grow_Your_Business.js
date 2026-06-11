import { FaSearch, FaChartLine, FaLaptopCode, FaChartBar, FaUsers, FaDollarSign } from 'react-icons/fa';

const How_Mobile_Applications_Grow_Your_Business = () => {
	const features = [
		{
			id: '01',
			icon: <FaSearch size={24} />,
			title: 'Market Study',
			description: 'We generally conduct market research to determine your exact requirements and what your rivals are doing. We analyze their strengths and shortcomings so that we can avoid making the same mistakes.'
		},
		{
			id: '02',
			icon: <FaChartLine size={24} />,
			title: 'Generate Sales',
			description: 'We focus on newer avenues in the marketplace for the execution of mobile applications to generate sales at progressive levels within a short span of time.'
		},
		{
			id: '03',
			icon: <FaLaptopCode size={24} />,
			title: 'Innovative User Interface',
			description: 'Our design team conceptualizes the most hassle-free user interface. We take special care to make it user-friendly.'
		},
		{
			id: '04',
			icon: <FaChartBar size={24} />,
			title: 'Business Solution',
			description: 'According to your need and market research, we design a framework for your app. We keep in mind all your requirements and what we have learned from the market research.'
		},
		{
			id: '05',
			icon: <FaUsers size={24} />,
			title: 'Brand Value',
			description: 'Mobile apps are a one-stop point for getting all the relevant information related to the brand as well as showcasing the products and services, thus increasing the overall brand value.'
		},
		{
			id: '06',
			icon: <FaDollarSign size={24} />,
			title: 'Revenue',
			description: 'We take your suggestions to incorporate in-app advertising. In-app purchases, and paid apps are some of the most common app monetization tactics.'
		}
	];

	return (
		<div className="w-full py-20 px-6 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#05d7de] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>

			<div className="max-w-[1400px] mx-auto relative z-10">
				{/* Modern Header */}
                <div className="text-center mb-16">
                    <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Business Growth</span>
                    <h2 className="text-4xl max-sm:text-3xl font-extrabold text-white mt-3">
                        How Mobile Applications Grow Your Business
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-6" />
                </div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
					{features.map((feature) => (
						<div key={feature.id} className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#05d7de]/30 hover:bg-[#05d7de]/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-lg flex flex-col h-full">
							{/* Hover Glow inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05d7de] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    {/* Icon Box */}
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#05d7de]/20 to-[#2d5689]/20 border border-white/10 rounded-2xl flex items-center justify-center text-[#05d7de] group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        {feature.icon}
                                    </div>
                                    
                                    {/* Large faint number */}
                                    <div className="text-4xl font-black text-white/20 group-hover:text-[#05d7de]/40 transition-colors duration-300">
                                        {feature.id}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#05d7de] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                                    {feature.description}
                                </p>
                            </div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default How_Mobile_Applications_Grow_Your_Business;