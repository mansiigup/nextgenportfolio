import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeHero from '@/components/home/HomeHero';
import FeaturedHighlights from '@/components/home/FeaturedHighlights';
import ThoughtLeadership from '@/components/home/ThoughtLeadership';
import FeaturedCaseStudies from '@/components/home/FeaturedCaseStudies';
import InnovationPreview from '@/components/home/InnovationPreview';
import AIHubPreview from '@/components/home/AIHubPreview';
import HomeCTA from '@/components/home/HomeCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomeHero />
      <FeaturedHighlights />
      <ThoughtLeadership />
      <FeaturedCaseStudies />
      <InnovationPreview />
      <AIHubPreview />
      <HomeCTA />
      <Footer />
    </div>
  );
};

export default Home;
