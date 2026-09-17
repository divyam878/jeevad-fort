import Image from "next/image";
import styles from "./DiningHeroSection.module.css";

export default function DiningHeroSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>DINING</h1>
      <div className={styles.imageWrapper}>
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
