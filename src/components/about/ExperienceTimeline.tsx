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
  },
];

const education = [
  {
    degree: 'Master of Computer Applications',
    focus: 'Technology & Product',
  },
  {
    degree: 'Bachelor of Commerce (Hons)',
    focus: 'Marketing & Finance',
  },
  {
    degree: 'Research Publication',
    focus: 'Sustainable Development - International Journal of Advanced Research',
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Experience Timeline
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
            Career Journey
          </h2>

          {/* Experience Timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <p className="text-sm text-primary font-medium mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                  
                  <ul className={`space-y-1 mb-3 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-accent-foreground bg-accent inline-block px-2 py-1 rounded">
                    {exp.promotion}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Education & Research</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <p className="font-medium text-foreground text-sm mb-1">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.focus}</p>
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
