"use client";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTopButton from "@/components/addonFunctions/Scroll-top";
import Footer from "@/components/footer-section/footer";
import Navbar from "@/components/header/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LayoutWrapper({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      <ScrollToTopButton />
      {children}
      <Footer />
    </div>
  );
} 