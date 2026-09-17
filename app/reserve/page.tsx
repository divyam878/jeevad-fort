"use client";
import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import SideMenu from "@/components/home/SideMenu";
import ReserveHeroSection from "@/components/reserve/ReserveHeroSection";
import ReserveForm from "@/components/reserve/ReserveForm";
import styles from "./Reserve.module.css";

export default function ReservePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />
        
        <div className={styles.contentWrapper}>
          <div className={styles.leftCol}>
            <ReserveHeroSection />
          </div>
          <div className={styles.rightCol}>
            <ReserveForm />
          </div>
        </div>

        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </main>
  );
}
