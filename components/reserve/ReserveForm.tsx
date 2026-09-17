import React, { useState } from "react";
import styles from "./ReserveForm.module.css";

export default function ReserveForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className={styles.section}>
        <div className={styles.formContainer}>
          <div className={styles.successContainer}>
            <svg className={styles.successIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className={styles.successTitle}>Inquiry Received</h2>
            <p className={styles.successText}>
              Thank you for your interest in Jeevad Fort. Our reservations team will contact you shortly to confirm availability and finalize your bespoke experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            
            {/* Personal Details */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>First Name</label>
              <input required type="text" className={styles.input} placeholder="John" />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Last Name</label>
              <input required type="text" className={styles.input} placeholder="Doe" />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input required type="email" className={styles.input} placeholder="john@example.com" />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <input required type="tel" className={styles.input} placeholder="+1 (555) 000-0000" />
            </div>

            {/* Stay Details */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Check-in Date</label>
              <input required type="date" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Check-out Date</label>
              <input required type="date" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Guests</label>
              <select className={styles.select}>
                <option>1 Adult</option>
                <option selected>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
                <option>Group / Event</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Room Preference</label>
              <select className={styles.select}>
                <option>No Preference</option>
                <option>Royal Suite</option>
                <option>Heritage Room</option>
                <option>Courtyard Suite</option>
              </select>
            </div>

            {/* Message */}
            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Special Requests / Message</label>
              <textarea className={styles.textarea} placeholder="Please let us know if you have any dietary requirements or special requests for your stay..."></textarea>
            </div>
            
          </div>
          
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
