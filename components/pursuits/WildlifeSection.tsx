import Image from "next/image";
import styles from "./WildlifeSection.module.css";

export default function WildlifeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>WILDLIFE EXCURSION</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.headerBox}>
        <h2 className={styles.headerTitle}>RANTHAMBORE SAFARI</h2>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          Situated on the Jaipur-Sawai Madhopur route, Jeevad Fort is located approximately 45 km from Ranthambore National Park (approx. 50 minutes driving time). Rather than residing in a standard tourist hotel, embark on morning or afternoon tiger safaris into the wilderness, then return to dine and sleep within a peaceful, restored hilltop fort.
        </p>
      </div>

      <div className={styles.creativeBlock}>
        <div className={styles.largeTextWrapper}>
          <span className={styles.largeText}>CLOSE TO</span><br />
          <span className={styles.largeText}>RANTHAMBORE FAR</span><br />
          <span className={styles.largeText}>FROM ODINARY</span>
        </div>
        <div className={styles.maroonBg}></div>
        <div className={styles.leopardWrapper}>
          <Image src="/assets/leopard.png" alt="Leopard" fill className={styles.leopardImage} />
        </div>
      </div>
    </section>
  );
}
