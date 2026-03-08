import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useSound } from '@/components/SoundProvider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const ideas = [
  {
    emoji: '🏥',
    domain: 'Healthcare — Access & Diagnosis Gap',
    title: 'DiagnoFirst',
    problem: 'The WHO projects a shortage of 11 million health workers by 2030, leaving 4.5 billion people without essential health services.',
    opportunities: [
      'AI-powered early diagnosis for rural/underserved populations',
      'Mental health triage and therapy assistants',
      'Drug interaction checkers for pharmacies',
      'AI second-opinion systems for radiologists',
    ],
    productIdea: 'DiagnoFirst — AI diagnostic triage before a doctor\'s appointment',
    color: 'from-destructive/20 to-destructive/5',
  },
  {
    emoji: '💼',
    domain: 'Enterprise Workflow — Agentic Automation',
    title: 'FlowAgent',
    problem: 'AI is shifting from individual usage to team and workflow orchestration — coordinating entire workflows, connecting data across departments and moving projects from idea to completion.',
    opportunities: [
      'End-to-end document processing automation',
      'Cross-department task handoff agents',
      'AI meeting summarizers with auto task assignment',
      'Finance reconciliation agents',
    ],
    productIdea: 'FlowAgent — AI that manages multi-step workflows without human handholding',
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    emoji: '🏭',
    domain: 'Manufacturing — Predictive Downtime',
    title: 'FactoryIQ',
    problem: 'Factories lose millions to unplanned machine downtime that sensors already detect — but no one is acting on the signals fast enough.',
    opportunities: [
      'AI-powered analytics dashboards for production KPIs like cycle times, defect rates, and OEE',
      'Predictive maintenance before breakdown occurs',
      'Quality defect detection via computer vision',
    ],
    productIdea: 'FactoryIQ — Real-time AI plant health monitor',
    color: 'from-warning/20 to-warning/5',
  },
  {
    emoji: '🧬',
    domain: 'Drug Discovery & Materials Science',
    title: 'MoleculeOS',
    problem: 'Drug trials take 10–15 years and cost billions. Most fail late.',
    opportunities: [
      'Molecule simulation & protein folding',
      'Clinical trial patient matching',
      'Repurposing existing drugs for new diseases',
    ],
    productIdea: 'MoleculeOS — AI research assistant for pharma labs',
    color: 'from-success/20 to-success/5',
  },
  {
    emoji: '🔐',
    domain: 'Cybersecurity — AI vs. AI Attacks',
    title: 'ShieldNet',
    problem: 'As AI agents gain the ability to read personal data and take actions, mistakes matter more — security means protecting data, resisting prompt injection, and avoiding irreversible actions.',
    opportunities: [
      'Real-time phishing detection',
      'AI-generated deepfake identification',
      'Autonomous threat response systems',
      'Employee behavior anomaly detection',
    ],
    productIdea: 'ShieldNet — AI-native cyber threat response layer',
    color: 'from-primary/20 to-primary/5',
  },
  {
    emoji: '🎓',
    domain: 'Education — Personalized Learning at Scale',
    title: 'LearnPath AI',
    problem: 'One teacher serves 30+ students with wildly different learning speeds, styles, and gaps. Most students fall through the cracks.',
    opportunities: [
      'Adaptive curriculum that adjusts in real time',
      'AI tutors for exam preparation',
      'Early dropout risk detection',
      'Parent-teacher communication summarizers',
    ],
    productIdea: 'LearnPath AI — Personalized AI study coach for every student',
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    emoji: '🏦',
    domain: 'Finance — Fraud Detection & Credit Access',
    title: 'TrustScore',
    problem: 'Millions of people are "credit invisible" — no history, no loans. Meanwhile, fraud is increasingly AI-generated.',
    opportunities: [
      'Alternative credit scoring using behavioral data',
      'Real-time fraud pattern detection',
      'AI financial advisor for underbanked populations',
      'Automated regulatory compliance checks',
    ],
    productIdea: 'TrustScore — AI credit & fraud intelligence engine',
    color: 'from-warning/20 to-warning/5',
  },
  {
    emoji: '🌿',
    domain: 'Climate & Sustainability',
    title: 'GreenLens',
    problem: 'Companies make bold ESG commitments but have no reliable way to measure, track, or verify them.',
    opportunities: [
      'Carbon footprint tracking per product/supply chain',
      'Energy optimization in data centers and buildings',
      'Wildfire/flood prediction models',
    ],
    productIdea: 'GreenLens — AI carbon audit and sustainability tracker',
    color: 'from-success/20 to-success/5',
  },
  {
    emoji: '🛒',
    domain: 'Retail & E-Commerce — Hyper Personalization',
    title: 'ShopMind',
    problem: 'Generic recommendations lead to cart abandonment. Customers want to feel understood, not targeted.',
    opportunities: [
      'Real-time dynamic pricing',
      'AI personal shopper with memory',
      'Inventory prediction and supply chain optimization',
      'Returns reduction through better size/fit AI',
    ],
    productIdea: 'ShopMind — AI personal shopper that learns your taste over time',
    color: 'from-destructive/20 to-destructive/5',
  },
  {
    emoji: '👥',
    domain: 'HR & People Intelligence',
    title: 'CompatIQ Connection',
    problem: 'Bad hires cost companies 30–50% of an employee\'s annual salary. For entrepreneurs, it is critical to ensure your AI startup solves a real problem by addressing verifiable customer pain.',
    opportunities: [
      'Culture fit assessment pre-hire (CompatIQ)',
      'Employee burnout early warning systems',
      'Internal talent mobility matching',
      'Exit interview sentiment analysis',
    ],
    productIdea: 'Connects to CompatIQ — the universal compatibility framework in Building & Learning above',
    color: 'from-primary/20 to-primary/5',
  },
];

