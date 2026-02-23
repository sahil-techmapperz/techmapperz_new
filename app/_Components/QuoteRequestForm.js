// components/RequestQuoteForm.js
'use client';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const init = {
    name: "",
    email: "",
    mobile: "",
    projectType: "Request_Quote",
    additionalDetails: ""
};

const RequestQuoteForm = ({ closeForm }) => {
    const [formData, setFormData] = useState(init);
    const [hasError, setHasError] = useState({});
    const toast = useToast();
    const router = useRouter();

    const validateForm = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = "Full Name is required*";
        }

        if (!formData.email) {
            errors.email = "Email is required*";
        }

        if (!formData.mobile) {
            errors.mobile = "Mobile number is required*";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = "Enter a valid 10-digit mobile number";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setHasError(validationErrors);
            return;
        } else {
            setHasError({});
            const { name, email, mobile, projectType, additionalDetails } = formData;
            const data = {
                name,
                email,
                mobile,
                projectType,
                projectdetails: additionalDetails || "Not Specified",
            };

            fetch(`/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => {
                    if (res.status === 200) {
                        setFormData(init);
                        toast({
                            title: 'Request Submitted',
                            description: "Thank you for your request. We will get back to you shortly.",
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                        });

                        closeForm();
                        
                    } else {
                        
                        toast({
                            title: 'Submission Failed',
                            description: "Unable to submit your request. Please try again.",
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                })
                .catch((err) => {
                    toast({
                        title: 'Error',
                        description: err.message,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                });
        }
    };

    return (
        <div className='w-full'>

            <form
                onSubmit={handleSubmit}
                className="grid relative text-black grid-cols-1 gap-4 w-[70%] max-sm:w-full max-w-3xl mx-auto bg-white px-6 py-10 rounded-md shadow-md"
            >

                <button
                    onClick={closeForm}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-4xl"
                >
                    &times;
                </button>
                <div>
                    <h1 className="text-black text-[34px] font-bold">Request a <span className="text-blue-500 ">QUOTE</span></h1>
                </div>

                <div className="grid grid-cols-1">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Full Name *"
                        className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.name ? "border-red-500" : ""
                            }`}
                    />
                    {hasError.name && <p className="text-red-500 text-sm mt-2">{hasError.name}</p>}
                </div>

                <div className="grid grid-cols-1">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email *"
                        className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.email ? "border-red-500" : ""
                            }`}
                    />
                    {hasError.email && <p className="text-red-500 text-sm mt-2">{hasError.email}</p>}
                </div>

                <div className="grid grid-cols-1">
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter Mobile Number *"
                        className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.mobile ? "border-red-500" : ""
                            }`}
                    />
                    {hasError.mobile && <p className="text-red-500 text-sm mt-2">{hasError.mobile}</p>}
                </div>



                <div className="grid grid-cols-1">
                    <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        placeholder="Project Details (Optional)"
                        rows="6"
                        className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>

                <div className="grid grid-cols-1">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#396BA9] hover:bg-[#3f7ecb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RequestQuoteForm;
