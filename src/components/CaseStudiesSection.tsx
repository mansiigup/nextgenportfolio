import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    title: 'Scaling a Reading Literacy Platform to ₹40M+ Revenue',
    company: 'Freadom Edu',
    period: '2022 - Present',
    context:
      'Freadom faced plateaued growth with limited product reach. The challenge was to expand beyond existing schools while maintaining product quality and user engagement across diverse student populations.',
    problemMattered:
      'Reading literacy directly impacts educational outcomes. Stagnant growth meant fewer students could access quality reading education, while the business faced sustainability challenges. Breaking this ceiling was critical for both mission and revenue.',
    role:
      'As Product Lead, I owned the end-to-end product portfolio expansion strategy. This included identifying growth verticals, designing distribution frameworks, and leading a team of 9 across product, design, and engineering.',
    decisions: [
      'Chose to launch 6 new verticals simultaneously rather than sequential rollout—faster market coverage outweighed iteration risks given strong user research foundation.',
      'Prioritized stakeholder-driven distribution over direct-to-consumer—schools as gatekeepers provided trust and scale that D2C could not match in EdTech.',
      'Invested in localization infrastructure early despite short-term resource strain—essential for global expansion plans.',
    ],
    execution:
      'Implemented structured planning with bi-monthly release cycles. Built stakeholder rollout plans with school administrators as key partners. Cross-functional sprints ensured design, engineering, and ops alignment. Delivered 200+ releases across Android, iOS, and web.',
    metrics: [
      { label: 'Revenue Driven', value: '₹40M+' },
      { label: 'Schools Reached', value: '10,000+' },
      { label: 'Students Impacted', value: '1.2M+' },
      { label: 'New Verticals', value: '6' },
    ],
    learnings:
      'Scaling too fast can strain ops—next time I would build more buffer into stakeholder onboarding. The decision to go B2B-first proved right, but we underestimated the hand-holding schools needed.',
    tags: ['0→1', 'B2B SaaS', 'Growth Strategy', 'EdTech'],
  },
  {
    title: 'Global Market Expansion: Finland, Korea, UAE & Morocco',
    company: 'Freadom Edu',
    period: '2023 - Present',
    context:
      'The product was built for Indian markets with limited scalability for international requirements. Each target market had unique curriculum standards, language needs, and regulatory considerations.',
    problemMattered:
      'Global expansion represented a 10x opportunity but required fundamentally rethinking product architecture. Failure would mean being locked into a single geography with limited growth runway.',
    role:
      'I led the product vision for internationalization—defining localization requirements, partnering with country teams, and ensuring the core product could flex for diverse markets without fragmenting the codebase.',
    decisions: [
      'Built a modular content architecture instead of market-specific forks—harder upfront but essential for sustainable multi-market presence.',
      'Partnered with local educational institutions rather than pure distribution deals—ensured curriculum alignment and credibility.',
      'Prioritized UAE & Finland first based on market readiness and partnership maturity rather than market size.',
    ],
    execution:
      'Worked closely with localization teams for content adaptation. Conducted user research in each market to understand pedagogical differences. Built configurable feature flags for market-specific functionality. Established partnerships with local education bodies for credibility.',
    metrics: [
      { label: 'Countries Launched', value: '4' },
      { label: 'Localization Coverage', value: '100%' },
      { label: 'Partnership Deals', value: 'Strategic' },
      { label: 'Time to Market', value: '<6mo' },
    ],
    learnings:
      'Cultural nuances in education are deeper than language. Finland play-based learning approach required rethinking our entire content strategy, not just translation. I would invest more in ethnographic research upfront.',
    tags: ['Global Expansion', 'Localization', 'Partnerships', 'Market Entry'],
  },
  {
    title: 'AI-Powered Personalization with Stanford & CMU Research Labs',
    company: 'Freadom Edu',
    period: '2023 - Present',
    context:
      'User engagement had plateaued, and one-size-fits-all content was not meeting diverse learner needs. The challenge was implementing AI personalization at scale without compromising the human touch in education.',
    problemMattered:
      'Personalized learning is proven to improve outcomes 2-3x. Without AI-driven adaptation, we were leaving engagement and learning outcomes on the table—both critical for retention and word-of-mouth growth.',
    role:
      'I led the AI product strategy, defining use cases, partnering with research labs at Stanford, Carnegie Mellon, and IIT Bombay, and translating research prototypes into production-ready features.',
    decisions: [
      'Chose to integrate 4 AI models (STT, TTS, recommendations, story generation) rather than focusing on one—breadth of personalization touchpoints mattered more than depth in early stages.',
      'Partnered with academic labs for cutting-edge capabilities rather than building in-house—faster time-to-value and access to frontier research.',
      'Implemented A/B testing rigorously before full rollout—AI can degrade UX if not tuned correctly for young learners.',
    ],
    execution:
      'Defined clear success metrics for each AI feature. Ran experiments with Claude, GPT, and Gemini to find best-fit models. Built feedback loops from teachers and parents. Iterated based on engagement data and qualitative insights.',
    metrics: [
      { label: 'Engagement Lift', value: '50-60%' },
      { label: 'AI Models Shipped', value: '4' },
      { label: 'Research Partners', value: '3' },
      { label: 'A/B Experiments', value: '20+' },
    ],
    learnings:
      'AI in education needs guardrails. We learned to build teacher override capabilities and transparency features. Parents want to understand how AI is helping their children—black-box models do not build trust.',
    tags: ['AI/ML', 'Personalization', 'Research Collaboration', 'EdTech'],
  },
  {
    title: 'Building Analytics Infrastructure: 50+ Dashboards Driving Growth',
    company: 'Freadom Edu',
    period: '2022 - Present',
    context:
      'Product decisions were being made on intuition rather than data. No visibility into feature performance, user behavior patterns, or growth metrics was limiting our ability to iterate effectively.',
    problemMattered:
      'Without data, we were flying blind. Product velocity suffered because we could not validate hypotheses quickly. Growth teams lacked signals to optimize campaigns. Engineering prioritized the wrong fixes.',
    role:
      'I owned the analytics strategy—defining key metrics, building dashboard infrastructure using Looker Studio and SQL, and creating a culture of data-driven decision making across teams.',
    decisions: [
      'Built self-serve dashboards rather than analyst-gated reports—democratizing data access accelerated decision velocity.',
      'Invested in event tracking infrastructure before dashboards—garbage in, garbage out.',
      'Focused on actionable metrics over vanity metrics—every dashboard had to answer "so what?"',
    ],
    execution:
      'Mapped user journeys to identify critical tracking points. Implemented event tracking across all platforms. Built 50+ Looker Studio dashboards. Created weekly metrics reviews with cross-functional teams. Delivered 60+ actionable insights that shaped product and growth strategy.',
    metrics: [
      { label: 'Dashboards Built', value: '50+' },
      { label: 'Insights Delivered', value: '60+' },
      { label: 'Workflow Automation', value: '70%' },
      { label: 'Decision Velocity', value: '3x' },
    ],
    learnings:
      'Dashboards are only valuable if people use them. I spent as much time on training and change management as building. The shift from "ask an analyst" to "check the dashboard" was cultural, not technical.',
    tags: ['Analytics', 'Data Strategy', 'SQL', 'Looker Studio'],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Case Studies
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Work in Depth
          </h2>
          <p className="text-muted-foreground text-lg">
            Detailed breakdowns of key product initiatives—from problem identification through execution to measurable impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
