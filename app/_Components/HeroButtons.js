import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

const HeroButtons = ({ 
    button1Text = "Request a Proposal", 
    button1Link = "/contact",
    button2Text = "View Our Work",
    button2Link = "/portfolio"
}) => {
    return (
        <div className="flex flex-wrap gap-5 mt-6">
            <Link href={button1Link}>
                <button className="py-[12px] px-7 rounded-full bg-gradient-to-r from-[#4A85F6] via-[#855896] to-[#CB2B33] text-white font-semibold text-[15px] hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    {button1Text} <FaArrowRight className="text-lg" />
                </button>
            </Link>
            <Link href={button2Link}>
                <button className="py-[12px] px-7 rounded-full bg-[#203456] border-[1.5px] border-[#0A58CA] text-white font-semibold text-[15px] hover:bg-[#2a436e] transition-all">
                    {button2Text}
                </button>
            </Link>
        </div>
    );
};

export default HeroButtons;
