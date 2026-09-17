"use client";
import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import SideMenu from "@/components/home/SideMenu";
import FortHeroSection from "@/components/fort/FortHeroSection";
import FortHeritageSection from "@/components/fort/FortHeritageSection";
import FortLivingHeritageSection from "@/components/fort/FortLivingHeritageSection";
import FortBlueprintSection from "@/components/fort/FortBlueprintSection";
import FortPreservationSection from "@/components/fort/FortPreservationSection";
import FortPhilosophySection from "@/components/fort/FortPhilosophySection";
import Footer from "@/components/home/Footer";
import styles from "./Fort.module.css";

export default function FortPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />
        <FortHeroSection />
        <FortHeritageSection />
        <FortLivingHeritageSection />
        <FortBlueprintSection />
        <FortPreservationSection />
        <FortPhilosophySection />
        <Footer />
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
