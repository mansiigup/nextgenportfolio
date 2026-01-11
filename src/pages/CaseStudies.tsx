import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import DetailedCaseStudies from '@/components/case-studies/DetailedCaseStudies';
import ProductTeardowns from '@/components/case-studies/ProductTeardowns';
import Certifications from '@/components/case-studies/Certifications';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CaseStudiesHero />
      <DetailedCaseStudies />
      <ProductTeardowns />
      <Certifications />
      <Footer />
    </div>
  );
};

export default CaseStudies;
