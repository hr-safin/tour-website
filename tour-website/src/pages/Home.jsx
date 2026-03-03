import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import TourPackages from "../components/TourPackages";
import DesiredVacationCountry from "../components/DesiredVacationCountry";
import UltimateTravelExperience from "../components/UltimateTravelExperience";
import PhilippinePackages from "../components/PhilippinePackages";
import MalaysiaPackages from "../components/MalaysiaPackages";
import WhyChooseSection from "../components/whychoosesection";
import DealsSection from "../components/DealsSection";
import BlogSection from "../components/BlogSection";
import StatsNewsletterFooter from "../components/StatsNewsletterFooter";
import FeaturedDestinations from "../components/FeaturedDestinations";
import AboutSection from "../components/AboutSection";
import { Parentheses } from "lucide-react";
import ParallaxHero from "../components/ParallaxHero";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      {/* <SearchBar /> */}
      <TourPackages />
      <FeaturedDestinations />
      <DesiredVacationCountry />
      <ParallaxHero />
      <UltimateTravelExperience />
      <PhilippinePackages />
      <MalaysiaPackages />
      <WhyChooseSection />
      <DealsSection />
      <BlogSection />
      <StatsNewsletterFooter />
    </div>
  );
}
