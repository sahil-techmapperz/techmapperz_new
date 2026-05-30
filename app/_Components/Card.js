import Image from "next/image";
import blogWatermark from "@/public/Photos/blog_watermark.webp";
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from "next/link";
import moment from "moment";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const Card = ({ post }) => {
  const socialLinks = post.author?.socialLinks || { linkedin: '#', twitter: '#', facebook: '#' };

  return (
    <div className="group relative flex flex-col justify-between h-full bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 text-left">

      {/* Image Wrapper */}
      <div className="relative h-56 w-full overflow-hidden bg-[#0c111a]">
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

        <Image
          height={60}
          width={80}
          src={blogWatermark}
          className="absolute top-4 right-4 z-20 object-contain opacity-50 drop-shadow-lg scale-75 md:scale-100"
          alt="Blog Watermark"
        />

        <Image
          src={`${post.images?.[0]?.trim() || '/placeholder-image.jpg'}?tr=w-800,h-500,q-80,f-webp`}
          srcSet={`
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-300,h-200,q-75 300w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-600,h-400,q-75 600w,
            ${(post.images?.[0]?.trim() || '/placeholder-image.jpg')}?tr=w-800,h-500,q-80 800w
          `}
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 800px"
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          alt={post.title || 'Blog post image'}
          loading="lazy"
        />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-semibold text-white shadow-xl">
          <FiCalendar className="w-3.5 h-3.5" />
          {moment(post.created_at).format('MMM DD, YYYY')}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-[#4a8cd4] uppercase bg-[#4a8cd4]/10 rounded-full border border-[#4a8cd4]/20">
            {post.category || "Technology"}
          </span>
        </div>

        <Link href={`/blog/${post._id}`} className="block mb-4 group/title flex-grow">
          <h1 className="text-xl md:text-2xl font-bold text-gray-100 leading-snug group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-[#4a8cd4] group-hover/title:to-[#d2292b] transition-all duration-300 line-clamp-3">
            {post.title}
          </h1>
        </Link>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
          <Link href={`/blog/${post._id}`} className="flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
            Read Article <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-[#d2292b]" />
          </Link>

          <div className="flex items-center gap-3 text-gray-400">
            <a href={socialLinks?.linkedin || '#'} className="hover:text-[#0077b5] transition-colors" aria-label="Share on LinkedIn"><FaLinkedinIn size={16} /></a>
            <a href={socialLinks?.twitter || '#'} className="hover:text-[#1DA1F2] transition-colors" aria-label="Share on Twitter"><FaTwitter size={16} /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
