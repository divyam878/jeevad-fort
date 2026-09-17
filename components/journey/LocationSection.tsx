import Image from "next/image";
import styles from "./LocationSection.module.css";

export default function LocationSection() {
  return (
    <section className={styles.section}>
      {/* Decorative Top */}
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>THE LOCATION</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>BETWEEN RIVER, FOREST AND LEGACY</h2>
        <div className={styles.divider}></div>
        <h3 className={styles.subtitle}>Between Jaipur and Ranthambore</h3>
        <p className={styles.paragraph}>
          Jeevad Fort enjoys a strategically attractive location along the route between Jaipur and Sawai Madhopur in Rajasthan. The retreat offers convenient connectivity via National and State Highway networks, serving as an unhurried heritage stop for travelers exploring Rajasthan by road.
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
