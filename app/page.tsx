import Navbar from "@/components/Navbar";
import ClubHero from "@/components/ClubHero";
import ClubAbout from "@/components/ClubAbout";
import TrainingPrograms from "@/components/TrainingPrograms";
import UpcomingMatches from "@/components/UpcomingMatches";
import FeaturedPlayers from "@/components/FeaturedPlayers";
import GalleryPreview from "@/components/GalleryPreview";
import LatestNews from "@/components/LatestNews";
import Sponsors from "@/components/Sponsors";
import ClubFooter from "@/components/ClubFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-white">
        <ClubHero />
        <ClubAbout />
        <TrainingPrograms />
        <UpcomingMatches />
        <FeaturedPlayers />
        <GalleryPreview />
        <LatestNews />
        <Sponsors />
      </main>
      <ClubFooter />
    </>
  );
}


