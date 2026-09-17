"use client";
import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import OverviewSection from "@/components/home/OverviewSection";
import WhySection from "@/components/home/WhySection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";
import SideMenu from "@/components/home/SideMenu";
import styles from "./Home.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
        <HeroSection />
        <AboutSection />
        <OverviewSection />
        <WhySection />
        <CtaSection />
        <Footer />
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
