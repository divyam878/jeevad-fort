import Image from "next/image";
import styles from "./SanctuaryIntroSection.module.css";

export default function SanctuaryIntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <h2 className={styles.headerTitle}>STAY WITHIN THE STORY</h2>
        <div className={styles.divider}></div>
        
        <h3 className={styles.subtitle}>
          An Intimate Heritage Retreat
        </h3>
        
        <p className={styles.description}>
          Jeevad Fort is intentionally intimate. With only seven exclusive guest keys across the entire estate, the property is designed to preserve tranquility, privacy, and an unhurried connection to history and the natural landscape.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image-2.png" 
          alt="Jeevad Fort Retreat" 
          fill
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
