import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenMenu: () => void;
  variant?: "light" | "dark";
}

export default function Navbar({ onOpenMenu, variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";

  return (
    <nav className={styles.navbar}>
      {/* Empty left side to balance right side */}
      <div className={styles.spacer}></div>

      {/* Logo */}
      <div className={styles.logoContainer}>
         <Link href="/">
           <Image 
             src={isDark ? "/assets/jeevad-logo-red.png" : "/assets/jeevad-logo-white.png"} 
             alt="Jeevad Fort Logo" 
             width={90} 
             height={45} 
             className={`${styles.logo} ${isDark ? styles.logoDark : ""}`} 
           />
         </Link>
      </div>
      
      {/* Right side nav items */}
      <div className={styles.navItems}>
         <Link href="/reserve">
           <button className={`${styles.reserveBtn} ${isDark ? styles.textDark : ""}`}>
             RESERVE
           </button>
         </Link>
         <button onClick={onOpenMenu} className={styles.menuBtn}>
           <span className={`${styles.menuLine1} ${isDark ? styles.bgDark : ""}`}></span>
           <span className={`${styles.menuLine2} ${isDark ? styles.bgDark : ""}`}></span>
           <span className={`${styles.menuLine3} ${isDark ? styles.bgDark : ""}`}></span>
         </button>
      </div>
    </nav>
  );
}
