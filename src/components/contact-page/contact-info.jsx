"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageSquare, Clock, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      delay: 0.1,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@bridgegroup.com", "support@bridgegroup.com"],
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Innovation Street", "Suite 500", "San Francisco, CA 94103"],
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
      delay: 0.4,
    },
  ]

  const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-light">Contact Information</h2>

      <div className="space-y-6">
        {contactItems.map(({ icon: Icon, title, details, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start space-x-4"
          >
            <div className="bg-black text-white p-3 rounded-full">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{title}</h3>
              <div className="space-y-1 text-gray-600">
                {details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-5 py-3 rounded-full"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          <span>Chat on WhatsApp</span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pt-4"
      >
        <h3 className="text-lg font-medium mb-3">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
