"use client";

import { useState } from "react";
import SideMenu from "@/components/home/SideMenu";
import Navbar from "@/components/home/Navbar";
import DiningHeroSection from "@/components/dining/DiningHeroSection";
import CulinaryHeritageSection from "@/components/dining/CulinaryHeritageSection";
import SignatureDiningSection from "@/components/dining/SignatureDiningSection";
import ImmersiveExperienceSection from "@/components/dining/ImmersiveExperienceSection";
import OurApproachSection from "@/components/dining/OurApproachSection";
import Footer from "@/components/home/Footer";
import styles from "./Dining.module.css";

export default function DiningPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const experiences = [
    {
      number: "1.",
      title: "Jungle High Tea",
      subtitle: "Tea Among the Trees",
      description: "Venture beyond the fort gates into the surrounding forest for an intimate afternoon tea served in natural open spaces. Surrounded by untouched wilderness, birdsong, and shady canopies, this unhurried experience pairs freshly brewed tea and regional delicacies with the tranquility of nature.",
      highlights: "Nature immersion, relaxed afternoon setting, photography.",
      availability: "On demand and included in select curated packages."
    },
    {
      number: "2.",
      title: "Private Fort Dining",
      subtitle: "Intimate Fort Settings",
      description: "Enjoy personalized dining arrangements tucked away inside the fort's inner courtyards, quiet terraces, or historic gateways. Each setup is tailored to provide seclusion, warm Rajput hospitality, and atmospheric heritage surroundings.",
      highlights: "Personalized service, historic architecture, curated multi-course dining.",
      availability: "Available on request for an exclusive fee."
    },
    {
      number: "3.",
      title: "Local Culinary Workshops",
      subtitle: "Traditional Kitchen Wisdom",
      description: "Join small, hands-on cooking sessions that introduce the authentic flavors and methods of local household cuisine. Discover regional spices, age-old recipes, and traditional techniques that have shaped Rajasthan's rural culinary heritage for generations.",
      highlights: "Interactive cooking sessions, regional recipes, local food traditions.",
      availability: "Scheduled sessions available weekly."
    }
  ];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />

        <DiningHeroSection />
        <CulinaryHeritageSection />
        <SignatureDiningSection />
        
        <ImmersiveExperienceSection experiences={experiences} />

        <OurApproachSection />
        <Footer />
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
