"use client"
const React = require("react");
const { cn } = require("@/lib/utils");

const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 auto-rows-auto", className)}>
      {children}
    </div>
  );
};

const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg group/bento hover:shadow-md transition duration-300 border border-gray-200 bg-white overflow-hidden",
        className
      )}
    >
      <div className="relative w-full aspect-[3/2] overflow-hidden">{header}</div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          {icon && <div className="p-1 rounded-full bg-gray-100">{icon}</div>}
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        </div>
        <div className="text-gray-600 text-xs">{description}</div>
      </div>
    </div>
  );
};

module.exports = { BentoGrid, BentoGridItem };
