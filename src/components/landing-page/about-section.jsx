"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative w-full bg-[#ffffff] text-black py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
            We are trendsetters in the fashion industry, blending innovative design with a passion for style.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg text-gray-800 uppercase tracking-wider">What we do</h3>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl font-light">
              We craft exceptional apparel and accessories, merging cutting-edge design with timeless elegance.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-4 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group cursor-pointer">
              <motion.div
                className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  </defs>
                  <text className="text-[5px] md:text-[6px] uppercase tracking-[0.3em] fill-black font-light">
                    <textPath href="#circlePath" startOffset="0%">
                      Begin your story • Begin your story • Begin your story •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

