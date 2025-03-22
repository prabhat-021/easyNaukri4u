"use client";

import { motion } from "framer-motion";
import React from "react";

const JobUpdates = () => {
  const jobUpdates = [
    {
      id: 1,
      title: "UPSC Recruitment 2024 - Various Posts",
      lastDate: "30 March 2024",
      category: "Central Govt",
      isNew: true,
    },
    {
      id: 2,
      title: "SSC MTS & Havaldar Recruitment 2024",
      lastDate: "28 March 2024",
      category: "SSC",
      isNew: true,
    },
    {
      id: 3,
      title: "Indian Army Recruitment 2024 - Technical Entry",
      lastDate: "25 March 2024",
      category: "Defence",
      isNew: false,
    },
    {
      id: 4,
      title: "Railway Group D Recruitment 2024",
      lastDate: "22 March 2024",
      category: "Railway",
      isNew: false,
    },
    {
      id: 5,
      title: "Bank of India Recruitment 2024",
      lastDate: "20 March 2024",
      category: "Bank Jobs",
      isNew: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
          Latest Job Updates
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobUpdates.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden border"
          >
            <h3 className="text-lg font-semibold text-white bg-[#0c0c37] px-4 py-3">
              {job.title}
              {job.isNew && (
                <span className="ml-2 text-xs font-bold px-2 py-1 bg-red-500 text-white rounded-full">
                  New
                </span>
              )}
            </h3>
            <div className="p-4">
              <p className="text-gray-700">Category: {job.category}</p>
              <p className="text-gray-700">Last Date: {job.lastDate}</p>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-all">
                  Apply Online
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          View All Job Updates
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default JobUpdates;
