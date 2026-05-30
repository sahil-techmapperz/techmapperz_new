// components/ContactForm.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const init = {
  name: "",
  email: "",
  mobile: "",
  projectType: "",
  projectdetails: ""
};

const ContactForm = () => {
  const [contactdata, setcontactdata] = useState(init);
  const [hasError, setHasError] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const errors = {};

    if (!contactdata.name) {
      errors.name = "required*";
    }

    if (!contactdata.email) {
      errors.email = "required*";
    }

    if (!contactdata.mobile) {
      errors.mobile = "required*";
    } else if (!/^\d{10}$/.test(contactdata.mobile)) {
      errors.mobile = "enter 10 digit mobile number";
    }

    return errors;
  };

  const handalechange = (e) => {
    const { name, value } = e.target;
    setcontactdata({ ...contactdata, [name]: value });
  };

  const handalesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setHasError(validationErrors);
      return;
    } else {
      setHasError({});
      const { name, email, mobile, projectType, projectdetails } = contactdata;
      let data = { name, email, mobile, projectType, projectdetails };
      if (data.projectType == "") {
        data.projectType = "none";
      }
      if (data.projectdetails == "") {
        data.projectdetails = "none";
      }
      fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(res => {
        if (res.status === 200) {
          setHasError({});
          setcontactdata(init);
          router.push('./thankyou');

          // Reload the page after navigating
          // router.refresh();

        } else {
          alert("Failed to save contact details");
          setHasError({});
          setcontactdata(init);
        }

      }).catch(err => {
        alert("Failed: " + err.message);
        setHasError({});
        setcontactdata(init);
      });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onSubmit={handalesubmit}
      className="w-full max-w-4xl mx-auto bg-[#020617]/50 border border-white/10 backdrop-blur-xl px-6 sm:px-12 py-10 sm:py-14 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
    >
      {/* Decorative inner glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#4a8cd4]/10 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:from-[#4a8cd4]/20 transition-colors duration-700"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#d2292b]/10 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:from-[#d2292b]/20 transition-colors duration-700"></div>

      <div className="mb-10 text-center relative z-10">
        <h2 className='text-white text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight'>
          Drop Us A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">Message</span>
        </h2>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <input
              type="text"
              name="name"
              value={contactdata.name}
              onChange={handalechange}
              placeholder="Enter Full Name *"
              className={`w-full px-5 py-4 rounded-xl border ${hasError.name ? "border-red-500 bg-red-500/5" : "border-white/10 bg-white/5"} 
            backdrop-blur-md focus:ring-4 focus:ring-[#4a8cd4]/20 focus:border-[#4a8cd4] transition-all duration-300
            placeholder:text-gray-500 text-white outline-none font-medium`}
            />
            {hasError.name && <p className="text-red-400 text-xs sm:text-sm pl-2">{hasError.name}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="email"
              name="email"
              value={contactdata.email}
              onChange={handalechange}
              placeholder="Enter Email *"
              className={`w-full px-5 py-4 rounded-xl border ${hasError.email ? "border-red-500 bg-red-500/5" : "border-white/10 bg-white/5"}
            backdrop-blur-md focus:ring-4 focus:ring-[#4a8cd4]/20 focus:border-[#4a8cd4] transition-all duration-300
            placeholder:text-gray-500 text-white outline-none font-medium`}
            />
            {hasError.email && <p className="text-red-400 text-xs sm:text-sm pl-2">{hasError.email}</p>}
          </div>

          <div>
            <input
              type="text"
              name="projectType"
              value={contactdata.projectType}
              onChange={handalechange}
              placeholder="Enter Project Type"
              className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
            focus:ring-4 focus:ring-[#4a8cd4]/20 focus:border-[#4a8cd4] transition-all duration-300
            placeholder:text-gray-500 text-white outline-none font-medium"
            />
          </div>

          <div className="space-y-1">
            <input
              type="tel"
              name="mobile"
              value={contactdata.mobile}
              onChange={handalechange}
              placeholder="Enter Mobile *"
              pattern="\d{10}"
              className={`w-full px-5 py-4 rounded-xl border ${hasError.mobile ? "border-red-500 bg-red-500/5" : "border-white/10 bg-white/5"}
            backdrop-blur-md focus:ring-4 focus:ring-[#4a8cd4]/20 focus:border-[#4a8cd4] transition-all duration-300
            placeholder:text-gray-500 text-white outline-none font-medium`}
            />
            {hasError.mobile && <p className="text-red-400 text-xs sm:text-sm pl-2">{hasError.mobile}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="projectdetails"
            value={contactdata.projectdetails}
            onChange={handalechange}
            placeholder="Write Project Details"
            rows="4"
            className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
            focus:ring-4 focus:ring-[#4a8cd4]/20 focus:border-[#4a8cd4] transition-all duration-300
            placeholder:text-gray-500 text-white outline-none font-medium resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-[#4a8cd4] to-[#d2292b] text-white font-bold tracking-wide
          rounded-xl shadow-[0_0_20px_rgba(210,41,43,0.3)] hover:shadow-[0_0_30px_rgba(74,140,212,0.5)] 
          transform hover:-translate-y-1 transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-[#4a8cd4]/30"
        >
          Send Message
        </button>
      </div>
    </motion.form>

  );
};

export default ContactForm;
