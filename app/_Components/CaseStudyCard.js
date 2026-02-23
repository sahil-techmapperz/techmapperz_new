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

const CaseStudyCard = ({ filter: category }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/casestudies/${category}`);
            const data = await res.json();
            setFilteredData(data);
            setLoading(false);
        }

        fetchData();
    }, [category]);

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-6 mb-12">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-t-blue-500 border-gray-200 border-solid rounded-full animate-spin"></div>
                    <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin animation-delay-200"></div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 mt-6 mb-12 px-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
        >
            {filteredData.map((data, index) => (
                <Link href={`/portfolios/${data.link}`} key={`${data.category}-${data.name}-${index}`}>
                    <motion.div
                        className="relative group rounded-xl shadow-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Card Front */}
                        <div className="relative h-[300px] w-full">
                            <Image
                                src={data.image}
                                alt={`${data.name} image`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-xl group-hover:opacity-80 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-3">
                            <h2 className="text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                                {data.name}
                            </h2>
                            <p className="text-gray-200 line-clamp-3">
                                {data.details[0]}
                            </p>
                            {data.category && (
                                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                                    {data.category}
                                </span>
                            )}
                        </div>

                        {/* Card Flip Back */}
                        <motion.div
                            className="absolute inset-0 bg-gray-900 text-white p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center"
                            initial={{ rotateY: 180 }}
                            animate={{ rotateY: 0 }}
                            exit={{ rotateY: -180 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">{data.name}</h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                {data.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    );
};

export default CaseStudyCard;
