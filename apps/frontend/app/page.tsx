import { Footer } from "@/components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { HomeSections } from "../components/HomeSections";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HomeSections />
      <Footer />
    </main>
  );
}
