import { Brain, Cpu, Workflow, Sparkles, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import { useState, useEffect } from 'react';

const cards = [
  {
    icon: Cpu,
    title: 'AI Products',
    description: 'Real-world AI implementations I have shipped and lessons learned in production.',
    gradient: 'from-primary/20 to-primary/5',
    stat: '4',
    statLabel: 'Shipped',
  },
  {
    icon: Workflow,
    title: 'PM Workflows',
    description: 'AI-enhanced product management processes—research, specs, analytics, and more.',
    gradient: 'from-secondary/20 to-secondary/5',
    stat: '4',
    statLabel: 'Workflows',
  },
  {
    icon: Sparkles,
    title: 'Experiments',
    description: 'Exploring the frontier of AI-powered product experiences and what is next.',
    gradient: 'from-destructive/20 to-destructive/5',
    stat: '3',
    statLabel: 'Active',
  },
];

const words = ['Builds', 'Thinks', 'Ships', 'Scales'];

const AIHubHero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { playSound } = useSound();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsWordVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Animated orbs with parallax */}
      <div
        className="absolute top-16 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slower"
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl animate-float-slower" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-slow"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Brain size={16} className="animate-pulse" />
            <span>AI Hub</span>
          </div>

          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            AI Through a PM Lens —{' '}
            <span
              className={`text-gradient-slack inline-block transition-all duration-400 ${
                isWordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {words[wordIndex]}
            </span>
          </h1>

          <p
            className={`text-muted-foreground text-lg max-w-2xl mb-14 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Exploring AI-driven product concepts, workflows, tools, and experiments from a product
            management perspective. How I think about AI integration, evaluate models, and build
            AI-first features.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`group relative cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${300 + index * 150}ms`,
                  animationFillMode: 'forwards',
                  perspective: '1000px',
                }}
                onMouseEnter={() => { setHoveredCard(index); playSound('hover'); }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative w-full transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${card.gradient} opacity-60`} />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                    <p className="text-xs text-primary/60 mt-3 flex items-center gap-1">
                      <Zap size={12} /> Hover to reveal
                    </p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 p-6 bg-gradient-to-br from-primary/10 to-card/90 backdrop-blur-sm rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${card.gradient}`} />
                    <span className="text-4xl md:text-5xl font-bold text-primary mb-1">{card.stat}</span>
                    <span className="text-sm font-medium text-muted-foreground">{card.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHubHero;
