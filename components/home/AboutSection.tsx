import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Left Column - Image */}
      <div className={styles.imageColumn}>
        <Image 
          src="/assets/fort-image-2.png" 
          alt="Jeevad Fort Landscape" 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      {/* Right Column - Content */}
      <div className={styles.contentColumn}>
        <h2 className={styles.title}>
          Between River,<br />
          Forest And Legacy.
        </h2>
        
        <hr className={styles.divider} />
        
        <p className={styles.paragraph}>
          A historic hilltop fort in Rajasthan, surrounded on three sides by the seasonal Jeevad River and overlooking village, forest, farmland and mountain landscapes.
        </p>
        
        <p className={styles.paragraph}>
          Located on the Jaipur-Sawai Madhopur route and approximately 45 km from Ranthambore National Park, Jeevad Fort offers a distinctive combination of Rajput heritage, nature, rural life and intimate hospitality.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Discover Jeevad
          </button>
        </div>
      </div>
    </section>
  );
}
