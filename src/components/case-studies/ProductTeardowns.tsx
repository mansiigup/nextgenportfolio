import { ExternalLink, Search } from 'lucide-react';

const teardowns = [
  {
    product: 'Notion',
    category: 'Productivity',
    insight: 'How Notion turned complexity into competitive advantage through progressive disclosure and composable building blocks.',
    focus: ['Information Architecture', 'Flexibility vs Simplicity', 'Power User Features'],
  },
  {
    product: 'Duolingo',
    category: 'EdTech',
    insight: 'Gamification done right—how Duolingo maintains long-term engagement through streaks, leaderboards, and bite-sized lessons.',
    focus: ['Habit Formation', 'Gamification', 'Personalization'],
  },
  {
    product: 'Linear',
    category: 'Developer Tools',
    insight: 'Opinionated product design that prioritizes speed and keyboard-first workflows for engineering teams.',
    focus: ['Performance', 'Opinionated Design', 'Developer Experience'],
  },
  {
    product: 'Figma',
    category: 'Design Tools',
    insight: 'Real-time collaboration as a core differentiator—how Figma won by making design multiplayer.',
    focus: ['Collaboration', 'Web-Native', 'Ecosystem Building'],
  },
];

const ProductTeardowns = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Product Teardowns
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Teardowns
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dives into products I admire—understanding what makes them work and extracting lessons for my own practice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {teardowns.map((teardown) => (
            <div
              key={teardown.product}
              className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{teardown.product}</h3>
                    <p className="text-xs text-muted-foreground">{teardown.category}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-sm text-muted-foreground mb-4">{teardown.insight}</p>

              <div className="flex flex-wrap gap-2">
                {teardown.focus.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeardowns;
