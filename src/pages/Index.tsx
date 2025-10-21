import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksServiceSection from '@/components/HowItWorksServiceSection';
import LatestDealsSection from '@/components/LatestDealsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksServiceSection />
      <LatestDealsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
