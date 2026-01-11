import { Brain, ArrowRight, Cpu, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIHubPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="p-6 bg-background rounded-xl border border-border">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">AI Products</h3>
                <p className="text-sm text-muted-foreground">
                  Real-world AI implementations in production
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <Workflow className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">PM Workflows</h3>
                <p className="text-sm text-muted-foreground">
                  AI-enhanced product management processes
                </p>
              </div>
              <div className="col-span-2 p-6 bg-background rounded-xl border border-border">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Concepts & Experiments</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring the frontier of AI-powered product experiences and what is next
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground font-medium text-sm mb-4">
                <Brain size={16} />
                <span>AI Hub</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Through a PM Lens
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Exploring AI-driven product concepts, workflows, tools, and experiments from a product management perspective. How I think about AI integration and what the future holds.
              </p>
              <Link
                to="/ai-hub"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explore AI Hub
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHubPreview;
