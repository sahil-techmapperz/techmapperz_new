// components/ContactForm.js
'use client'
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

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
  const toast = useToast();
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
          toast({
            title: 'Failed',
            description: "failed to save contact details",
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setHasError({});
          setcontactdata(init);
        }

      }).catch(err => {
        toast({
          title: 'Failed',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setHasError({});
        setcontactdata(init);
      });
    }
  };

  return (
    <form onSubmit={handalesubmit} className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 px-4 sm:px-8 py-4 sm:py-8 rounded-xl shadow-2xl">
      <div className="mb-2 sm:mb-4 mx-auto">
        <span className='text-black text-2xl sm:text-3xl font-bold leading-tight'>Drop us a </span>
        <span className='text-[#396BA9] text-3xl sm:text-4xl font-bold mt-1'>MESSAGE</span>
      </div>

      <div className="space-y-3 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={contactdata.name}
              onChange={handalechange}
              placeholder="Enter Full Name *"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${hasError.name ? "border-red-500" : "border-gray-300"} 
            bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#396BA9] focus:border-transparent transition-all duration-300
            placeholder:text-gray-400 text-gray-700`}
            />
            {hasError.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{hasError.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={contactdata.email}
              onChange={handalechange}
              placeholder="Enter Email *"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${hasError.email ? "border-red-500" : "border-gray-300"}
            bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#396BA9] focus:border-transparent transition-all duration-300
            placeholder:text-gray-400 text-gray-700`}
            />
            {hasError.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{hasError.email}</p>}
          </div>

          <div>
            <input
              type="text"
              name="projectType"
              value={contactdata.projectType}
              onChange={handalechange}
              placeholder="Enter Project Type"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-sm
            focus:ring-2 focus:ring-[#396BA9] focus:border-transparent transition-all duration-300
            placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobile"
              value={contactdata.mobile}
              onChange={handalechange}
              placeholder="Enter Mobile *"
              pattern="\d{10}"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${hasError.mobile ? "border-red-500" : "border-gray-300"}
            bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#396BA9] focus:border-transparent transition-all duration-300
            placeholder:text-gray-400 text-gray-700`}
            />
            {hasError.mobile && <p className="text-red-500 text-xs sm:text-sm mt-1">{hasError.mobile}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="projectdetails"
            value={contactdata.projectdetails}
            onChange={handalechange}
            placeholder="Write Project Details"
            rows="2"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-sm
            focus:ring-2 focus:ring-[#396BA9] focus:border-transparent transition-all duration-300
            placeholder:text-gray-400 text-gray-700 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-[#396BA9] to-[#2a4f7d] text-white font-semibold 
          rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#396BA9]"
        >
          Send Message
        </button>
      </div>
    </form>

  );
};

export default ContactForm;
