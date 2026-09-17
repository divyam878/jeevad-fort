import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "THE FORT", href: "/fort" },
  { label: "SANCTUARY", href: "/sanctuary" },
  { label: "JOURNEY", href: "/journey" },
];

const navLinksRight = [
  { label: "DINING", href: "/dining" },
  { label: "VISUALS", href: "/visuals" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.outerBorder}>
        <div className={styles.mainRow}>

          {/* Left pane: logo + nav + copyright */}
          <div className={styles.leftPane}>

            {/* Top: logo + nav side by side */}
            <div className={styles.topContent}>
              {/* Logo & tagline */}
              <div className={styles.logoBlock}>
                <Link href="/">
                  <Image
                    src="/assets/jeevad-logo-white.png"
                    alt="Jeevad Fort Logo"
                    width={110}
                    height={55}
                    className={styles.logoImg}
                  />
                </Link>
                <p className={styles.tagline}>
                  Between River,<br />
                  Forest and Legacy.
                </p>
              </div>

              {/* Navigation columns */}
              <nav className={styles.navBlock}>
                <div className={styles.navCol}>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className={styles.navCol}>
                  {navLinksRight.map((link) => (
                    <Link key={link.href} href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Bottom: copyright only in left pane */}
            <div className={styles.bottomBar}>
              <p className={styles.copyright}>© 2026 Jeevad Fort</p>
            </div>
          </div>

          {/* CTA block — full height right column */}
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
    </footer>
  );
}
