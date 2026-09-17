import React from "react";
import Image from "next/image";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.colLeft}>
            {/* Top Left: Dinner scene (using dinner.png placeholder for now) */}
            <div className={`${styles.imageWrapper} ${styles.ratioLandscape}`}>
              <Image 
                src="/assets/dinner-image.png" 
                alt="Dinner at Jeevad Fort" 
                fill 
                className={styles.image}
              />
            </div>
            
            {/* Bottom Left: Procession (using fort-background placeholder) */}
            <div className={`${styles.imageWrapper} ${styles.ratioWide}`}>
              <Image 
                src="/assets/fort_background.jpg" 
                alt="Fort Procession" 
                fill 
                className={styles.image}
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className={styles.colRight}>
            {/* Top Right: Plaque restoration (using another placeholder) */}
            <div className={`${styles.imageWrapper} ${styles.ratioLandscape}`}>
              <Image 
                src="/assets/fort-image.png" 
                alt="Plaque viewing" 
                fill 
                className={styles.image}
              />
            </div>
            
            {/* Bottom Right: Group standing around plaque */}
            <div className={`${styles.imageWrapper} ${styles.ratioLandscape}`}>
              <Image 
                src="/assets/fort-image-2.png" 
                alt="Group around plaque" 
                fill 
                className={styles.image}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
