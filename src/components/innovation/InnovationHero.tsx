import { Lightbulb, FlaskConical, Puzzle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const cards = [
  {
    icon: FlaskConical,
    title: 'Experiments',
    description: 'Quick prototypes and proof-of-concepts testing new ideas before committing resources.',
    stat: '4+',
    statLabel: 'Live Projects',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Puzzle,
    title: 'Side Projects',
    description: 'Passion projects that solve real problems I encounter in daily life and work.',
    stat: '3',
    statLabel: 'Industries',
    gradient: 'from-secondary/20 to-secondary/5',
  },
  {
    icon: Lightbulb,
    title: 'Product Ideas',
    description: 'Concepts and frameworks waiting to be built—from problems observed in the wild.',
    stat: '10',
    statLabel: 'AI Ideas',
    gradient: 'from-destructive/20 to-destructive/5',
  },
];

const words = ['Take Shape', 'Come Alive', 'Find Purpose', 'Become Real'];

const InnovationHero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const isMobile = useIsMobile();

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

  const handleCardInteraction = (index: number) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Animated decorative orbs */}
      <div className="absolute top-16 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/[0.03] rounded-full blur-3xl animate-float-slower" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-slow"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Innovation Space</span>
          </div>

          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where Ideas{' '}
            <span
              className={`text-gradient-slack inline-block transition-all duration-400 ${
                isWordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {words[wordIndex]}
            </span>
          </h1>

          <p
            className={`text-muted-foreground text-base md:text-lg max-w-2xl mb-14 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A collection of experimental projects, product ideas, learnings, and side initiatives
            that showcase my approach to problem-solving beyond the day job. This is where curiosity
            meets execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                onClick={() => handleCardInteraction(index)}
                onMouseEnter={() => !isMobile && setFlippedIndex(index)}
                onMouseLeave={() => !isMobile && setFlippedIndex(null)}
              >
                <div
                  className="relative w-full transition-transform duration-500 min-h-[200px]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${card.gradient} opacity-60`} />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                    <p className="text-xs text-primary/60 mt-3 flex items-center gap-1">
                      <Sparkles size={12} /> {isMobile ? 'Tap to reveal' : 'Hover to reveal'}
                    </p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 p-6 bg-gradient-to-br from-primary/10 to-card/90 backdrop-blur-sm rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
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

export default InnovationHero;
