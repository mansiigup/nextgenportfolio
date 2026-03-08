import { Users, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ideas = [
  {
    title: 'Teacher Copilot',
    problem: 'Teachers spend 50% of their time on non-teaching tasks—grading, planning, parent communication.',
    solution: 'An AI assistant that handles routine tasks while keeping teachers in control of pedagogy.',
    status: 'Concept',
    icon: Users,
    gradient: 'from-primary to-primary/60',
  },
  {
    title: 'Learning Analytics for Parents',
    problem: 'Parents get report cards twice a year but have no visibility into daily learning progress.',
    solution: 'A simple weekly digest that shows what their child learned and how they can support at home.',
    status: 'Concept',
    icon: Target,
    gradient: 'from-secondary to-secondary/60',
  },
  {
    title: 'Skill Gap Identifier',
    problem: 'Hiring managers struggle to identify candidates with the right mix of skills and potential.',
    solution: 'A tool that maps candidate portfolios to job requirements and surfaces hidden potential.',
    status: 'Concept',
    icon: Zap,
    gradient: 'from-destructive to-destructive/60',
  },
];

const ProductIdeas = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-card relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto mb-12">
          <p
            className={`text-primary font-medium mb-3 tracking-wide uppercase text-sm transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Product Ideas
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Problems Worth Solving
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ideas I am actively exploring—problems I have observed and potential solutions I am validating.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div
              key={idea.title}
              className={`group relative rounded-xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Hover overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${idea.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

              <div className="p-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${idea.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <idea.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-semibold text-foreground">{idea.title}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 bg-accent text-accent-foreground rounded-full">
                    {idea.status}
                  </span>
                </div>

                {/* Problem - always visible */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Problem</p>
                  <p className="text-sm text-muted-foreground">{idea.problem}</p>
                </div>

                {/* Solution - slides in on hover */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Solution</p>
                    <p className="text-sm text-muted-foreground">{idea.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIdeas;
