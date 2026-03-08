import { Cpu, TrendingUp, Mic, BookOpen, Sparkles, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import { useState } from 'react';

const aiProducts = [
  {
    title: 'Speech-to-Text for Young Learners',
    description: 'Custom STT models optimized for children\'s speech patterns, accents, and reading levels.',
    impact: '40% improvement in pronunciation feedback accuracy',
    models: ['SpeechSuper', 'Amazon Polly'],
    learnings: 'Children\'s speech is fundamentally different from adult speech—off-the-shelf models fail badly without fine-tuning.',
    icon: Mic,
    color: 'border-l-primary',
  },
  {
    title: 'Personalized Story Generation',
    description: 'AI-generated stories that adapt to student reading level, interests, and learning objectives.',
    impact: '60% increase in reading engagement',
    models: ['Claude', 'GPT-4'],
    learnings: 'Prompt engineering for educational content requires deep curriculum knowledge—not just language model expertise.',
    icon: BookOpen,
    color: 'border-l-secondary',
  },
  {
    title: 'Content Recommendation Engine',
    description: 'ML-powered recommendations that balance learning objectives, engagement, and skill progression.',
    impact: '50% improvement in content completion rates',
    models: ['Collaborative Filtering', 'Content-Based'],
    learnings: 'Recommendations in education must optimize for learning outcomes, not just engagement—these often conflict.',
    icon: TrendingUp,
    color: 'border-l-success',
  },
  {
    title: 'Text-to-Speech for Storytelling',
    description: 'Expressive TTS that brings stories to life with appropriate emotion, pacing, and character voices.',
    impact: 'Enhanced immersion for early readers',
    models: ['Edge TTS', 'Custom Voices'],
    learnings: 'TTS quality directly impacts learning—flat, robotic voices reduce comprehension and engagement.',
    icon: Sparkles,
    color: 'border-l-warning',
  },
];

const AIProducts = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
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
            AI in Production
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            AI Products I Have Built
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Real AI implementations shipped at scale—from research collaboration to production deployment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {aiProducts.map((product, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={product.title}
                className={`border-l-4 ${product.color} rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${isExpanded ? 'shadow-lg ring-1 ring-primary/10' : ''}`}
                style={{ animationDelay: `${300 + index * 120}ms`, animationFillMode: 'forwards' }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary/20 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <product.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{product.title}</h3>
                          <p className="text-xs text-primary font-medium">{product.impact}</p>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="text-muted-foreground text-sm mt-4 ml-14">{product.description}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ml-14 ${
                      isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.models.map((m) => (
                        <span key={m} className="px-3 py-1 text-xs bg-background border border-border rounded-full font-medium">
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 bg-accent/50 backdrop-blur-sm rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">💡 Key Learning:</span>{' '}
                        {product.learnings}
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

export default AIProducts;
