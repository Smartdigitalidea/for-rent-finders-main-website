
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NeighborhoodsSection from '@/components/NeighborhoodsSection';
import LatestDealsSection from '@/components/LatestDealsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <NeighborhoodsSection />
      <LatestDealsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
