import getJobsdata from "@/lib/getJobsdata";
import ScrollToTop from "../_Components/ScrollToTop";
import Image from "next/image";
import JobCard from "../_Components/JobCard";
import career_question_img from "@/public/Photos/career_question_img.webp"
import careers_do_what_you_love_img from "@/public/Photos/careers_do_what_you_love.webp"
import career_banner_img from "@/public/Photos/career_banner.webp"
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
  title: "Join Our Team & Build Your Future | Techmapperz Careers",
  description: "Come Build the Career with Techmapperz",
  alternates: {
    canonical: `${BASE_URL}/career`,
  },
};

const Career = async () => {
  const jobsResponse = await getJobsdata();
  
  // Handle the response structure and ensure we have an array
  const Jobsdata = Array.isArray(jobsResponse) 
    ? jobsResponse 
    : (jobsResponse?.data && Array.isArray(jobsResponse.data)) 
      ? jobsResponse.data 
      : [];

  return (
    <div className="bg-black text-white">

      <ScrollToTop />
      {/* <section className="h-[250px]  flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_2.webp")' }}>
        <h1 className="font-bold mt-10 text-6xl">Career</h1>
        <p><a href="/">Home</a> / Career</p>
      </section> */}

      {/* <div className='relative w-full'>
        <Image src={career_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl max-sm:text-4xl text-white font-bold'>Career</h1>
          <p className='text-center text-lg max-sm:text-sm text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <div className="flex gap-4 text-white mt-8">
            <Link href="/contact">
              <button
                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
              >
                Get A  Quote
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/career_banner.webp")' }}>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
          <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Career</h1>
          <p className='text-center text-lg max-sm:text-sm text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <button
                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
              >
                Get A  Quote
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex max-sm:flex-col-reverse max-sm:px-[10px] justify-between px-[50px] py-4 items-center max-w-[1600px] mx-auto">
        <div className="flex flex-col justify-center max-sm:items-center gap-4">
          <h1 className="text-[45px] max-sm:text-[30px]">Do what you love <br /> Love what you do</h1>
          <p className="max-sm:text-[14px]">Come Build the Future with  <span className="text-[#396BA9] font-bold"> Techmapperz </span></p>
          <div className="bg-white text-[#396BA9] w-fit py-2 px-4 rounded-md">  <a href="#jobs">Search Open Position</a></div>
        </div>
        <div>
          <Image src={careers_do_what_you_love_img} alt="careers_do_what_you_love_img" />
        </div>
      </div>

      <div className="text-center py-8 px-20 max-sm:px-5 max-w-[1600px] mx-auto">
        <h3 className="text-2xl font-[600]">Why choose Us ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {[
            {
              img: "/Photos/career_idea_1.webp",
              title: "Possibilities unmatched",
              desc: "With Techmapperz being a start-up with business interests and prospects in many IT fields, working with us will give you exposure to many sectors, private and government, across India.",
            },
            {
              img: "/Photos/career_idea_2.webp",
              title: "Diversity unmatched",
              desc: "Since we operate all over India, you will interact with people from a diverse spectrum of cultures.",
            },
            {
              img: "/Photos/career_idea_3.webp",
              title: "Flexibility unparalleled",
              desc: "You will have flexible working hours and a dynamic work environment—the world is your office as long as you stay connected.",
            },
            {
              img: "/Photos/career_idea_4.webp",
              title: "Grow unhindered",
              desc: "The world is a digital canvas evolving every day. You'll have the opportunity to develop and execute new ideas, shaping a better digital future.",
            },
            {
              img: "/Photos/career_idea_5.webp",
              title: "Shine unrestricted",
              desc: "At Techmapperz, you get the freedom to choose your own working hours and approach as long as the job gets done on time.",
            },
            {
              img: "/Photos/career_idea_6.webp",
              title: "Earn unlimited",
              desc: "We acknowledge your talent with premium compensation that grows alongside your skills.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex career_why_choose_us flex-col items-center text-center bg-white text-black rounded-lg p-6 shadow-md"
            >
              <Image className="mx-auto" width={200} height={200} src={item.img} alt={item.title} />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-lg text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>


      <div id="jobs" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Current Opening Positions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our dynamic team and be part of innovative projects that shape the future of technology
            </p>
            {Jobsdata && Jobsdata.length > 0 && (
              <div className="mt-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {Jobsdata.length} {Jobsdata.length === 1 ? 'Position' : 'Positions'} Available
                </span>
              </div>
            )}
          </div>

          {/* Jobs Grid */}
          {Jobsdata && Jobsdata.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Jobsdata.map((job, index) => {
                // Use MongoDB _id as primary key (always unique), fallback to userId, id, or index
                const uniqueKey = job._id || job.userId || job.id || `job-${index}`;
                return (
                  <div key={uniqueKey} className="transform transition-all duration-300 hover:scale-[1.02]">
                    <JobCard job={job} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-800 rounded-2xl border-2 border-gray-700">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No Open Positions Right Now</h3>
                <p className="text-lg text-gray-400 mb-6">
                  We're always looking for talented individuals to join our team. Check back soon for new opportunities!
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-[#2d5689] to-[#a82123] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <JoinUs Jobsdata={Jobsdata} /> */}

      <div className="bg-[#ced3dd] w-full ">
        <div className="w-full max-w-[1600px] mx-auto text-black py-[20px] px-[50px] max-sm:px-[10px]  flex max-sm:flex-col-reverse justify-between max-sm:justify-center">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-[45px] max-sm:text-[30px] font-[600]">Have a Question ?</h1>
            <p className="font-[600] max-sm:text-[14px]">For Job Inquiry : - <span className="text-gradient"> info@techmapperz.com </span></p>
            <Link href={"/contact"} className="py-2 px-4 rounded-md text-[20px] font-[500] w-fit text-white btn-gradient" >Let’s Talk</Link>
          </div>
          <div>
            <Image src={career_question_img} alt="career_question_img" className="max-sm:m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
