import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import ImpactSection from '@/components/about/ImpactSection';
import SkillsExperience from '@/components/about/SkillsExperience';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import HowIWork from '@/components/about/HowIWork';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <ImpactSection />
      <SkillsExperience />
      <HowIWork />
      <ExperienceTimeline />
      <Footer />
    </div>
  );
};

export default About;
