import { Briefcase, ArrowUpRight, Sparkles, Heart, Mountain, Palette, Globe, BookOpen, Gamepad2, Music, Camera } from 'lucide-react';

const experiences = [
  {
    title: 'Product Lead',
    company: 'Freadom Edu',
    period: 'Sep 2022 - Present',
    focus: 'To Solve Reading Literacy - B2B & B2C EdTech SaaS',
    keyAchievements: [
      'Deep Ownership',
      'PLG',
      'GenAI Integrations',
      '0 to 1',
      'SDLC',
    ],
    promotion: 'Promoted: Associate PM → PM → Product Lead',
    gradient: 'from-primary/60 to-secondary/60',
  },
  {
    title: 'Associate Product Manager',
    company: 'Firstroot Inc.',
    period: 'Oct 2021 - Sep 2022',
    focus: "Founder's Office - B2B & B2C FinTech/EdTech",
    keyAchievements: [
      'Web 3.0',
      'USA Market',
      'GTM Strategy',
      'Building 0→1',
    ],
    promotion: "Founder's Office - Entrepreneurial Builder",
    gradient: 'from-secondary to-success',
  },
];

const interests = [
  { name: 'Sculpturing', icon: Sparkles, description: 'Creating three-dimensional art forms that express creativity and patience' },
  { name: 'Adventure Activities', icon: Mountain, description: 'Trekking, camping, and exploring the great outdoors' },
  { name: 'Travelling', icon: Globe, description: 'Discovering new cultures, cuisines, and perspectives across the world' },
  { name: 'Research & Development', icon: BookOpen, description: 'Staying curious about emerging tech, AI trends, and product innovations' },
  { name: 'Art & Sketching', icon: Palette, description: 'Visual storytelling through pencil sketches and digital illustrations' },
  { name: 'Gaming', icon: Gamepad2, description: 'Strategy games that sharpen problem-solving and quick thinking' },
  { name: 'Music', icon: Music, description: 'Finding inspiration in melodies and rhythms across genres' },
  { name: 'Photography', icon: Camera, description: 'Capturing moments and telling stories through the lens' },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-sm font-medium text-primary">Experience Timeline</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-foreground">Career Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mb-20">
            {/* Center line - desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-muted-foreground/30 via-muted-foreground/20 to-muted-foreground/10 transform -translate-x-1/2 hidden md:block rounded-full" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} ring-4 ring-background shadow-lg z-10`} />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                    <div className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                              {exp.period}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-foreground font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mt-1">{exp.focus}</p>
                          </div>
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                            <Briefcase className="w-7 h-7 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Key achievements tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.keyAchievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1.5 text-xs font-medium bg-accent text-accent-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>

                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${exp.gradient} bg-opacity-10 border border-primary/20`}>
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{exp.promotion}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Beyond Work - Expanded */}
          <div className="p-8 bg-card rounded-2xl border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warning/10 to-destructive/10 rounded-full mb-4 border border-warning/20">
                <Heart className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-warning">Beyond Work</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                What Fuels My Creativity
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When I'm not building products, you'll find me exploring new creative outlets. I believe diverse experiences fuel innovative thinking and bring fresh perspectives to problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="group p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning/20 to-destructive/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <interest.icon className="w-6 h-6 text-warning" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {interest.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Fun fact callout */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Why it matters</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These diverse interests help me approach product challenges from unique angles. Whether it's the patience learned from sculpturing, the strategic thinking from gaming, or the storytelling from photography—each passion contributes to how I build and think about products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;