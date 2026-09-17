import Image from "next/image";
import styles from "./DestinationProfileSection.module.css";

export default function DestinationProfileSection() {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>DESTINATION PROFILE</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>RANTHAMBORE SAFARI</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>A Distinctive Way to Experience the Region</h3>
        </div>

        <div className={styles.contentBox}>
          <p className={styles.paragraph}>
            For travelers visiting Ranthambore, Jeevad Fort offers a different way to experience Rajasthan&apos;s wild country. Rather than staying in a conventional wildlife resort, guests venture into the wilderness by day and return to an intimate hilltop fort surrounded by river, village, forest, and mountain landscapes.
          </p>
          <ul className={styles.bulletList}>
            <li><span className={styles.bulletTitle}>By Day:</span> Explore Ranthambore</li>
            <li><span className={styles.bulletTitle}>By Evening:</span> Return to Jeevad</li>
            <li><span className={styles.bulletTitle}>By Night:</span> Dine within history</li>
          </ul>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.sloganContainer}>
            <h2 className={styles.slogan}>
              CLOSE TO<br/>
              RANTHAMBORE FAR<br/>
              FROM ORDINARY
            </h2>
          </div>
          
          <div className={styles.imageBoxContainer}>
            <div className={styles.maroonBlock}></div>
            <div className={styles.leopardWrapper}>
              <Image 
                src="/assets/leopard.png" 
                alt="Leopard" 
                fill 
                className={styles.leopardImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
