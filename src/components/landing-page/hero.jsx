"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <div className="min-h-screen bg-[#fff] relative overflow-hidden">

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen px-6 md:px-12 pt-6 overflow-hidden flex flex-col justify-center"
        >
          {/* Parallax background elements */}
          <div
            className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
            aria-hidden="true"
          />

          <div className="absolute right-20 top-20 z-10" aria-hidden="true">
            {/* Floating circles with parallax */}
            <div
              className="absolute h-16 w-16 rounded-full border-2 border-black opacity-20 animate-float-slow"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ></div>
            <div
              className="absolute h-8 w-8 rounded-full bg-pink-300 opacity-40 -right-10 top-20 animate-float-medium"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            ></div>
            <div
              className="absolute h-12 w-12 rounded-full bg-orange-200 opacity-60 right-20 top-10 animate-float-fast"
              style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            ></div>

            {/* Rotating squares with parallax */}
            <div
              className="absolute h-20 w-20 border-2 border-black opacity-20 right-40 top-5 animate-spin-very-slow"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            ></div>
            <div
              className="absolute h-10 w-10 bg-yellow-200 opacity-50 right-10 -top-10 animate-spin-reverse-slow"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            ></div>

            {/* Pulsing dot with parallax */}
            <div
              className="absolute h-6 w-6 rounded-full bg-black opacity-10 right-30 top-40 animate-ping-slow"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            ></div>
          </div>

          {/* Grid pattern with parallax */}
          <div
            className="absolute right-0 top-0 h-[400px] w-[300px] opacity-5"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            aria-hidden="true"
          >
            <div className="grid grid-cols-6 gap-4 h-full w-full">
              {Array(24)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`border border-black rounded-full animate-scale-${(i % 5) + 1}`}></div>
                ))}
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Main heading */}
            <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
              <span className="block hover:text-pink-500 transition-colors duration-300">BRIDGE GROUP</span>
              <span className="block hover:text-orange-500 transition-colors duration-300">SOLUTION</span>
              <span className="block text-5xl hover:text-yellow-500 transition-colors duration-300">
                DIGITAL PRODUCTS.
              </span>
            </h1>

            {/* CTA and description */}
            <div className="mt-20 max-w-xl">
              <button className="rounded-full border-2 border-black px-8 py-3 group hover:bg-black hover:text-white transition-colors duration-300">
                <span className="relative flex items-center">
                  DISCUSS THE PROJECT
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </button>

              <p className="mt-10 text-sm leading-relaxed text-gray-600 tracking-wide">
                BRIDGE GROUP SOLUTION - LEADERS IN WEB & MOBILE
                <br />
                DESIGN AND DEVELOPMENT INDUSTRY.
              </p>
            </div>
          </div>

          {/* Small, cool cylindrical scroll button - no text */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative h-10 w-5 rounded-full border border-black/10 flex flex-col items-center justify-start overflow-hidden bg-white/20 backdrop-blur-sm shadow-sm">
              {/* Animated dot inside cylinder */}
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-black/60 mt-1.5"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatDelay: 0.3,
                }}
              />

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

