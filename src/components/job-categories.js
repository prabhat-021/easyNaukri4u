import React from 'react';

const JobCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Central Government",
      count: "1,234",
      items: ["UPSC", "SSC", "IBPS", "RRB"],
    },
    {
      id: 2,
      title: "State Government",
      count: "2,345",
      items: ["State PSC", "Police", "Teacher", "Other State Jobs"],
    },
    {
      id: 3,
      title: "Banking",
      count: "567",
      items: ["SBI", "RBI", "NABARD", "Other Banks"],
    },
    {
      id: 4,
      title: "Defence",
      count: "345",
      items: ["Army", "Navy", "Air Force", "Coast Guard"],
    },
    {
      id: 5,
      title: "Teaching",
      count: "789",
      items: ["Primary", "Secondary", "College", "University"],
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-4 border-b border-gray-200 last:border-b-0"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium text-gray-900">
              {category.title}
            </h3>
            <span className="text-sm text-gray-500">
              {category.count} jobs
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCategories; 