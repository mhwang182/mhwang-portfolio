import HeroSection from "./Components/HeroSection";
import AboutMeSection from "./Components/AboutMeSection";
import ProjectsSection from "./Components/ProjectsSection";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
    </main>
  );
}
