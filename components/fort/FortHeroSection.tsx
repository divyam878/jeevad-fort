import Image from "next/image";
import styles from "./FortHeroSection.module.css";

export default function FortHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.titleLight}>The</span>
          <span className={styles.titleBold}>Fort</span>
        </h1>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image.png" 
          alt="Jeevad Fort" 
          fill
          priority
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
