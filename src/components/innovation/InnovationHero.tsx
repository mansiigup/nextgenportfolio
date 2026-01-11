import { Lightbulb, FlaskConical, Puzzle } from 'lucide-react';

const InnovationHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Lightbulb size={16} />
            <span>Innovation Space</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Ideas Take Shape
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            A collection of experimental projects, product ideas, learnings, and side initiatives 
            that showcase my approach to problem-solving beyond the day job. This is where curiosity 
            meets execution.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <FlaskConical className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Experiments</h3>
              <p className="text-sm text-muted-foreground">
                Quick prototypes and proof-of-concepts testing new ideas before committing resources.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <Puzzle className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Side Projects</h3>
              <p className="text-sm text-muted-foreground">
                Passion projects that solve real problems I encounter in daily life and work.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <Lightbulb className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Product Ideas</h3>
              <p className="text-sm text-muted-foreground">
                Concepts and frameworks waiting to be built—from problems observed in the wild.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;
