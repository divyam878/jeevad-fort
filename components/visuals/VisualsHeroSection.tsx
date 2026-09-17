import React from "react";
import Image from "next/image";
import styles from "./VisualsHeroSection.module.css";

export default function VisualsHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>VISUALS</h1>
      </div>
      
      <div className={styles.fortImageWrapper}>
        <Image 
          src="/assets/fort-image.png" 
          alt="Jeevad Fort" 
          fill 
          className={styles.fortImage}
          priority
        />
      </div>
    </section>
  );
}
