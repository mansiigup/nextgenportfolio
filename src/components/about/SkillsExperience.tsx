const skillCategories = [
  {
    category: 'Product Strategy',
    skills: [
      'Product Vision & Roadmapping',
      'User Research & Design Thinking',
      'A/B Testing & Experimentation',
      '0→1 Product Development',
      'Stakeholder Management',
      'Agile/Scrum Leadership',
      'Competitive Analysis',
      'Market Research',
    ],
  },
  {
    category: 'Execution',
    skills: [
      'Cross-functional Team Leadership',
      'Sprint Planning & Delivery',
      'Go-to-Market Strategy',
      'Partnership Development',
      'Release Management (200+ releases)',
      'B2B Sales Enablement',
      'Localization & Internationalization',
      'Growth Campaigns',
    ],
  },
  {
    category: 'Tech & AI',
    skills: [
      'LLM Integration (Claude, GPT, Gemini)',
      'Speech-to-Text & Text-to-Speech',
      'Recommendation Systems',
      'SQL & Database Querying',
      'Python & Django',
      'RESTful APIs & Webhooks',
      'AWS / GCP / Digital Ocean',
      'Looker Studio & Mixpanel',
    ],
  },
];

const frameworks = [
  'RICE & MoSCoW Prioritization',
  'Double Diamond Design',
  'Blue Ocean Strategy',
  'Hook Model',
  'North Star Metric',
  'Lencioni Team Framework',
  'AARRR & HEART Metrics',
  'Jobs to Be Done',
];

const SkillsExperience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Skills & Tooling
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground text-lg">
            A blend of strategic thinking, technical depth, and execution capabilities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4 text-lg">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="p-6 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-4 text-lg">Frameworks I Use</h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-2 text-sm bg-accent text-accent-foreground rounded-lg"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
