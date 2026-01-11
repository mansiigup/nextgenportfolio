import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm always open to discussing product leadership roles, interesting projects, 
            or opportunities to drive meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/mansigupta4cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:nextgeninnovationlab@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-background transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              nextgeninnovationlab@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Based in India • Open to remote & hybrid opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
