import { TrendingUp, Briefcase, Search, Award } from 'lucide-react';

const ImpactStudiesHero = () => {
  const sections = [
    { icon: Briefcase, label: 'Professional Products', count: '2 Companies' },
    { icon: Search, label: 'Product Teardowns', count: '4 Products' },
    { icon: Award, label: 'Certifications', count: '6 Credentials' },
  ];

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Impact Studies</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Real Products,{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Deep dives into product initiatives that drove growth, improved user experience, 
            and created lasting business value. From problem to solution to measurable outcomes.
          </p>

          {/* Section Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.label}
                className="group p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">{section.label}</p>
                    <p className="text-xs text-muted-foreground">{section.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStudiesHero;
