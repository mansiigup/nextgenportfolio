import { useState } from 'react';
import { Users2, Scale, Compass, MessageCircle, Target, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const workStyles = [
  {
    icon: Target,
    title: 'Deep Ownership',
    shortDesc: 'End-to-end accountability for outcomes',
    description:
      'I take complete ownership from problem identification to solution delivery. Whether it\'s driving ₹40M+ revenue or reducing infrastructure costs by $10K, I focus on measurable business impact.',
    details: [
      'Full ownership of product lifecycle from ideation to launch',
      'Direct engagement with C-suite executives on strategic decisions',
      'Building business cases with clear ROI projections',
      'Accountability for metrics: revenue, engagement, retention',
      'Proactive identification and resolution of blockers',
    ],
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Users2,
    title: 'Stakeholder Management',
    shortDesc: 'Building trust through transparency',
    description:
      'I build trust through transparency and over-communication. Led cross-functional teams of 9+ members and worked directly with C-suite executives across EdTech and FinTech.',
    details: [
      'Weekly stakeholder updates with clear metrics and blockers',
      'Transparent roadmap sharing with real-time priority changes',
      'Building relationships across engineering, design, marketing, and sales',
      'Managing up: keeping executives informed without overwhelming',
      'Cross-functional alignment through shared OKRs and goals',
    ],
    gradient: 'from-secondary to-success',
  },
  {
    icon: Scale,
    title: 'Data-Driven Decisions',
    shortDesc: 'Informed, not paralyzed',
    description:
      'Built 50+ Looker Studio dashboards and delivered 60+ actionable insights. I gather evidence to make confident decisions quickly, while building checkpoints to course-correct.',
    details: [
      'RICE scoring for objective feature prioritization',
      'A/B testing for data-backed product decisions',
      'SQL-integrated analytics for real-time insights',
      'Balancing quantitative data with qualitative user feedback',
      'Building in decision review points to course-correct',
    ],
    gradient: 'from-success to-warning',
  },
  {
    icon: Compass,
    title: 'Handling Ambiguity',
    shortDesc: 'Thriving in 0→1 environments',
    description:
      'Ambiguity is where opportunity lives. From launching in 4 new countries to integrating 4 AI models, I break down undefined problems into testable hypotheses and iterate based on learnings.',
    details: [
      'Breaking complex problems into testable hypotheses',
      'Running lean experiments with minimal resources',
      'Comfortable "building the plane while flying it"',
      'Quick iteration cycles with clear learning objectives',
      'Entrepreneurial mindset from Founder\'s Office experience',
    ],
    gradient: 'from-warning to-destructive',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    shortDesc: 'Adapting to every audience',
    description:
      'I adapt communication to the audience—technical depth with engineers, business outcomes with executives. Written specs, visual documentation, and async-first communication keep global teams aligned.',
    details: [
      'Technical depth with engineers, business outcomes with executives',
      'Clear PRDs and specs with visual mockups and user stories',
      'Async-first communication for global team alignment',
      'Regular demos and showcases to celebrate wins',
      'Active listening and synthesizing diverse viewpoints',
    ],
    gradient: 'from-destructive to-primary',
  },
  {
    icon: Zap,
    title: 'Execution Excellence',
    shortDesc: 'Shipping 200+ releases at scale',
    description:
      'Improved product delivery efficiency by 50% and stakeholder satisfaction by 80% through agile process optimization. Bi-monthly closures resulted in 30% improvement in product velocity.',
    details: [
      'Structured planning and prioritization frameworks',
      'Bi-monthly delivery closures for consistent velocity',
      'Cross-platform execution: Android, iOS, Web',
      'Automation of 70% operational workflows',
      'Continuous improvement through retrospectives',
    ],
    gradient: 'from-primary to-success',
  },
];

const HowIWork = () => {
  const [selectedStyle, setSelectedStyle] = useState<typeof workStyles[0] | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 border border-primary/20">
            <span className="text-sm font-medium text-primary">How I Work</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">My Operating Style</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Click on each card to explore my approach to product leadership in detail.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workStyles.map((style, index) => (
            <button
              key={style.title}
              onClick={() => setSelectedStyle(style)}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 text-left animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <style.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{style.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{style.shortDesc}</p>
                
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore details</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedStyle} onOpenChange={() => setSelectedStyle(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedStyle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedStyle.gradient} flex items-center justify-center shadow-lg`}>
                    <selectedStyle.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedStyle.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                  {selectedStyle.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className={`w-4 h-1 rounded-full bg-gradient-to-r ${selectedStyle.gradient}`} />
                  Key Practices
                </h4>
                <ul className="space-y-3">
                  {selectedStyle.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedStyle.gradient} mt-2 shrink-0 group-hover:scale-125 transition-transform`} />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HowIWork;