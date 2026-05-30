'use client';

import React from 'react';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const PaginationButtons = ({ page, totalPages }) => {
  const currentPage = Number(page) || 1;
  const total = Number(totalPages) || 1;
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(total, currentPage + 1);

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {/* Previous Page Button */}
      {currentPage > 1 ? (
        <Link
          href={`/blog?page=${prevPage}`}
          className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <AiOutlineLeft />
        </Link>
      ) : (
        <div className="p-2 rounded-md bg-gray-400 cursor-not-allowed text-white">
          <AiOutlineLeft />
        </div>
      )}

      {/* Page Information */}
      <div className="text-white">
        Page {currentPage} of {total}
      </div>

      {/* Next Page Button */}
      {currentPage < total ? (
        <Link
          href={`/blog?page=${nextPage}`}
          className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <AiOutlineRight />
        </Link>
      ) : (
        <div className="p-2 rounded-md bg-gray-400 cursor-not-allowed text-white">
          <AiOutlineRight />
        </div>
      )}
    </div>
  );
};

export default PaginationButtons;
