import Image from "next/image";
import styles from "./ImmersiveExperienceSection.module.css";

interface ImmersiveExperienceSectionProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string;
  availability: string;
  imgSrc: string;
  showTopDecorative?: boolean;
}

export default function ImmersiveExperienceSection({
  number,
  title,
  subtitle,
  description,
  highlights,
  availability,
  imgSrc,
  showTopDecorative = false,
}: ImmersiveExperienceSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        {showTopDecorative && (
          <div className={styles.topDecorative}>
            <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
            <span className={styles.topTitle}>IMMERSIVE EXPERIENCES</span>
            <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
          </div>
        )}

        {showTopDecorative && (
          <div className={styles.headerBox}>
            <h2 className={styles.headerTitle}>CURATED DINING SETTINGS</h2>
            <div className={styles.divider}></div>
            <h3 className={styles.headerSubtitle}>From Forest Clearings to Historic Courtyards</h3>
          </div>
        )}

        <div className={`${styles.contentGrid} ${!showTopDecorative ? styles.mtAuto : ''}`}>
          {/* Left Text Block */}
          <div className={styles.textBlock}>
            <h4 className={styles.itemTitle}>{title}</h4>
            <span className={styles.itemSubtitle}>{subtitle}</span>
            <p className={styles.itemDescription}>{description}</p>
            <ul className={styles.bulletList}>
              <li><span className={styles.bulletBold}>Highlights:</span> {highlights}</li>
              <li><span className={styles.bulletBold}>Availability:</span> {availability}</li>
            </ul>
            
            {/* The giant number at the bottom right of the text block */}
            <div className={styles.numberOverlay}>{number}</div>
          </div>

          {/* Right Image Block */}
          <div className={styles.imageBlock}>
            <Image src={imgSrc} alt={title} fill className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
