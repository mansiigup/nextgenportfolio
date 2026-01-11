import { Workflow, FileText, Search, BarChart3, Users, Zap } from 'lucide-react';

const workflows = [
  {
    title: 'User Research Synthesis',
    description: 'Using Claude to analyze interview transcripts, extract themes, and generate persona insights.',
    aiRole: 'First-pass analysis and pattern recognition',
    humanRole: 'Validation, interpretation, and strategic decisions',
    icon: Users,
  },
  {
    title: 'PRD Generation',
    description: 'AI-assisted product specs that structure thinking without replacing it.',
    aiRole: 'Template generation, consistency checking, edge case prompting',
    humanRole: 'Strategy, prioritization, and stakeholder context',
    icon: FileText,
  },
  {
    title: 'Competitive Analysis',
    description: 'Automated monitoring of competitor updates, feature changes, and market positioning.',
    aiRole: 'Data collection, summarization, and trend identification',
    humanRole: 'Strategic interpretation and response planning',
    icon: Search,
  },
  {
    title: 'Metrics Interpretation',
    description: 'AI-powered insights from dashboard data—anomaly detection and hypothesis generation.',
    aiRole: 'Pattern recognition and initial hypothesis generation',
    humanRole: 'Context-aware analysis and action planning',
    icon: BarChart3,
  },
];

const PMWorkflows = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            AI-Enhanced PM
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            PM Workflows with AI
          </h2>
          <p className="text-muted-foreground text-lg">
            How I integrate AI into my daily product management practice—augmenting, not replacing, human judgment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="p-6 bg-background rounded-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <workflow.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{workflow.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{workflow.description}</p>

              <div className="space-y-2">
                <div className="p-2 bg-card rounded-lg border border-border">
                  <p className="text-xs">
                    <span className="font-medium text-primary">AI Role:</span>{' '}
                    <span className="text-muted-foreground">{workflow.aiRole}</span>
                  </p>
                </div>
                <div className="p-2 bg-card rounded-lg border border-border">
                  <p className="text-xs">
                    <span className="font-medium text-primary">Human Role:</span>{' '}
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
