import { Trophy, FileText, Code, ExternalLink, Sparkles } from 'lucide-react';

const honors = [
  {
    icon: Trophy,
    title: 'Create+AI Challenge Winner',
    organization: 'Stanford Accelerator Learning Program',
    description: 'Won the Create+AI Challenge conducted by the Stanford Accelerator Learning Program, in collaboration with Freadom Edu. Recognized for innovative AI-driven solutions in educational technology.',
    gradient: 'from-warning to-amber-500',
    badge: 'Winner',
    link: '#',
  },
  {
    icon: FileText,
    title: 'Research Paper Honor',
    organization: 'Academic Recognition',
    description: 'Honored for contributions to research in AI and educational technology, publishing work that bridges the gap between academic innovation and practical product implementation.',
    gradient: 'from-primary to-secondary',
    badge: 'Published',
    link: '#',
  },
  {
    icon: Code,
    title: 'Buildathon Participant',
    organization: 'Innovation Challenge',
    description: 'Participated in a Buildathon, demonstrating rapid product development skills and the ability to turn ideas into functional prototypes under time constraints.',
    gradient: 'from-success to-emerald-500',
    badge: 'Participant',
    link: '#',
  },
];

const HonorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-warning/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warning/20 to-primary/20 rounded-full mb-4 border border-warning/30">
              <Sparkles className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-warning">Recognition</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient-slack">Honors & Awards</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognitions that reflect a commitment to innovation and impact
            </p>
          </div>

          {/* Honors Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {honors.map((honor, index) => (
              <div
                key={honor.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top gradient accent */}
                <div className={`h-1.5 bg-gradient-to-r ${honor.gradient}`} />
                
                <div className="p-6">
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${honor.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <honor.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${honor.gradient} text-primary-foreground`}>
                      {honor.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {honor.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{honor.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {honor.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${honor.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
