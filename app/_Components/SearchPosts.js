'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import moment from 'moment';

const SearchPosts = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (search) {
      setSearching(true);
      try {
        const response = await fetch(
          `/api/newblogpost/search/${search}`
        );
        const result = await response.json();
        console.log(result);
        setSearchResults(result);
        setSearching(false);
      } catch (err) {
        console.error("Failed to fetch posts", err);
        setSearching(false);
      }
    }
  };

  return (
    <div className="mb-8 p-6 bg-white/[0.02] border border-white/5 shadow-2xl rounded-2xl backdrop-blur-md">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide">Search Articles</h2>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#4a8cd4]/50 focus:border-[#4a8cd4] transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#4a8cd4] transition-colors duration-300"
          aria-label="Search"
        >
          <AiOutlineSearch className="text-xl" />
        </button>
      </div>

      <AnimatePresence>
        {searching && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-[#4a8cd4] text-sm flex items-center gap-2"
          >
            <div className="w-4 h-4 rounded-full border-2 border-[#4a8cd4] border-t-transparent animate-spin"></div>
            Searching...
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 space-y-4">
        {searchResults.length > 0 && <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Results</h3>}

        <AnimatePresence>
          {searchResults.length > 0 && (
            searchResults.map((result) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                key={result._id}
                className="group flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={result.images[0]}
                    alt={result.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <Link href={`/blog/${result._id}`} className="text-sm font-semibold text-white truncate hover:text-[#4a8cd4] transition-colors duration-300 mb-1">
                    {result.title}
                  </Link>
                  <span className="text-xs text-[#d2292b] mb-1 font-medium">{moment(result.created_at).format('MMM DD, YYYY')}</span>
                  <p className="text-xs text-gray-400 truncate">{result.content}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchPosts;
