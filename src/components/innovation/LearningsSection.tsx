import { BookOpen, Quote } from 'lucide-react';

const learnings = [
  {
    category: 'Product Strategy',
    insight: 'The best products are opinionated. Trying to please everyone leads to mediocrity.',
    source: 'Observations from Linear, Notion, and Superhuman',
  },
  {
    category: 'AI Integration',
    insight: 'AI features should augment human judgment, not replace it. The best AI products keep humans in the loop.',
    source: 'Experience with EdTech AI implementation',
  },
  {
    category: 'Growth',
    insight: 'B2B growth is relationship-driven. Product-led growth works, but enterprise deals still need human touch.',
    source: 'Scaling to 10K+ schools',
  },
  {
    category: 'Leadership',
    insight: 'The best PMs make everyone around them better. My job is to create clarity, not solutions.',
    source: 'Managing cross-functional teams of 9+',
  },
];

const LearningsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Learnings
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hard-Won Insights
          </h2>
          <p className="text-muted-foreground text-lg">
            Principles and patterns I have learned through building, failing, and iterating.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {learnings.map((learning, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {learning.category}
                </span>
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                <p className="text-foreground font-medium pl-5 italic">
                  "{learning.insight}"
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Source: {learning.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;
