import Image from "next/image";
import styles from "./ConnectivitySection.module.css";

const routes = [
  {
    title: "From Ranthambore National Park",
    details: [
      { label: "Distance", text: "Approximately 45 km" },
      { label: "Driving Time", text: "Approximately 50 minutes (subject to road and traffic conditions)" },
      { label: "Route", text: "Connected via state highway routes directly toward the Jaipur corridor." }
    ],
    mapLink: "https://www.google.com/maps/dir/Ranthambore+National+Park/Sawai+Madhopur,+Rajasthan/"
  },
  {
    title: "From New Delhi",
    details: [
      { label: "Distance", text: "Approximately 315 km" },
      { label: "Driving Time", text: "4.5 to 5 hours" },
      { label: "Route Overview", text: "Primary transit via Delhi-Mumbai Expressway (NE-4), continuing via NH 148 / Lalsot Road to NH 23." }
    ],
    mapLink: "https://www.google.com/maps/dir/New+Delhi/Sawai+Madhopur,+Rajasthan/"
  },
  {
    title: "From Jaipur",
    details: [
      { label: "Route Overview", text: "Direct access via National Highway and State Highway links, connecting the Pink City to the quiet landscapes of Sawai Madhopur district." }
    ],
    mapLink: "https://www.google.com/maps/dir/Jaipur,+Rajasthan/Sawai+Madhopur,+Rajasthan/"
  }
];

export default function ConnectivitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.scrollWrapper}>
        <div className={styles.topDecorative}>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.topBorder} />
          <span className={styles.topTitle}>CONNECTIVITY & ACCESS</span>
          <Image src="/assets/flower-border.svg" alt="border" width={200} height={20} className={styles.bottomBorder} />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.headerTitle}>GETTING TO JEEVAD FORT</h2>
          <div className={styles.divider}></div>
          <h3 className={styles.headerSubtitle}>Driving Routes & Distances</h3>
          <p className={styles.paragraph}>
            Jeevad forms a natural stop along the classic heritage and wildlife corridor, creating a seamless journey from city culture to living heritage and untamed wilderness:
          </p>
        </div>

        <div className={styles.routesContainer}>
          {routes.map((route, idx) => (
            <div key={idx} className={styles.routeCard}>
              <div className={styles.routeHeader}>
                <h4 className={styles.routeTitle}>{route.title}</h4>
              </div>
              <div className={styles.routeBody}>
                <div className={styles.routeDetails}>
                  <ul className={styles.bulletList}>
                    {route.details.map((detail, i) => (
                      <li key={i}>
                        <span className={styles.bulletBold}>{detail.label}:</span> {detail.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.mapContainer}>
                  <a 
                    href={route.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mapLinkBox}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.mapIcon}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className={styles.mapText}>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
