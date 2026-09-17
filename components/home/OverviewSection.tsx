import Image from "next/image";
import styles from "./OverviewSection.module.css";

export default function OverviewSection() {
  return (
    <section className={styles.section}>
      {/* Left Column - Text Content */}
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>Overview</h2>
        <hr className={styles.divider} />
        
        <p className={styles.paragraph}>
          High above the landscape of Jeevad stands a historic fort whose story is deeply connected with the heritage of Batoda.
        </p>
        <p className={styles.paragraph}>
          Once part of the historic Batoda Jagir, Jeevad has evolved through centuries while retaining its relationship with the surrounding village, river, forests and agricultural landscape.
        </p>
        <p className={styles.paragraph}>
          Today, the Batoda family is carefully conserving the property and transforming it into an intimate heritage retreat while respecting its historic architecture, local materials and traditional craftsmanship.
        </p>
        <p className={styles.paragraph}>
          Within approximately 4.5 bighas of fort land are historic gateways, heritage residences, a centuries-old Krishna Bihari Ji Mandir and the atmospheric Andheri Burj, once home to a remarkable 12-foot-long cannon.
        </p>
        <p className={styles.paragraph}>
          Beyond the fort, the experience continues through village walks, farm visits, local cooking, traditional crafts, jungle high tea and the surrounding landscape.
        </p>
      </div>

      {/* Right Column - Image & Callout Box */}
      <div className={styles.rightColumn}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/assets/fort-image-2.png" 
            alt="Jeevad Fort Vista" 
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>
            A Fort. A River. A Forest. A Living Story.
          </h3>
          <p className={styles.infoText}>
            Jeevad is not simply a place to stay. - It is a place to experience Rajasthan.
          </p>
        </div>
      </div>
    </section>
  );
}
