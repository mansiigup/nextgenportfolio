import Navigation from '@/components/Navigation';
import HomeHero from '@/components/home/HomeHero';
import LatestHighlights from '@/components/home/LatestHighlights';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomeHero />
      <LatestHighlights />
      <Footer />
    </div>
  );
};

export default Index;
