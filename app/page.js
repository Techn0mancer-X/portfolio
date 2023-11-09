import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary text-accent  ">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <Footer/>
       
      </div>
    </main>
  );
}
