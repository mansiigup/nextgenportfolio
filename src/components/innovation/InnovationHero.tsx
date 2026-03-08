import { Lightbulb, FlaskConical, Puzzle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cards = [
  {
    icon: FlaskConical,
    title: 'Experiments',
    description: 'Quick prototypes and proof-of-concepts testing new ideas before committing resources.',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Puzzle,
    title: 'Side Projects',
    description: 'Passion projects that solve real problems I encounter in daily life and work.',
    gradient: 'from-secondary/20 to-secondary/5',
  },
  {
    icon: Lightbulb,
    title: 'Product Ideas',
    description: 'Concepts and frameworks waiting to be built—from problems observed in the wild.',
    gradient: 'from-destructive/20 to-destructive/5',
  },
];

const InnovationHero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Animated decorative orbs */}
      <div className="absolute top-16 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl animate-float-slower" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Lightbulb size={16} className="animate-pulse" />
            <span>Innovation Space</span>
          </div>

          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where Ideas{' '}
            <span className="text-gradient-slack">Take Shape</span>
          </h1>

          <p
            className={`text-muted-foreground text-lg max-w-2xl mb-14 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A collection of experimental projects, product ideas, learnings, and side initiatives
            that showcase my approach to problem-solving beyond the day job. This is where curiosity
            meets execution.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`group relative p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg animate-glow-pulse ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Gradient top accent */}
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;
