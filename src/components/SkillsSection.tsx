const skillCategories = [
  {
    title: 'Product Management',
    skills: [
      'Product Strategy & Roadmapping',
      'User Research & Design Thinking',
      'A/B Testing & Experimentation',
      '0→1 Product Development',
      'Stakeholder Management',
      'Agile/Scrum Leadership',
    ],
  },
  {
    title: 'Analytics & Data',
    skills: [
      'SQL & Database Querying',
      'Looker Studio Dashboards',
      'Mixpanel & CleverTap',
      'Google Analytics',
      'Product Metrics (AARRR, HEART)',
      'Cohort & Funnel Analysis',
    ],
  },
  {
    title: 'Technical Knowledge',
    skills: [
      'Python & Django',
      'RESTful APIs & Webhooks',
      'AWS / GCP / Digital Ocean',
      'PostgreSQL & Firebase',
      'React & Node.js (Basics)',
      'Mobile (iOS/Android) Context',
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'LLM Integration (Claude, GPT, Gemini)',
      'Speech-to-Text & Text-to-Speech',
      'Recommendation Systems',
      'AI Product Strategy',
      'Prompt Engineering',
      'ML Experimentation',
    ],
  },
  {
    title: 'Go-to-Market',
    skills: [
      'Market Research & Analysis',
      'Competitive Positioning',
      'Partnership Development',
      'Localization Strategy',
      'Growth Campaigns',
      'B2B Sales Enablement',
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'RICE & MoSCoW Prioritization',
      'Double Diamond Design',
      'Blue Ocean Strategy',
      'Hook Model',
      'North Star Metric',
      'Lencioni Team Framework',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
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
      </div>
    </section>
  );
};

export default SkillsSection;
