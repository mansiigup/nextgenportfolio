import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
  },
];

const ProductIdeas = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

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
        >
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {ideas.map((idea, index) => (
                <CarouselItem key={idea.title}>
                  <div className="p-1">
                    <div className="rounded-xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden">
                      <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{idea.emoji}</span>
                          <span className="text-xs font-medium px-2 py-0.5 bg-accent text-accent-foreground rounded-full">
                            {index + 1} / {ideas.length}
                          </span>
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
                            {idea.opportunities.map((opp) => (
                              <li key={opp} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">▸</span>
                                <span>{opp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Product Idea Callout */}
                        <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Product Idea</p>
                          <p className="text-sm md:text-base font-semibold text-foreground">{idea.productIdea}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIdeas;
