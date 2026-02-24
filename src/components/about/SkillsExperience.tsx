import { useState } from 'react';
import { Code, Lightbulb, Rocket, Wrench, ChevronRight, Sparkles, Layers, Zap } from 'lucide-react';

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
      'Prototyping & Wireframing',
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
      'Cursor AI & Lovable',
      'ChatGPT & Claude AI',
      'Perplexity & Copilot',
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
  { name: 'RICE Scoring', category: 'Prioritization', icon: '📊' },
  { name: 'MoSCoW', category: 'Prioritization', icon: '🎯' },
  { name: 'Double Diamond', category: 'Design', icon: '💎' },
  { name: 'Design Thinking', category: 'Design', icon: '🎨' },
  { name: 'Blue Ocean Strategy', category: 'Strategy', icon: '🌊' },
  { name: 'Hook Model', category: 'Growth', icon: '🪝' },
  { name: 'North Star Metric', category: 'Metrics', icon: '⭐' },
  { name: 'HEART Framework', category: 'Metrics', icon: '❤️' },
  { name: 'AARRR (Pirate)', category: 'Growth', icon: '🏴‍☠️' },
  { name: "Lencioni's 5 Dysfunctions", category: 'Team', icon: '👥' },
  { name: 'Eisenhower Matrix', category: 'Productivity', icon: '⏰' },
];

const techStack = [
  { name: 'Python', type: 'Language', color: 'from-primary to-primary/70' },
  { name: 'Django', type: 'Framework', color: 'from-success to-success/70' },
  { name: 'React JS', type: 'Frontend', color: 'from-secondary to-secondary/70' },
  { name: 'Node JS', type: 'Backend', color: 'from-warning to-warning/70' },
  { name: 'PostgreSQL', type: 'Database', color: 'from-destructive to-destructive/70' },
  { name: 'Redis', type: 'Cache', color: 'from-primary to-secondary' },
  { name: 'AWS EC2/S3', type: 'Cloud', color: 'from-warning to-primary' },
  { name: 'Unity', type: 'Game Dev', color: 'from-secondary to-success' },
];

const SkillsExperience = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFramework, setActiveFramework] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Skills & Tooling</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-slack">What I Bring to the Table</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A blend of strategic thinking, technical depth, and execution capabilities honed across EdTech and FinTech.
          </p>
        </div>

        {/* Interactive Skills Grid with Animated Tabs */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Category tabs - Pill style */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-center">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`group relative flex items-center gap-2 px-5 py-3 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeCategory === index
                    ? 'border-transparent shadow-xl'
                    : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {activeCategory === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-90`} />
                )}
                <category.icon className={`w-5 h-5 relative z-10 ${activeCategory === index ? 'text-primary-foreground' : ''}`} />
                <span className={`font-medium text-sm relative z-10 ${activeCategory === index ? 'text-primary-foreground' : ''}`}>
                  {category.category}
                </span>
                {activeCategory === index && (
                  <Zap className="w-4 h-4 text-primary-foreground/60 relative z-10 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Skills display - Hexagonal layout effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative p-5 bg-card rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${skillCategories[activeCategory].gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10 flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} group-hover:scale-150 transition-transform duration-300`} />
                  <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{skill}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section - Interactive Cards */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="font-semibold text-foreground mb-8 text-2xl flex items-center gap-3">
            <div className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <Layers className="w-6 h-6 text-primary" />
            Frameworks I Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {frameworks.map((framework, index) => (
              <div
                key={framework.name}
                className={`group relative p-5 bg-card rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeFramework === index 
                    ? 'border-primary shadow-xl shadow-primary/20 scale-105' 
                    : 'border-border hover:border-primary/30'
                }`}
                onMouseEnter={() => setActiveFramework(index)}
                onMouseLeave={() => setActiveFramework(null)}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-500 ${
                  activeFramework === index ? 'opacity-100' : 'opacity-0'
                }`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{framework.icon}</span>
                    <span className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                      activeFramework === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary/80'
                    }`}>
                      {framework.category}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    activeFramework === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {framework.name}
                  </p>
                </div>
                
                {/* Decorative corner accent */}
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-xl transition-opacity duration-500 ${
                  activeFramework === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Animated Ribbon */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-semibold text-foreground mb-8 text-2xl flex items-center gap-3">
            <div className="w-10 h-1 bg-gradient-to-r from-secondary to-success rounded-full" />
            <Code className="w-6 h-6 text-secondary" />
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`relative p-6 bg-card rounded-2xl border transition-all duration-500 overflow-hidden ${
                  hoveredTech === index 
                    ? 'border-transparent shadow-2xl scale-105' 
                    : 'border-border hover:border-primary/30'
                }`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} transition-opacity duration-500 ${
                    hoveredTech === index ? 'opacity-15' : 'opacity-0'
                  }`} />
                  
                  {/* Animated glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${tech.color} opacity-0 blur-xl transition-opacity duration-500 rounded-2xl ${
                    hoveredTech === index ? 'opacity-30' : ''
                  }`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-3 transition-all duration-300 ${
                      hoveredTech === index
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                      {tech.type}
                    </div>
                    <p className={`text-lg font-bold transition-colors duration-300 ${
                      hoveredTech === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {tech.name}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tech.color} rounded-full blur-2xl transition-opacity duration-500 ${
                    hoveredTech === index ? 'opacity-40' : 'opacity-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
