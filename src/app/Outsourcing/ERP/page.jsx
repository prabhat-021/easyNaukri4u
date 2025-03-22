"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const slides = [
  {
    title: "Enterprise Solutions",
    description: "Transform your business with our comprehensive ERP solutions that integrate finance, inventory, HR, and operations into a single platform.",
    additionalText: "Our ERP systems are designed to enhance productivity, reduce costs, and provide real-time insights for better decision-making.",
    image: "/outsourcing/erp.webp",
    imageAlt: "ERP System Interface",
  },
  {
    title: "Smart Integration",
    description: "Experience seamless data flow across departments with our intelligent ERP integration services, featuring automated workflows and advanced analytics.",
    additionalText: "From supply chain management to customer relationship management, our ERP solutions ensure every aspect of your business works in perfect harmony.",
    image: "/outsourcing/erp.webp",
    imageAlt: "ERP Types Illustration",
  },
  {
    title: "24/7 Support",
    description: "Get uninterrupted assistance from our certified ERP specialists who understand both technical requirements and business processes.",
    additionalText: "We provide comprehensive training, maintenance, and troubleshooting to ensure your ERP system operates at peak efficiency around the clock.",
    image: "/outsourcing/erp.webp",
    imageAlt: "ERP Support",
  },
]

export default function ERPPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // Change slide every 5 seconds
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Page Heading */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-42"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Our expertise in ERP solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our seasoned team excels in ERP system implementation and optimization, enhancing operational efficiency and fostering business expansion through tailored solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Slider Section */}
      <section className="min-h-[80vh] flex items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900">{slides[currentSlide].title}</h1>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">{slides[currentSlide].description}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{slides[currentSlide].additionalText}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-[300px] w-full">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].imageAlt}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <button onClick={previousSlide} className="text-blue-600 hover:text-blue-800" aria-label="Previous slide">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="text-blue-600 hover:text-blue-800" aria-label="Next slide">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="min-h-[80vh] bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">A Brief History of ERP</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  The term ERP was coined in 1990 by Gartner, but its roots date to the 1960s. Back then,
                  the concept applied to inventory management and control in the manufacturing sector.
                </p>
                <p>
                  Software engineers created programs to monitor inventory, reconcile balances, and report
                  on status. By the 1970s, this had evolved into Material Requirements Planning (MRP)
                  systems for scheduling production processes.
                </p>
                <p>
                  In the 1980s, MRP grew to encompass more manufacturing processes, prompting many to
                  call it MRP-II or Manufacturing Resource Planning. By 1990, these systems had expanded
                  beyond inventory control to other back-office functions like accounting and human resources.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <Image
                src="/outsourcing/erp1.png"
                alt="ERP History Illustration"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

