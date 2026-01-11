import { ExternalLink, Linkedin, FileText, MessageSquare } from 'lucide-react';

const posts = [
  {
    type: 'linkedin',
    title: 'The Art of 0→1 Product Development',
    excerpt: 'What I learned building products from scratch—the frameworks, the failures, and the wins.',
    link: '#',
    icon: Linkedin,
  },
  {
    type: 'article',
    title: 'AI in EdTech: Beyond the Hype',
    excerpt: 'A practical guide to integrating AI features that actually improve learning outcomes.',
    link: '#',
    icon: FileText,
  },
  {
    type: 'insight',
    title: 'Scaling B2B SaaS Internationally',
    excerpt: 'Lessons from expanding to 4 countries—what worked, what did not, and what I would do differently.',
    link: '#',
    icon: MessageSquare,
  },
];

const ThoughtLeadership = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Thought Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Insights & Perspectives
          </h2>
          <p className="text-muted-foreground text-lg">
            Writing about product strategy, AI integration, and lessons from the field.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <post.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {post.type}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read more
                <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.linkedin.com/in/mansigupta4cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">Follow on LinkedIn for more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
