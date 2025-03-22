"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

// Process steps data
const processSteps = [
  {
    id: "01",
    title: "Strategy & Research",
    description:
      "We start by understanding your business, your goals, and your market. This sets the foundation for work that actually performs.",
  },
  {
    id: "02",
    title: "Design & Prototype",
    description:
      "We create visual concepts and interactive prototypes that align with your brand and business objectives, focusing on user experience.",
  },
  {
    id: "03",
    title: "Build, Test & Optimize",
    description:
      "Our development team brings designs to life with clean code, while continuously testing and refining to ensure optimal performance.",
  },
  {
    id: "04",
    title: "Launch & Support",
    description:
      "We ensure a smooth deployment and provide ongoing support to help your product evolve and grow with your business needs.",
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0e0a] text-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-light tracking-widest text-gray-400 uppercase">/OUR PROCESS/</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Our mission is to help businesses grow through strategic design, creating work that performs as good as it
              looks.
            </h2>
          </motion.div>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden md:flex gap-4 h-[400px]">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index

            return (
              <motion.div
                key={step.id}
                className="relative border border-gray-800 rounded-sm p-8 cursor-pointer overflow-hidden h-full"
                initial={{ width: "25%" }}
                animate={{
                  width: isActive ? "55%" : "15%",
                }}
                transition={{
                  width: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // Custom bezier curve for ultra-smooth animation
                  },
                }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="h-full flex flex-col">
                  {/* Step number */}
                  <div className="text-sm text-gray-500 mb-4">{step.id}</div>

                  {/* Step title */}
                  <h3
                    className={`text-xl md:text-2xl font-light mb-6 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step description - only visible for active step */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: {
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeInOut",
                          },
                        }}
                        className="mt-auto"
                      >
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md">{step.description}</p>

                        {/* Indicator dot */}
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500 mt-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            scale: {
                              duration: 0.3,
                              delay: 0.3,
                              ease: "easeOut",
                            },
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden space-y-4">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index

            return (
              <motion.div
                key={step.id}
                className="relative border border-gray-800 rounded-sm p-6 cursor-pointer overflow-hidden"
                initial={{ height: 100 }}
                animate={{
                  height: isActive ? 280 : 100,
                }}
                transition={{
                  height: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // Same smooth easing
                  },
                }}
                onClick={() => setActiveStep(index)}
              >
                <div className="h-full flex flex-col">
                  {/* Step number */}
                  <div className="text-sm text-gray-500 mb-3">{step.id}</div>

                  {/* Step title */}
                  <h3
                    className={`text-lg font-light mb-4 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step description - only visible for active step */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: {
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeInOut",
                          },
                        }}
                        className="mt-auto"
                      >
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>

                        {/* Indicator dot */}
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500 mt-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            scale: {
                              duration: 0.3,
                              delay: 0.3,
                              ease: "easeOut",
                            },
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

