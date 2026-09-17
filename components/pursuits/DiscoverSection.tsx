import Image from "next/image";
import styles from "./DiscoverSection.module.css";

export default function DiscoverSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>PURSUITS & EXPERIENCES</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.headerTitle}>DISCOVER JEEVAD BEYOND THE WALLS</h2>
        <div className={styles.divider}></div>
        <h3 className={styles.subtitle}>Stay in History. Explore the Village. Discover the Wilderness.</h3>
        
        <p className={styles.paragraph}>
          Jeevad is designed around the idea that a guest&apos;s experience should extend beyond the room. The surrounding village, working farms, natural forests, traditional crafts, and varied landscapes all become an integral part of your stay.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image-2.png" 
          alt="Fort landscape" 
          fill 
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
