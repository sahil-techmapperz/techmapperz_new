"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
    hidden: {
        y: "100%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
        y: "0",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
};

const AnimatedText = ({ data, className }) => {
    return (
        <span
            style={{
                overflow: "hidden",
                display: "inline-block",
            }}
        >
            <motion.p className={className} variants={item} key={data}>
                {data}
            </motion.p>
        </span>
    );
};

export default function OtherInfo({ data }) {
    return (
        <>
            <motion.div initial="hidden" animate="visible" className="flex flex-col">
                {/* <AnimatedText
                    data={data?.heading}
                    className={"spacing overflow-hidden text-[#D5D5D6]"}
                /> */}
                <AnimatedText
                    data={data?.heading}
                    className={
                        "my-1 text-4xl font-semibold md:my-3 md:text-4xl"
                    }
                />
                <AnimatedText data={data?.subTitle} className={"text-xs text-[#D5D5D6]"} />
                <motion.button
                    className="mt-4 w-max px-4 py-2 bg-blue-500 text-white rounded hover:rounded-md"
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => { }}
                    onHoverEnd={(e) => { }}
                >
                  <Link href={"/contact"}>  Know More</Link>
                </motion.button>
            </motion.div>
        </>
    );
}
