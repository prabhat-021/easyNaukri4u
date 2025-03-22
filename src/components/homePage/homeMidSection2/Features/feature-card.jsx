// @flow strict

import * as React from "react";

function FeatureCard({ feature }) {
  return (
    <div className="from-gray-100 border-gray-300 relative rounded-lg border bg-gradient-to-r to-gray-200 w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-gray-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-600"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-800"></div>
        </div>
        <p className="text-center ml-3 text-gray-600 text-base lg:text-xl">
          {feature.title}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-gray-600 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div>
            <img
              src={feature.icon}
              alt={feature.title}
              className="service-icon w-12  mx-auto"
            />
          </div>

          <div className="text-center">
            <span className="text-gray-600">{feature.title}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2 text-center">
            <span className="text-gray-800">{" " + feature.description}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default FeatureCard;
