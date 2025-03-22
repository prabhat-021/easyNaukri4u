import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "UPSC Civil Services 2024 Registration Closing Soon",
      date: "March 20, 2024",
      type: "Important",
    },
    {
      id: 2,
      title: "SSC CGL 2024 Exam Dates Announced",
      date: "March 19, 2024",
      type: "Update",
    },
    {
      id: 3,
      title: "RRB NTPC Results Declared",
      date: "March 18, 2024",
      type: "Result",
    },
    {
      id: 4,
      title: "Bank PO Exam Pattern Changed for 2024",
      date: "March 17, 2024",
      type: "Notice",
    },
    {
      id: 5,
      title: "New Government Job Portal Launch",
      date: "March 16, 2024",
      type: "News",
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      Important: "bg-red-100 text-red-800",
      Update: "bg-blue-100 text-blue-800",
      Result: "bg-green-100 text-green-800",
      Notice: "bg-yellow-100 text-yellow-800",
      News: "bg-purple-100 text-purple-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {notices.map((notice) => (
        <div
          key={notice.id}
          className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                notice.type
              )}`}
            >
              {notice.type}
            </span>
            <span className="text-sm text-gray-500">{notice.date}</span>
          </div>
          <h3 className="text-gray-900">{notice.title}</h3>
          <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
            Read More →
          </button>
        </div>
      ))}
      <div className="p-4 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View All Notices →
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard; 