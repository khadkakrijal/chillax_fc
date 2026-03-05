import ClubShowcaseSection from "@/Components/ClubShowcaseSection";
import CoverPage from "@/Components/HeroSection/Cover";
import GallerySlider from "@/Components/HeroSection/gallerySectionSlider";
import TeamSection from "@/Components/HeroSection/Teamsection";
import JoinTeamCTA from "@/Components/JoinTeamCTA";
import VoicesSection from "@/Components/voiceSection";
import { getGalleryImages } from "@/lib/getGalleryImages";

export default function Home() {
  const images = getGalleryImages();

  const memories = images.map((src) => ({ src }));
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <CoverPage />
      <GallerySlider images={images} />
      <TeamSection />
      <ClubShowcaseSection memories={memories} />
      <JoinTeamCTA />
      <VoicesSection/>
    </div>
  );
}
