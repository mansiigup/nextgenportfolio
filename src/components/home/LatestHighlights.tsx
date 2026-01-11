import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Lightbulb, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const LatestHighlights = () => {
  const articles = [
    {
      type: 'Article',
      title: 'Building AI-First Products: A PM Perspective',
      description: 'Lessons from integrating LLMs into production systems',
      icon: FileText,
      color: 'bg-primary/10 text-primary',
    },
    {
      type: 'LinkedIn Post',
      title: 'The Art of Saying No in Product',
      description: 'How prioritization drives 10x outcomes',
      icon: MessageSquare,
      color: 'bg-secondary/10 text-secondary',
    },
    {
      type: 'Case Study',
      title: 'International Expansion Playbook',
      description: 'Scaling a SaaS product to 3 new markets',
      icon: Lightbulb,
      color: 'bg-success/10 text-success',
    },
  ];

  const quickStats = [
    { value: '15+', label: 'Products Shipped', color: 'text-primary' },
    { value: '3', label: 'Markets Expanded', color: 'text-secondary' },
    { value: '5M+', label: 'Users Impacted', color: 'text-success' },
    { value: '40%', label: 'Avg. Metric Lift', color: 'text-warning' },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-slack" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            <Sparkles size={16} />
            Latest & Greatest
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Articles & Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on product strategy, AI integration, and building products that matter
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <p className={`font-serif text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${article.color}`}>
                <article.icon size={14} />
                {article.type}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Read more
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/innovation-space"
            className="group relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground hover:shadow-xl transition-all"
          >
            <div className="relative z-10">
              <Lightbulb size={32} className="mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Innovation Space</h3>
              <p className="opacity-90 mb-4">Explore experimental projects and product ideas</p>
              <span className="inline-flex items-center gap-2 font-semibold">
                Explore
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </Link>

          <Link
            to="/ai-hub"
            className="group relative overflow-hidden bg-gradient-to-br from-secondary to-success rounded-2xl p-8 text-secondary-foreground hover:shadow-xl transition-all"
          >
            <div className="relative z-10">
              <Sparkles size={32} className="mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">AI Hub</h3>
              <p className="opacity-90 mb-4">AI-powered workflows, tools, and experiments</p>
              <span className="inline-flex items-center gap-2 font-semibold">
                Discover
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            View All Case Studies
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestHighlights;