import { Cpu, TrendingUp, Mic, BookOpen, Sparkles } from 'lucide-react';

const aiProducts = [
  {
    title: 'Speech-to-Text for Young Learners',
    description: 'Custom STT models optimized for children\'s speech patterns, accents, and reading levels.',
    impact: '40% improvement in pronunciation feedback accuracy',
    models: ['Whisper', 'Custom Fine-tuned'],
    learnings: 'Children\'s speech is fundamentally different from adult speech—off-the-shelf models fail badly without fine-tuning.',
    icon: Mic,
  },
  {
    title: 'Personalized Story Generation',
    description: 'AI-generated stories that adapt to student reading level, interests, and learning objectives.',
    impact: '60% increase in reading engagement',
    models: ['Claude', 'GPT-4'],
    learnings: 'Prompt engineering for educational content requires deep curriculum knowledge—not just language model expertise.',
    icon: BookOpen,
  },
  {
    title: 'Content Recommendation Engine',
    description: 'ML-powered recommendations that balance learning objectives, engagement, and skill progression.',
    impact: '50% improvement in content completion rates',
    models: ['Collaborative Filtering', 'Content-Based'],
    learnings: 'Recommendations in education must optimize for learning outcomes, not just engagement—these often conflict.',
    icon: TrendingUp,
  },
  {
    title: 'Text-to-Speech for Storytelling',
    description: 'Expressive TTS that brings stories to life with appropriate emotion, pacing, and character voices.',
    impact: 'Enhanced immersion for early readers',
    models: ['ElevenLabs', 'Custom Voices'],
    learnings: 'TTS quality directly impacts learning—flat, robotic voices reduce comprehension and engagement.',
    icon: Sparkles,
  },
];

const AIProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            AI in Production
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Products I Have Built
          </h2>
          <p className="text-muted-foreground text-lg">
            Real AI implementations shipped at scale—from research collaboration to production deployment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {aiProducts.map((product) => (
            <div
              key={product.title}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <product.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{product.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

              <div className="p-3 bg-background rounded-lg mb-4">
                <p className="text-sm">
                  <span className="font-medium text-primary">Impact:</span>{' '}
                  <span className="text-foreground">{product.impact}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.models.map((model) => (
                  <span key={model} className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded">
                    {model}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground italic">
                <span className="font-medium not-italic">Learning:</span> {product.learnings}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProducts;
