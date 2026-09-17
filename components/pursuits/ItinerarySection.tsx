import Image from "next/image";
import styles from "./ItinerarySection.module.css";

export default function ItinerarySection() {
  const itinerary = [
    {
      dayNumber: "1.",
      title: "Arrival & Fort Orientation",
      bullets: [
        "Afternoon: Arrival at Jeevad Fort; personal welcome and check-in.",
        "Late Afternoon: Orientation walk through Ganesh Pol and the inner fort spaces.",
        "Sunset: Pay respect at Krishna Bihari Ji Mandir; sunset viewpoints overlooking the river and mountains.",
        "Evening: Welcome dinner served within the fort courtyards."
      ]
    },
    {
      dayNumber: "2.",
      title: "Village Life & Wilderness",
      bullets: [
        "Early Morning: Early departure for Ranthambore National Park game safari.",
        "Mid-Day: Return to Jeevad for courtyard breakfast, followed by farm exploration and a regional cooking workshop.",
        "Afternoon: High tea in the forest clearing followed by an optional traditional clay-pot-making session.",
        "Night: Private dining set upon the historic rampart of Andheri Burj."
      ]
    },
    {
      dayNumber: "3.",
      title: "Slow Morning & Departure",
      bullets: [
        "Morning: Leisurely fort breakfast, architectural photography, and quiet relaxation.",
        "Mid-Day: Final panoramic views of the riverbed, village, and surrounding forest prior to departure."
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>SUGGESTED STAY</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>SAMPLE 2-NIGHT ITINERARY</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>The Balanced Journey Through History, Craft, and Wilderness</h3>
        </div>

        <div className={styles.timeline}>
          {itinerary.map((day, idx) => (
            <div key={idx} className={styles.dayRow}>
              <div className={styles.dayColumn}>
                <span className={styles.dayLabel}>DAY</span>
                <span className={styles.dayNumber}>{day.dayNumber}</span>
              </div>
              <div className={styles.contentColumn}>
                <div className={styles.dayHeader}>
                  <h4 className={styles.dayTitle}>{day.title}</h4>
                </div>
                <div className={styles.dayBody}>
                  <ul className={styles.bulletList}>
                    {day.bullets.map((bullet, bIdx) => {
                      const [time, ...rest] = bullet.split(": ");
                      const text = rest.join(": ");
                      return (
                        <li key={bIdx} className={styles.bulletItem}>
                          <span className={styles.bulletTime}>{time}:</span> {text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
