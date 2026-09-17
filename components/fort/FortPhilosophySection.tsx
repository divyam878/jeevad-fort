import styles from "./FortPhilosophySection.module.css";

export default function FortPhilosophySection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>PRESERVE. PARTICIPATE. EXPERIENCE.</h2>
        <div className={styles.titleDivider}></div>
      </div>

      <div className={styles.contentContainer}>
        <h3 className={styles.subtitle}>The Jeevad Philosophy</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>&middot; Preserve: Conserve the fort and its architectural heritage.</li>
          <li className={styles.listItem}>&middot; Participate: Create meaningful connections between guests and local communities.</li>
          <li className={styles.listItem}>&middot; Experience: Allow guests to experience Rajasthan through its landscape, traditions, food, and people.</li>
        </ul>
      </div>

      <div className={styles.ctaContainer}>
        <div className={styles.ctaInnerBorder}>
          <div className={styles.ctaTextContent}>
            <h4 className={styles.ctaTitle}>
              STAY IN HISTORY.<br />
              EXPLORE THE VILLAGE.<br />
              DISCOVER THE WILDERNESS
            </h4>
            <p className={styles.ctaSubtitle}>
              Jeevad is not simply a place to stay. - It is a place<br className="hidden md:block" />
              to experience Rajasthan.
            </p>
          </div>

          <div className={styles.ctaBlock}>
            <div className={styles.ctaContent}>
              <h5 className={styles.ctaActionTitle}>
                BOOK<br />
                YOUR STAY
              </h5>
              <div className={styles.arrowWrapper}>
                <svg className={styles.arrowIcon} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H98M98 5L94 1M98 5L94 9" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
