import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Lightbulb, ArrowRight, Sparkles, ExternalLink, Trophy } from 'lucide-react';
import ImpactSlider from './ImpactSlider';

const LatestHighlights = () => {
  const articles = [
    {
      type: 'Article',
      title: 'Thought on Full Stack Product Builder',
      description: 'The growth of full stack product & AI',
      icon: FileText,
      color: 'bg-primary/10 text-primary',
      link: 'https://www.linkedin.com/posts/mansi-gupta-2201b7154_the-growth-of-full-stack-product-ai-activity-7425240419954851840-f7SH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUMd3gBtslqyg4BnKMjO0_XXqHE1hyP97w',
    },
    {
      type: 'LinkedIn Post',
      title: 'Daily Series of Learning How to Grow Your Mind',
      description: 'Insights on personal and professional growth',
      icon: MessageSquare,
      color: 'bg-secondary/10 text-secondary',
      link: 'https://www.linkedin.com/in/mansi-gupta-2201b7154/',
    },
    {
      type: 'Highlight',
      title: 'Buildathon — Hosted by FWA x Lovable',
      description: 'Participated in the Buildathon hosted by FWA in partnership with Lovable, building innovative products with AI',
      icon: Trophy,
      color: 'bg-warning/10 text-warning',
      link: 'https://www.linkedin.com/posts/mansi-gupta-2201b7154_nipun-setu-activity-7436046932265013248-x9_b?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUMd3gBtslqyg4BnKMjO0_XXqHE1hyP97w',
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-slack" />
      
      <div className="container mx-auto px-6">
        <ImpactSlider />

        {/* Section header */}
        <div className="text-center mb-16 mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            <Sparkles size={16} />
            Latest Updates
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Articles & Highlights
          </h2>
        </div>

        {/* Articles grid - 3 in a row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
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
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Read more
                <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid md:grid-cols-3 gap-6">
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

          <Link
            to="/case-studies"
            className="group relative overflow-hidden bg-gradient-to-br from-destructive to-warning rounded-2xl p-8 text-destructive-foreground hover:shadow-xl transition-all"
          >
            <div className="relative z-10">
              <Trophy size={32} className="mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Impact Studies</h3>
              <p className="opacity-90 mb-4">Real-world case studies and measurable outcomes</p>
              <span className="inline-flex items-center gap-2 font-semibold">
                View Impact
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
            Explore My Work
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestHighlights;
