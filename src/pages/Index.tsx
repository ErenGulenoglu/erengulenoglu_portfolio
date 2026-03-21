import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <CaseStudiesGrid />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
