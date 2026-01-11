import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing product leadership roles, interesting projects, 
            or opportunities to drive meaningful impact. Whether you're a founder, hiring manager, 
            or fellow PM—let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.linkedin.com/in/mansigupta4cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Based in India • Open to remote & hybrid opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
