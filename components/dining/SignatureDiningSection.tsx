import Image from "next/image";
import styles from "./SignatureDiningSection.module.css";

export default function SignatureDiningSection() {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>SIGNATURE DINING</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>DINNER AT ANDHERI BURJ</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>Dine Where the Cannon Once Stood</h3>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.svgWrapper}>
             <Image src="/assets/dinner-border.svg" alt="border frame" fill className={styles.boxFrameSvg} />
          </div>
          
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              Andheri Burj is one of the most distinctive spaces within Jeevad Fort. The historic stone bastion once housed a formidable 12-foot-long cannon, serving as a vital part of the fort&apos;s defensive history.
            </p>
            <p className={styles.paragraph}>
              Today, this storied rampart is transformed into an open-air private dining venue. Available on request, guests can experience a bespoke candlelit dinner surrounded by ancient stone walls, panoramic twilight skies, and sweeping views of the seasonal river.
            </p>
            <ul className={styles.bulletList}>
              <li><span className={styles.bulletTitle}>The Setting:</span> Private dinner on the open-air bastion.</li>
              <li><span className={styles.bulletTitle}>The Atmosphere:</span> Sunset and twilight views across the landscape.</li>
              <li><span className={styles.bulletTitle}>Ethos:</span> A dinner surrounded by centuries of history.</li>
            </ul>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/dinner-image.png" 
                alt="Dinner at Andheri Burj" 
                fill 
                className={styles.dinnerImage} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
