import { Workflow, FileText, Search, BarChart3, Users, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useSound } from '@/components/SoundProvider';
import { useState } from 'react';

const workflows = [
  {
    title: 'User Research Synthesis',
    description: 'Using Claude to analyze interview transcripts, extract themes, and generate persona insights.',
    aiRole: 'First-pass analysis and pattern recognition',
    humanRole: 'Validation, interpretation, and strategic decisions',
    icon: Users,
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'PRD Generation',
    description: 'AI-assisted product specs that structure thinking without replacing it.',
    aiRole: 'Template generation, consistency checking, edge case prompting',
    humanRole: 'Strategy, prioritization, and stakeholder context',
    icon: FileText,
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'Competitive Analysis',
    description: 'Automated monitoring of competitor updates, feature changes, and market positioning.',
    aiRole: 'Data collection, summarization, and trend identification',
    humanRole: 'Strategic interpretation and response planning',
    icon: Search,
    color: 'from-success/20 to-success/5',
  },
  {
    title: 'Metrics Interpretation',
    description: 'AI-powered insights from dashboard data—anomaly detection and hypothesis generation.',
    aiRole: 'Pattern recognition and initial hypothesis generation',
    humanRole: 'Context-aware analysis and action planning',
    icon: BarChart3,
    color: 'from-warning/20 to-warning/5',
  },
];

const PMWorkflows = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { playSound } = useSound();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            AI-Enhanced PM
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            PM Workflows with AI
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            How I integrate AI into my daily product management practice—augmenting, not replacing, human judgment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {workflows.map((workflow, index) => (
            <div
              key={workflow.title}
              className={`group relative p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 120}ms`, animationFillMode: 'forwards' }}
              onMouseEnter={() => { setHoveredIndex(index); playSound('hover'); }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient top accent */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${workflow.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <workflow.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{workflow.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-5">{workflow.description}</p>

              <div className="space-y-2">
                <div className="p-3 bg-card/80 rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                  <p className="text-xs">
                    <span className="font-semibold text-primary">🤖 AI Role:</span>{' '}
                    <span className="text-muted-foreground">{workflow.aiRole}</span>
                  </p>
                </div>
                <div className="p-3 bg-card/80 rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                  <p className="text-xs">
                    <span className="font-semibold text-primary">🧠 Human Role:</span>{' '}
                    <span className="text-muted-foreground">{workflow.humanRole}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PMWorkflows;
