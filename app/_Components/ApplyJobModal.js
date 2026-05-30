"use client"
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

let init = {
  name: '',
  mobile: '',
  designetion: '',
  message: ''
}

export default function ApplyJobModal({ isOpen, onClose, job }) {
  const [careerdata, setCareerData] = useState(init);
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errornumber, setErrorNumber] = useState(false);
  const [mounted, setMounted] = useState(false);

  const inputRefs = Array.from({ length: 5 }, () => useRef());

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !job || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerData((prev) => ({ ...prev, [name]: value }));
    if (name === "mobile" && value.length !== 10) {
      setErrorNumber(true);
    } else {
      setErrorNumber(false);
    }
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, message, designetion } = careerdata;

    if (name && message && mobile && resume && designetion) {
      const mobilePattern = /^\d{10}$/;
      if (!mobilePattern.test(mobile)) {
        alert("Error: Invalid mobile number. Please enter a valid mobile number.");
        return;
      }

      const formData = new FormData();
      formData.append("file", resume);
      formData.append("data", JSON.stringify(careerdata));

      setIsSubmitting(true);
      try {
        const response = await fetch(`/api/career`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          setCareerData(init);
          setResume(null);
          setResume(null);
          alert("Success: Your job application was successfully submitted");
          onClose();
        } else {
          const errorData = await response.json();
          alert("Error: " + errorData.message);
        }
      } catch (err) {
        alert("Error: " + err.message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      for (let i = 0; i < inputRefs.length; i++) {
        if (!inputRefs[i].current.value) {
          inputRefs[i].current.focus();
          return;
        }
      }
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 99999
      }}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999 }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        style={{ 
          position: 'relative',
          zIndex: 100000,
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#2d5689] to-[#a82123] p-6 rounded-t-2xl z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Apply for Position</h2>
              <p className="text-white/90 text-sm">
                {job.designetion && `${job.JobID ? `[${job.JobID}] ` : ''}${job.designetion}`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto flex-1">
          <div className="p-6 bg-gray-50">
            <div className="mb-6">
              <p className="text-gray-600 text-center">
                Join our team and be part of innovative projects. Fill out the form below to apply.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">👤</span>
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <input
                  ref={inputRefs[0]}
                  id="name"
                  value={careerdata.name}
                  placeholder="Enter your full name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                />
              </div>

              {/* Mobile Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">📱</span>
                    Mobile Number <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <input
                  ref={inputRefs[1]}
                  id="mobile"
                  value={careerdata.mobile}
                  placeholder="Enter your 10-digit mobile number"
                  name="mobile"
                  type="tel"
                  maxLength={10}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 outline-none transition-all text-gray-900 ${
                    errornumber 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-200'
                  }`}
                />
                {errornumber && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <span className="mr-1">⚠️</span>
                    Please enter a valid 10-digit mobile number
                  </p>
                )}
              </div>

              {/* Designation Field */}
              <div>
                <label htmlFor="designetion" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">💼</span>
                    Applying For <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <select
                  ref={inputRefs[2]}
                  id="designetion"
                  onChange={handleChange}
                  name="designetion"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
                >
                  <option value="">Select the position you're applying for</option>
                  <option
                    key={job.JobID}
                    value={`${job.JobID} - ${job.designetion}`}
                  >
                    {`${job.JobID ? `[${job.JobID}] ` : ''}${job.designetion}`}
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">✉️</span>
                    Cover Letter / Message <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <textarea
                  ref={inputRefs[3]}
                  id="message"
                  value={careerdata.message}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  name="message"
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-gray-900"
                />
              </div>

              {/* Resume Upload Field */}
              <div>
                <label htmlFor="Resume" className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">📄</span>
                    Resume / CV <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <input
                  ref={inputRefs[4]}
                  accept=".pdf,.doc,.docx"
                  type="file"
                  className="hidden"
                  name="resume"
                  id="Resume"
                  onChange={handleResumeChange}
                  required
                />
                <label
                  htmlFor="Resume"
                  className={`flex items-center justify-between w-full px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
                    resume 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-300 bg-white hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className={`flex items-center ${resume ? 'text-green-700' : 'text-gray-600'}`}>
                    {resume ? (
                      <>
                        <span className="mr-2">✓</span>
                        <span className="font-medium">{resume.name}</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">📎</span>
                        <span>Click to upload resume (PDF, DOC, DOCX)</span>
                      </>
                    )}
                  </span>
                  {resume && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setResume(null);
                        inputRefs[4].current.value = '';
                      }}
                      className="text-red-600 hover:text-red-700 ml-2"
                    >
                      Remove
                    </button>
                  )}
                </label>
                <p className="mt-1 text-xs text-gray-500">Maximum file size: 5MB</p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#2d5689] to-[#a82123] text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Application...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🚀</span>
                      Submit Application
                    </span>
                  )}
                </button>
              </div>

              {/* Info Note */}
              <p className="text-xs text-center text-gray-500 pt-2">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

