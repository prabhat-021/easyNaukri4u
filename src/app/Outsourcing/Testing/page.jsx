"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Code2, Gauge, Shield, Smartphone, Workflow } from "lucide-react"

const services = [
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Manual Testing",
    description: "Meticulous testing processes to ensure optimal software performance",
    features: [
      "Functional Testing",
      "User Interface Testing",
      "Usability Testing",
      "Cross-browser Testing",
      "Regression Testing"
    ]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Automation Testing",
    description: "Advanced automation solutions for faster and reliable testing cycles",
    features: [
      "Test Script Development",
      "Continuous Integration",
      "Regression Automation",
      "Cross-platform Testing",
      "Test Framework Design"
    ]
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance Testing",
    description: "Comprehensive performance analysis under various conditions",
    features: [
      "Load Testing",
      "Stress Testing",
      "Scalability Testing",
      "Endurance Testing",
      "Peak Performance Analysis"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Testing",
    description: "Thorough security assessment to protect your applications",
    features: [
      "Vulnerability Scanning",
      "Penetration Testing",
      "Security Audit",
      "Compliance Testing",
      "Risk Assessment"
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Testing",
    description: "Specialized testing for mobile applications across platforms",
    features: [
      "Device Compatibility",
      "OS Version Testing",
      "Mobile UI/UX Testing",
      "Performance Optimization",
      "Network Condition Testing"
    ]
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "API Testing",
    description: "Comprehensive API testing for robust integrations",
    features: [
      "Endpoint Testing",
      "Integration Testing",
      "Response Validation",
      "Error Handling",
      "Performance Monitoring"
    ]
  }
]

const phases = [
  "Requirements Analysis",
  "Test Planning",
  "Test Case Design",
  "Test Environment Setup",
  "Test Execution",
  "Defect Reporting",
  "Regression Testing",
  "Sign-off & Delivery"
]

export default function TestingPage() {
  const [selectedService, setSelectedService] = useState(0)
  const [activePhase, setActivePhase] = useState(0)

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Software Testing Excellence
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Elevate your software quality with our comprehensive testing solutions.
              We ensure reliability, security, and optimal performance across all platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${selectedService === index
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-white border-2 border-gray-100 hover:border-blue-100 hover:shadow-md'
                  }`}
                onClick={() => setSelectedService(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Testing Process</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300
                  ${activePhase === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{`${index + 1}. ${phase}`}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Ensure Your Software Quality?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Let's discuss how our testing expertise can help you deliver reliable and high-performance software.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Your Testing Journey
          </motion.button>
        </div>
      </section>
    </main>
  )
}
