import React from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import MissionSection from "../components/home/MissionSection";
import PastEventsHighlight from "../components/home/PastEventsHighlight";
import MemoriesGallery from "../components/home/MemoriesGallery";
import WhyJoinSection from "../components/home/WhyJoinSection";
import TechStackSlider from "../components/home/TechStackSlider";
import ChallengesSection from "../components/home/ChallengesSection";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import CallToActionSection from "../components/home/CallToActionSection";
import PartnersSection from "../components/home/PartnersSection";
import FAQAccordion from "../components/home/FAQAccordion";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Carousel avec images */}
      <HeroCarousel />

      {/* Mission du club */}
      <MissionSection />

      {/* Événements passés */}
      <PastEventsHighlight />

      {/* Galerie de souvenirs */}
      <MemoriesGallery />

      {/* Pourquoi rejoindre */}
      <WhyJoinSection />

      {/* Défilement de logos */}
      <TechStackSlider />

      {/* Défis du club */}
      <ChallengesSection />

      {/* Témoignages */}
      <TestimonialsCarousel />

      {/* Call to Action */}
      <CallToActionSection />

      {/* Partenaires */}
      <PartnersSection />

      {/* FAQ */}
      <FAQAccordion />
    </div>
  );
};

export default HomePage;
