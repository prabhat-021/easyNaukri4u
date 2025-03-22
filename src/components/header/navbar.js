"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Latest Jobs", href: "/about" },
  ,
  { label: "Results", href: "/" },
  { label: "CBT", href: "/Cbt" },

];

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const navRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "py-1.5 sm:py-2 md:py-3 bg-[#0c0c37]/90 backdrop-blur-lg border-b border-white/10"
          : "py-2 sm:py-3 md:py-4 bg-[#0c0c37] border-b border-white/5"
          }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <Image
                src="/cir.png"
                alt="easyNaukri Logo"
                width={28}
                height={28}
                className="sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] mr-1.5 sm:mr-2 md:mr-3"
              />
              <motion.span
                className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight text-white tracking-wider"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                EASY NAUKRI4U
              </motion.span>
            </Link>

            <nav ref={navRef} className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 relative">
              <motion.div
                className="absolute bottom-0 h-[2px] bg-white opacity-30 rounded-full"
                style={{
                  width: hoveredItem ? "24px" : "0px",
                  left: springX,
                  top: springY,
                  translateX: "-50%",
                  translateY: "8px",
                  opacity: hoveredItem ? 0.5 : 0,
                }}
                transition={{
                  width: { duration: 0.2 },
                  opacity: { duration: 0.2 },
                }}
              />

              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(item.label);
                    if (item.dropdown) setShowDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    if (item.dropdown) setShowDropdown(false);
                  }}
                >
                  {item.dropdown ? (
                    <div className="relative py-2 group cursor-pointer">
                      <span
                        className={`text-sm tracking-wide font-light transition-colors duration-300 ${activeItem === item.label ? "text-white" : "text-gray-400 group-hover:text-white"
                          }`}
                      >
                        {item.label}
                      </span>
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] bg-white"
                        initial={{ width: activeItem === item.label ? "100%" : "0%" }}
                        animate={{
                          width: activeItem === item.label ? "100%" : hoveredItem === item.label ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative py-2 group"
                      onClick={() => setActiveItem(item.label)}
                    >
                      <span
                        className={`text-sm tracking-wide font-light transition-colors duration-300 ${activeItem === item.label ? "text-white" : "text-gray-400 group-hover:text-white"
                          }`}
                      >
                        {item.label}
                      </span>
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] bg-white"
                        initial={{ width: activeItem === item.label ? "100%" : "0%" }}
                        animate={{
                          width: activeItem === item.label ? "100%" : hoveredItem === item.label ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </Link>
                  )}

                  {item.dropdown && (
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[calc(100%+10px)] left-0 w-56 bg-[#C9C9C9]/95 backdrop-blur-xl rounded-lg shadow-2xl py-2 border border-white/20"
                        >
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-[#C9C9C9]/95 backdrop-blur-xl transform rotate-45 border-t border-l border-white/20"></div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-6 py-3 text-sm text-gray-800 hover:text-white hover:bg-black/80 transition-all duration-200 font-medium relative overflow-hidden group"
                              onClick={() => setActiveItem(item.label)}
                            >
                              <span className="relative z-10">{dropdownItem.label}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/0 group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80 transition-all duration-300"></div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              <Link href="/contact">
                <motion.button
                  className="group relative overflow-hidden bg-white text-black rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center"
                  whileHover="hover"
                  whileTap="tap"
                  variants={{ hover: {}, tap: { scale: 0.97 } }}
                >
                  <motion.span
                    className="relative z-10 flex items-center"
                    variants={{ hover: { x: 3 } }}
                    transition={{ duration: 0.3 }}
                  >
                    Contact Us
                    <motion.div
                      className="ml-1"
                      variants={{ hover: { x: 2, opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.span>
                </motion.button>
              </Link>
            </nav>

            <motion.button
              className="md:hidden text-white p-1 sm:p-1.5 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: mobileMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: mobileMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="fixed top-[52px] sm:top-[56px] md:top-[60px] left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <div className="py-3 sm:py-4 border-b border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="font-light tracking-wide text-white text-sm sm:text-base">{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-white/70" />
                      </div>
                      <div className="mt-2 pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="flex items-center justify-between py-3 sm:py-4 border-b border-white/10">
                      <span className="font-light tracking-wide text-white text-sm sm:text-base">{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-white/70" />
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 sm:pt-6">
                <Link href="/contact">
                  <motion.button
                    className="w-full group relative overflow-hidden bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center justify-center"
                    whileHover="hover"
                    whileTap="tap"
                    variants={{ hover: {}, tap: { scale: 0.97 } }}
                  >
                    <motion.span
                      className="relative z-10 flex items-center"
                      variants={{ hover: { x: 3 } }}
                      transition={{ duration: 0.3 }}
                    >
                      Contact Us
                      <motion.div
                        className="ml-1"
                        variants={{ hover: { x: 2, opacity: 1 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}