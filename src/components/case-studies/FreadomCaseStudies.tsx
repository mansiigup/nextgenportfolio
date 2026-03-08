import { useState } from 'react';
import { 
  TrendingUp, Globe, Rocket, Settings, Palette, Brain, BarChart3,
  Cloud, Cog, Zap, Target, School, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Users, Layers
} from 'lucide-react';

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  shortTitle: string;
  roleTheme: string;
  timeline: string;
  context: string;
  problemMattered: string;
  myRole: string;
  decisions: string[];
  execution: string;
  metrics: { label: string; value: string }[];
  products: string[];
  features: string[];
  learnings: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'growth-portfolio',
    icon: TrendingUp,
    iconColor: 'from-emerald-500 to-teal-500',
    title: 'Scaling an EdTech Portfolio to 10,000+ Schools: 6 Verticals → 40M+ Revenue',
    shortTitle: 'Growth & Portfolio Expansion',
    roleTheme: 'Product Strategy + Growth + Portfolio Expansion',
    timeline: '2022 - Present',
    context: 'Freadom faced plateaued growth with limited product reach. The challenge was to expand beyond existing schools while maintaining product quality and user engagement across diverse student populations.',
    problemMattered: 'Reading literacy directly impacts educational outcomes. Stagnant growth meant fewer students could access quality reading education, while the business faced sustainability challenges.',
    myRole: 'As Product Lead, I owned the end-to-end product portfolio expansion strategy, including identifying growth verticals, designing distribution frameworks, and leading a cross-functional team.',
    decisions: [
      'Chose to launch 6 new verticals simultaneously rather than sequential rollout',
      'Prioritized stakeholder-driven distribution over direct-to-consumer approach',
      'Invested in localization infrastructure early despite short-term resource strain'
    ],
    execution: 'Implemented structured planning with bi-monthly release cycles. Built stakeholder rollout plans with school administrators as key partners. Created vertical-specific onboarding workflows and distribution-led product readiness frameworks.',
    metrics: [
      { label: 'GTM Growth', value: '10-20%' },
      { label: 'Schools', value: '10,000+' },
      { label: 'Students', value: '1.2M+' },
      { label: 'Verticals', value: '6' }
    ],
    products: ['fREADom Reading App', 'CBSE Reading App', 'Custom CMS Solutions', 'Assessment Platform', 'Live Classes Platform'],
    features: ['Vertical-specific onboarding and workflows', 'Packaging/pricing logic optimization', 'Distribution-led product readiness', 'Rollout plans and stakeholder enablement kits'],
    learnings: 'Scaling too fast can strain ops—next time I would build more buffer into stakeholder onboarding. The decision to go B2B-first proved right for sustainable growth.',
    tags: ['0→1', 'B2B SaaS', 'Growth Strategy', 'Portfolio']
  },
  {
    id: 'global-expansion',
    icon: Globe,
    iconColor: 'from-blue-500 to-indigo-500',
    title: 'Taking a School SaaS Global: Scaling into Finland, Korea, UAE & Morocco',
    shortTitle: 'New Region Expansion',
    roleTheme: 'Expansion PM (Growth + Partnerships + Product Scalability)',
    timeline: '2023 - Present',
    context: 'The product was built for Indian markets with limited scalability for international requirements. Each target market had unique curriculum standards, language needs, and regulatory considerations.',
    problemMattered: 'Global expansion represented a 10x opportunity but required fundamentally rethinking product architecture for multi-country operations.',
    myRole: 'I led the product vision for internationalization—defining localization requirements, partnering with country teams, and ensuring the core product could flex for diverse markets.',
    decisions: [
      'Built a modular content architecture instead of market-specific forks',
      'Partnered with local educational institutions rather than pure distribution deals',
      'Prioritized UAE & Finland first based on market readiness and partnership maturity'
    ],
    execution: 'Worked closely with localization teams for content adaptation. Conducted user research in each market. Built configurable feature flags and region-based customization for partners.',
    metrics: [
      { label: 'Countries', value: '4+' },
      { label: 'Localization', value: '100%' },
      { label: 'Partnerships', value: 'Strategic' },
      { label: 'Time to Market', value: '<6mo' }
    ],
    products: ['fREADom Reading App', 'Custom CMS', 'Assessment Platform'],
    features: ['Localization workflows (content + UX)', 'Region-based customization for partners', 'Scalability changes for multi-country operations', 'Localized positioning and partnership rollouts'],
    learnings: 'Cultural nuances in education are deeper than language. Finland\'s play-based learning approach required rethinking our entire content strategy.',
    tags: ['Global Expansion', 'Localization', 'Partnerships', 'Market Entry']
  },
  {
    id: 'release-engine',
    icon: Rocket,
    iconColor: 'from-orange-500 to-red-500',
    title: 'Building a 200+ Release Delivery Engine for a Multi-Platform EdTech Suite',
    shortTitle: 'Release Engine at Scale',
    roleTheme: 'Product Development + Operations + SDLC Ownership',
    timeline: '2022 - Present',
    context: 'Managing releases across multiple platforms (Android, iOS, Web) with a growing team required establishing robust release governance and delivery processes.',
    problemMattered: 'Without a structured release engine, feature delivery was unpredictable, quality was inconsistent, and the team struggled to maintain velocity across platforms.',
    myRole: 'I owned the entire SDLC process, leading a team of 9 members while establishing release governance, QA workflows, and structured prioritization frameworks.',
    decisions: [
      'Implemented phased rollout strategy with feature flags for risk mitigation',
      'Established platform-specific release cadences aligned with app store requirements',
      'Created cross-platform stability metrics and quality gates'
    ],
    execution: 'Built release governance frameworks, implemented rollout strategies with feature flags, established QA workflows and stability metrics, and created structured prioritization across all platforms.',
    metrics: [
      { label: 'Releases', value: '200+' },
      { label: 'Products', value: '5' },
      { label: 'Platforms', value: '3' },
      { label: 'Team Size', value: '9' }
    ],
    products: ['fREADom Reading App', 'CBSE Reading App', 'Teacher Platform', 'CMS Tools', 'Assessment Tools'],
    features: ['Release governance frameworks', 'Phased rollout with feature flags', 'QA workflows + stability metrics', 'Structured prioritization across platforms'],
    learnings: 'Release velocity is meaningless without stability. The investment in feature flags and quality gates paid dividends in reduced rollback frequency.',
    tags: ['SDLC', 'Release Management', 'Multi-Platform', 'Team Leadership']
  },
  {
    id: 'product-ops',
    icon: Settings,
    iconColor: 'from-slate-500 to-gray-600',
    title: 'Fixing Product Execution: Increasing Delivery Efficiency by 50% Across Teams',
    shortTitle: 'Product Ops Transformation',
    roleTheme: 'Product Ops + Process + Execution Excellence',
    timeline: '2022 - Present',
    context: 'Delivery efficiency was inconsistent, stakeholder visibility was limited, and teams lacked predictable execution cadences across the portfolio.',
    problemMattered: 'Poor execution predictability led to missed commitments, frustrated stakeholders, and reduced trust in the product organization.',
    myRole: 'I transformed product operations by establishing operational cadences, sprint/release closure frameworks, and stakeholder reporting systems across all product teams.',
    decisions: [
      'Implemented bi-monthly closure cycles for predictable delivery rhythm',
      'Built self-serve stakeholder dashboards instead of manual reporting',
      'Focused on delivery predictability over raw velocity metrics'
    ],
    execution: 'Created operational cadence systems, established sprint/release closure frameworks, built stakeholder reporting dashboards, and implemented delivery predictability improvements.',
    metrics: [
      { label: 'Efficiency', value: '+50%' },
      { label: 'Satisfaction', value: '80%' },
      { label: 'Velocity', value: '+30%' },
      { label: 'Closures', value: 'Bi-monthly' }
    ],
    products: ['All Products (Portfolio-wide)'],
    features: ['Operational cadence system', 'Sprint/release closure frameworks', 'Stakeholder reporting dashboards', 'Delivery predictability improvements'],
    learnings: 'Stakeholder satisfaction is often more about predictability than speed. Teams prefer realistic commitments over ambitious misses.',
    tags: ['Product Ops', 'Process', 'Efficiency', 'Stakeholder Management']
  },
  {
    id: 'ux-design',
    icon: Palette,
    iconColor: 'from-pink-500 to-rose-500',
    title: 'Redesigning the Reading Journey: Improving UX & Engagement by 90%',
    shortTitle: 'UX + Design Thinking',
    roleTheme: 'User Research + Design Thinking + UX Strategy',
    timeline: '2022 - Present',
    context: 'User research revealed significant journey mismatches between product flows and actual user behavior, leading to friction and drop-offs in the reading experience.',
    problemMattered: 'Poor UX was causing engagement drop-offs and limiting learning outcomes. The product needed to align with how students and teachers actually behave.',
    myRole: 'I led UX strategy initiatives, conducting persona-driven research, identifying journey mismatches, and overseeing iterative design improvements across all user-facing products.',
    decisions: [
      'Prioritized persona-driven redesign over feature-driven improvements',
      'Invested in no-code live feature experiments for rapid validation',
      'Focused on teacher workflow optimization as the key to student engagement'
    ],
    execution: 'Conducted persona-driven redesign, fixed journey mismatches, created wireframes and prototypes, ran iterative testing cycles, and implemented no-code live feature experiments.',
    metrics: [
      { label: 'UX Improvement', value: '90%' },
      { label: 'Usability', value: 'Enhanced' },
      { label: 'Engagement', value: 'Improved' },
      { label: 'Experiments', value: 'Multiple' }
    ],
    products: ['fREADom Reading App', 'CBSE Reading App', 'Teacher Workflows', 'Assessment Platform'],
    features: ['Persona-driven redesign', 'Journey mismatch fixes', 'Wireframes + prototypes + iterative testing', 'No-code live feature experiments'],
    learnings: 'In education products, teacher UX is the gateway to student engagement. Optimizing teacher workflows had 3x more impact than student-facing changes.',
    tags: ['UX Strategy', 'Design Thinking', 'User Research', 'Engagement']
  },
  {
    id: 'ai-innovation',
    icon: Brain,
    iconColor: 'from-violet-500 to-purple-500',
    title: 'Shipping 4 AI Models in Production: From Speech Fluency to AI Story Generation',
    shortTitle: 'AI/ML Innovation Suite',
    roleTheme: 'AI PM + Innovation + Differentiation',
    timeline: '2023 - Present',
    context: 'User engagement had plateaued, and one-size-fits-all content was not meeting diverse learner needs. The challenge was implementing AI personalization at scale without compromising the human touch.',
    problemMattered: 'Personalized learning is proven to improve outcomes 2-3x. Without AI-driven adaptation, we were leaving engagement and learning outcomes on the table.',
    myRole: 'I led the AI product strategy, defining use cases, partnering with research labs at Stanford, Carnegie Mellon, and IIT Bombay, and translating research prototypes into production-ready features.',
    decisions: [
      'Chose to integrate 4 AI models (STT, TTS, recommendations, story generation) as a suite',
      'Partnered with academic labs for cutting-edge capabilities rather than building in-house',
      'Implemented rigorous A/B testing with control groups before full rollout'
    ],
    execution: 'Defined clear success metrics for each AI feature. Ran experiments with Claude, GPT, and Gemini. Built feedback loops from teachers and parents. Established evaluation loops and quality improvement cycles.',
    metrics: [
      { label: 'AI Models', value: '4' },
      { label: 'Research Partners', value: '3' },
      { label: 'A/B Tests', value: '5+' },
      { label: 'Engagement Lift', value: '50-60%' }
    ],
    products: ['STT Fluency Model', 'TTS Model', 'Personalized Recommendation Engine', 'AI Story + Image Generation'],
    features: ['Model integration into product flows', 'Evaluation loops', 'A/B testing + control group frameworks', 'Quality improvements over time'],
    learnings: 'AI in education needs guardrails. We learned to build teacher override capabilities and transparency features. Parents want to understand how AI is helping their children.',
    tags: ['AI/ML', 'Personalization', 'Research', 'Innovation']
  },
  {
    id: 'data-analytics',
    icon: BarChart3,
    iconColor: 'from-amber-500 to-orange-500',
    title: 'Building a Data-Led Product Org: 50 Dashboards Driving 50–60% Engagement Growth',
    shortTitle: 'Data & Analytics Transformation',
    roleTheme: 'Product Analytics + Metrics + Growth Optimization',
    timeline: '2022 - Present',
    context: 'Product decisions were being made on intuition rather than data. No visibility into feature performance, user behavior patterns, or growth metrics was limiting our ability to iterate effectively.',
    problemMattered: 'Without data, we were flying blind. Product velocity suffered because we could not validate hypotheses quickly or understand what was actually driving engagement.',
    myRole: 'I owned the analytics strategy—defining key metrics, building dashboard infrastructure using Looker Studio and SQL, and creating a culture of data-driven decision making.',
    decisions: [
      'Built self-serve dashboards rather than analyst-gated reports',
      'Invested in event tracking infrastructure before dashboards',
      'Focused on actionable metrics over vanity metrics'
    ],
    execution: 'Mapped user journeys to identify critical tracking points. Built 50+ Looker Studio dashboards. Created weekly metrics reviews with cross-functional teams. Established insight-to-roadmap feedback loops.',
    metrics: [
      { label: 'Dashboards', value: '50+' },
      { label: 'Insights', value: '60+' },
      { label: 'Engagement', value: '+50-60%' },
      { label: 'Decisions', value: 'Data-Led' }
    ],
    products: ['Entire Product Suite'],
    features: ['Event tracking framework', 'Feature performance monitoring', 'SQL-based reporting', 'Insight-to-roadmap loops'],
    learnings: 'Dashboards are only valuable if people use them. I spent as much time on training and change management as building the infrastructure.',
    tags: ['Analytics', 'Data Strategy', 'SQL', 'Looker Studio']
  },
  {
    id: 'cloud-optimization',
    icon: Cloud,
    iconColor: 'from-cyan-500 to-blue-500',
    title: 'Scaling Sustainably: Reducing Cloud Spend by $10K and Securing $200K Credits',
    shortTitle: 'Cloud & Infrastructure Optimization',
    roleTheme: 'Product + Tech + Cost Strategy (FinOps)',
    timeline: '2022 - Present',
    context: 'Cloud costs were growing faster than revenue, and the infrastructure wasn\'t optimized for the actual usage patterns. The startup needed to scale sustainably.',
    problemMattered: 'Unsustainable cloud costs threatened the business runway. Without optimization, growth would actually accelerate cash burn rather than improve unit economics.',
    myRole: 'I partnered with engineering to own infrastructure cost strategy, including right-sizing resources, securing startup credits, and improving operational efficiency.',
    decisions: [
      'Prioritized right-sizing over feature work for a focused sprint',
      'Pursued startup credit programs across AWS, GCP, and DigitalOcean',
      'Built monitoring for cost-per-user metrics to track optimization impact'
    ],
    execution: 'Led right-sizing initiatives for cloud resources, implemented scalability optimizations, secured $200K in startup credits, and improved overall operational efficiency.',
    metrics: [
      { label: 'Cost Saved', value: '$10K' },
      { label: 'Credits', value: '$200K' },
      { label: 'Efficiency', value: 'Improved' },
      { label: 'Scalability', value: 'Optimized' }
    ],
    products: ['Platform + Infrastructure (All Apps)'],
    features: ['Right-sizing cloud resources', 'Scalability optimization', 'Improved operational efficiency', 'Cost monitoring dashboards'],
    learnings: 'Cloud optimization is product work. Understanding usage patterns requires the same user research mindset as feature development.',
    tags: ['FinOps', 'Cloud', 'Cost Optimization', 'Infrastructure']
  },
  {
    id: 'tech-modernization',
    icon: Cog,
    iconColor: 'from-gray-500 to-slate-600',
    title: 'Modernizing an EdTech Platform: 60% Tech Debt Reduction Through Integration Redesign',
    shortTitle: 'Tech Stack & API Modernization',
    roleTheme: 'Platform PM + Architecture + Scalability',
    timeline: '2022 - Present',
    context: 'The tech stack had accumulated significant debt over years of rapid feature development, slowing down innovation and causing integration headaches.',
    problemMattered: 'Tech debt was the silent killer of velocity. Every new feature took 2-3x longer than it should, and integration bugs were a constant source of issues.',
    myRole: 'I led platform modernization initiatives, partnering with engineering to prioritize tech debt reduction, redesign integrations, and enable faster feature innovation.',
    decisions: [
      'Dedicated 30% of sprints to tech debt reduction rather than ad-hoc fixes',
      'Prioritized integration mapping before any redesign work',
      'Removed redundant tooling before adding new capabilities'
    ],
    execution: 'Conducted integration mapping and redesign, improved API workflows, removed redundant tooling, and enabled faster feature innovation through cleaner architecture.',
    metrics: [
      { label: 'Optimization', value: '40%' },
      { label: 'Tech Debt', value: '-60%' },
      { label: 'Velocity', value: 'Improved' },
      { label: 'Integrations', value: 'Streamlined' }
    ],
    products: ['CMS + App Ecosystem', 'Integrations Across Platforms'],
    features: ['Integration mapping and redesign', 'API workflow improvements', 'Removal of redundant tooling', 'Enabling faster feature innovation'],
    learnings: 'Tech debt reduction requires the same PM rigor as feature development. Treat it as a product initiative with clear metrics and milestones.',
    tags: ['Platform', 'Tech Debt', 'Architecture', 'Modernization']
  },
  {
    id: 'automation',
    icon: Zap,
    iconColor: 'from-yellow-500 to-amber-500',
    title: 'Automating 70% of Operational Workflows to Accelerate Delivery and Growth Response',
    shortTitle: 'Workflow Automation',
    roleTheme: 'Automation + Ops + Product Scalability',
    timeline: '2022 - Present',
    context: 'Manual operational workflows were consuming significant team bandwidth and slowing down response times to growth opportunities and issues.',
    problemMattered: 'Manual processes don\'t scale. As the business grew, operational overhead was growing faster than headcount, threatening our ability to respond quickly.',
    myRole: 'I identified automation opportunities across delivery and partner operations, designed automation frameworks, and oversaw implementation of operational trigger systems.',
    decisions: [
      'Focused on high-frequency, low-complexity workflows first for quick wins',
      'Built dashboards alongside automations for visibility and debugging',
      'Designed trigger systems that could be extended by non-technical team members'
    ],
    execution: 'Built automation frameworks, created dashboards for execution and growth response, implemented operational trigger systems, and improved metric visibility.',
    metrics: [
      { label: 'Automation', value: '70%' },
      { label: 'Response Time', value: 'Faster' },
      { label: 'Visibility', value: 'Enhanced' },
      { label: 'Scalability', value: 'Improved' }
    ],
    products: ['Delivery Operations', 'Partner Operations', 'Internal Dashboards'],
    features: ['Automation frameworks', 'Dashboards for execution + growth response', 'Operational trigger systems', 'Self-serve workflow configuration'],
    learnings: 'The best automations are invisible. If done right, the team doesn\'t even notice—things just work faster.',
    tags: ['Automation', 'Operations', 'Efficiency', 'Scalability']
  },
  {
    id: 'impact-evaluation',
    icon: Target,
    iconColor: 'from-green-500 to-emerald-500',
    title: 'Proving Learning Outcomes: Baseline vs Endline Reading Impact for 23,000 Students',
    shortTitle: 'Impact Evaluation Study',
    roleTheme: 'Impact + Measurement + Education Outcomes',
    timeline: '2023 - Present',
    context: 'Schools and partners needed evidence that the product actually improved reading outcomes. Anecdotal success stories weren\'t enough for large-scale adoption decisions.',
    problemMattered: 'In education, impact is the ultimate product metric. Without rigorous evidence, scaling partnerships and defending pricing was increasingly difficult.',
    myRole: 'I designed and led the impact evaluation study, including assessment instrumentation, baseline/endline measurement workflows, and reporting systems.',
    decisions: [
      'Invested in rigorous methodology even though it was slower and more expensive',
      'Built assessment instrumentation directly into the product rather than external tools',
      'Created stakeholder-friendly reporting alongside academic-style analysis'
    ],
    execution: 'Designed baseline vs endline measurement frameworks, built assessment instrumentation into the product, created comprehensive reporting systems, and managed study execution across 23,000 students.',
    metrics: [
      { label: 'Students', value: '23,000' },
      { label: 'Measurement', value: 'Baseline→Endline' },
      { label: 'Reporting', value: 'Comprehensive' },
      { label: 'Evidence', value: 'Rigorous' }
    ],
    products: ['fREADom Reading App', 'Reading Assessment Platform'],
    features: ['Assessment instrumentation', 'Reporting systems', 'Baseline-endline measurement workflows', 'Stakeholder dashboards'],
    learnings: 'Impact studies are as much about storytelling as methodology. The best data is useless if stakeholders can\'t understand and act on it.',
    tags: ['Impact', 'Measurement', 'Education Outcomes', 'Research']
  },
  {
    id: 'pisa-assessment',
    icon: School,
    iconColor: 'from-indigo-500 to-blue-600',
    title: 'Delivering PISA-Style Assessments Across 100 Schools: Product + Ops Execution',
    shortTitle: 'PISA Assessment at Scale',
    roleTheme: 'Program Delivery + Productization + Operational Scale',
    timeline: '2023 - Present',
    context: 'Schools needed standardized assessment capabilities aligned with international benchmarks like PISA. Delivering this at scale required both product and operational excellence.',
    problemMattered: 'Standardized assessments are gatekeepers for school partnerships. Without PISA-aligned capabilities, we were excluded from key enterprise opportunities.',
    myRole: 'I led the end-to-end program delivery, including scheduling and coordination workflows, reporting automation, and stakeholder dashboard development.',
    decisions: [
      'Built assessment delivery as a product feature rather than a one-off service',
      'Invested in reporting automation to make the program scalable',
      'Created stakeholder dashboards that schools could self-serve'
    ],
    execution: 'Designed scheduling and coordination workflows, built reporting automation, created stakeholder dashboards, and managed operational execution across 100 schools.',
    metrics: [
      { label: 'Schools', value: '100' },
      { label: 'Assessment', value: 'PISA-Style' },
      { label: 'Reporting', value: 'Automated' },
      { label: 'Execution', value: 'Scaled' }
    ],
    products: ['Assessment Platform', 'CMS + Reporting', 'School Ops Workflows'],
    features: ['Scheduling and coordination workflows', 'Reporting automation', 'Stakeholder dashboards', 'Scalable delivery infrastructure'],
    learnings: 'Program delivery at scale is a product problem. The key is building infrastructure that makes each additional school marginal rather than additive effort.',
    tags: ['Assessment', 'Program Delivery', 'Operations', 'Scale']
  }
];

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = study.icon;

  return (
    <div 
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
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
            <p className="text-sm text-muted-foreground mt-1">{study.roleTheme} • {study.timeline}</p>
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

      </div>
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
          As Product Lead, I drive product strategy, AI integration, global expansion, analytics infrastructure, 
          and operational excellence across the entire product portfolio.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">12 Impact Studies</span>
          <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">10-20% GTM Growth</span>
          <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">200+ Releases</span>
          <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">4 Countries</span>
        </div>
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
