import { Trophy, FileText, Code, ExternalLink, Sparkles } from 'lucide-react';


const honors = [
  {
    icon: Trophy,
    title: 'Create+AI Challenge Winner',
    organization: 'Stanford Accelerator Learning Program × Freadom Edu',
    description: 'Won the Create+AI Challenge conducted by the Stanford Accelerator Learning Program as part of the Freadom Edu product team. Recognized for innovative AI-driven solutions in educational technology.',
    gradient: 'from-warning to-amber-500',
    badge: 'Winner',
    link: 'https://acceleratelearning.stanford.edu/funding/create-ai-challenge/',
    external: true,
  },
  {
    icon: FileText,
    title: 'Published Research Paper',
    organization: 'IJARIIE — Volume 4, Issue 3, 2018',
    description: 'Published a research paper titled "Sustainable Environmental Management at Jai Maruti Gas Cylinders Limited, Gwalior, Madhya Pradesh" in the International Journal of Advance Research and Innovative Ideas in Education (ISSN: 2395-4396, Paper ID: 8364).',
    gradient: 'from-primary to-secondary',
    badge: 'Published',
    link: '/documents/research_paper_certificate.pdf',
    external: false,
  },
  {
    icon: Code,
    title: 'Nipun Setu — AI Career Platform',
    organization: '75:15:1 Women\'s Day AI Builder Challenge × Future World Alliance',
    description: 'Built Nipun Setu, an AI-powered career growth platform, as part of the 75:15:1 Women\'s Day AI Builder Challenge. It uses PathAI to create personalized learning roadmaps, daily tasks with credit rewards, and connects users with verified experts — solving the problem that 96% of online learners never finish courses.',
    gradient: 'from-success to-emerald-500',
    badge: 'Builder',
    link: 'https://nipun-setu.lovable.app/',
    external: true,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {honor.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-3">{honor.organization}</p>
                    </div>
                    {honor.link && honor.link !== '#' && (
                      <a
                        href={honor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-muted-foreground hover:text-primary transition-colors shrink-0 cursor-pointer z-10"
                        title="Learn more"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
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
