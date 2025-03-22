import React from 'react';

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
    <div className="bg-white rounded-lg border border-gray-200 mt-8">
      {jobUpdates.map((job) => (
        <div
          key={job.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                {job.title}
                {job.isNew && (
                  <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                    New
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Category: {job.category}
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Last Date: {job.lastDate}
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View Details
            </button>
            <button className="text-sm text-green-600 hover:text-green-800">
              Apply Online
            </button>
          </div>
        </div>
      ))}
      <div className="p-4 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View All Job Updates →
        </button>
      </div>
    </div>
  );
};

export default JobUpdates; 