"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./LandscapeSection.module.css";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

const landscapeMedia: MediaItem[] = [
  {
    type: "image",
    src: "/assets/fort-image.png",
    alt: "Jeevad Fort hilltop panorama",
  },
  {
    type: "image",
    src: "/assets/fort-image-2.png",
    alt: "River, forest and mountain landscape",
  },
  {
    type: "image",
    src: "/assets/dinner-image.png",
    alt: "Evening bastions overlooking the wilderness",
  },
  {
    type: "image",
    src: "/assets/begnning.png",
    alt: "Rural village and historic estate landscape",
  },
  {
    type: "image",
    src: "/assets/story.png",
    alt: "Architecture meeting natural boundaries",
  },
  {
    type: "image",
    src: "/assets/making.png",
    alt: "Local materials and masonry continuity",
  },
];

export default function LandscapeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, landscapeMedia.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.topDecorative}>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
        <span className={styles.topTitle}>THE LANDSCAPE</span>
        <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>WHERE THE FORT MEETS THE WILD</h2>
        <div className={styles.divider}></div>
        <h3 className={styles.subtitle}>Three Sides of River. One Side of Village. Forest and Mountains Beyond.</h3>
        <p className={styles.paragraph}>
          Jeevad Fort commands an exceptional hilltop topography where architecture directly meets natural boundaries:
        </p>
        <ul className={styles.bulletList}>
          <li><span className={styles.bulletBold}>Seasonal Jeevad River:</span> Wraps the fort on three sides, creating a striking natural moat and dramatic seasonal vistas.</li>
          <li><span className={styles.bulletBold}>The Living Village:</span> Borders the fourth side, offering authentic views into everyday rural life, vernacular stone homes, and community rhythms.</li>
          <li><span className={styles.bulletBold}>Forest &amp; Mountain Horizons:</span> Surrounds the valley, extending into natural woodlands and ridgelines.</li>
          <li><span className={styles.bulletBold}>Agricultural Riverbed:</span> Working farmland and rural open spaces adding layered pastoral character to the destination.</li>
        </ul>
      </div>

      {/* Media Carousel */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          {/* Left Nav Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            aria-label="Previous media"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Nav Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            aria-label="Next media"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Viewport */}
          <div
            className={styles.carouselViewport}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {landscapeMedia.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.slideItem}
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <div
                    className={styles.mediaCard}
                    onClick={() => setSelectedMedia(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedMedia(idx);
                    }}
                  >
                    {item.type === "video" ? (
                      <div className={styles.videoWrapper}>
                        <video
                          src={item.src}
                          poster={item.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className={styles.mediaContent}
                        />
                        <div className={styles.videoIconBadge}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.imageWrapper}>
                        <Image
                          src={item.src}
                          alt={item.alt || `Media ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={styles.mediaContent}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators / Dots */}
        <div className={styles.carouselIndicators}>
          {landscapeMedia.slice(0, maxIndex + 1).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`${styles.indicatorDot} ${currentIndex === dotIdx ? styles.indicatorDotActive : ""}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMedia(null)}>
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={() => setSelectedMedia(null)}
            aria-label="Close enlarged media"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button
            type="button"
            className={styles.modalNavPrev}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia((prev) => (prev! <= 0 ? landscapeMedia.length - 1 : prev! - 1));
            }}
            aria-label="Previous media"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            type="button"
            className={styles.modalNavNext}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia((prev) => (prev! >= landscapeMedia.length - 1 ? 0 : prev! + 1));
            }}
            aria-label="Next media"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {landscapeMedia[selectedMedia].type === "video" ? (
              <video
                src={landscapeMedia[selectedMedia].src}
                controls
                autoPlay
                playsInline
                className={styles.modalVideo}
              />
            ) : (
              <div className={styles.modalImageWrapper}>
                <Image
                  src={landscapeMedia[selectedMedia].src}
                  alt={landscapeMedia[selectedMedia].alt || "Enlarged media"}
                  fill
                  className={styles.modalImage}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
