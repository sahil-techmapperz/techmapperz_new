"use client"
import { useState } from "react";
import JobDetailsModal from "./JobDetailsModal";
import ApplyJobModal from "./ApplyJobModal";

const JobCard = ({ job }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <div className="relative w-full" style={{ zIndex: 1 }}>
      {/* Modern Card Design */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300 h-full flex flex-col" style={{ position: 'relative', zIndex: 1 }}>
        {/* Card Header with Gradient */}
        <div className="bg-gradient-to-r from-[#2d5689] to-[#a82123] p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {job.designetion || 'Position Available'}
              </h3>
              {job.JobID && (
                <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded">
                  ID: {job.JobID}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Job Details Icons */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2 text-lg">🕒</span>
              <span className="text-sm font-medium">{job.Jobtype || 'Not Specified'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2 text-lg">🗓️</span>
              <span className="text-sm font-medium">{job.experience || 'Not Specified'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2 text-lg">📍</span>
              <span className="text-sm font-medium">{job.location || 'Not Specified'}</span>
            </div>
            {job.salary && (
              <div className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">💰</span>
                <span className="text-sm font-medium">{job.salary}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex gap-3">
              <button 
                onClick={() => setShowApplyModal(true)} 
                className="flex-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Apply Now
              </button>
              <button 
                onClick={() => setShowDetailsModal(true)}
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-blue-600 transition-colors font-semibold text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      <JobDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        job={job}
        onApply={() => {
          setShowDetailsModal(false);
          setShowApplyModal(true);
        }}
      />

      {/* Application Modal */}
      <ApplyJobModal
        isOpen={showApplyModal}
        onClose={() => setShowApplyModal(false)}
        job={job}
      />
    </div>
  );
};

export default JobCard;
