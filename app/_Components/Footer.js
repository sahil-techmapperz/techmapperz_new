'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPinterest, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Gotop from './Gotop';
import Image from 'next/image';
import footer_logo from "@/public/logo.webp";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus('Please enter an email address');
      return;
    }

    setIsSubscribing(true);
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubscribeStatus(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setSubscribeStatus(data.error || data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscribeStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full bg-gray-100 p-8 max-sm:p-1 max-sm:px-4 relative" role="contentinfo">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] justify-between text-black">
          {/* Left Section */}
          <div className="flex flex-col justify-center gap-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src={footer_logo}
                alt="footer_logo"
                className="object-fill mb-6 max-sm:mx-auto"
                width={300}
                height={300}
                priority={true} // Preload image for better performance
              />
            </Link>
            <p className='text-black font-semibold max-sm:text-[14px]'>
              Chasing the Vision for a better tomorrow where <br />
              technology simplifies complex functions.
            </p>
            {/* Subscribe Section */}
            <div className='flex max-sm:w-full max-sm:justify-between  border-[2px] text-black w-fit px-2 py-1 rounded-md gap-2 max-sm:gap-0'>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                className='border-none max-sm:w-[50%] bg-white text-black placeholder:text-gray-500'
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                aria-describedby="newsletter-status"
              />
              <button
                className="w-fit px-4 py-2 h-[40px] text-white font-bold border-none rounded-md btn-gradient"
                onClick={handleSubscribe}
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {subscribeStatus && (
              <p id="newsletter-status" className={`mt-2 text-sm ${subscribeStatus.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`} role="status" aria-live="polite">
                {subscribeStatus}
              </p>
            )}
          </div>

          {/* Right Section */}
          <div className='flex gap-4 justify-between'>
            {/* Company Links */}
            <div className=" max-sm:text-[12px]">
              <h3 className="pb-4 font-bold">Company</h3>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/blog?page=1">Resources</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/career">Career</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="ml-15 max-sm:text-[12px]">
              <h3 className="pb-4 font-bold">Resources</h3>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/portfolios">Portfolio</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Utility Links */}
            <div className="ml-15 max-sm:text-[12px]">
              <h3 className="pb-4 font-bold">Utility</h3>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/help">Help</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <Gotop />
      </footer>

      {/* Footer Bottom */}
      <div className="w-full h-10 bg-black text-white flex justify-between items-center font-medium px-[70px] max-sm:justify-center max-sm:items-center max-sm:px-0">
        <div className="flex gap-2 justify-center items-center max-sm:hidden">
          {/* Social Links */}
          <a href="https://www.linkedin.com/company/techmapperz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white text-2xl" />
          </a>
          <a href="https://www.instagram.com/techmapperz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a href="https://x.com/Techmapperzllp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <BsTwitterX className="text-white text-2xl" />
          </a>
          <a href="https://www.facebook.com/techmapperz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white text-2xl" />
          </a>
          <a href="https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-white text-2xl" />
          </a>
          <a href="https://pin.it/2nsXnBd" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest className="text-white text-2xl" />
          </a>
        </div>
        <div className="max-sm:text-[12px]">
          Copyright &copy; {currentYear} Techmapperz All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
