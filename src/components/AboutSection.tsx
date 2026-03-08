import { Target, Users, BarChart3, Lightbulb } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Product Philosophy
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m a product leader with 5 years of experience building and scaling B2B & B2C SaaS products. 
              My approach is simple: <span className="text-foreground font-medium">identify the problem, understand why it exists, 
              and solve it with scalable, intelligent solutions.</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I thrive in ambiguity—taking products from zero to one, launching in new markets, and integrating 
              cutting-edge AI to create differentiated experiences. Whether it&apos;s driving ₹40M+ revenue, expanding 
              to 4 countries, or collaborating with Stanford and CMU on AI models, I bring deep ownership and a 
              relentless focus on impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-shadow"
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

export default AboutSection;
