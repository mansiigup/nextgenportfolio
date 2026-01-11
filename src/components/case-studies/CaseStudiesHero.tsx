const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Case Studies
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Product Work in Depth
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Detailed breakdowns of key product initiatives—from problem identification 
            through execution to measurable impact. Each case study explores the decisions, 
            trade-offs, and learnings along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
