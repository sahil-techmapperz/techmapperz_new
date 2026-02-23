"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from './TechStack.module.css';

const TechStack = ({ techItems = [],Headingtext="Technology We Use" }) => {

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { 
			opacity: 0,
			y: 20,
		},
		visible: { 
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			}
		},
		hover: {
			scale: 1.15,
			rotate: 5,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 10,
			},
		},
		tap: { scale: 0.95 }
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>{Headingtext}</h1>
			<motion.div
				className={styles.grid}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{techItems && techItems.length > 0 && techItems.map((tech, index) => (
					<Link key={index} href={`#`}>
						<motion.div
							className={styles.card}
							variants={cardVariants}
							whileHover="hover"
							whileTap="tap"
							style={{
								backgroundColor: tech.bg,
								color: tech.textColor,
							}}
						>
							<motion.div 
								className={styles.icon}
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								{tech.icon}
							</motion.div>
							<motion.p 
								className={styles.name}
								style={{ color: tech.textColor }}
							>
								{tech.name}
							</motion.p>
						</motion.div>
					</Link>
				))}

			</motion.div>
		</div>
	);
};

export default TechStack;