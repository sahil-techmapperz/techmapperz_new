'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const initialTestimonials = [
    {
        text: "We chose Techmapperz to build our financial literacy and money management app from start to finish. From the first call, we were very impressed with Techmapperz's professionalism, expertise, and commitment to delivering top-notch results.",
        name: "Simon Wing",
        role: "Co-Founder & CEO, Edfundo",
        image: "/Photos/Simon_Wing.webp" // Assuming this image exists or I'll use a placeholder
    },
    {
        text: "Techmapperz has been an incredible partner in our digital transformation journey. Their GIS expertise and web development skills are unparalleled.",
        name: "Sarah Johnson",
        role: "Operations Director, Geotech Solutions",
        image: "/Photos/Sarah_Johnson.webp"
    }
];


const ExitIntentPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        workEmail: '',
        projectDescription: '',
        captchaResult: ''
    });
    const [errors, setErrors] = useState({});
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // Fetch testimonials dynamically
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonial');
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        const formattedTestimonials = data.map(item => ({
                            text: item.message,
                            name: item.name,
                            role: item.Companyname,
                            image: item.avater || ""
                        }));
                        setTestimonials(formattedTestimonials);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch testimonials", error);
            }
        };
        fetchTestimonials();

        // Check if user has already seen the popup in this session
        const shown = sessionStorage.getItem('exit_popup_shown');
        if (shown) setIsDismissed(true);

        const handleMouseLeave = (e) => {
            if (isDismissed || isOpen) return;
            // Trigger if mouse leaves toward the top (clientY <= 0)
            if (e.clientY <= 0) {
                setIsOpen(true);
                generateCaptcha();
            }
        };

        const handleMouseMove = (e) => {
            if (isDismissed || isOpen) return;
            // Some browsers don't fire mouseleave reliably at the top edge. 
            // We use mousemove near the top edge as a fallback exit-intent trigger.
            if (e.clientY < 10 && e.movementY < 0) {
                setIsOpen(true);
                generateCaptcha();
            }
        }

        // Also trigger if they rapidly scroll to the very top (another sign of leaving)
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (isDismissed || isOpen) return;

            const currentScrollY = window.scrollY;
            // if scrolling up fast and near the top
            if (currentScrollY < 50 && (lastScrollY - currentScrollY) > 20) {
                setIsOpen(true);
                generateCaptcha();
            }
            lastScrollY = currentScrollY;
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDismissed, isOpen]);

    const generateCaptcha = () => {
        setCaptcha({
            a: Math.floor(Math.random() * 10) + 1,
            b: Math.floor(Math.random() * 10) + 1
        });
    };

    const closePopup = () => {
        setIsOpen(false);
        setIsDismissed(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Required';
        if (!formData.email) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone) newErrors.phone = 'Required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter 10 digit mobile number';
        if (parseInt(formData.captchaResult) !== captcha.a + captcha.b) {
            newErrors.captchaResult = 'Wrong answer';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/exit-intent-leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    workEmail: formData.workEmail,
                    projectDescription: formData.projectDescription
                }),
            });

            if (response.ok) {
                alert("Inquiry Sent! We'll get back to you shortly.");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    workEmail: '',
                    projectDescription: '',
                    captchaResult: ''
                });
                closePopup();
                router.push('/thankyou');
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            alert("Error: Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col md:flex-row min-h-[600px] max-h-[95vh] md:max-h-[85vh]"
                    >
                        {/* Left Side: Testimonials */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between"
                            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)' }}>

                            {/* Decorative Background */}
                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                            <div className="relative z-10 flex flex-col flex-1 min-h-0 mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 shrink-0">Leaving Already?</h2>
                                <p className="text-gray-400 mb-6 md:mb-8 shrink-0">Hear from our clients and why 3000+ businesses trust Techmapperz</p>

                                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-md flex flex-col flex-1 min-h-0 overflow-hidden">
                                    <div className="flex-1 overflow-y-auto pr-3 mb-4 custom-scrollbar [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
                                        <span className="text-blue-400 mb-4 block">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                                                <path d="M10 25h5l3-8h-8l3-8h5l-3 8h5l-3 8zM25 25h5l3-8h-8l3-8h5l-3 8h5l-3 8z" />
                                            </svg>
                                        </span>
                                        <p className="text-[1rem] md:text-lg leading-relaxed italic">
                                            "{testimonials[currentTestimonial]?.text}"
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between shrink-0 pt-4 border-t border-white/10 mt-auto">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden relative border-2 border-white/20">
                                                {/* Placeholder for user image */}
                                                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl uppercase">
                                                    {testimonials[currentTestimonial]?.name?.charAt(0) || 'U'}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{testimonials[currentTestimonial]?.name}</div>
                                                <div className="text-sm text-gray-400">{testimonials[currentTestimonial]?.role}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={prevTestimonial} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button onClick={nextTestimonial} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full md:w-1/2 p-6 md:p-12 relative bg-white flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent">
                            <button
                                onClick={closePopup}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Requirements</h3>
                                <p className="text-sm text-gray-500">To help our experts understand your business objectives and create your customized plan.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full border-b-2 py-2 outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                                        />
                                        {errors.name && <span className="text-[10px] text-red-500 absolute bottom-[-15px] left-0">{errors.name}</span>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Company Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full border-b-2 py-2 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                                        />
                                        {errors.email && <span className="text-[10px] text-red-500 absolute bottom-[-15px] left-0">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="flex items-center gap-2 border-b-2 py-2 overflow-hidden border-gray-200 focus-within:border-blue-500">
                                            <span className="text-gray-400 text-sm">+91</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Contact Number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full outline-none"
                                            />
                                        </div>
                                        {errors.phone && <span className="text-[10px] text-red-500 absolute bottom-[-15px] left-0">{errors.phone}</span>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="workEmail"
                                            placeholder="Work Email (Optional)"
                                            value={formData.workEmail}
                                            onChange={handleInputChange}
                                            className="w-full border-b-2 py-2 outline-none transition-colors border-gray-200 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="projectDescription"
                                        placeholder="Describe your project (Help us come back better prepared)"
                                        rows="2"
                                        value={formData.projectDescription}
                                        onChange={handleInputChange}
                                        className="w-full border-b-2 py-2 outline-none transition-colors border-gray-200 focus:border-blue-500 resize-none"
                                    ></textarea>
                                </div>

                                <div className="bg-yellow-50 p-3 rounded-lg flex items-center gap-3 text-xs text-yellow-800 border border-yellow-100">
                                    <div className="bg-yellow-200 p-1 rounded-full"><CheckCircle size={14} /></div>
                                    <p>Fast 2-minute response, fully <strong>NDA-protected</strong>.</p>
                                </div>

                                <div className="flex items-center justify-between gap-4 pt-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 font-medium">{captcha.a} + {captcha.b} = </span>
                                        <input
                                            type="text"
                                            name="captchaResult"
                                            value={formData.captchaResult}
                                            onChange={handleInputChange}
                                            className={`w-16 border rounded-lg p-2 text-center outline-none ${errors.captchaResult ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
