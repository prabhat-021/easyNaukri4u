"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const sections = [
  { title: "CREATIVE", details: ["Art direction", "Creative direction"] },
  {
    title: "DESIGN",
    details: [
      "Digital Design",
      "UX/UI Design",
      "Web Design",
      "Graphic Design",
      "3D Design",
      "Interactive Design",
    ],
  },
  { title: "ANIMATION", details: ["2D Animation", "3D Animation"] },
  { title: "TECHNOLOGY", details: ["Web Development", "App Development"] },
  { title: "PROJECT DELIVERY", details: ["Planning", "Execution"] },
  { title: "EXAMPLE PRODUCTS", details: ["Prototypes", "Final Products"] },
];

export default function Expanding() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  const handleExpandToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      ref={ref}
      className="h-screen w-[95%] mx-auto flex flex-col items-center justify-center bg-gray-200 text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="border-b border-black w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Section Header */}
            <div
              className="flex justify-between items-center py-6 px-6 md:px-12 cursor-pointer hover:bg-gray-50 transition-all duration-300 w-full "
              onClick={() => handleExpandToggle(index)}
            >
              <span className="text-xl md:text-2xl font-bold">
                {section.title}
              </span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                {expandedIndex === index ? (
                  <IconMinus stroke={2} />
                ) : (
                  <IconPlus stroke={2} />
                )}
              </button>
            </div>

            {/* Expanding Content */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedIndex === index ? "auto" : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden w-full"
            >
              {section.details.map((detail, i) => (
                <motion.div
                  key={i}
                  className="relative py-5 px-6 md:px-12 cursor-pointer text-lg md:text-xl overflow-hidden w-full"
                  onMouseEnter={() => setHoveredIndex(`${index}-${i}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Hover Effect (Top to Bottom) */}
                  <motion.div
                    className="absolute inset-0 bg-black w-full"
                    initial={{ height: "0%" }}
                    animate={{
                      height: hoveredIndex === `${index}-${i}` ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  {/* Text Effect */}
                  <span
                    className={`relative z-10 block transition-all duration-300 font-semibold ${
                      hoveredIndex === `${index}-${i}`
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {detail}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
