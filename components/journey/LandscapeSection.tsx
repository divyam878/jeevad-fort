import Image from "next/image";
import styles from "./LandscapeSection.module.css";

export default function LandscapeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>THE LANDSCAPE</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>WHERE THE FORT MEETS THE WILD</h2>
        <div className={styles.divider}></div>
        <h3 className={styles.subtitle}>Three Sides of River. One Side of Village. Forest and Mountains Beyond.</h3>
        <p className={styles.paragraph}>
          Jeevad Fort commands an exceptional hilltop topography where architecture directly meets natural boundaries:
        </p>
        <ul className={styles.bulletList}>
          <li><span className={styles.bulletBold}>Seasonal Jeevad River:</span> Wraps the fort on three sides, creating a striking natural moat and dramatic seasonal vistas.</li>
          <li><span className={styles.bulletBold}>The Living Village:</span> Borders the fourth side, offering authentic views into everyday rural life, vernacular stone homes, and community rhythms.</li>
          <li><span className={styles.bulletBold}>Forest & Mountain Horizons:</span> Surrounds the valley, extending into natural woodlands and ridgelines.</li>
          <li><span className={styles.bulletBold}>Agricultural Riverbed:</span> Working farmland and rural open spaces adding layered pastoral character to the destination.</li>
        </ul>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/fort-image.png" 
          alt="Jeevad Fort Landscape" 
          fill 
          className={styles.fortImage}
        />
      </div>
    </section>
  );
}
