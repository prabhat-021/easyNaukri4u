"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-lg overflow-hidden w-full mt-10 mx-auto shadow-sm"
    >

      <div className="relative h-[600px] w-[100%] bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0072974893565!2d81.63415617487107!3d21.310727980410082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e70334ff8821%3A0x21f27a37b122042a!2sNew%20DM%20Tower&#39;s!5e0!3m2!1sen!2sin!4v1737619808718!5m2!1sen!2sin"
          width="100%"
          height="100%"
          title="Our Location"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            mapLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setMapLoaded(true)}
        ></iframe>

        {/* Loading State */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Map Overlay with Pulse Effect */}
        {mapLoaded && (
          <motion.div
            className="absolute top-[45%] left-[55%] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-black/10 animate-ping"></div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
