"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useVelocity } from "framer-motion"
import PropTypes from "prop-types"

export default function ScrollMarqueeV2({
  text = "BRIDGE GROUP SOLUTION — DIGITAL PRODUCTS — INNOVATIVE DESIGN — PREMIUM DEVELOPMENT",
  baseSpeed = 0.5,
  scrollMultiplier = 20,
  className = "",
}) {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const [speed, setSpeed] = useState(baseSpeed)

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)

      setIsScrolling(true)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 100)
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [lastScrollY])

  useEffect(() => {
    const updateSpeed = () => {
      const absVelocity = Math.abs(scrollVelocity.get())
      let dynamicSpeed = baseSpeed

      if (isScrolling) {
        const cappedVelocity = Math.min(absVelocity, 3000)
        const velocityFactor = cappedVelocity / 300
        dynamicSpeed = baseSpeed * (1 + velocityFactor * scrollMultiplier)
      }

      const currentSpeed =
        scrollDirection === "down" ? -dynamicSpeed : scrollDirection === "up" ? dynamicSpeed : -baseSpeed

      setSpeed(currentSpeed)
    }

    const interval = setInterval(updateSpeed, 50)
    return () => clearInterval(interval)
  }, [baseSpeed, isScrolling, scrollDirection, scrollMultiplier, scrollVelocity])

  const TextItem = () => (
    <span className="inline-block px-4">
      {text}
      <span className="inline-block mx-4 opacity-50">•</span>
    </span>
  )

  return (
    <div className={`relative w-full overflow-hidden py-3 md:py-4 bg-black text-white ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="relative whitespace-nowrap text-xl md:text-2xl lg:text-3xl font-light tracking-tight">
        <motion.div
          className="inline-block"
          animate={{
            x: [0, -10000],
          }}
          transition={{
            duration: 100 / Math.abs(speed),
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <TextItem key={i} />
            ))}
        </motion.div>
      </div>
    </div>
  )
}

// Prop validation
ScrollMarqueeV2.propTypes = {
  text: PropTypes.string,
  baseSpeed: PropTypes.number,
  scrollMultiplier: PropTypes.number,
  className: PropTypes.string,
}
