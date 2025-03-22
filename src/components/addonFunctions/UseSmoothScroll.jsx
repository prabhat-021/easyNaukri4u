"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2, // Adjust speed (higher = smoother)
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);
};

export default useSmoothScroll;
