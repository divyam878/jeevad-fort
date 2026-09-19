import Image from "next/image";
import styles from "./WhySection.module.css";

type CardData = {
  title: string;
  text: string;
  image: string;
  alt: string;
  wrapperClass?: string;
};

export default function WhySection() {
  const cards: CardData[] = [
    {
      title: "HERITAGE",
      text: "Connection to Batoda Thikana and Rajawat heritage.",
      image: "/assets/fort-image.png",
      alt: "Fort Heritage",
    },
    {
      title: "NATURE",
      text: "Seasonal river, hills, forest, and farmland.",
      image: "/assets/tree.png",
      alt: "Nature Landscape",
    },
    {
      title: "COMMUNITY",
      text: "Village walks, rural crafts, and farming traditions.",
      image: "/assets/pot.png",
      alt: "Community Crafts",
      wrapperClass: styles.potWrapper,
    },
    {
      title: "WILDLIFE",
      text: "Proximity to Ranthambore National Park safaris.",
      image: "/assets/leopard.png",
      alt: "Wildlife Safari",
      wrapperClass: styles.leopardWrapper,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Jeevad?</h2>
          <hr className={styles.divider} />
          <p className={styles.subtitle}>
            Jeevad Fort brings together four elements that rarely exist together in one property.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardBgHover}></div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{card.text}</p>
                <div className={`${styles.cardImageWrapper} ${card.wrapperClass || ""}`}>
                  <Image 
                    src={card.image} 
                    alt={card.alt} 
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
