import { Briefcase, TrendingUp, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Product Lead',
    company: 'Freadom Edu',
    period: 'Sep 2022 - Present',
    location: 'B2B & B2C SaaS - EdTech',
    highlights: [
      'Led portfolio expansion driving Rs 40M+ revenue',
      'Expanded to 4 international markets',
      'Shipped 200+ releases across platforms',
      'Led team of 9 across product & engineering',
    ],
    promotion: 'Promoted from Associate PM to PM to Product Lead',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Associate Product Manager',
    company: 'Firstroot Inc.',
    period: 'Oct 2021 - Sep 2022',
    location: 'B2B & B2C SaaS - FinTech/EdTech',
    highlights: [
      'Increased product adoption by 25% across 5 new schools in California',
      'Improved NPS score by 15% through user journey optimization',
      'Conducted 10 market research studies on Web 3.0',
      'Drove 20% increase in active user engagement',
    ],
    promotion: 'Founders Office - 0 to 1 Builder',
    gradient: 'from-secondary to-success',
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Experience Timeline</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient-slack">Career Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-success transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} ring-4 ring-background shadow-lg`} />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                            {exp.period}
                          </span>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shrink-0`}>
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <TrendingUp className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${exp.gradient} bg-opacity-10`}>
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">{exp.promotion}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
