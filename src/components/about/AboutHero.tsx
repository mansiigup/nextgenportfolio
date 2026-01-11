import { Target, Users, BarChart3, Lightbulb } from 'lucide-react';

const philosophyItems = [
  {
    icon: Target,
    title: 'Problem-First Thinking',
    description: 'I start with "What is the problem?" before jumping to solutions. Understanding the why behind user pain points leads to products that truly matter.',
  },
  {
    icon: Users,
    title: 'User-Centric Innovation',
    description: 'Deep user research and persona-driven design inform every decision. Real users, not assumptions, guide the product roadmap.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Metrics tell the story. I build dashboards, run experiments, and let data validate hypotheses while balancing qualitative insights.',
  },
  {
    icon: Lightbulb,
    title: 'Calculated Trade-offs',
    description: 'Every product decision involves trade-offs. I prioritize ruthlessly using frameworks like RICE and MoSCoW while maintaining stakeholder alignment.',
  },
];

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            About Me
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Product Philosophy
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a product leader with 4.5+ years of experience building and scaling B2B & B2C SaaS products. 
              My approach is simple: <span className="text-foreground font-medium">identify the problem, understand why it exists, 
              and solve it with scalable, intelligent solutions.</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I thrive in ambiguity—taking products from zero to one, launching in new markets, and integrating 
              cutting-edge AI to create differentiated experiences. Whether it's driving ₹40M+ revenue, expanding 
              to 4 countries, or collaborating with Stanford and CMU on AI models, I bring deep ownership and a 
              relentless focus on impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey spans EdTech and FinTech, working with cross-functional teams of 9+, and directly 
              engaging with C-suite executives. I believe great products come from understanding users deeply, 
              making hard trade-offs confidently, and executing with relentless focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
