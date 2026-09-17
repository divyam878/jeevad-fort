"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./RoomCategorySection.module.css";

interface RoomCategoryProps {
  isFirst?: boolean;
  categoryType: string;
  number: string;
  title: string;
  description: string[];
  features: string[];
  reserveText: string;
  images: string[];
}

export default function RoomCategorySection({
  isFirst = false,
  categoryType,
  number,
  title,
  description,
  features,
  reserveText,
  images
}: RoomCategoryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>ROOM CATEGORIES</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        {isFirst && (
          <div className={styles.firstSlideHeader}>
            <h2 className={styles.headerTitle}>LIVING IN HISTORY</h2>
            <div className={styles.divider}></div>
            <h3 className={styles.subtitle}>Curated Stays Across Fort Quarters</h3>
          </div>
        )}

        <div className={styles.mainBox}>
          <span className={styles.categoryType}>{categoryType}</span>
          
          <div className={styles.roomHeader}>
            <span className={styles.roomNumber}>{number}</span>
            <div className={styles.roomInfo}>
              <h4 className={styles.roomTitle}>{title}</h4>
              {description.map((paragraph, idx) => (
                <p key={idx} className={styles.roomDescription} style={{ marginBottom: idx < description.length - 1 ? '1rem' : '0' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.featuresBox}>
            <div className={styles.featuresContent}>
              <h5 className={styles.featuresTitle}>Features</h5>
              <ul className={styles.featuresList}>
                {features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    &middot; {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.reserveBox}>
              <h5 className={styles.reserveText} dangerouslySetInnerHTML={{ __html: reserveText }} />
              <div className={styles.arrowWrapper}>
                <svg className={styles.arrowIcon} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H98M98 5L94 1M98 5L94 9" stroke="#481c22" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={styles.thumbnails}>
              {images.map((imgSrc, idx) => (
                <div key={idx} className={styles.thumbnailWrapper} onClick={() => setSelectedIndex(idx)}>
                  <Image src={imgSrc} alt={`${title} image ${idx + 1}`} fill className={styles.thumbnailImage} />
                </div>
              ))}
            </div>
            <div className={styles.galleryControls}>
              <div className={styles.controlButton}>
                <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.controlButton}>
                <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                  <path d="M5 12H19M19 12L12 19M19 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelectedIndex(null)}>
          <button className={styles.closeButton} onClick={() => setSelectedIndex(null)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button className={styles.modalNavLeft} onClick={handlePrev}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button className={styles.modalNavRight} onClick={handleNext}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={images[selectedIndex]} alt="Enlarged view" fill className={styles.modalImage} priority />
          </div>
        </div>
      )}
    </>
  );
}
