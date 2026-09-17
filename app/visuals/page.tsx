"use client";
import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import SideMenu from "@/components/home/SideMenu";
import VisualsHeroSection from "@/components/visuals/VisualsHeroSection";
import GallerySection from "@/components/visuals/GallerySection";
import styles from "./Visuals.module.css";

export default function VisualsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="light" />
        <VisualsHeroSection />
        <GallerySection />
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </main>
  );
}
