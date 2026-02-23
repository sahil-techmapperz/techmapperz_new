"use client"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare } from 'react-icons/fi';


const Homecontact = () => {
    return (
        <div className="relative bg-black/90 overflow-hidden">
            <div className="relative w-full h-full">
                {/* Base gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(55,107,171,0.4)_0%,transparent_70%)] z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(210,41,43,0.2)_0%,transparent_70%)] z-10"></div>
                
                {/* Right-to-center black gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/90 z-20"></div>

               

                {/* Gradient lines */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(55,107,171,0.15)_50%,transparent_75%)] z-40"></div>
                <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(210,41,43,0.08)_50%,transparent_75%)] z-40"></div>

                <div className="w-full max-w-[1600px] mx-auto relative z-50 flex max-sm:flex-col-reverse justify-between max-sm:px-2 max-sm:justify-center max-sm:items-center px-[30px] py-12">
                    <div className='text-white flex flex-col gap-4 justify-center max-sm:items-center max-sm:gap-0'>
                        <p className='text-4xl max-sm:text-center max-sm:text-[14px] font-bold'> Empowering Your Business with Innovation
                            <TypeAnimation
                                sequence={[
                                    'IT Development',
                                    1500,
                                    'GIS Solution',
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className='text-gradient text-4xl max-sm:text-[14px] font-bold ml-2 max-sm:block max-sm:ml-0'
                            />
                        </p>

                        <Link
                            href="/contact"
                            className="btn-gradient mt-5 ml-5 max-sm:ml-0 inline-flex items-center gap-2 uppercase w-fit font-semibold text-[22px] py-2 px-4 rounded-lg group"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                            <FiMessageSquare className="text-[24px] z-10 text-white transition-colors duration-300 group-hover:text-[#376bab]" />
                            <span className="z-10 text-white transition-colors duration-300 group-hover:btn-gradient-hover">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homecontact
