import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';

const AuthorDetails = ({ author }) => {
  return (
    <div className="author_details mb-8 p-4 bg-gray-800 rounded-lg">
      <Image src={author?.picture ?? "/default-avatar.png"} alt={author?.name ?? "Unknown"} width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" sizes="96px" />
      <h1 className="text-xl font-bold text-center">{author?.name ?? "Unknown"}</h1>
      <h3 className="text-center">{author?.authorDetails ?? "No bio available"}</h3>
      <div className="flex justify-center gap-4 mt-4">
        <Link href={author?.socialLinks?.facebook ?? '#'} target="_blank"><AiFillFacebook className="text-2xl" /></Link>
        <Link href={author?.socialLinks?.twitter ?? '#'} target="_blank"><AiFillTwitterSquare className="text-2xl" /></Link>
        <Link href={author?.socialLinks?.linkedin ?? '#'} target="_blank"><AiFillLinkedin className="text-2xl" /></Link>
      </div>
    </div>
  );
};

export default AuthorDetails;
