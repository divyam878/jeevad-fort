import Image from "next/image";
import styles from "./FortHeritageSection.module.css";

export default function FortHeritageSection() {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <h2 className={styles.headerTitle}>
          <span className={styles.titleBold}>4.5 BIGHAS</span>
          <span className={styles.titleLight}>OF LIVING HERITAGE</span>
        </h2>
        <div className={styles.divider}></div>
        
        <h3 className={styles.subtitle}>
          A Fort. A River. A Forest. A Living Story.
        </h3>
        
        <p className={styles.description}>
          High above the landscape of Jeevad stands a historic fort whose story is deeply connected with the heritage of Batoda. Once part of the historic Batoda Jagir, Jeevad has evolved through centuries while retaining its relationship with the surrounding village, river, forests and agricultural landscape. Today, the Batoda family is carefully conserving the property and transforming it into an intimate heritage retreat while respecting its historic architecture, local materials and traditional craftsmanship.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image-2.png" 
          alt="Jeevad Fort Landscape" 
          fill
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
