import Image from "next/image";
import styles from "./ImmersiveExperienceSection.module.css";

export interface ExperienceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string;
  availability: string;
  imgSrc?: string;
}

interface ImmersiveExperienceSectionProps {
  experiences?: ExperienceItem[];
  number?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  highlights?: string;
  availability?: string;
  imgSrc?: string;
  showTopDecorative?: boolean;
}

export default function ImmersiveExperienceSection({
  experiences,
  number,
  title,
  subtitle,
  description,
  highlights,
  availability,
  imgSrc,
  showTopDecorative = true,
}: ImmersiveExperienceSectionProps) {
  const items: ExperienceItem[] = experiences || (title ? [{
    number: number || "1.",
    title: title || "",
    subtitle: subtitle || "",
    description: description || "",
    highlights: highlights || "",
    availability: availability || "",
    imgSrc: imgSrc || "/assets/dinner-image.png"
  }] : []);

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

        <div className={styles.experienceList}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.contentGrid}>
              {/* Left Text Block */}
              <div className={styles.textBlock}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <span className={styles.itemSubtitle}>{item.subtitle}</span>
                <p className={styles.itemDescription}>{item.description}</p>
                <ul className={styles.bulletList}>
                  <li><span className={styles.bulletBold}>Highlights:</span> {item.highlights}</li>
                  <li><span className={styles.bulletBold}>Availability:</span> {item.availability}</li>
                </ul>
                
                {/* The giant number at the bottom right of the text block */}
                <div className={styles.numberOverlay}>{item.number}</div>
              </div>

              {/* Right Image Block */}
              <div className={styles.imageBlock}>
                <Image 
                  src={item.imgSrc || "/assets/dinner-image.png"} 
                  alt={item.title} 
                  fill 
                  className={styles.image} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
