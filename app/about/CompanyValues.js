
'use client'
import { FaLightbulb, FaHandshake, FaBrain, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import { GiCog } from 'react-icons/gi';
import styles from './CompanyValues.module.css';

const CompanyValues = () => {
	const values = [
		{ 
			icon: <FaLightbulb />, 
			text: 'Simplicity', 
			description: 'We keep solutions clear, practical, and easy to adopt.'
		},
		{ 
			icon: <FaHandshake />, 
			text: 'Flexibility', 
			description: 'We stay adaptable and open-minded in dynamic project environments.'
		},
		{ 
			icon: <FaBrain />, 
			text: 'Ingenuity', 
			description: 'We value thoughtful ideas and creative approaches to problem solving.'
		},
		{ 
			icon: <FaBalanceScale />, 
			text: 'Accountability', 
			description: 'We take ownership of our work and our commitments.'
		},
		{ 
			icon: <FaShieldAlt />, 
			text: 'Integrity', 
			description: 'We make responsible decisions based on professionalism and trust.'
		}
	];

	return (
		<section className="w-full flex flex-col justify-center items-center py-20 px-[5rem] max-sm:px-[15px] border-t border-b border-gray-800">
			<div className="text-center mb-16 max-w-4xl mx-auto">
				<h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Life at Techmapperz</h2>
				<div className="w-20 h-1 bg-[#00B0FE] mx-auto rounded-full mb-6"></div>
				<p className="text-lg max-sm:text-base leading-relaxed text-gray-300">
					At Techmapperz, we are building a work culture driven by learning, teamwork, creativity, and ownership. We encourage fresh ideas, practical problem solving, and continuous growth. Our workspace reflects the energy of a team that is passionate about technology, mapping, innovation, and meaningful outcomes.
				</p>
			</div>

			<div className="text-center mb-12">
				<h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Our Core Values</h2>
				<div className="w-20 h-1 bg-[#00B0FE] mx-auto rounded-full"></div>
			</div>
			
			<div className={styles.valuesContainer}>
				{values.map((value, index) => (
					<div key={index} className={styles.valueItem}>
						<div className={styles.gearWrapper}>
							<GiCog className={`${styles.gearIcon} ${index % 2 === 0 ? styles.rotateRight : styles.rotateLeft}`} />
							<div className={styles.innerIcon}>
								{value.icon}
							</div>
							<div className={styles.tooltip}>
								{value.description}
							</div>
						</div>
						<div className={styles.valueText}>{value.text}</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CompanyValues;