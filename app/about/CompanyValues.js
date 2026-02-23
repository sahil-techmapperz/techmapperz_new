
'use client'
import { FaLightbulb, FaHandshake, FaBrain, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import { GiCog } from 'react-icons/gi';
import styles from './CompanyValues.module.css';

const CompanyValues = () => {
	const values = [
		{ 
			icon: <FaLightbulb />, 
			text: 'Simplicity', 
			description: 'We keep the solutions simple for scenarios that are complex'
		},
		{ 
			icon: <FaHandshake />, 
			text: 'Flexibility', 
			description: 'We scale new heights with open minds, focus and speed'
		},
		{ 
			icon: <FaBrain />, 
			text: 'Ingenuity', 
			description: 'We harbor and nourish thoughtful, imaginative and motivating ideas'
		},
		{ 
			icon: <FaBalanceScale />, 
			text: 'Accountability', 
			description: 'We empower each other to take ownership of our actions'
		},
		{ 
			icon: <FaShieldAlt />, 
			text: 'Integrity', 
			description: 'We make responsible decisions based on professional standards'
		}
	];

	return (
		<section className="w-full flex flex-col justify-center items-center py-20 px-[5rem] max-sm:px-[15px] border-t border-b border-gray-800">
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