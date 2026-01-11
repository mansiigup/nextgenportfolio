import { ArrowRight, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Sparkles size={16} />
            <span>4.5+ Years in Product Leadership</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Mansi Gupta
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Senior Product Manager crafting impactful products at the intersection of{' '}
            <span className="text-foreground font-medium">UX</span>,{' '}
            <span className="text-foreground font-medium">Growth</span>,{' '}
            <span className="text-foreground font-medium">Execution</span> & {' '}
            <span className="text-foreground font-medium">AI</span>
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building 0→1 products that scale. Driving global expansion and AI-powered innovation for B2B & B2C SaaS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              View Case Studies
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/mansigupta4cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:mansi4cl@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
