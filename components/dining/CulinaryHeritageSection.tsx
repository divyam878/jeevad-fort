import Image from "next/image";
import styles from "./CulinaryHeritageSection.module.css";

export default function CulinaryHeritageSection() {
  return (
    <section className={styles.section}>
      {/* Decorative Top */}
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>CULINARY HERITAGE</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>FOOD ROOTED IN PLACE</h2>
        <div className={styles.divider}></div>
        <h3 className={styles.subtitle}>Seasonal Ingredients, Living Traditions, and Atmospheric Venues</h3>
        <p className={styles.paragraph}>
          Dining at Jeevad reflects the authentic character of the destination. The culinary experience emphasizes regional influences, seasonal produce, and traditional cooking knowledge, turning every meal into an intimate engagement with history and local culture.
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
