"use client";

import { useState } from "react";
import SideMenu from "@/components/home/SideMenu";
import Navbar from "@/components/home/Navbar";
import JourneyHeroSection from "@/components/journey/JourneyHeroSection";
import LocationSection from "@/components/journey/LocationSection";
import DestinationProfileSection from "@/components/journey/DestinationProfileSection";
import TravelCircuitSection from "@/components/journey/TravelCircuitSection";
import ConnectivitySection from "@/components/journey/ConnectivitySection";
import LandscapeSection from "@/components/journey/LandscapeSection";
import Footer from "@/components/home/Footer";
import styles from "./Journey.module.css";

export default function JourneyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />

        <JourneyHeroSection />
        <LocationSection />
        <DestinationProfileSection />
        <TravelCircuitSection />
        <ConnectivitySection />
        <LandscapeSection />
        <Footer />
        
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
