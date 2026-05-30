'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

const QueryDelayedForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setTimeout(()=>{
      setShowForm(true);
    },15000)

    return () => clearTimeout(interval);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };



  return (
    <>
      {showForm && (
        <div className="fixed w-[100vw]  z-50 inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="rounded-md relative">
          <button
              onClick={handleCloseForm}
              className="absolute z-50 top-3 right-3 text-2xl bg-white text-gray-500 hover:text-gray-800"
            >
              <AiOutlineClose /> {/* Close Icon */}
            </button>
            <div className='w-full relative'>
              <Image src={"/Photos/Popuop_Banner.png"} alt="Main Banner" width={600} height={300} className="w-full h-[300px] object-cover" sizes="(max-width: 768px) 100vw, 600px" />
              <Image src={"/Photos/popup_form_watermark.png"} alt="Watermark" width={180} height={120} className="absolute top-0 left-0 w-[180px]" sizes="180px" />

              <div className="absolute lg:justify-between lg:px-6 inset-0 flex items-center text-center px-2">
                <div className='text-white px-2'>
                  <p className='text-2xl max-sm:text-[20px]'>Welcome to Techmapperz</p>
                  <p className='text-4xl max-sm:text-[22px] font-bold'>“ Empowering Your Business with Innovation</p>
                  <p className='text-4xl max-sm:text-[20px] font-bold'><span className='text-black'>IT</span> and <span className='text-black'>GIS</span> Solution ”</p>
                </div>
                <button
                  className='mt-4 bg-[#00CAFF] text-white w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[100px] rounded-[50%] flex justify-center items-center hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 relative overflow-hidden'
                  onMouseEnter={() => document.getElementById('videoButton').pause()}
                  onMouseLeave={() => document.getElementById('videoButton').play()}
                >
                  <video
                    id="videoButton"
                    src="/media/popup_form_video.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full  object-cover"
                  >
                   Your browser does not support the video tag. 
                  </video>
                  
                  <div className="z-10  font-bold  bg-[#00CAFF] w-full">
                  <Link href={"/contact"} className='flex justify-center items-center gap-2 max-sm:text-[12px]'>
                    Get Started <Image className='max-sm:hidden' src='/Photos/right-arrow.png' alt="Right Arrow" width={20} height={20} sizes="20px" />
                    </Link>
                  </div>
                 
                </button>

              </div>
            </div>

          </div>
          {/* <ContactForm/> */}
        </div> 
      )}
    </>
  );
};

export default QueryDelayedForm;
  