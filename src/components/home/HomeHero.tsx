import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, Zap, Target, TrendingUp, Brain } from 'lucide-react';

const HomeHero = () => {
  const highlights = [
    { icon: Zap, label: '0→1 Products', color: 'text-secondary' },
    { icon: Target, label: 'Product-Led Growth', color: 'text-success' },
    { icon: TrendingUp, label: 'Data-Driven', color: 'text-warning' },
    { icon: Brain, label: 'AI Innovation', color: 'text-destructive' },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground animate-fade-up">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
              Open for collaborations
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Hey, I'm{' '}
              <span className="text-gradient-slack">Mansi Gupta</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Product Lead | Innovate & Impact | Data & AI Enthusiast
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              A problem solver, driving product-led growth with more than 4.5+ years of experience in building 0 to 1 products, leveraging AI, data-driven insights, and user-centric innovation. Leading cross-functional teams to solve a problem by developing scalable, intelligent solutions that enhance engagement, optimize decision-making, and drive market expansion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-accent hover:border-primary transition-all"
              >
                <Mail size={18} />
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://www.linkedin.com/in/mansi-gupta-2201b7154/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="mailto:nextgeninnovationlab@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right content - Visual card */}
          <div className="hidden lg:block animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-6 text-center hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <item.icon size={32} className={`mx-auto mb-3 ${item.color}`} />
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent rounded-xl">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-bold text-foreground">4.5+ years</span> building products that{' '}
                    <span className="font-bold text-primary">scale</span> and{' '}
                    <span className="font-bold text-success">impact millions</span>
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
                B2B & B2C SaaS
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                Global Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;