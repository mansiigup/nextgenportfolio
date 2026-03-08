import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, BarChart3, Target, TrendingUp, Brain } from 'lucide-react';

import { useState, useEffect } from 'react';

const roles = [
  'Product Lead',
  'AI Innovator',
  'Growth Strategist',
  'Data Enthusiast',
  'Problem Solver',
];

const HomeHero = () => {
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    { icon: BarChart3, label: 'Product Intelligence', color: 'text-secondary', hoverBg: 'hover:bg-secondary/10' },
    { icon: Target, label: 'Product-Led Growth', color: 'text-success', hoverBg: 'hover:bg-success/10' },
    { icon: TrendingUp, label: 'Strategy & Data-Driven', color: 'text-warning', hoverBg: 'hover:bg-warning/10' },
    { icon: Brain, label: 'AI Innovation', color: 'text-destructive', hoverBg: 'hover:bg-destructive/10' },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slower"
          style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-foreground animate-fade-up shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
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
              A problem solver, driving product-led growth with more than 5 years of experience in building 0 to 1 products, leveraging AI, data-driven insights, and user-centric innovation. Leading cross-functional teams to solve a problem by developing scalable, intelligent solutions that enhance engagement, optimize decision-making, and drive market expansion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Read More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-accent hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://www.linkedin.com/in/mansi-gupta-2201b7154/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="mailto:nextgeninnovationlab@gmail.com"
                onMouseEnter={() => playSound('hover')}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right content - Visual card */}
          <div className="hidden lg:block animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div
              className="relative"
              style={{
                transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border hover:shadow-2xl transition-shadow duration-500">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => playSound('hover')}
                      className={`bg-background rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${item.hoverBg} group`}
                    >
                      <item.icon size={32} className={`mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent rounded-xl">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-bold text-foreground">5 years</span> building products that{' '}
                    <span className="font-bold text-primary">scale</span> and{' '}
                    <span className="font-bold text-success">impact millions</span>
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float-slow">
                B2B & B2C SaaS
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float-slower">
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
