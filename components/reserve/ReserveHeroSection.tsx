import React from "react";
import styles from "./ReserveHeroSection.module.css";

export default function ReserveHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.subtitle}>Begin Your Journey</span>
        <h1 className={styles.title}>Book Your Stay</h1>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          Experience the grandeur of Jeevad Fort. Submit your inquiry below, and our dedicated reservations team will curate a bespoke itinerary tailored to your preferences.
        </p>
      </div>
    </section>
  );
}
