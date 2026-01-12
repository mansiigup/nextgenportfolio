import { Briefcase, TrendingUp, ArrowUpRight, GraduationCap, BookOpen, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Product Lead',
    company: 'Freadom Edu',
    subtitle: 'To Solve Reading Literacy - SaaS',
    period: 'Sep 2022 - Present',
    location: 'B2B & B2C EdTech',
    highlights: [
      'Led portfolio expansion driving ₹40M+ revenue across 10,000+ schools',
      'Expanded to 4 international markets: Finland, Korea, UAE & Morocco',
      'Shipped 200+ releases across Android, iOS & Web platforms',
      'Led cross-functional team of 9 members',
      'Drove AI innovation with 4 models (STT, TTS, Recommendations, AI Generation)',
      'Improved product delivery efficiency by 50% and stakeholder satisfaction by 80%',
    ],
    keyAchievements: [
      'Deep Ownership',
      'PLG',
      'GenAI Integrations',
      '0 to 1',
      'SDLC',
    ],
    promotion: 'Promoted: Associate PM → PM → Product Lead',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Associate Product Manager',
    subtitle: "Founder's Office",
    company: 'Firstroot Inc.',
    period: 'Oct 2021 - Sep 2022',
    location: 'B2B & B2C FinTech/EdTech',
    highlights: [
      'Increased product adoption by 25% across 5 new schools in California',
      'Improved NPS score by 15% through user journey optimization',
      'Conducted 10 market research studies on Web 3.0 technologies',
      'Drove 20% increase in active user engagement',
      'Optimized UX workflows reducing user friction points',
    ],
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

const education = [
  {
    degree: "Master's in Computer Applications",
    icon: GraduationCap,
    gradient: 'from-primary to-secondary',
  },
  {
    degree: 'B.Com (Hons) - Marketing & Finance',
    icon: BookOpen,
    gradient: 'from-secondary to-success',
  },
  {
    degree: 'Co-Publisher: Sustainable Development Research',
    subtitle: 'International Journal of Advanced Research & Innovative Ideas in Education',
    icon: Award,
    gradient: 'from-success to-warning',
  },
];

const interests = [
  'Sculpturing',
  'Adventure Activities',
  'Travelling',
  'Research & Development',
  'Art & Sketching',
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
              <span className="text-gradient-slack">Career Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mb-20">
            {/* Center line - desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-success transform -translate-x-1/2 hidden md:block rounded-full" />

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
                            <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                          </div>
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                            <Briefcase className="w-7 h-7 text-primary-foreground" />
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {exp.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                              <TrendingUp className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Key achievements tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.keyAchievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-lg"
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

          {/* Education & Interests Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground mb-6 text-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                Education & Research
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${edu.gradient} flex items-center justify-center shrink-0`}>
                      <edu.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{edu.degree}</p>
                      {edu.subtitle && (
                        <p className="text-xs text-muted-foreground mt-1">{edu.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground mb-6 text-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-warning to-destructive flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </div>
                Beyond Work
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="group px-4 py-3 bg-background rounded-xl border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                When I'm not building products, you'll find me exploring new creative outlets—from sculpturing to adventure activities. I believe diverse experiences fuel innovative thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;