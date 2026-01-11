import { useState } from 'react';
import { Users2, Scale, Compass, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const workStyles = [
  {
    icon: Users2,
    title: 'Stakeholder Management',
    shortDesc: 'Building trust through transparency and collaboration',
    description:
      'I build trust through transparency and over-communication. Regular syncs with leadership, clear escalation paths, and proactive updates ensure alignment. I have managed cross-functional teams of 9+ and worked directly with C-suite executives.',
    details: [
      'Weekly stakeholder updates with clear metrics and blockers',
      'Transparent roadmap sharing with real-time priority changes',
      'Building relationships across engineering, design, marketing, and sales',
      'Managing up: keeping executives informed without overwhelming them',
      'Cross-functional alignment through shared OKRs and goals',
    ],
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Scale,
    title: 'Decision-Making Style',
    shortDesc: 'Data-informed, not data-paralyzed',
    description:
      'Data-informed, not data-paralyzed. I gather enough evidence to make confident decisions quickly, while building in checkpoints to course-correct. I use frameworks like RICE for prioritization but know when to trust product intuition.',
    details: [
      'RICE scoring for objective feature prioritization',
      'A/B testing for data-backed decisions',
      'Rapid experimentation with clear success metrics',
      'Balancing quantitative data with qualitative insights',
      'Building in decision review points to course-correct',
    ],
    gradient: 'from-secondary to-success',
  },
  {
    icon: Compass,
    title: 'Handling Ambiguity',
    shortDesc: 'Thriving where opportunity lives',
    description:
      'Ambiguity is where opportunity lives. I break down undefined problems into testable hypotheses, run quick experiments, and iterate based on learnings. My 0 to 1 experience means I am comfortable building the plane while flying it.',
    details: [
      'Breaking complex problems into testable hypotheses',
      'Running lean experiments with minimal resources',
      'Embracing uncertainty as part of the innovation process',
      'Quick iteration cycles with clear learning objectives',
      'Comfortable with "good enough" to validate ideas fast',
    ],
    gradient: 'from-success to-warning',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    shortDesc: 'Adapting to every audience',
    description:
      'I adapt my communication to the audience—technical depth with engineers, business outcomes with executives, user impact with designers. Written specs, visual documentation, and async-first communication keep teams aligned across time zones.',
    details: [
      'Technical depth with engineers, business outcomes with executives',
      'Clear PRDs and specs with visual mockups and user stories',
      'Async-first communication for global team alignment',
      'Regular demos and showcases to celebrate wins',
      'Active listening and synthesizing diverse viewpoints',
    ],
    gradient: 'from-warning to-destructive',
  },
];

const HowIWork = () => {
  const [selectedStyle, setSelectedStyle] = useState<typeof workStyles[0] | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">How I Work</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">My Operating Style</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on each card to explore my approach in detail.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workStyles.map((style, index) => (
            <button
              key={style.title}
              onClick={() => setSelectedStyle(style)}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 text-left animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <style.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{style.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{style.shortDesc}</p>
              
              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Read more</span>
                <span className="ml-1">→</span>
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
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedStyle.gradient} flex items-center justify-center`}>
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
                <h4 className="font-semibold text-foreground mb-4">Key Practices:</h4>
                <ul className="space-y-3">
                  {selectedStyle.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedStyle.gradient} mt-2 shrink-0`} />
                      <span className="text-muted-foreground">{detail}</span>
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
