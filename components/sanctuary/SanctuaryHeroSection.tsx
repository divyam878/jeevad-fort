import Image from "next/image";
import styles from "./SanctuaryHeroSection.module.css";

export default function SanctuaryHeroSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Sanctuary</h1>
      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image.png" 
          alt="Jeevad Fort Sanctuary" 
          fill
          priority
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
