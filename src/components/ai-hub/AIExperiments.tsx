import { Sparkles, ArrowRight } from 'lucide-react';

const experiments = [
  {
    title: 'Multi-Modal Learning Assessment',
    hypothesis: 'Combining voice, text, and visual inputs can provide more accurate learning assessments than single-modal approaches.',
    status: 'Testing',
    approach: 'Building a prototype that uses speech analysis, handwriting recognition, and eye-tracking data.',
  },
  {
    title: 'AI Tutor Personality Study',
    hypothesis: 'Different AI personalities (encouraging vs. challenging) lead to different learning outcomes based on student type.',
    status: 'Designing',
    approach: 'A/B testing different prompt personalities and measuring engagement and learning outcomes.',
  },
  {
    title: 'Automated Curriculum Adaptation',
    hypothesis: 'AI can dynamically adjust curriculum sequencing based on real-time student performance better than static paths.',
    status: 'Research',
    approach: 'Analyzing existing learning data to train a curriculum optimization model.',
  },
];

const AIExperiments = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Frontier Exploration
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Experiments
          </h2>
          <p className="text-muted-foreground text-lg">
            Active experiments exploring the next wave of AI-powered product experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiments.map((experiment) => (
            <div
              key={experiment.title}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{experiment.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      experiment.status === 'Testing' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : experiment.status === 'Designing'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {experiment.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-primary mb-1">Hypothesis</p>
                  <p className="text-sm text-muted-foreground">{experiment.hypothesis}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary mb-1">Approach</p>
                  <p className="text-sm text-muted-foreground">{experiment.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperiments;
