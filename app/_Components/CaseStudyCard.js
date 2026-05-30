// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const CaseStudyCard = ({ filter:category }) => {
//     const [filteredData, setFilteredData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const res = await fetch(`/api/casestudies/${category}`);
//             const data = await res.json();
//             setFilteredData(data);
//         }

//         fetchData();
//     }, [category]); // Re-fetch when category changes

//     return (
//       <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1 mt-2 mb-8'>
//       {filteredData.map((data, index) => (
//         <div
//           key={`${data.category}-${data.name}-${index}`} // Unique key
//           className='case-study-container rounded-md border-[5px] border-[#FFFFFF]'
//           style={{ width: '100%', height: '350px' }} // Set a fixed size for the container
//         >
//           <div className='relative h-[100%] w-full '>
//             <Image
//               src={data.image}
//               alt={`${data.name} image`}
//               layout="fill" // This ensures the image fills the container
//               objectFit="cover" // This ensures the image covers the container area
//               className="rounded-md"
//             />
//           </div>
//           <div className='case-study-info h-[100%] pt-2 px-4 overflow-x-auto'>
//             <p className='font-bold text-2xl mb-2'>
//               <Link href={`/portfolios/${data.link}`}>{data.name}</Link>
//             </p>
//             <ul className='list-decimal ml-[15px]'>
//               {data.details.map((detail, index) => <li  key={index}>{detail}</li>)}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>

//     );
// };

// export default CaseStudyCard;






"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { itPortfolioData } from "@/app/portfolios/PortfolioData";

const CaseStudyCard = ({ filter: category, limit = 3 }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Use real portfolio data for the IT section, slice to show based on limit
        const relevantProjects = itPortfolioData.slice(0, limit);
        const timer = setTimeout(() => {
            setFilteredData(relevantProjects);
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [category]);

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-6 mb-12 min-h-[300px]">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-t-blue-500 border-gray-700/50 border-solid rounded-full animate-spin"></div>
                    <div className="absolute inset-0 border-4 border-t-transparent border-indigo-500 border-solid rounded-full animate-spin" style={{ animationDelay: '-0.4s' }}></div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className={`grid gap-8 mt-6 mb-12 px-4 ${limit === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                },
            }}
        >
            {filteredData.map((data, index) => (
                <Link href={`${data.link}`} key={`${data.category}-${data.name}-${index}`}>
                    <motion.div
                        className="group relative rounded-3xl shadow-2xl overflow-hidden bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/60 backdrop-blur-md transition-all duration-300 h-[450px]"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {/* Card Front Image Layer */}
                        <div className="relative h-2/3 w-full overflow-hidden">
                            <Image
                                src={data.image}
                                alt={`${data.name} mockup`}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                            {/* Category Badge */}
                            {data.category && (
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-blue-600/90 backdrop-blur text-white rounded-full shadow-lg border border-blue-500/30">
                                        {data.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Card Content layer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 h-1/3 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 drop-shadow-md">
                                {data.name}
                            </h2>
                            {/* <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                                {data.details[0]}
                            </p> */}
                        </div>

                        {/* Glowing bottom border on hover */}
                        <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-blue-500 to-indigo-500 origin-left transition-transform duration-500"></div>

                    </motion.div>
                </Link>
            ))}
        </motion.div>
    );
};

export default CaseStudyCard;
