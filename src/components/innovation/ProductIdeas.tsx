import { Lightbulb, Users, Zap, Target } from 'lucide-react';

const ideas = [
  {
    title: 'Teacher Copilot',
    problem: 'Teachers spend 50% of their time on non-teaching tasks—grading, planning, parent communication.',
    solution: 'An AI assistant that handles routine tasks while keeping teachers in control of pedagogy.',
    status: 'Researching',
    icon: Users,
  },
  {
    title: 'Learning Analytics for Parents',
    problem: 'Parents get report cards twice a year but have no visibility into daily learning progress.',
    solution: 'A simple weekly digest that shows what their child learned and how they can support at home.',
    status: 'Prototyping',
    icon: Target,
  },
  {
    title: 'Skill Gap Identifier',
    problem: 'Hiring managers struggle to identify candidates with the right mix of skills and potential.',
    solution: 'A tool that maps candidate portfolios to job requirements and surfaces hidden potential.',
    status: 'Ideation',
    icon: Zap,
  },
];

const ProductIdeas = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Product Ideas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Problems Worth Solving
          </h2>
          <p className="text-muted-foreground text-lg">
            Ideas I am actively exploring—problems I have observed and potential solutions I am validating.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <div
              key={idea.title}
              className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <idea.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-foreground">{idea.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 bg-accent text-accent-foreground rounded">
                  {idea.status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-primary mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{idea.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary mb-1">Solution Hypothesis</p>
                  <p className="text-sm text-muted-foreground">{idea.solution}</p>
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
