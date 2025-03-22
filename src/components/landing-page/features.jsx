"use client"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Users, HeadphonesIcon, BadgeDollarSign, Lightbulb, ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-[#fff]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-3 text-gray-900">Our Core Features</h2>

          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-3" />

          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            We combine cutting-edge technology with deep understanding of user needs to deliver exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Compact Bento Grid */}
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const PersonalizedSolutions = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full bg-gradient-to-br from-blue-50 to-white p-4 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
          <Users className="h-5 w-5" />
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-blue-200 rounded-full mb-2 w-full max-w-[80%]"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-blue-200 rounded-full w-full max-w-[60%]"
        />
      </motion.div>
    </motion.div>
  )
}

const CustomerSupport = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full bg-gradient-to-br from-indigo-50 to-white p-3 flex-col space-y-2 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-row rounded-full border border-indigo-100 p-2 items-center space-x-2 bg-white"
        whileHover={{ x: 5, rotate: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
          <HeadphonesIcon className="h-3 w-3" />
        </div>
        <div className="w-full bg-indigo-50 h-2 rounded-full" />
      </motion.div>
      <motion.div
        className="flex flex-row rounded-full border border-indigo-100 p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
        whileHover={{ x: -5, rotate: -1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full bg-indigo-50 h-2 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
          <HeadphonesIcon className="h-3 w-3" />
        </div>
      </motion.div>
    </motion.div>
  )
}

const BestService = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full rounded-lg flex-col items-center justify-center"
      style={{
        background: "linear-gradient(-45deg, #f3f4f6, #ede9fe, #dbeafe, #f3f4f6)",
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <BadgeDollarSign className="h-5 w-5 text-purple-600" />
      </motion.div>
    </motion.div>
  )
}

const Innovation = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full bg-gradient-to-br from-sky-50 to-white flex-row space-x-2 p-3 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-full w-1/3 rounded-lg bg-white p-2 border border-sky-100 flex flex-col items-center justify-center"
        whileHover={{ x: -3, rotate: -1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="rounded-full h-6 w-6 bg-sky-100 flex items-center justify-center text-sky-600 mb-1">
          <Lightbulb className="h-3 w-3" />
        </div>
        <p className="text-[8px] text-center font-medium text-sky-900">Ideas</p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-lg bg-white p-2 border border-sky-100 flex flex-col items-center justify-center"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <div className="rounded-full h-6 w-6 bg-sky-100 flex items-center justify-center text-sky-600 mb-1">
          <Lightbulb className="h-3 w-3" />
        </div>
        <p className="text-[8px] text-center font-medium text-sky-900">Creative</p>
      </motion.div>
      <motion.div
        className="h-full w-1/3 rounded-lg bg-white p-2 border border-sky-100 flex flex-col items-center justify-center"
        whileHover={{ x: 3, rotate: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="rounded-full h-6 w-6 bg-sky-100 flex items-center justify-center text-sky-600 mb-1">
          <Lightbulb className="h-3 w-3" />
        </div>
        <p className="text-[8px] text-center font-medium text-sky-900">Fresh</p>
      </motion.div>
    </motion.div>
  )
}

const JoinTeam = () => {
  const arr = new Array(3).fill(0)
  return (
    <motion.div
      className="flex flex-1 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white flex-col space-y-2 p-4 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {arr.map((_, i) => (
        <motion.div
          key={`join-team-${i}`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.random() * (100 - 40) + 40}%` }}
          transition={{ duration: 1, delay: i * 0.2 }}
          className="h-1 bg-gray-700 rounded-full"
        />
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-2 bg-white text-gray-900 rounded-full px-3 py-1 text-[10px] font-medium flex items-center justify-center"
      >
        Join Us <ArrowRight className="ml-1 h-2 w-2" />
      </motion.button>
    </motion.div>
  )
}

// Compact structured grid items
const items = [
  {
    title: "Personalized Solutions",
    description: <span>Tailored solutions for your specific needs.</span>,
    header: <PersonalizedSolutions />,
    className: "md:col-span-2 md:row-span-1",
    icon: <Users className="h-3 w-3 text-blue-600" />,
  },
  {
    title: "Premium Support",
    description: <span>24x7 support ensuring you always have assistance.</span>,
    header: <CustomerSupport />,
    className: "md:col-span-2 md:row-span-1",
    icon: <HeadphonesIcon className="h-3 w-3 text-indigo-600" />,
  },
  {
    title: "Best Service @ Low Cost",
    description: <span>Exceptional value for our customers.</span>,
    header: <BestService />,
    className: "md:col-span-2 md:row-span-1",
    icon: <BadgeDollarSign className="h-3 w-3 text-purple-600" />,
  },
  {
    title: "Innovation",
    description: <span>Fresh ideas and cutting-edge implementations.</span>,
    header: <Innovation />,
    className: "md:col-span-3 md:row-span-1",
    icon: <Lightbulb className="h-3 w-3 text-sky-600" />,
  },
  {
    title: "Join Our Team",
    description: <span>Help shape the future with your talents.</span>,
    header: <JoinTeam />,
    className: "md:col-span-3 md:row-span-1",
    icon: <ArrowRight className="h-3 w-3 text-gray-600" />,
  },
]

