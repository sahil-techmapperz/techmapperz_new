"use client"
import Link from 'next/link';

const KnowMoreButton = ({ href, text }) => {
    return (
        <div className='flex mt-[15px] relative'>
            <div className='flex absolute'>
                <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
                <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                    <Link href={href}>{text}</Link>
                </button>
            </div>
        </div>
    );
};

export default KnowMoreButton;
