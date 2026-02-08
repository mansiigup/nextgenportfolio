import { useState } from 'react';
import { 
  TrendingUp, Globe, Brain, BarChart3,
  ChevronDown, ChevronUp, Target, Zap, CheckCircle2, 
  ArrowRight, FileText, Rocket
} from 'lucide-react';

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  shortTitle: string;
  role: string;
  timeline: string;
  context: string;
  problemMattered: string;
  myRole: string;
  decisions: string[];
  execution: string;
  metrics: { label: string; value: string }[];
  learnings: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'revenue-growth',
    icon: TrendingUp,
    iconColor: 'from-emerald-500 to-teal-500',
    title: 'Scaling a Reading Literacy Platform to ₹40M+ Revenue',
    shortTitle: 'Scaling to ₹40M+ Revenue',
    role: 'Product Lead',
    timeline: '2022 - Present',
    context: 'Freadom faced plateaued growth with limited product reach. The challenge was to expand beyond existing schools while maintaining product quality and user engagement across diverse student populations.',
    problemMattered: 'Reading literacy directly impacts educational outcomes. Stagnant growth meant fewer students could access quality reading education, while the business faced sustainability challenges.',
    myRole: 'As Product Lead, I owned the end-to-end product portfolio expansion strategy, including identifying growth verticals, designing distribution frameworks, and leading a team of 9.',
    decisions: [
      'Chose to launch 6 new verticals simultaneously rather than sequential rollout',
      'Prioritized stakeholder-driven distribution over direct-to-consumer',
      'Invested in localization infrastructure early despite short-term resource strain'
    ],
    execution: 'Implemented structured planning with bi-monthly release cycles. Built stakeholder rollout plans with school administrators as key partners. Delivered 200+ releases across Android, iOS, and web.',
    metrics: [
      { label: 'Revenue', value: '₹40M+' },
      { label: 'Schools', value: '10,000+' },
      { label: 'Students', value: '1.2M+' },
      { label: 'Verticals', value: '6' }
    ],
    learnings: 'Scaling too fast can strain ops—next time I would build more buffer into stakeholder onboarding. The decision to go B2B-first proved right.',
    tags: ['0→1', 'B2B SaaS', 'Growth Strategy', 'EdTech']
  },
  {
    id: 'global-expansion',
    icon: Globe,
    iconColor: 'from-blue-500 to-indigo-500',
    title: 'Global Market Expansion: Finland, Korea, UAE & Morocco',
    shortTitle: 'Global Expansion to 4 Countries',
    role: 'Product Lead',
    timeline: '2023 - Present',
    context: 'The product was built for Indian markets with limited scalability for international requirements. Each target market had unique curriculum standards, language needs, and regulatory considerations.',
    problemMattered: 'Global expansion represented a 10x opportunity but required fundamentally rethinking product architecture.',
    myRole: 'I led the product vision for internationalization—defining localization requirements, partnering with country teams, and ensuring the core product could flex for diverse markets.',
    decisions: [
      'Built a modular content architecture instead of market-specific forks',
      'Partnered with local educational institutions rather than pure distribution deals',
      'Prioritized UAE & Finland first based on market readiness and partnership maturity'
    ],
    execution: 'Worked closely with localization teams for content adaptation. Conducted user research in each market. Built configurable feature flags for market-specific functionality.',
    metrics: [
      { label: 'Countries', value: '4' },
      { label: 'Localization', value: '100%' },
      { label: 'Partnerships', value: 'Strategic' },
      { label: 'Time to Market', value: '<6mo' }
    ],
    learnings: 'Cultural nuances in education are deeper than language. Finland\'s play-based learning approach required rethinking our entire content strategy.',
    tags: ['Global Expansion', 'Localization', 'Partnerships', 'Market Entry']
  },
  {
    id: 'ai-personalization',
    icon: Brain,
    iconColor: 'from-violet-500 to-purple-500',
    title: 'AI-Powered Personalization with Stanford & CMU Research Labs',
    shortTitle: 'AI Personalization Partnership',
    role: 'Product Lead',
    timeline: '2023 - Present',
    context: 'User engagement had plateaued, and one-size-fits-all content was not meeting diverse learner needs. The challenge was implementing AI personalization at scale without compromising the human touch.',
    problemMattered: 'Personalized learning is proven to improve outcomes 2-3x. Without AI-driven adaptation, we were leaving engagement and learning outcomes on the table.',
    myRole: 'I led the AI product strategy, defining use cases, partnering with research labs at Stanford, Carnegie Mellon, and IIT Bombay, and translating research prototypes into production-ready features.',
    decisions: [
      'Chose to integrate 4 AI models (STT, TTS, recommendations, story generation)',
      'Partnered with academic labs for cutting-edge capabilities rather than building in-house',
      'Implemented A/B testing rigorously before full rollout'
    ],
    execution: 'Defined clear success metrics for each AI feature. Ran experiments with Claude, GPT, and Gemini. Built feedback loops from teachers and parents.',
    metrics: [
      { label: 'Engagement', value: '50-60%' },
      { label: 'AI Models', value: '4' },
      { label: 'Research Partners', value: '3' },
      { label: 'A/B Tests', value: '20+' }
    ],
    learnings: 'AI in education needs guardrails. We learned to build teacher override capabilities and transparency features. Parents want to understand how AI is helping their children.',
    tags: ['AI/ML', 'Personalization', 'Research', 'EdTech']
  },
  {
    id: 'analytics-infrastructure',
    icon: BarChart3,
    iconColor: 'from-amber-500 to-orange-500',
    title: 'Building Analytics Infrastructure: 50+ Dashboards Driving Growth',
    shortTitle: 'Analytics Infrastructure',
    role: 'Product Lead',
    timeline: '2022 - Present',
    context: 'Product decisions were being made on intuition rather than data. No visibility into feature performance, user behavior patterns, or growth metrics was limiting our ability to iterate effectively.',
    problemMattered: 'Without data, we were flying blind. Product velocity suffered because we could not validate hypotheses quickly.',
    myRole: 'I owned the analytics strategy—defining key metrics, building dashboard infrastructure using Looker Studio and SQL, and creating a culture of data-driven decision making.',
    decisions: [
      'Built self-serve dashboards rather than analyst-gated reports',
      'Invested in event tracking infrastructure before dashboards',
      'Focused on actionable metrics over vanity metrics'
    ],
    execution: 'Mapped user journeys to identify critical tracking points. Built 50+ Looker Studio dashboards. Created weekly metrics reviews with cross-functional teams.',
    metrics: [
      { label: 'Dashboards', value: '50+' },
      { label: 'Insights', value: '60+' },
      { label: 'Automation', value: '70%' },
      { label: 'Decision Velocity', value: '3x' }
    ],
    learnings: 'Dashboards are only valuable if people use them. I spent as much time on training and change management as building.',
    tags: ['Analytics', 'Data Strategy', 'SQL', 'Looker Studio']
  }
];

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = study.icon;

  return (
    <div 
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.iconColor}`} />
      
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.iconColor} flex items-center justify-center shrink-0 shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              {study.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight">
              {study.shortTitle}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{study.role} • {study.timeline}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {study.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="text-center p-3 bg-background rounded-xl border border-border/50"
            >
              <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${study.iconColor} bg-clip-text text-transparent`}>
                {metric.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{study.context}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isExpanded ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground hover:bg-accent/80'
          }`}
        >
          {isExpanded ? 'Show less' : 'Read full case study'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {isExpanded && (
        <div className="px-6 md:px-8 pb-8 border-t border-border pt-6 space-y-6 animate-fade-in">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Why This Problem Mattered
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{study.problemMattered}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              My Role & Ownership
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{study.myRole}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" />
              Key Decisions & Trade-offs
            </h4>
            <ul className="space-y-2">
              {study.decisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Execution Approach
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{study.execution}</p>
          </div>

          <div className="p-4 bg-accent rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
            <p className="text-muted-foreground text-sm italic">"{study.learnings}"</p>
          </div>

          <div className="p-6 border-2 border-dashed border-border rounded-xl text-center">
            <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Presentation deck coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

const FreadomCaseStudies = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-gradient-to-r from-primary/10 via-accent to-background rounded-2xl border border-border">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-primary-foreground">FE</span>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Freadom Edu</h3>
            <p className="text-muted-foreground">EdTech • Reading Literacy • B2B SaaS</p>
            <p className="text-sm text-primary mt-1">2022 – Present • Product Lead</p>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Freadom is a reading literacy platform serving 1.2M+ students across 10,000+ schools globally. 
          As Product Lead, I drive product strategy, AI integration, global expansion, and analytics infrastructure.
        </p>
      </div>

      <div className="grid gap-6">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FreadomCaseStudies;
