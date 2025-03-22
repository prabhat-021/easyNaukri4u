"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScrollParagraph({ paragraph }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 70%"],
  });
  const [visibleIndex, setVisibleIndex] = useState(0);
  const alphabets = paragraph.split(" ");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * alphabets.length);
      setVisibleIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="py-2">
      <div ref={ref} className=" ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" "
        >
          {alphabets.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: visibleIndex >= index ? 1 : 0,
                y: visibleIndex >= index ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
              className="inline-block mx-1 "
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
