import Image from "next/image";
import styles from "./PillarsSection.module.css";

export default function PillarsSection() {
  const pillars = [
    {
      title: "HERITAGE",
      text: "Connection to Batoda Thikana and Rajawat heritage.",
      imgSrc: "/assets/fort-image.png"
    },
    {
      title: "NATURE",
      text: "Seasonal river, hills, forest, and farmland.",
      imgSrc: "/assets/tree.png"
    },
    {
      title: "COMMUNITY",
      text: "Village walks, rural crafts, and farming traditions.",
      imgSrc: "/assets/pot.png"
    },
    {
      title: "WILDLIFE",
      text: "Proximity to Ranthambore National Park safaris.",
      imgSrc: "/assets/leopard.png"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>FOUR PILLARS</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.headerBox}>
        <h2 className={styles.headerTitle}>THE JEEVAD EXPERIENCE</h2>
        <div className={styles.divider}></div>
        <p className={styles.paragraph}>
          Jeevad Fort brings together four elements that rarely exist together in one property.
        </p>
      </div>

      <div className={styles.grid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>{pillar.text}</p>
              <div className={styles.cardImageWrapper}>
                <Image src={pillar.imgSrc} alt={pillar.title} fill className={styles.cardImage} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
