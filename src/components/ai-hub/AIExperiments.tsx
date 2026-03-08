import { Sparkles, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useSound } from '@/components/SoundProvider';
import { useState } from 'react';

const experiments = [
  {
    title: 'Multi-Modal Learning Assessment',
    hypothesis: 'Combining voice, text, and visual inputs can provide more accurate learning assessments than single-modal approaches.',
    status: 'Testing',
    approach: 'Building a prototype that uses speech analysis, handwriting recognition, and eye-tracking data.',
    color: 'border-l-success',
  },
  {
    title: 'AI Tutor Personality Study',
    hypothesis: 'Different AI personalities (encouraging vs. challenging) lead to different learning outcomes based on student type.',
    status: 'Designing',
    approach: 'A/B testing different prompt personalities and measuring engagement and learning outcomes.',
    color: 'border-l-secondary',
  },
  {
    title: 'Automated Curriculum Adaptation',
    hypothesis: 'AI can dynamically adjust curriculum sequencing based on real-time student performance better than static paths.',
    status: 'Research',
    approach: 'Analyzing existing learning data to train a curriculum optimization model.',
    color: 'border-l-warning',
  },
];

const AIExperiments = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { playSound } = useSound();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto mb-12">
          <p
            className={`text-primary font-medium mb-3 tracking-wide uppercase text-sm transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Frontier Exploration
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            AI Experiments
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Active experiments exploring the next wave of AI-powered product experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {experiments.map((experiment, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={experiment.title}
                className={`border-l-4 ${experiment.color} rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${isExpanded ? 'shadow-lg ring-1 ring-primary/10' : ''}`}
                style={{ animationDelay: `${300 + index * 120}ms`, animationFillMode: 'forwards' }}
                onClick={() => { setExpandedIndex(isExpanded ? null : index); playSound(isExpanded ? 'pop' : 'click'); }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary/20 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{experiment.title}</h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded inline-flex items-center gap-1.5 ${
                            experiment.status === 'Testing'
                              ? 'bg-success/15 text-success'
                              : experiment.status === 'Designing'
                              ? 'bg-secondary/15 text-secondary'
                              : 'bg-accent text-accent-foreground'
                          }`}>
                            {experiment.status === 'Testing' && (
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                              </span>
                            )}
                            {experiment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ml-14 ${
                      isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-accent/50 backdrop-blur-sm rounded-lg border border-border mb-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">🔬 Hypothesis:</span>{' '}
                        {experiment.hypothesis}
                      </p>
                    </div>
                    <div className="p-4 bg-accent/50 backdrop-blur-sm rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">🛠️ Approach:</span>{' '}
                        {experiment.approach}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIExperiments;
