import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIHubHero from '@/components/ai-hub/AIHubHero';
import AIProducts from '@/components/ai-hub/AIProducts';
import PMWorkflows from '@/components/ai-hub/PMWorkflows';
import AIExperiments from '@/components/ai-hub/AIExperiments';
import AIResources from '@/components/ai-hub/AIResources';

const AIHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AIHubHero />
      <AIProducts />
      <PMWorkflows />
      <AIExperiments />
      <AIResources />
      <Footer />
    </div>
  );
};

export default AIHub;
