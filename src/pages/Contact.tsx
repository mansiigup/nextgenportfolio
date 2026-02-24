import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import SocialLinks from '@/components/contact/SocialLinks';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Contact;
