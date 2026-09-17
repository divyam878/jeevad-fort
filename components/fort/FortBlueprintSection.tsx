import Image from "next/image";
import styles from "./FortBlueprintSection.module.css";

export default function FortBlueprintSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundWrapper}>
        <Image 
          src="/assets/blueprint.png" 
          alt="Fort Blueprint" 
          fill
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>HISTORIC PROPORTIONS & SACRED SPACES</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.subtitle}>The Fort Complex</h3>
        </div>

        <div className={styles.grid}>
          {/* Item 1 */}
          <div className={styles.gridItem}>
            <div className={styles.itemHeader}>
              <span className={styles.itemNumber}>1.</span>
              <div className={styles.itemTitleGroup}>
                <h4 className={styles.itemTitle}>Ganesh Pol</h4>
                <p className={styles.itemSubtitle}>The Main Entrance</p>
              </div>
            </div>
            <p className={styles.itemText}>
              Ganesh Pol is the principal entrance to Jeevad Fort. It forms the ceremonial beginning of the guest&apos;s journey into the historic property.
            </p>
          </div>

          {/* Item 2 */}
          <div className={styles.gridItem}>
            <div className={styles.itemHeader}>
              <span className={styles.itemNumber}>2.</span>
              <div className={styles.itemTitleGroup}>
                <h4 className={styles.itemTitle}>Chandra Pol</h4>
                <p className={styles.itemSubtitle}>The Second Gateway</p>
              </div>
            </div>
            <p className={styles.itemText}>
              Chandra Pol forms another important entrance to the fort complex. Together, Ganesh Pol and Chandra Pol represent important points of arrival and movement within Jeevad Fort.
            </p>
          </div>

          {/* Item 3 */}
          <div className={styles.gridItem}>
            <div className={styles.itemHeader}>
              <span className={styles.itemNumber}>3.</span>
              <div className={styles.itemTitleGroup}>
                <h4 className={styles.itemTitle}>Krishna Bihari Ji Mandir</h4>
                <p className={styles.itemSubtitle}>A Sacred Presence Within the Fort</p>
              </div>
            </div>
            <p className={styles.itemText}>
              Within the fort complex stands the centuries-old Krishna Bihari Ji Mandir. The temple is an important part of the cultural and spiritual identity of Jeevad Fort. Its architecture provides a glimpse into the craftsmanship and traditions that have shaped the fort through generations. Positioned as a living place of worship rather than a tourist attraction, guests may respectfully experience the temple and its architecture while allowing daily religious rituals to continue undisturbed.
            </p>
          </div>

          {/* Item 4 */}
          <div className={styles.gridItem}>
            <div className={styles.itemHeader}>
              <span className={styles.itemNumber}>4.</span>
              <div className={styles.itemTitleGroup}>
                <h4 className={styles.itemTitle}>Andheri Burj</h4>
                <p className={styles.itemSubtitle}>From Cannon Bastion to Private Dining</p>
              </div>
            </div>
            <p className={styles.itemText}>
              Andheri Burj is one of the most distinctive spaces within Jeevad Fort. The historic bastion once housed a remarkable 12-foot-long cannon, offering a direct connection to the fort&apos;s military past. Today, the bastion has been transformed into an open-air sit-out for private dining overlooking the surrounding river and mountain landscape.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
