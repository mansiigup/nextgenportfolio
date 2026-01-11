import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InnovationHero from '@/components/innovation/InnovationHero';
import ExperimentalProjects from '@/components/innovation/ExperimentalProjects';
import ProductIdeas from '@/components/innovation/ProductIdeas';
import LearningsSection from '@/components/innovation/LearningsSection';

const InnovationSpace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <InnovationHero />
      <ExperimentalProjects />
      <ProductIdeas />
      <LearningsSection />
      <Footer />
    </div>
  );
};

export default InnovationSpace;
