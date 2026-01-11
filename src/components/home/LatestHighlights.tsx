import { ExternalLink, Linkedin, BookOpen, ArrowRight, Lightbulb, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    type: 'Article',
    title: 'Building AI-Powered Products: Lessons from the Trenches',
    description: 'Insights on integrating STT, TTS, and AI recommendations into consumer products',
    icon: BookOpen,
    link: '#',
  },
  {
    type: 'LinkedIn Post',
    title: 'The Art of 0→1 Product Development',
    description: 'How I approach building products from scratch in ambiguous environments',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/mansigupta4cl/',
  },
  {
    type: 'Case Study',
    title: 'Scaling Reading App Globally',
    description: 'Taking Freadom from India to Finland, Korea, UAE & Morocco',
    icon: Lightbulb,
    link: '/case-studies',
  },
];

const quickLinks = [
  {
    title: 'Innovation Space',
    description: 'Explore my experimental projects and product ideas',
    icon: Lightbulb,
    link: '/innovation-space',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'AI Hub',
    description: 'PM workflows and AI-driven product concepts',
    icon: Brain,
    link: '/ai-hub',
    color: 'bg-accent text-accent-foreground',
  },
];

const LatestHighlights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Articles Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Thought Leadership
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Latest Articles & Highlights
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  target={article.link.startsWith('http') ? '_blank' : undefined}
                  rel={article.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <article.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {article.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read More
                    <ExternalLink size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Explore
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 bg-gradient-to-br from-primary/10 via-accent to-background rounded-2xl border border-border">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's Build Something Great
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Looking for a PM who can drive 0→1 products, scale globally, and leverage AI? Let's connect.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestHighlights;
