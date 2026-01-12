import { useState } from 'react';
import { Code, Lightbulb, Rocket, Wrench, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    category: 'Product Strategy',
    icon: Lightbulb,
    gradient: 'from-primary to-secondary',
    skills: [
      'Product Vision & Roadmapping',
      'User Research & Design Thinking',
      'A/B Testing & Experimentation',
      '0→1 Product Development',
      'Stakeholder Management',
      'Go-to-Market Strategy',
      'Competitive Analysis',
      'Market Research',
    ],
  },
  {
    category: 'Execution & Delivery',
    icon: Rocket,
    gradient: 'from-secondary to-success',
    skills: [
      'Cross-functional Team Leadership',
      'Sprint Planning & Delivery',
      'Release Management (200+ releases)',
      'Partnership Development',
      'B2B Sales Enablement',
      'Localization & Internationalization',
      'Growth Campaigns',
      'Agile/Scrum Leadership',
    ],
  },
  {
    category: 'Tech & AI/ML',
    icon: Code,
    gradient: 'from-success to-warning',
    skills: [
      'LLM Integration (Claude, GPT, Gemini)',
      'Speech-to-Text & Text-to-Speech',
      'Recommendation Systems',
      'Python & Django',
      'RESTful APIs & Webhooks',
      'Redis, Celery, PostgreSQL',
      'AWS / GCP / Digital Ocean',
      'OAuth & JWT Authentication',
    ],
  },
  {
    category: 'Analytics & Tools',
    icon: Wrench,
    gradient: 'from-warning to-destructive',
    skills: [
      'Looker Studio & Mixpanel',
      'SQL & Database Querying',
      'CleverTap & New Relic',
      'Jira, Linear, Trello',
      'Figma & Balsamiq',
      'Firebase & Google Analytics',
      'Postman & API Testing',
      'Branch & AppsFlyer',
    ],
  },
];

const frameworks = [
  { name: 'RICE Scoring', category: 'Prioritization' },
  { name: 'MoSCoW', category: 'Prioritization' },
  { name: 'Double Diamond', category: 'Design' },
  { name: 'Design Thinking', category: 'Design' },
  { name: 'Blue Ocean Strategy', category: 'Strategy' },
  { name: 'Hook Model', category: 'Growth' },
  { name: 'North Star Metric', category: 'Metrics' },
  { name: 'HEART Framework', category: 'Metrics' },
  { name: 'AARRR (Pirate)', category: 'Growth' },
  { name: 'Jobs to Be Done', category: 'Research' },
  { name: "Lencioni's 5 Dysfunctions", category: 'Team' },
  { name: 'Eisenhower Matrix', category: 'Productivity' },
];

const techStack = [
  { name: 'Python', type: 'Language' },
  { name: 'Django', type: 'Framework' },
  { name: 'React JS', type: 'Frontend' },
  { name: 'Node JS', type: 'Backend' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Redis', type: 'Cache' },
  { name: 'AWS EC2/S3', type: 'Cloud' },
  { name: 'Unity', type: 'Game Dev' },
];

const SkillsExperience = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 border border-primary/20">
            <span className="text-sm font-medium text-primary">Skills & Tooling</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">What I Bring to the Table</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A blend of strategic thinking, technical depth, and execution capabilities honed across EdTech and FinTech.
          </p>
        </div>

        {/* Interactive Skills Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`group flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                    : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{category.category}</span>
              </button>
            ))}
          </div>

          {/* Skills display */}
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-x-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].gradient}`} />
                <span className="text-foreground font-medium">{skill}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="font-semibold text-foreground mb-6 text-xl flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            Frameworks I Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {frameworks.map((framework, index) => (
              <div
                key={framework.name}
                className="group relative p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-xs text-primary/60 font-medium">{framework.category}</span>
                <p className="text-sm font-semibold text-foreground mt-1">{framework.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Ribbon */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-semibold text-foreground mb-6 text-xl flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-secondary to-success rounded-full" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group px-4 py-3 bg-gradient-to-r from-card to-card/80 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-xs text-muted-foreground">{tech.type}</span>
                <p className="text-sm font-semibold text-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;