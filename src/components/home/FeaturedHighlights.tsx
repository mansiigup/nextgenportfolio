import { Globe, Rocket, Brain, TrendingUp, Users, DollarSign } from 'lucide-react';

const highlights = [
  {
    icon: DollarSign,
    value: '₹40M+',
    label: 'Revenue Driven',
    description: 'Through portfolio expansion and growth initiatives',
  },
  {
    icon: Globe,
    value: '4',
    label: 'Countries Expanded',
    description: 'Finland, Korea, UAE & Morocco',
  },
  {
    icon: Rocket,
    value: '200+',
    label: 'Releases Shipped',
    description: 'Across Android, iOS & Web platforms',
  },
  {
    icon: Brain,
    value: '4',
    label: 'AI Models Integrated',
    description: 'STT, TTS, Recommendations & Story Generation',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Students Impacted',
    description: 'Across 10,000+ schools globally',
  },
  {
    icon: TrendingUp,
    value: '50-60%',
    label: 'Engagement Lift',
    description: 'Through AI-powered personalization',
  },
];

const FeaturedHighlights = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Impact at a Glance
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Numbers That Tell the Story
          </h2>
          <p className="text-muted-foreground text-lg">
            Key metrics from my product leadership journey—revenue, scale, and global reach.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
              <p className="font-semibold text-foreground mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