const ProductIdeas = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (!api || !isAutoPlaying || isHovered) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api, isAutoPlaying, isHovered]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!api) return;
      if (e.key === 'ArrowLeft') api.scrollPrev();
      if (e.key === 'ArrowRight') api.scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api]);

  const currentIdea = ideas[current];

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
            10 AI-powered product ideas across industries — problems I have observed and potential solutions I am validating.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-600 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Progress bar */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((current + 1) / count) * 100}%` }}
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
              {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>

          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {ideas.map((idea) => (
                <CarouselItem key={idea.title}>
                  <div className="p-1">
                    <div className={`rounded-xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden relative group`}>
                      {/* Gradient accent bar */}
                      <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${idea.color}`} />

                      <div className="p-6 md:p-8 pl-8 md:pl-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{idea.emoji}</span>
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                          {idea.domain}
                        </p>

                        {/* Problem */}
                        <div className="mb-5">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Problem</p>
                          <p className="text-sm md:text-base text-foreground leading-relaxed">{idea.problem}</p>
                        </div>

                        {/* AI Opportunities */}
                        <div className="mb-5">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">AI Opportunity</p>
                          <ul className="space-y-1.5">
                            {idea.opportunities.map((opp, i) => (
                              <li
                                key={opp}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <span className="text-primary mt-1">▸</span>
                                <span>{opp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Product Idea Callout */}
                        <div className={`p-4 bg-gradient-to-r ${idea.color} border border-primary/10 rounded-lg group-hover:border-primary/20 transition-colors`}>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Product Idea</p>
                          <p className="text-sm md:text-base font-semibold text-foreground">{idea.productIdea}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2.5 rounded-xl border border-border bg-card/80 hover:bg-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Previous idea"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => api?.scrollNext()}
              className="p-2.5 rounded-xl border border-border bg-card/80 hover:bg-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Next idea"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="text-xs text-muted-foreground/50 text-center mt-4 hidden md:block">
            Use ← → arrow keys to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductIdeas;
