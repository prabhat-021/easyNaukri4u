import React from 'react';

const ImportantLinks = () => {
  const links = [
    {
      id: 1,
      title: "Admit Cards",
      items: [
        "UPSC Admit Card",
        "SSC Admit Card",
        "Railway Admit Card",
        "Police Admit Card",
      ],
    },
    {
      id: 2,
      title: "Results",
      items: [
        "UPSC Results",
        "SSC Results",
        "Railway Results",
        "Bank Results",
      ],
    },
    {
      id: 3,
      title: "Answer Keys",
      items: [
        "UPSC Answer Key",
        "SSC Answer Key",
        "Railway Answer Key",
        "Other Answer Keys",
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {links.map((section) => (
        <div key={section.id} className="p-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-lg font-medium text-blue-800 mb-3">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  <span className="mr-2">→</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ImportantLinks; 