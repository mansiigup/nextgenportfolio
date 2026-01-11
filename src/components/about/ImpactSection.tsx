import { TrendingUp, Globe, Users, Zap, DollarSign, Award } from 'lucide-react';

const impactMetrics = [
  {
    icon: DollarSign,
    value: '₹40M+',
    label: 'Revenue Driven',
    description: 'Through portfolio expansion and growth initiatives',
    gradient: 'from-success to-success/50',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Students Impacted',
    description: 'Across 10,000+ schools globally',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Globe,
    value: '4',
    label: 'Countries Expanded',
    description: 'Finland, Korea, UAE & Morocco',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: TrendingUp,
    value: '50-60%',
    label: 'Engagement Increase',
    description: 'Through AI-powered personalization',
    gradient: 'from-warning to-warning/50',
  },
  {
    icon: Zap,
    value: '200+',
    label: 'Releases Shipped',
    description: 'Across Android, iOS & Web platforms',
    gradient: 'from-destructive to-destructive/50',
  },
  {
    icon: Award,
    value: '$200K',
    label: 'Cloud Credits Secured',
    description: 'From AWS, GCP & Digital Ocean',
    gradient: 'from-accent-foreground to-accent-foreground/50',
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Impact Snapshot</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">Quantified Outcomes</span>
          </h2>
          <p className="text-muted-foreground text-lg whitespace-nowrap overflow-x-auto pb-2">
            Key metrics from my product leadership journey — revenue, scale, efficiency and global reach.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{metric.value}</p>
              <p className="font-semibold text-foreground text-sm mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground leading-tight">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
