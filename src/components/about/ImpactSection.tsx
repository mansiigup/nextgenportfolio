import { TrendingUp, Globe, Users, Zap, DollarSign, Award, Brain, Rocket } from 'lucide-react';
import { useState } from 'react';

const impactMetrics = [
  {
    icon: DollarSign,
    value: '₹50M+',
    label: 'Revenue Generated',
    description: 'Through portfolio expansion, growth initiatives & strategic market positioning',
    gradient: 'from-success to-success/50',
    detail: 'Led product portfolio expansion driving 40+ Million Revenue by launching 6 new verticals and scaling reach to 10,000+ schools.',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Users Impacted',
    description: 'Students across 10,000+ schools globally',
    gradient: 'from-primary to-primary/50',
    detail: 'Scaled product reach through targeted distribution and stakeholder-driven roll-out plans across multiple platforms.',
  },
  {
    icon: Globe,
    value: '3',
    label: 'Continents Expanded',
    description: 'Finland, Korea, UAE & Morocco',
    gradient: 'from-secondary to-secondary/50',
    detail: 'Drove product vision solving scalability & customization requirements through localized positioning & partnerships.',
  },
  {
    icon: Rocket,
    value: '200+',
    label: 'Launches & Releases',
    description: 'Across Android, iOS & Web platforms',
    gradient: 'from-warning to-warning/50',
    detail: 'Accelerated continuous product innovation via structured planning, prioritization & cross-functional execution, leading 9 team members.',
  },
  {
    icon: TrendingUp,
    value: '50-60%',
    label: 'Engagement Boost',
    description: 'Through AI-powered personalization & analytics',
    gradient: 'from-destructive to-destructive/50',
    detail: 'Built 50+ Looker Studio dashboards using SQL, delivering 60+ actionable insights for data-driven optimization.',
  },
  {
    icon: Brain,
    value: '4',
    label: 'Core AI Models',
    description: 'STT, TTS, Recommendations, AI Generation',
    gradient: 'from-primary to-secondary',
    detail: 'Developed in collaboration with Stanford, CMU & IIT Bombay research labs. Models include Speech-to-Text, Text-to-Speech, personalized recommendations, and AI story/image generation.',
  },
  {
    icon: Award,
    value: '$200K',
    label: 'Cloud Credits',
    description: 'From AWS, GCP & Digital Ocean',
    gradient: 'from-accent-foreground to-accent-foreground/50',
    detail: 'Reduced infrastructure costs by $10,000 and improved operational efficiency through cloud optimization strategies.',
  },
  {
    icon: Zap,
    value: '70%',
    label: 'Workflow Automated',
    description: 'Operational processes streamlined',
    gradient: 'from-success to-warning',
    detail: 'Solved execution delays & poor metric visibility by implementing automation frameworks & dashboards.',
  },
];

const ImpactSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>
      
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 border border-primary/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Impact Snapshot</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">Quantified Outcomes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key metrics from my product leadership journey — revenue, scale, AI innovation and global reach.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <metric.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{metric.value}</p>
                  <p className="font-semibold text-foreground text-sm mb-2">{metric.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
                  
                  {/* Expanded detail on hover */}
                  <div className={`mt-3 pt-3 border-t border-border/50 overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-primary/80 leading-relaxed">{metric.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;