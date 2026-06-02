'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({ children, className = '', y = 80, duration = 1, delay = 0 }) {
    const elRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !elRef.current) return;

        let ctx = gsap.context(() => {
            gsap.fromTo(elRef.current,
                { opacity: 0, y: y },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elRef.current,
                        start: "top 85%", 
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, elRef);

        return () => ctx.revert();
    }, [y, duration, delay]);

    return (
        <div ref={elRef} className={`will-change-transform w-full ${className}`}>
            {children}
        </div>
    );
}
