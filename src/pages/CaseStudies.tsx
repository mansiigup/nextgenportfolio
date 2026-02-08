import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImpactStudiesHero from '@/components/case-studies/ImpactStudiesHero';
import ProfessionalProducts from '@/components/case-studies/ProfessionalProducts';
import ProductTeardowns from '@/components/case-studies/ProductTeardowns';
import Certifications from '@/components/case-studies/Certifications';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ImpactStudiesHero />
      <ProfessionalProducts />
      <ProductTeardowns />
      <Certifications />
      <Footer />
    </div>
  );
};

export default CaseStudies;
