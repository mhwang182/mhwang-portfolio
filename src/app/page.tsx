import HeroSection from "./Components/Sections/HeroSection";
import AboutMeSection from "./Components/Sections/AboutMeSection";
import ProjectsSection from "./Components/Sections/ProjectsSection";
import ContactSection from "./Components/Sections/ContactSection";
import Footer from "./Components/Sections/FooterSection";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
