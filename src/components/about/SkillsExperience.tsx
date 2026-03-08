import { useState, useEffect, useCallback } from 'react';
import { Code, Lightbulb, Rocket, Wrench, Sparkles, Layers, Zap, Bot, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const skillCategories = [
  {
    category: 'Product Strategy',
    icon: Lightbulb,
    gradient: 'from-primary to-secondary',
    skills: [
      'Product Vision & Roadmapping', 'User Research & Design Thinking', 'A/B Testing & Experimentation',
      '0→1 Product Development', 'Stakeholder Management', 'Go-to-Market Strategy',
      'Competitive Analysis', 'Market Research', 'Prototyping & Wireframing',
      'PRD & Feature Specs', 'Customer Journey Mapping', 'Pricing Strategy',
      'OKR & KPI Setting', 'Persona Development', 'Value Proposition Design',
      'Feature Prioritization', 'Product-Market Fit Analysis',
    ],
  },
  {
    category: 'Execution & Delivery',
    icon: Rocket,
    gradient: 'from-secondary to-success',
    skills: [
      'Cross-functional Team Leadership', 'Sprint Planning & Delivery', 'Release Management (200+ releases)',
      'Partnership Development', 'B2B Sales Enablement', 'Localization & Internationalization',
      'Growth Campaigns', 'Agile/Scrum Leadership', 'Kanban & Lean',
      'Vendor Management', 'QA & UAT Coordination', 'Risk Mitigation',
      'Capacity Planning', 'Change Management', 'Incident Management',
    ],
  },
  {
    category: 'Technical',
    icon: Code,
    gradient: 'from-success to-warning',
    skills: [
      'Python & Django', 'RESTful APIs & Webhooks', 'Redis, Celery, PostgreSQL',
      'AWS / GCP / Digital Ocean', 'OAuth & JWT Authentication', 'React & Node.js',
      'Firebase & Supabase', 'Git & CI/CD', 'Docker & Kubernetes', 'GraphQL',
    ],
  },
  {
    category: 'AI Tools',
    icon: Bot,
    gradient: 'from-warning to-destructive',
    skills: [
      'ChatGPT & GPT-4', 'Claude AI (Anthropic)', 'Google Gemini', 'Perplexity AI',
      'Microsoft Copilot', 'Cursor AI', 'Lovable AI', 'Midjourney', 'DALL-E',
      'Runway ML', 'ElevenLabs', 'Whisper (Speech-to-Text)', 'Stable Diffusion',
      'Notion AI', 'Jasper AI', 'Synthesia', 'HeyGen', 'Descript',
      'LangChain', 'Hugging Face',
    ],
  },
  {
    category: 'Analytics & Tools',
    icon: Wrench,
    gradient: 'from-destructive to-primary',
    skills: [
      'Looker Studio & Mixpanel', 'SQL & Database Querying', 'CleverTap & New Relic',
      'Jira, Linear, Trello', 'Figma & Balsamiq', 'Firebase & Google Analytics',
      'Postman & API Testing', 'Branch & AppsFlyer', 'Amplitude',
      'Hotjar & FullStory', 'Tableau', 'Miro & FigJam', 'Confluence & Notion',
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

const SkillsCarousel = ({ skills, gradient }: { skills: string[]; gradient: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative group">
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div ref={emblaRef} className="overflow-hidden mx-8">
        <div className="flex gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex-[0_0_auto] group/chip relative px-5 py-3 bg-card rounded-2xl border border-border hover:border-transparent transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover/chip:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} opacity-0 group-hover/chip:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} group-hover/chip:scale-150 transition-transform duration-300`} />
                <span className="text-foreground font-medium text-sm group-hover/chip:text-primary transition-colors">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsExperience = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFramework, setActiveFramework] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
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

        {/* Interactive Skills with Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
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

          {/* Carousel for active category */}
          <SkillsCarousel
            key={activeCategory}
            skills={skillCategories[activeCategory].skills}
            gradient={skillCategories[activeCategory].gradient}
          />
        </div>

        {/* Frameworks Section */}
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
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-xl transition-opacity duration-500 ${
                  activeFramework === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} transition-opacity duration-500 ${
                    hoveredTech === index ? 'opacity-15' : 'opacity-0'
                  }`} />
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
