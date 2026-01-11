import { Brain, Cpu, Workflow, Sparkles } from 'lucide-react';

const AIHubHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Brain size={16} />
            <span>AI Hub</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Through a PM Lens
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Exploring AI-driven product concepts, workflows, tools, and experiments from a product 
            management perspective. How I think about AI integration, evaluate models, and build 
            AI-first features.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <Cpu className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">AI Products</h3>
              <p className="text-sm text-muted-foreground">
                Real-world AI implementations I have shipped and lessons learned in production.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <Workflow className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">PM Workflows</h3>
              <p className="text-sm text-muted-foreground">
                AI-enhanced product management processes—research, specs, analytics, and more.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <Sparkles className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Experiments</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the frontier of AI-powered product experiences and what is next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHubHero;
