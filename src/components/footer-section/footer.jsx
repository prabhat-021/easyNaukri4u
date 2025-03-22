"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Dribbble, Figma } from "lucide-react"

export default function Footer() {
  const [scrollY, setScrollY] = useState(0)
  const footerRef = useRef(null)

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create a motion value for the footer's position in the viewport
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer ref={footerRef} className="relative w-full bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 opacity-30 blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
        aria-hidden="true"
      />

      {/* Top CTA Section */}
      <div className="py-20 border-b border-white/10">
        <motion.div
          className="container mx-auto px-6 md:px-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Welcome to EasyNaukri4u
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Get the latest updates on Government Jobs, Results, Admit Cards, and more. Stay informed about upcoming opportunities across India.
          </p>
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>

      {/* Main Footer Section */}
      <div className="py-16">
        <motion.div
          className="container mx-auto px-6 md:px-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl font-light">EasyNaukri4u</h2>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                Stay ahead with the latest updates on Government Jobs, Results, Admit Cards, and more. Get timely notifications and never miss an opportunity across India.
              </p>

              {/* Social Links with Icons */}
              <div className="flex space-x-6 pt-4">
                <Link href="#" className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </motion.div>
                </Link>
                <Link href="#" className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </motion.div>
                </Link>
                <Link href="#" className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Dribbble size={20} />
                    <span className="sr-only">Dribbble</span>
                  </motion.div>
                </Link>
                <Link href="#" className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Figma size={20} />
                    <span className="sr-only">Behance</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Empty space for layout */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6 md:text-right">
              <p className="text-gray-400 text-sm">You can also email us at:</p>
              <motion.p className="text-xl font-light" whileHover={{ scale: 1.02 }}>
                contact@opus.com
              </motion.p>

              {/* Navigation */}
              <div className="flex flex-wrap justify-start md:justify-end gap-8 pt-6">
                {["Home", "Latest Jobs", "Results", "CBT", "Contact"].map((item) => (
                  <Link key={item} href="#" className="relative group">
                    <span className="text-gray-400 hover:text-white transition-colors duration-300">{item}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-20 bottom-20 z-10" aria-hidden="true">
            <div
              className="absolute h-12 w-12 rounded-full border-2 border-white opacity-20 animate-float-slow"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            ></div>
            <div
              className="absolute h-6 w-6 rounded-full bg-pink-300 opacity-40 -left-10 bottom-20 animate-float-medium"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            ></div>
            <div
              className="absolute h-8 w-8 rounded-full bg-orange-200 opacity-60 left-20 bottom-10 animate-float-fast"
              style={{ transform: `translateY(${scrollY * -0.25}px)` }}
            ></div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-gray-500 text-xs">©{new Date().getFullYear()} Opus. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link key={item} href="#" className="relative group">
                  <span className="text-gray-500 text-xs hover:text-white transition-colors duration-300">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* White dot from the reference image */}
      <div className="absolute right-20 top-1/3 z-10">
        <motion.div
          className="h-4 w-4 bg-white rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    </footer>
  )
}

