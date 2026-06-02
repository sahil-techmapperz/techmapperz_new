import Image from "next/image";
import blogWatermark from "@/public/Photos/blog_watermark.webp"; 
import { FaTwitter, FaLinkedinIn, FaRedditAlien, FaCalendarAlt } from 'react-icons/fa';
import { SiQuora } from 'react-icons/si'; 
import Link from "next/link";
import moment from "moment";

const Card = ({ post }) => {
  const socialLinks = post.author?.socialLinks || {
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  };

  return (
    <div className="group h-full flex flex-col bg-[#111622] text-white text-left mx-auto rounded-[2rem] border border-white/5 hover:border-[#05D7DE]/30 shadow-lg hover:shadow-[0_10px_40px_rgba(5,215,222,0.1)] transition-all duration-500 overflow-hidden">
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-[240px]">
        <Image
          height={120}
          width={150}
          src={blogWatermark}
          className="absolute top-4 right-4 z-20 object-contain opacity-90 drop-shadow-md"
          alt="Techmapperz" 
        />
        <Image
          src={`${post.images?.[0]?.trim() || '/placeholder-image.jpg'}?tr=w-800,h-500,q-80,f-webp`}
          srcSet={`
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-300,h-200,q-75 300w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-600,h-400,q-75 600w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-800,h-500,q-80 800w
          `}
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 800px"
          width={800}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          alt={post.title || 'Blog post image'}
          loading="lazy"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
        
        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#05D7DE]/10 backdrop-blur-md border border-[#05D7DE]/30 px-3 py-1.5 rounded-full">
          <FaCalendarAlt className="text-[#05D7DE] text-xs" />
          <span className="font-bold tracking-wider text-[#05D7DE] text-[10px] uppercase">
            {moment(post.created_at).format('DD MMM YYYY')}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        
        {/* Category Pill */}
        <div className="mb-4">
          <span className="inline-block bg-[#1C2433] border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase transition-colors group-hover:border-[#2d5689]/50">
            {post.category || 'Technology'}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post._id}`} className="group/title flex-grow">
          <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-white group-hover/title:text-[#05D7DE] transition-colors duration-300 line-clamp-3">
            {post.title}
          </h2>
        </Link>
        
        {/* Separator */}
        <div className="w-full h-[1px] bg-white/5 my-6" />

        {/* Footer (Socials) */}
        <div className="flex items-center justify-between">
          <span className="text-[#05D7DE] text-xs font-bold uppercase tracking-wider">Share</span>
          <div className="flex gap-4">
            <a href={socialLinks?.linkedin || '#'} className="text-gray-500 hover:text-[#0077b5] transition-colors" aria-label="Share on LinkedIn">
              <FaLinkedinIn className="text-lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff4500] transition-colors" aria-label="Share on Reddit">
              <FaRedditAlien className="text-lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#b92b27] transition-colors" aria-label="Share on Quora">
              <SiQuora className="text-lg" />
            </a>
            <a href={socialLinks?.twitter || '#'} className="text-gray-500 hover:text-[#1DA1F2] transition-colors" aria-label="Share on Twitter">
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
