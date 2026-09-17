import Image from "next/image";
import styles from "./SanctuaryOverviewSection.module.css";

export default function SanctuaryOverviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>ACCOMMODATION OVERVIEW</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.headerTitle}>SEVEN PRIVATE UNITS</h2>
        <div className={styles.divider}></div>
        
        <h3 className={styles.subtitle}>
          Distinctive Living Spaces Within Historic Walls
        </h3>
        
        <ul className={styles.list}>
          <li className={styles.listItem}>- Total Keys: 7 Exclusive Units (2 Suites, 1 Deluxe Room, 4 Swiss Cottages)</li>
          <li className={styles.listItem}>- Setting: 4.5 bighas of preserved hilltop heritage</li>
          <li className={styles.listItem}>- Surroundings: Bounded by the seasonal river, forest, and mountain views</li>
        </ul>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image-2.png" 
          alt="Jeevad Fort Overview" 
          fill
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
