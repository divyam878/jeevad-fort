import Image from "next/image";
import styles from "./TravelCircuitSection.module.css";

const circuits = [
  {
    title: "JAIPUR",
    bullets: ["City Heritage", "Architecture", "Culture"],
    imgSrc: "/assets/jaipur.png", // Placeholder for Jaipur image
    imgAlt: "Jaipur",
    imgClass: styles.cardImageJaipur
  },
  {
    title: "JEEVAD FORT",
    bullets: ["Hilltop Fort", "River", "Village", "Forest", "Mountains"],
    imgSrc: "/assets/fort-image-2.png",
    imgAlt: "Jeevad Fort",
    imgClass: styles.cardImageJeevad
  },
  {
    title: "RANTHAMBORE",
    bullets: ["Forest", "Tigers", "Untamed Wilderness"],
    imgSrc: "/assets/leopard.png",
    imgAlt: "Ranthambore",
    imgClass: styles.cardImageRanthambore
  }
];

export default function TravelCircuitSection() {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>TRAVEL CIRCUIT</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>JAIPUR &ndash; JEEVAD &ndash; RANTHAMBORE</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>A Natural Rajasthan Journey</h3>
          <p className={styles.paragraph}>
            Jeevad forms a natural stop along the classic heritage and wildlife corridor, creating a seamless journey from city culture to living heritage and untamed wilderness:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {circuits.map((card, idx) => (
            <div key={idx} className={styles.circuitCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardBullets}>
                  {card.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={card.imgSrc} 
                    alt={card.imgAlt} 
                    fill 
                    className={`${styles.cardImage} ${card.imgClass}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
