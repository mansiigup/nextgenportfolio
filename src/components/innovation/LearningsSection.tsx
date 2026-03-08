import { BookOpen, Quote, Shuffle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useMemo } from 'react';

const learnings = [
  {
    category: 'Product Strategy',
    insight: 'The best products are opinionated. Trying to please everyone leads to mediocrity.',
    source: 'Observations from Linear, Notion, and Superhuman',
    borderColor: 'border-l-primary',
    bgHover: 'hover:bg-primary/5',
  },
  {
    category: 'AI Integration',
    insight: 'AI features should augment human judgment, not replace it. The best AI products keep humans in the loop.',
    source: 'Experience with EdTech AI implementation',
    borderColor: 'border-l-secondary',
    bgHover: 'hover:bg-secondary/5',
  },
  {
    category: 'Growth',
    insight: 'B2B growth is relationship-driven. Product-led growth works, but enterprise deals still need human touch.',
    source: 'Scaling to 10K+ schools',
    borderColor: 'border-l-destructive',
    bgHover: 'hover:bg-destructive/5',
  },
  {
    category: 'Leadership',
    insight: 'The best PMs make everyone around them better. My job is to create clarity, not solutions.',
    source: 'Managing cross-functional teams of 9+',
    borderColor: 'border-l-warning',
    bgHover: 'hover:bg-warning/5',
  },
];

const categories = ['All', ...new Set(learnings.map((l) => l.category))];

const LearningsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0);

  const filteredLearnings = useMemo(() => {
    let items = activeCategory === 'All' ? learnings : learnings.filter((l) => l.category === activeCategory);
    if (isShuffled) {
      items = [...items].sort(() => Math.random() - 0.5);
    }
    return items;
  }, [activeCategory, isShuffled, shuffleKey]);

  const handleShuffle = () => {
    setIsShuffled(true);
    setShuffleKey((k) => k + 1);
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto mb-12">
          <p
            className={`text-primary font-medium mb-3 tracking-wide uppercase text-sm transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Learnings
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Hard-Won Insights
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Principles and patterns I have learned through building, failing, and iterating.
          </p>
        </div>

        {/* Category filter tabs + shuffle */}
        <div
          className={`max-w-4xl mx-auto flex flex-wrap items-center gap-2 mb-8 transition-all duration-600 delay-250 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setIsShuffled(false); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/80 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={handleShuffle}
            className="ml-auto p-2 rounded-xl border border-border bg-card/80 hover:bg-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300"
            aria-label="Shuffle insights"
          >
            <Shuffle size={16} />
          </button>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {filteredLearnings.map((learning, index) => (
            <div
              key={`${learning.category}-${shuffleKey}`}
              className={`group relative border-l-4 ${learning.borderColor} p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border ${learning.bgHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 120}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {learning.category}
                </span>
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300" />
                <p className="text-foreground font-medium pl-5 italic leading-relaxed">
                  "{learning.insight}"
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <p className="text-xs text-muted-foreground">
                  {learning.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;
