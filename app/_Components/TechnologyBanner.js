import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/public/Photos/banner_1.webp';

const TechnologyBanner = ({ stack }) => (
  <section className="relative h-[400px] w-full flex flex-col justify-center items-center bg-black text-white">
    {/* Optimized Next.js Image */}
    <Image
      src={Banner}
      alt="Technology Banner"
      layout="fill"
      objectFit="cover"
      priority
      className="z-10"
    />
    <div className='absolute z-20 text-center'>
      <h1 className="text-6xl font-bold">Technology</h1>
      <p className="text-xl mt-4">
        <Link href="/" className="text-white">Home</Link> / Technology / {stack}
      </p>
    </div>

  </section>
);

export default TechnologyBanner;
