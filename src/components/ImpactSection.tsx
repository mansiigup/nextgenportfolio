import { TrendingUp, Globe, Users, Zap, DollarSign, Award } from 'lucide-react';

const impactMetrics = [
  {
    icon: DollarSign,
    value: '₹40M+',
    label: 'Revenue Driven',
    description: 'Through portfolio expansion and growth initiatives',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Students Impacted',
    description: 'Across 10,000+ schools globally',
  },
  {
    icon: Globe,
    value: '4',
    label: 'Countries Expanded',
    description: 'Finland, Korea, UAE & Morocco',
  },
  {
    icon: TrendingUp,
    value: '50-60%',
    label: 'Engagement Increase',
    description: 'Through AI-powered personalization',
  },
  {
    icon: Zap,
    value: '200+',
    label: 'Releases Shipped',
    description: 'Across Android, iOS & Web platforms',
  },
  {
    icon: Award,
    value: '$200K',
    label: 'Cloud Credits Secured',
    description: 'From AWS, GCP & Digital Ocean',
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Impact Snapshot
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Numbers That Matter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key metrics from my product leadership journey—revenue, scale, efficiency, and global reach.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{metric.value}</p>
              <p className="font-semibold text-foreground mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
