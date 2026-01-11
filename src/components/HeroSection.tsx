import { ArrowDown, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Senior Product Manager
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Mansi Gupta
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building 0→1 products that scale. Driving <span className="text-foreground font-medium">₹40M+ revenue</span> and{' '}
            <span className="text-foreground font-medium">global expansion</span> through AI-powered, user-centric innovation.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/mansigupta4cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:nextgeninnovationlab@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown size={20} />
            <span className="text-sm">Explore my work</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
