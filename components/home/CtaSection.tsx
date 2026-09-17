import Link from "next/link";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.innerBorder}>
          
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              STAY IN HISTORY.<br />
              EXPLORE THE VILLAGE.<br />
              DISCOVER THE WILDERNESS
            </h2>
            <p className={styles.subtitle}>
              Jeevad is not simply a place to stay. - It is a place<br className="hidden md:block" />
              to experience Rajasthan.
            </p>
          </div>

          <Link href="/reserve" className={styles.ctaBlock}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>
                BOOK<br />
                YOUR STAY
              </h3>
              <div className={styles.arrowWrapper}>
                <svg className={styles.arrowIcon} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H98M98 5L94 1M98 5L94 9" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
