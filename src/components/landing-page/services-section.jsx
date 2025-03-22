"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShieldCheck, BarChart3, Wallet, Globe, Database } from "lucide-react";

// Services data
const servicesData = [
  {
    id: "01",
    title: "Risk Management",
    description:
      "Risk management is the identification, evaluation, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    id: "02",
    title: "Portfolio Management",
    description:
      "Portfolio management is the art and science of making decisions about investment mix and policy, matching investments to objectives, asset allocation for individuals and institutions, and balancing risk against performance.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    id: "03",
    title: "Wealth Management",
    description:
      "Wealth management is an investment-advisory discipline which incorporates financial planning, investment portfolio management and a number of aggregated financial services offered by a complex mix of asset managers, custodial banks, retail banks, financial planners and others.",
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    id: "04",
    title: "Project Outsourcing",
    description:
      "Outsourcing allows a company to subcontract a particular area within the organization. A company may outsource project management or any other task or department for one or more reasons.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: "05",
    title: "ERP & Customized Software",
    description:
      "Enterprise resource planning (ERP) is business process management software that allows an organization to use a system of integrated applications to manage the business and automate many back office functions related to technology, services and human resources.",
    icon: <Database className="h-6 w-6" />,
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-light tracking-widest text-gray-400 uppercase">/OUR BEST SERVICES/</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              We have grown in different sectors in no time because of unmatched services.
            </h2>
          </motion.div>
        </div>

        {/* Services - Desktop */}
        <div className="hidden md:flex gap-4 h-[400px]">
          {servicesData.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.id}
                className="relative border border-gray-800 rounded-sm p-8 cursor-pointer overflow-hidden h-full"
                initial={{ width: "20%" }}
                animate={{
                  width: isActive ? "50%" : "12.5%",
                }}
                transition={{
                  width: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-sm text-gray-500">{service.id}</div>
                    <div className={`text-${isActive ? "white" : "gray-500"} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-light mb-6 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                        }}
                        className="mt-auto"
                      >
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md">{service.description}</p>
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500 mt-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            scale: { duration: 0.3, delay: 0.3, ease: "easeOut" },
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Services - Mobile */}
        <div className="md:hidden space-y-4">
          {servicesData.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.id}
                className="relative border border-gray-800 rounded-sm p-6 cursor-pointer overflow-hidden"
                initial={{ height: 100 }}
                animate={{ height: isActive ? 320 : 100 }}
                transition={{ height: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                onClick={() => setActiveService(index)}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-sm text-gray-500">{service.id}</div>
                    <div className={`text-${isActive ? "white" : "gray-500"} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className={`text-lg font-light mb-4 transition-colors duration-500 ${isActive ? "text-white" : "text-gray-400"}`}>
                    {service.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" } }}
                        className="mt-auto"
                      >
                        <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
