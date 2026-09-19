import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Fullscreen Background Video */}
      <div className={styles.videoContainer}>
        <video
          src="/assets/jeevad-hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.heroVideo}
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Text Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Where Rajputana Heritage<br />
            Meets The Wilderness
          </h1>
          <p className={styles.subtitle}>
            Discover the perfect balance of Rajputana heritage and modern luxury amidst the wilderness of Rajasthan. Designed for travelers who seek unforgettable experiences in every moment of their stay.
          </p>
          <Link href="/sanctuary" className={styles.ctaButton}>
            <span>Explore Our Rooms</span>
            <svg
              className={styles.ctaArrow}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
