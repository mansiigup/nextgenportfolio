import { Lightbulb, ArrowRight, FlaskConical, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InnovationPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground font-medium text-sm mb-4">
                <Lightbulb size={16} />
                <span>Innovation Space</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Where Ideas Take Shape
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                A collection of experimental projects, product ideas, learnings, and side initiatives that showcase my approach to problem-solving beyond the day job.
              </p>
              <Link
                to="/innovation-space"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Innovation Space
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-xl border border-border">
                <FlaskConical className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Experiments</h3>
                <p className="text-sm text-muted-foreground">
                  Quick prototypes and proof-of-concepts testing new ideas
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Puzzle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Side Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Passion projects that solve real problems I encounter
                </p>
              </div>
              <div className="col-span-2 p-6 bg-card rounded-xl border border-border">
                <Lightbulb className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Product Ideas</h3>
                <p className="text-sm text-muted-foreground">
                  Concepts and frameworks waiting to be built—from problems I have observed in the wild
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationPreview;
