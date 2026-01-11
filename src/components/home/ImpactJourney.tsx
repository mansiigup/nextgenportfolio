import { DollarSign, Globe, Rocket, Brain, Users, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const impactMetrics = [
  {
    icon: DollarSign,
    value: '₹40M+',
    label: 'Revenue Driven',
  },
  {
    icon: Globe,
    value: '4',
    label: 'Countries Expanded',
  },
  {
    icon: Rocket,
    value: '200+',
    label: 'Releases Shipped',
  },
  {
    icon: Brain,
    value: '4',
    label: 'AI Models Integrated',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Students Impacted',
  },
  {
    icon: TrendingUp,
    value: '50-60%',
    label: 'Engagement Lift',
  },
];

const journeyHighlights = [
  {
    company: 'Freadom (Stones2Milestones)',
    role: 'Product Lead → Senior PM',
    period: '2022 – Present',
    highlights: ['AI-powered reading platform', 'Global expansion to 4 countries', '₹40M+ revenue'],
  },
  {
    company: 'Roboflow',
    role: 'Product Manager Intern',
    period: '2021 – 2022',
    highlights: ['Computer vision platform', 'Onboarding optimization', 'Product-led growth'],
  },
  {
    company: 'Murf.AI',
    role: 'Associate Product Manager',
    period: '2021',
    highlights: ['AI voice generation', 'Studio UX improvements', 'API development'],
  },
];

const ImpactJourney = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Impact Metrics */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Impact at a Glance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Numbers That Tell the Story
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 bg-background rounded-xl border border-border text-center hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              The Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Career Highlights
            </h2>
          </div>

          <div className="space-y-6">
            {journeyHighlights.map((item, index) => (
              <div
                key={item.company}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <span className="text-sm text-muted-foreground">• {item.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{item.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View Full Experience
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactJourney;
