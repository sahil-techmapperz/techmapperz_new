
import { FaSearch, FaChartLine, FaLaptopCode, FaChartBar, FaUsers, FaDollarSign } from 'react-icons/fa';

const How_Mobile_Applications_Grow_Your_Business = () => {
	const features = [
		{
			id: '01',
			icon: <FaSearch size={40} />,
			title: 'Market Study',
			description: 'We generally conduct market research to determine your exact requirements and what your rivals are doing. We analyze their strengths and shortcomings so that we can avoid making the same mistakes.'
		},
		{
			id: '02',
			icon: <FaChartLine size={40} />,
			title: 'Generate Sales',
			description: 'We focus on newer avenues in the marketplace for the execution of mobile applications to generate sales at progressive levels within a short span of time.'
		},
		{
			id: '03',
			icon: <FaLaptopCode size={40} />,
			title: 'Innovative User Interface',
			description: 'Our design team conceptualizes the most hassle-free user interface. We take special care to make it user-friendly.'
		},
		{
			id: '04',
			icon: <FaChartBar size={40} />,
			title: 'Business Solution',
			description: 'According to your need and market research, we design a framework for your app. We keep in mind all your requirements and what we have learned from the market research.'
		},
		{
			id: '05',
			icon: <FaUsers size={40} />,
			title: 'Brand Value',
			description: 'Mobile apps are a one-stop point for getting all the relevant information related to the brand as well as showcasing the products and services, thus increasing the overall brand value.'
		},
		{
			id: '06',
			icon: <FaDollarSign size={40} />,
			title: 'Revenue',
			description: 'We take your suggestions to incorporate in-app advertising. In-app purchases, and paid apps are some of the most common app monetization tactics.'
		}
	];

	return (
		<div className="w-full pt-8 max-sm:pt-2 max-sm:px-4 px-[4rem] bg-black text-white">
			<div className="max-w-[1240px] mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">How Mobile Applications Grow Your Business</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{features.map((feature) => (
						<div key={feature.id} className="flex flex-col items-center p-6 border border-gray-700 rounded-lg">
							<div className="mb-4 text-white">{feature.icon}</div>
							<div className="text-xl mb-2">{feature.id}</div>
							<h3 className="text-xl font-bold mb-4">{feature.title}</h3>
							<p className="text-center text-gray-300">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default How_Mobile_Applications_Grow_Your_Business;