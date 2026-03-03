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


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <SearchBar />
      <TourPackages />
      <DesiredVacationCountry />
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
