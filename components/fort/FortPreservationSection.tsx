import Image from "next/image";
import styles from "./FortPreservationSection.module.css";

export default function FortPreservationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>PRESERVING WHAT ALREADY EXISTS</h2>
        <div className={styles.titleDivider}></div>
      </div>

      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h3 className={styles.subtitle}>From Fort to Heritage Retreat</h3>
          <p className={styles.text}>
            The transformation of Jeevad Fort is being undertaken with an emphasis on conservation rather than replacement. The objective is not to create a newly built hotel that looks old, but to conserve an existing historic place and allow guests to experience its authentic character.
          </p>
          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/making.png" 
              alt="Preservation Work" 
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h3 className={styles.principlesTitle}>Conservation Principles</h3>
          <ul className={styles.principlesList}>
            <li className={styles.principleItem}>
              <span className={styles.bullet}>&middot;</span>
              <span>Local Craftsmanship: Supporting and utilizing traditional skills and artisans.</span>
            </li>
            <li className={styles.principleItem}>
              <span className={styles.bullet}>&middot;</span>
              <span>Local Materials: Using materials appropriate to the region and original architecture.</span>
            </li>
            <li className={styles.principleItem}>
              <span className={styles.bullet}>&middot;</span>
              <span>Adaptive Reuse: Giving historic spaces new functions without removing their identity.</span>
            </li>
            <li className={styles.principleItem}>
              <span className={styles.bullet}>&middot;</span>
              <span>Architectural Continuity: Maintaining the character, historic proportions, and visual language of the fort.</span>
            </li>
            <li className={styles.principleItem}>
              <span className={styles.bullet}>&middot;</span>
              <span>Landscape Respect: Working sensitively with the surrounding river, forest, village, and natural topography.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
