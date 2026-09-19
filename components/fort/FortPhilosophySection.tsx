"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FortPhilosophySection.module.css";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/assets/making.png",
    alt: "Conservation craftsmanship at Jeevad Fort",
  },
  {
    type: "image",
    src: "/assets/begnning.png",
    alt: "Batoda Thikana heritage",
  },
  {
    type: "image",
    src: "/assets/dinner-image.png",
    alt: "Evening dining at the fort bastions",
  },
  {
    type: "image",
    src: "/assets/fort-image.png",
    alt: "Jeevad Fort ramparts and panoramic landscape",
  },
  {
    type: "image",
    src: "/assets/story.png",
    alt: "Historic fort architecture and masonry",
  },
  {
    type: "image",
    src: "/assets/fort-image-2.png",
    alt: "Surrounding wilderness and river valley",
  },
];

export default function FortPhilosophySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive visible count
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

  const maxIndex = Math.max(0, mediaItems.length - visibleCount);

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
      <div className={styles.mainWrapper}>
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

        {/* Pure Image & Video Carousel */}
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
                {mediaItems.map((item, idx) => (
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
            {mediaItems.slice(0, maxIndex + 1).map((_, dotIdx) => (
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

        {/* CTA Container */}
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

            <Link href="/reserve" className={styles.ctaBlock}>
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
            </Link>
          </div>
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
              setSelectedMedia((prev) => (prev! <= 0 ? mediaItems.length - 1 : prev! - 1));
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
              setSelectedMedia((prev) => (prev! >= mediaItems.length - 1 ? 0 : prev! + 1));
            }}
            aria-label="Next media"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {mediaItems[selectedMedia].type === "video" ? (
              <video
                src={mediaItems[selectedMedia].src}
                controls
                autoPlay
                playsInline
                className={styles.modalVideo}
              />
            ) : (
              <div className={styles.modalImageWrapper}>
                <Image
                  src={mediaItems[selectedMedia].src}
                  alt={mediaItems[selectedMedia].alt || "Enlarged media"}
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
