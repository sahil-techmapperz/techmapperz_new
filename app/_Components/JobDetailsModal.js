"use client"
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function JobDetailsModal({ isOpen, onClose, job, onApply }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !job || !mounted) return null;

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
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
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
              <h3 className="text-2xl font-bold text-white mb-2">
                {job.designetion || 'Position Available'}
              </h3>
              {job.JobID && (
                <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  ID: {job.JobID}
                </span>
              )}
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
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="animate-in slide-in-from-top duration-300">
              {/* Section Header */}
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-gray-900">Complete Job Details</h4>
              </div>

              {/* Quick Info Grid */}
              {(job.JobID || job.Jobtype || job.education || job.experience || job.location || job.salary) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {job.JobID && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">🆔</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Job ID</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.JobID}</p>
                    </div>
                  )}
                  {job.Jobtype && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">💼</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Job Type</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.Jobtype}</p>
                    </div>
                  )}
                  {job.education && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">🎓</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Education</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.education}</p>
                    </div>
                  )}
                  {job.experience && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">⏳</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Experience</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.experience}</p>
                    </div>
                  )}
                  {job.location && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">📍</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.location}</p>
                    </div>
                  )}
                  {job.salary && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-1">
                        <span className="text-blue-600 mr-2">💰</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Salary</span>
                      </div>
                      <p className="text-gray-900 font-medium">{job.salary}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Description Section */}
              {job.description && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#2d5689] to-[#a82123] rounded-full mr-3"></div>
                    <h5 className="text-lg font-bold text-gray-900">Job Description</h5>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-base">{job.description}</p>
                  </div>
                </div>
              )}

              {/* Roles & Responsibilities Section */}
              {job.roleResponsibility && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#2d5689] to-[#a82123] rounded-full mr-3"></div>
                    <h5 className="text-lg font-bold text-gray-900">Roles & Responsibilities</h5>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <ul className="space-y-3">
                      {job.roleResponsibility.split('•').filter(item => item.trim() !== '').map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700 leading-relaxed text-base">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Perks & Benefits Section */}
              {job.perksBenefits && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#2d5689] to-[#a82123] rounded-full mr-3"></div>
                    <h5 className="text-lg font-bold text-gray-900">Perks & Benefits</h5>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <ul className="space-y-3">
                      {job.perksBenefits.split('•').filter(item => item.trim() !== '').map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1 flex-shrink-0">🎁</span>
                          <span className="text-gray-700 leading-relaxed text-base">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Candidate Profile Section */}
              {job.candidateProfile && (
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#2d5689] to-[#a82123] rounded-full mr-3"></div>
                    <h5 className="text-lg font-bold text-gray-900">Ideal Candidate Profile</h5>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-base">{job.candidateProfile}</p>
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <button 
                  onClick={() => {
                    onClose();
                    onApply();
                  }} 
                  className="w-full bg-gradient-to-r from-[#2d5689] to-[#a82123] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform"
                >
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

