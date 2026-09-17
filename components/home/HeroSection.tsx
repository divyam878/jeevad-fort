import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Background Image (z-10 so it overlays text) */}
      <div className={styles.heroContainer}>
        <Image 
          src="/assets/fort-image.png" 
          alt="Jeevad Fort Background" 
          fill
          className={styles.heroImage}
          priority
        />
      </div>

      {/* Main Text (z-0 so it is behind the image) */}
      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          <span className={styles.line1}>Where Rajputana</span>
          <span className={styles.line2}>Heritage Meets The</span>
          <span className={styles.line3}>Wilderness</span>
        </h1>
      </main>
    </section>
  );
}
