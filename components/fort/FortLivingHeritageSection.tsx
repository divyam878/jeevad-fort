import Image from "next/image";
import styles from "./FortLivingHeritageSection.module.css";

export default function FortLivingHeritageSection() {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.mainTitle}>A LIVING HERITAGE</h2>
          <div className={styles.titleDivider}></div>
        </div>

        <div className={styles.gridContainer}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h3 className={styles.subtitle}>The Story of Batoda Thikana and Jeevad Fort</h3>
            <p className={styles.text}>
              Jeevad Fort is part of the wider historical story of Batoda Thikana. According to historical records, Batoda was a Double Tazimi Jagir of the Rajawat clan of the Kachwaha dynasty and was historically associated with the Sawai Madhopur region of the former Jaipur State. The status of Batoda as a Double Tazimi Jagir reflected its exceptional ceremonial standing within the Jaipur State.
            </p>
            <p className={styles.text}>
              The Batoda estate comprised twelve villages, including Jeevad, along with Batoda, Deoli, Jhakolas, Fulwara, Binjari, and Banra Badh. The estate also carried military responsibilities, including the maintenance of fifty-two cavalry horses for state service.
            </p>
            <div className={styles.leftImageWrapper}>
              <Image 
                src="/assets/begnning.png" 
                alt="Jeevad Fort History" 
                fill
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.rightImageWrapper}>
              <Image 
                src="/assets/story.png" 
                alt="Batoda Thikana Story" 
                fill
                className={styles.image}
              />
            </div>
            <h3 className={styles.subtitle}>The Beginning of the Jeevad Story</h3>
            <p className={styles.text}>
              Family tradition associates the history of Jeevad Fort with Chandra Singh Ji of Batoda, who is traditionally believed to have won Jeevad around the beginning of the 17th century, approximately 1600 CE. The fort subsequently became part of the historical landscape of Batoda and remained connected with the estate. The story of Jeevad represents a continuing relationship between family, land, village, architecture and tradition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
