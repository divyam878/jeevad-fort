"use client";
import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import SideMenu from "@/components/home/SideMenu";
import PursuitsHeroSection from "@/components/pursuits/PursuitsHeroSection";
import DiscoverSection from "@/components/pursuits/DiscoverSection";
import PillarsSection from "@/components/pursuits/PillarsSection";
import CuratedExperienceSection from "@/components/pursuits/CuratedExperienceSection";
import WildlifeSection from "@/components/pursuits/WildlifeSection";
import ItinerarySection from "@/components/pursuits/ItinerarySection";
import styles from "./Pursuits.module.css";

export default function PursuitsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} variant="dark" />
        
        <PursuitsHeroSection />
        <DiscoverSection />
        <PillarsSection />
        
        <CuratedExperienceSection 
          isFirst={true}
          number="1."
          title="Village Walk"
          subtitle="Walk Into Rural Rajasthan"
          description="Explore the settlement surrounding Jeevad Fort and experience the everyday rhythm of rural Rajasthan. Discover traditional vernacular homes, village pathways, local agricultural practices, and the people who form the living community around the fort walls."
          highlights="Walking, Culture, Local Life, Photography."
          imgSrc="/assets/making.png"
        />
        
        <CuratedExperienceSection 
          number="2."
          title="High Tea in the Jungle"
          subtitle="Tea Among the Trees"
          description="Leave the stone bastions behind and venture into the surrounding forest for an intimate open-air high tea. Surrounded by ancient trees, birdsong, and untouched open spaces, guests can slow down and enjoy an unhurried afternoon far from conventional tourist circuits."
          highlights="Nature, Relaxation, Photography, Afternoon."
          imgSrc="/assets/story.png"
        />

        <CuratedExperienceSection 
          number="3."
          title="Local Farm Visit"
          subtitle="From the Farm to the Table"
          description="Explore the active agricultural land and fertile riverbed fields surrounding Jeevad. Discover the generational role farming continues to play in everyday local life while connecting directly with the growers."
          highlights="Local Agriculture, Seasonal Crops, Riverbed Landscapes."
          imgSrc="/assets/begnning.png"
        />

        <CuratedExperienceSection 
          number="4."
          title="Traditional Pottery & Crafts"
          subtitle="Handcrafted Traditions"
          description="Engage with regional artisans through hands-on clay-pot-making sessions using traditional wheels. Learn the techniques passed down through generations that continue to supply village homes with functional pottery."
          highlights="Clay Pottery, Local Craftsmanship, Hands-on Workshop."
          imgSrc="/assets/making.png"
        />

        <CuratedExperienceSection 
          number="5."
          title="Regional Cooking Sessions"
          subtitle="Culinary Traditions of Batoda"
          description="Join small, hands-on cooking sessions centered around local food traditions, indigenous wood-fire preparations, and seasonal recipes passed down through regional households."
          highlights="Local Ingredients, Traditional Recipes, Interactive Cooking."
          imgSrc="/assets/story.png"
        />

        <WildlifeSection />
        <ItinerarySection />

      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
