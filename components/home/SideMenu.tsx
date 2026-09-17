"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideMenu.module.css";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();

  return (
    <div className={`${styles.container} ${isOpen ? styles.containerOpen : styles.containerClosed}`}>
      <div className={styles.backdrop} onClick={onClose}></div>
      
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        {/* Close button */}
        <div className={styles.closeContainer}>
          <button onClick={onClose} className={styles.closeBtn}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={styles.menuItems}>
          <Link href="/fort" className={pathname === "/fort" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>The Fort</Link>
          <Link href="/sanctuary" className={pathname === "/sanctuary" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>Sanctuary</Link>
          <Link href="/journey" className={pathname === "/journey" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>Journey</Link>
          <Link href="/pursuits" className={pathname === "/pursuits" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>Pursuits</Link>
          <Link href="/dining" className={pathname === "/dining" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>Dining</Link>
          <Link href="/visuals" className={pathname === "/visuals" ? styles.menuLinkActive : styles.menuLink} onClick={onClose}>Visuals</Link>
        </div>

        {/* Reserve Button at bottom */}
        <div className={styles.reserveContainer}>
          <Link href="/reserve" onClick={onClose} className="w-full block">
            <button className={styles.reserveBtn}>
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
