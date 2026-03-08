import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useSound } from '@/components/SoundProvider';
import { ExternalLink } from 'lucide-react';

const aiTools = [
  {
    name: 'ChatGPT',
    category: 'General AI',
    use: 'Brainstorming, content drafting, data analysis, code review',
    color: 'from-success/20 to-success/5',
    emoji: '🤖',
  },
  {
    name: 'Claude',
    category: 'Reasoning & Analysis',
    use: 'Deep research synthesis, PRD writing, strategic analysis',
    color: 'from-warning/20 to-warning/5',
    emoji: '🧠',
  },
  {
    name: 'Cursor',
    category: 'AI Code Editor',
    use: 'AI-assisted coding, debugging, and rapid prototyping',
    color: 'from-primary/20 to-primary/5',
    emoji: '⌨️',
  },
  {
    name: 'Lovable',
    category: 'AI App Builder',
    use: 'Full-stack app generation, rapid MVP development, UI prototyping',
    color: 'from-destructive/20 to-destructive/5',
    emoji: '💜',
  },
  {
    name: 'Perplexity',
    category: 'AI Search',
    use: 'Market research, competitive analysis, fact-checking with sources',
    color: 'from-secondary/20 to-secondary/5',
    emoji: '🔍',
  },
  {
    name: 'V0 by Vercel',
    category: 'UI Generation',
    use: 'Rapid UI component generation, design exploration',
    color: 'from-primary/20 to-primary/5',
    emoji: '🎨',
  },
  {
    name: 'Notion AI',
    category: 'Productivity',
    use: 'Meeting notes, documentation, knowledge management',
    color: 'from-warning/20 to-warning/5',
    emoji: '📝',
  },
  {
    name: 'Midjourney',
    category: 'Image Generation',
    use: 'Visual concepts, presentation assets, product mockups',
    color: 'from-success/20 to-success/5',
    emoji: '🖼️',
  },
  {
    name: 'GitHub Copilot',
    category: 'Code Assistant',
    use: 'Inline code suggestions, test generation, documentation',
    color: 'from-secondary/20 to-secondary/5',
    emoji: '🐙',
  },
  {
    name: 'Gemini',
    category: 'Multimodal AI',
    use: 'Image analysis, long-context reasoning, Google ecosystem integration',
    color: 'from-destructive/20 to-destructive/5',
    emoji: '✨',
  },
  {
    name: 'Figma AI / Stitch AI',
    category: 'Design AI',
    use: 'Auto-layout suggestions, design system consistency, asset generation',
    color: 'from-primary/20 to-primary/5',
    emoji: '🎯',
  },
  {
    name: 'Gamma',
    category: 'Presentation AI',
    use: 'Slide deck generation, visual storytelling, pitch deck creation',
    color: 'from-warning/20 to-warning/5',
    emoji: '📊',
  },
];

const AIToolkit = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { playSound } = useSound();

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
            My AI Stack
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            AI Tools I Use Daily
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            The AI toolkit that powers my product thinking, building, and shipping workflow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {aiTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative p-5 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-default ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards' }}
              onMouseEnter={() => playSound('hover')}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {tool.emoji}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-primary/70 font-medium mb-2">{tool.category}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{tool.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolkit;
