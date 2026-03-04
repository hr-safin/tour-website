import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import TourPackages from "../components/TourPackages";
import DesiredVacationCountry from "../components/DesiredVacationCountry";
import UltimateTravelExperience from "../components/UltimateTravelExperience";
import PhilippinePackages from "../components/PopularTravelPackages";
import MalaysiaPackages from "../components/MalaysiaPackages";
import WhyChooseSection from "../components/whychoosesection";
import DealsSection from "../components/DealsSection";
import BlogSection from "../components/BlogSection";
import StatsNewsletterFooter from "../components/StatsNewsletterFooter";
import FeaturedDestinations from "../components/FeaturedDestinations";
import AboutSection from "../components/AboutSection";
import ParallaxHero from "../components/ParallaxHero";
import WhyTravelWithUs from "../components/WhyTravelWithUs";
import BestService from "../components/BestService";
import LastMinuteDeals from "../components/LastMinuteDeals";
import FAQ from "../components/faq";
import StatsSection from "../components/StatsSection";
import AboutMVV from "../components/AboutMVV";
// import { Parentheses } from "lucide-react";
// import ParallaxHero from "../components/ParallaxHero";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <AboutMVV />
      <WhyTravelWithUs />
      {/* <SearchBar /> */}
      <PhilippinePackages />
      <TourPackages />
      <FeaturedDestinations />
      {/* <BestService /> */}
      <ParallaxHero />
      <DesiredVacationCountry />
      <DealsSection />
      <LastMinuteDeals />
      <BlogSection />
      <FAQ />
      <StatsSection />
    </div>
  );
}
