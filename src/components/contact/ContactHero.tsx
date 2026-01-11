import { Mail, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm always open to discussing product leadership roles, interesting projects, 
            or opportunities to drive meaningful impact. Whether you're a founder, hiring 
            manager, or fellow PM—I'd love to hear from you.
          </p>

          <div className="inline-flex items-center gap-2 text-foreground">
            <Mail size={20} className="text-primary" />
            <a href="mailto:mansi4cl@gmail.com" className="hover:text-primary transition-colors">
              mansi4cl@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
