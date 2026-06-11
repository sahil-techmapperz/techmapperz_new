import Link from 'next/link';

const HeroButtons = ({ 
    button1Text = "Request a Proposal", 
    button1Link = "/contact",
    button2Text = "View Our Work",
    button2Link = "/portfolio"
}) => {
    return (
        <div className="flex flex-wrap gap-5 mt-8">
            <Link href={button1Link} className="group">
                <button className="py-[12px] px-8 rounded-full bg-gradient-to-r from-[#5278ff] to-[#e42e57] text-white font-bold text-[15px] tracking-wide hover:shadow-[0_14px_35px_rgba(5,215,222,0.26)] hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2.5">
                    {button1Text}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </Link>
            <Link href={button2Link}>
                <button className="py-[12px] px-8 rounded-full bg-white/[0.035] border border-white/10 text-white font-bold text-[15px] tracking-wide hover:bg-[#2563eb]/10 hover:border-[#60a5fa]/60 hover:-translate-y-[2px] transition-all duration-300">
                    {button2Text}
                </button>
            </Link>
        </div>
    );
};

export default HeroButtons;
