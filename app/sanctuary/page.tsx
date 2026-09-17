"use client";
import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import SideMenu from "@/components/home/SideMenu";
import SanctuaryHeroSection from "@/components/sanctuary/SanctuaryHeroSection";
import SanctuaryIntroSection from "@/components/sanctuary/SanctuaryIntroSection";
import SanctuaryOverviewSection from "@/components/sanctuary/SanctuaryOverviewSection";
import RoomCategorySection from "@/components/sanctuary/RoomCategorySection";
import styles from "./Sanctuary.module.css";

export default function SanctuaryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mockImages = [
    "/assets/making.png",
    "/assets/begnning.png",
    "/assets/story.png"
  ];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />
        <SanctuaryHeroSection />
        <SanctuaryIntroSection />
        <SanctuaryOverviewSection />
        
        <RoomCategorySection 
          isFirst={true}
          categoryType="TWO HERITAGE SUITES"
          number="1."
          title="Dyodhi Mahal"
          description={[
            "Dyodhi Mahal derives its name from the historic Dyodhi, the inner gateway of the fort. The suites are located directly above this ceremonial portal, allowing guests to stay within one of the fort's most distinctive historic spaces.",
            "Stay above the historic gateway where the fort once controlled movement into its inner precincts. Today, Dyodhi Mahal offers an intimate heritage stay surrounded by centuries of architectural character."
          ]}
          features={[
            "Private Jacuzzi, high stone ceilings, inner courtyard and landscape views."
          ]}
          reserveText="RESERVE DYODHI<br/>SUITE"
          images={mockImages}
        />

        <RoomCategorySection 
          isFirst={false}
          categoryType="FOUR SWISS COTTAGES"
          number="2."
          title="Rani Mahal"
          description={[
            "Rani Mahal forms another tranquil quarter of the property. The area has been adapted to accommodate four Swiss cottages, creating a relaxed, nature-oriented stay within the historic fort environment.",
            "Designed for guests seeking seclusion, quietude, and an authentic connection with the outdoors."
          ]}
          features={[
            "Secluded courtyard location, independent cottage setting, direct garden/nature access."
          ]}
          reserveText="RESERVE SWISS<br/>COTTAGE"
          images={mockImages}
        />

        <RoomCategorySection 
          isFirst={false}
          categoryType="ONE FORT ROOM"
          number="3."
          title="The Deluxe Room"
          description={[
            "A comfortable, thoughtfully appointed accommodation option situated within the core fort complex. Crafted for travelers seeking classic fort living combined with contemporary comfort and authentic architectural detail."
          ]}
          features={[
            "Handcrafted stone detailing, direct proximity to central fort courtyards, personalized hospitality."
          ]}
          reserveText="RESERVE DELUXE<br/>ROOM"
          images={mockImages}
        />
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
