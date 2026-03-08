import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Lightbulb, ArrowRight, Sparkles, ExternalLink, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ImpactSlider from './ImpactSlider';

const LatestHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play for articles slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const goPrev = () => goToSlide((currentSlide - 1 + articles.length) % articles.length);
  const goNext = () => goToSlide((currentSlide + 1) % articles.length);

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

        {/* Articles Slider */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex-shrink-0 bg-card p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
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
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
            Explore My Work
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestHighlights;
