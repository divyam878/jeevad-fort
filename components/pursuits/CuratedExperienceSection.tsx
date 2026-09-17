import Image from "next/image";
import styles from "./CuratedExperienceSection.module.css";

interface CuratedExperienceProps {
  isFirst?: boolean;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlightsTitle?: string;
  highlights: string;
  imgSrc: string;
}

export default function CuratedExperienceSection({
  isFirst = false,
  number,
  title,
  subtitle,
  description,
  highlightsTitle = "Highlights",
  highlights,
  imgSrc
}: CuratedExperienceProps) {
  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>CURATED EXPERIENCES</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      {isFirst && (
        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>RURAL LIFE & NATURAL IMMERSION</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>Meaningful Connections With Land and Community</h3>
        </div>
      )}

      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <span className={styles.itemNumber}>{number}</span>
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>{title}</h4>
            <span className={styles.itemSubtitle}>{subtitle}</span>
            <div className={styles.itemDivider}></div>
            <p className={styles.itemDescription}>{description}</p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightsBox}>
            <h5 className={styles.highlightsTitle}>{highlightsTitle}</h5>
            <p className={styles.highlightsText}>{highlights}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={imgSrc} alt={title} fill className={styles.featureImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
