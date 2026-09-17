import Image from "next/image";
import styles from "./OurApproachSection.module.css";

export default function OurApproachSection() {
  const approaches = [
    {
      title: "LOCAL PRODUCE",
      text: "Sourced directly from village farmlands and fertile riverbed fields surrounding the fort.",
      imgSrc: "/assets/fruit-basket.png",
      imgClass: styles.fruitImage
    },
    {
      title: "REGIONAL RECIPIES",
      text: "Dishes inspired by Batoda and broader Rajputana cooking traditions.",
      imgSrc: "/assets/dish.png",
      imgClass: styles.dishImage
    },
    {
      title: "SEASONAL FLAVOURS",
      text: "Menus designed around local harvests and native ingredients.",
      imgSrc: "/assets/chilli.png",
      imgClass: styles.chilliImage
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>OUR APPROACH</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>THE FARM-TO-TABLE ETHOS</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>Fresh, Regional, and Rooted in Community</h3>
        </div>

        <div className={styles.grid}>
          {approaches.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{item.text}</p>
                <div className={styles.cardImageWrapper}>
                  <Image src={item.imgSrc} alt={item.title} fill className={`${styles.cardImage} ${item.imgClass}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
