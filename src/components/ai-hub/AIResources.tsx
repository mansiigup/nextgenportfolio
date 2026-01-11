import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const resources = [
  {
    type: 'Article',
    title: 'AI Product Management: A Framework',
    description: 'How to evaluate AI features—when to build, when to buy, and when to wait.',
    icon: FileText,
  },
  {
    type: 'Video',
    title: 'Implementing AI in EdTech',
    description: 'A talk on lessons learned integrating AI into educational products.',
    icon: Video,
  },
  {
    type: 'Guide',
    title: 'Prompt Engineering for PMs',
    description: 'Practical prompt patterns for product research, specs, and analysis.',
    icon: BookOpen,
  },
];

const AIResources = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Resources
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI for Product Managers
          </h2>
          <p className="text-muted-foreground text-lg">
            Content I have created to help other PMs navigate AI integration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <resource.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {resource.type}
                </span>
              </div>

              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read more
                <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIResources;
