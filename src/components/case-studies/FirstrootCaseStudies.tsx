import { useState } from 'react';
import { 
  TrendingUp, Users, Bell, Settings, Lightbulb, Heart,
  ChevronDown, ChevronUp, Target, Zap, CheckCircle2, 
  ArrowRight, FileText, Rocket, BarChart3, Brain
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  shortTitle: string;
  role: string;
  timeline: string;
  context: string;
  problem: string;
  keyChallenge: string;
  goal: string;
  approach: string[];
  solutions: string[];
  results: { label: string; value: string }[];
  learnings: string[];
  nextSteps: string[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'gtm-growth',
    icon: TrendingUp,
    iconColor: 'from-emerald-500 to-teal-500',
    title: 'Scaling FirstRoot in California: Increasing Product Adoption by 25% Across 5 Schools',
    shortTitle: 'Increasing Product Adoption by 25%',
    role: 'Product Manager (Growth + GTM + Product Strategy)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'FirstRoot is a B2B2C SaaS platform that teaches financial literacy through participatory budgeting in K-12 schools. Schools adopt the program, teachers implement it, and students engage through the app.',
    problem: 'Despite strong product value and early pilot success, adoption growth in California was slower than expected.',
    keyChallenge: 'The product demonstrated clear effectiveness, and scaling adoption presented an opportunity to focus on stronger distribution through community awareness, trust-building, and clearer outcome communication with key stakeholders such as teachers, principals, and PTAs.',
    goal: 'Increase adoption across new CA schools and improve pipeline conversion from interest → pilot → implementation.',
    approach: [
      'Identified the real growth blocker through market and competitor positioning analysis',
      'Mapped existing financial literacy offerings and key differentiators',
      'Designed lightweight GTM execution plan with stakeholder-specific messaging',
      'Created community awareness campaigns that made the product "feel familiar"'
    ],
    solutions: [
      'Positioning improvements for CA school ecosystem',
      'Campaign messaging aligned to stakeholder motivations',
      'A repeatable adoption playbook usable across schools'
    ],
    results: [
      { label: 'Adoption Increase', value: '25%' },
      { label: 'New Schools', value: '5' },
      { label: 'Pipeline Velocity', value: 'Improved' },
      { label: 'Trust Friction', value: 'Reduced' }
    ],
    learnings: [
      'In K-12 SaaS, trust and awareness are often the real product funnel',
      'Adoption is not only a product problem — it\'s a positioning and stakeholder alignment problem',
      'A strong GTM playbook can scale faster than custom outreach'
    ],
    nextSteps: [
      'Create a referral loop: teacher champions → new schools',
      'Build school-level reporting dashboards to strengthen renewal + district expansion'
    ],
    tags: ['GTM', 'Growth', 'K-12 SaaS', 'Adoption']
  },
  {
    id: 'nps-improvement',
    icon: Heart,
    iconColor: 'from-rose-500 to-pink-500',
    title: 'Improving NPS by 15% by Redesigning Learning Flows for Teachers and Students',
    shortTitle: 'Improving NPS by 15%',
    role: 'Product Manager (Experience + UX + Data-Informed Decision Making)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'NPS and program satisfaction were good but inconsistent. Feedback showed users believed in the mission but struggled with parts of the in-app learning journey.',
    problem: 'Teachers felt uncertainty while running the program live in classrooms. Students sometimes didn\'t understand what to do next. Some learning steps felt unclear or too complex.',
    keyChallenge: 'The in-app learning journey wasn\'t aligned with real classroom behavior and expectations.',
    goal: 'Increase NPS and improve program experience while reducing drop-offs in learning journey.',
    approach: [
      'Journey mapping for teachers (setup → facilitation → tracking → completion)',
      'Journey mapping for students (join → explore → propose → vote → reflect)',
      'Feedback + data synthesis using teacher feedback themes and funnel drop-off analysis',
      'Prioritization using impact vs effort, frequency, and severity frameworks'
    ],
    solutions: [
      'Clearer in-app step guidance for each stage of the program',
      'Reduced complexity in proposal creation flow',
      'Improved navigation across program phases',
      'Refinement of learning flow sequencing to match classroom behavior'
    ],
    results: [
      { label: 'NPS Improvement', value: '15%' },
      { label: 'Teacher Satisfaction', value: 'Higher' },
      { label: 'Student Clarity', value: 'Improved' },
      { label: 'Completion Flow', value: 'Optimized' }
    ],
    learnings: [
      'In education SaaS, UX must support real-world classroom behavior, not just "ideal app flow"',
      'A small confusion moment in week 1 becomes a full program failure by week 3',
      'Improving learning flow improves NPS more than adding new features'
    ],
    nextSteps: [
      'Add teacher "program health" indicators',
      'Build micro-guides and in-app teacher support'
    ],
    tags: ['UX', 'NPS', 'Learning Design', 'User Research']
  },
  {
    id: 'engagement',
    icon: Bell,
    iconColor: 'from-amber-500 to-orange-500',
    title: 'Increasing Active Engagement by 20% Through Notification Workflow Redesign',
    shortTitle: 'Boosting Engagement by 20%',
    role: 'Product Manager (Engagement + Retention + Lifecycle Messaging)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'Active engagement was not growing consistently. Students often engaged strongly in the beginning but activity dropped after initial sessions.',
    problem: 'Engagement wasn\'t dropping due to lack of interest — it dropped because users missed key actions, didn\'t know the next step, and weren\'t nudged at the right time.',
    keyChallenge: 'Generic reminders weren\'t contextual enough to drive meaningful re-engagement.',
    goal: 'Improve active engagement and return sessions while reducing "missed actions" across the program.',
    approach: [
      'Diagnosed engagement drop-offs through stage-wise analysis',
      'Identified missed action points (proposal submission, voting, reflections)',
      'Analyzed timing gaps in communication',
      'Designed notification logic aligned with user behavior and program stages'
    ],
    solutions: [
      'Redesigned system-triggered communication',
      'Improved sequencing and timing of notifications',
      'Reduced irrelevant reminders',
      'Ensured messages supported the classroom timeline'
    ],
    results: [
      { label: 'Engagement Increase', value: '20%' },
      { label: 'Participation', value: 'Continuous' },
      { label: 'Completion Rates', value: 'Better' },
      { label: 'Stalled Users', value: 'Fewer' }
    ],
    learnings: [
      'Engagement is not a feature — it\'s a system',
      'The best notifications are contextual and respectful',
      'Timing matters more than frequency'
    ],
    nextSteps: [
      'Personalization by grade level',
      'Teacher-controlled "classroom notification schedules"'
    ],
    tags: ['Engagement', 'Notifications', 'Retention', 'Lifecycle']
  },
  {
    id: 'product-ops',
    icon: Settings,
    iconColor: 'from-blue-500 to-indigo-500',
    title: 'Reducing Teacher Implementation Friction Through Workflow and UX Enhancements',
    shortTitle: 'Reducing Implementation Friction',
    role: 'Product Manager (Product Ops + Execution + Cross-Functional Delivery)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'Even after adoption, success depended on implementation. In schools, implementation is the product. Teachers have limited time and cannot tolerate unclear or heavy workflows.',
    problem: 'Setup steps felt complex, teachers struggled to manage program stages, and some workflows required too much coordination.',
    keyChallenge: 'Operational bottlenecks were preventing successful program execution in classrooms.',
    goal: 'Reduce friction for teachers implementing the program and improve program execution success and consistency.',
    approach: [
      'Identified operational bottlenecks through teacher feedback and observation',
      'Partnered with internal ops stakeholders, design, and engineering',
      'Followed iterative delivery approach with rapid testing',
      'Maintained continuous feedback loops for validation'
    ],
    solutions: [
      'Simplified teacher workflows',
      'Improved clarity of program execution steps',
      'Reduced unnecessary actions required to move between stages',
      'Shipped UX enhancements that supported classroom reality'
    ],
    results: [
      { label: 'Implementation', value: 'Simplified' },
      { label: 'Execution Quality', value: 'Improved' },
      { label: 'Adoption Confidence', value: 'Increased' },
      { label: 'Post-Onboarding Drop-off', value: 'Reduced' }
    ],
    learnings: [
      'In EdTech SaaS, product ops is part of product design',
      'Teachers need workflows that respect their time',
      'Implementation success drives retention more than feature expansion'
    ],
    nextSteps: [
      'Add a teacher dashboard for program tracking',
      'Build "guided setup" onboarding inside the product'
    ],
    tags: ['Product Ops', 'UX', 'Workflows', 'EdTech']
  },
  {
    id: 'web3-vision',
    icon: Lightbulb,
    iconColor: 'from-violet-500 to-purple-500',
    title: 'Shaping FirstRoot\'s Product Vision Through Web3 Market Research and Strategic Updates',
    shortTitle: 'Web3 Research → Product Vision',
    role: 'Product Manager (Strategy + Market Research + Roadmapping)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'FirstRoot had a strong core product, but the market was evolving fast. Financial literacy for youth was expanding into digital assets, blockchain awareness, new economic systems, and changing definitions of "money".',
    problem: 'The product vision needed to stay future-ready as the financial literacy landscape evolved.',
    keyChallenge: 'Translating emerging tech trends into educationally relevant and school-safe product opportunities.',
    goal: 'Expand roadmap to align with future trends and translate research into actionable product direction.',
    approach: [
      'Conducted 10 market research studies on Web3 impact on youth financial literacy',
      'Explored how schools view emerging tech topics',
      'Synthesized findings into a product vision update',
      'Prioritized roadmap opportunities aligned with business value'
    ],
    solutions: [
      'Created an expanded product vision narrative',
      'Shipped 2 strategic product updates driven by research',
      'Aligned roadmap with business and emerging industry signals'
    ],
    results: [
      { label: 'Research Studies', value: '10' },
      { label: 'Product Updates', value: '2' },
      { label: 'Roadmap Clarity', value: 'Improved' },
      { label: 'Leadership Alignment', value: 'Achieved' }
    ],
    learnings: [
      'Market research is only valuable when it becomes product decisions',
      'Future-proofing in EdTech requires balancing innovation + trust',
      'Emerging tech must be framed through learning outcomes, not hype'
    ],
    nextSteps: [
      'Run pilot modules for new curriculum topics',
      'Build educator-friendly framing for emerging tech literacy'
    ],
    tags: ['Strategy', 'Web3', 'Research', 'Vision']
  },
  {
    id: 'b2b2c-design',
    icon: Users,
    iconColor: 'from-cyan-500 to-blue-500',
    title: 'Designing for B2B2C: Balancing Teacher Success and Student Engagement',
    shortTitle: 'B2B2C Multi-Persona Design',
    role: 'Product Manager (Multi-Persona UX + Product Strategy)',
    timeline: 'Oct 2021 – Sep 2022',
    context: 'FirstRoot is not a single-user product. If we optimize only for students, teachers struggle to implement and schools churn. If we optimize only for teachers, students disengage and outcomes weaken.',
    problem: 'The core challenge was building a product that worked for both teachers and students simultaneously.',
    keyChallenge: 'Balancing the needs of facilitators (teachers) with the engagement needs of end-users (students).',
    goal: 'Improve adoption and retention by balancing both personas while ensuring teacher workflows enable student engagement.',
    approach: [
      'Persona mapping: Teacher (facilitator, time-poor, outcome-driven), Student (engagement-driven, needs clarity)',
      'Admin/PTA analysis: trust + outcomes + safety requirements',
      'Journey alignment across setup, participation, monitoring, and outcomes'
    ],
    solutions: [
      'Learning flows that supported classroom facilitation',
      'Engagement nudges that supported student momentum',
      'Workflow changes that reduced teacher burden'
    ],
    results: [
      { label: 'Experience Quality', value: 'Improved' },
      { label: 'Retention', value: 'Stronger' },
      { label: 'NPS', value: 'Improved' },
      { label: 'Engagement', value: 'Balanced' }
    ],
    learnings: [
      'B2B2C success is about "teacher enablement + student delight"',
      'In EdTech, the teacher is the activation engine',
      'Program outcomes are the shared value metric across personas'
    ],
    nextSteps: [
      'Build persona-specific onboarding flows',
      'Create teacher success metrics dashboard'
    ],
    tags: ['B2B2C', 'Multi-Persona', 'UX Strategy', 'EdTech']
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
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.iconColor}`} />
      
      {/* Header */}
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

        {/* Results Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {study.results.map((result, idx) => (
            <div 
              key={idx} 
              className="text-center p-3 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${study.iconColor} bg-clip-text text-transparent`}>
                {result.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
            </div>
          ))}
        </div>

        {/* Context */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm">Context & Challenge</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{study.context}</p>
        </div>

        {/* Problem */}
        <div className="p-4 bg-accent/50 rounded-xl mb-4">
          <p className="text-sm text-foreground font-medium mb-1">🎯 Key Challenge:</p>
          <p className="text-sm text-muted-foreground">{study.keyChallenge}</p>
        </div>

      </div>
    </div>
  );
};

const FirstrootCaseStudies = () => {
  return (
    <div className="space-y-6">
      {/* Company Header */}
      <div className="p-6 bg-gradient-to-r from-primary/10 via-accent to-background rounded-2xl border border-border">
        <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-primary-foreground">FR</span>
        </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Firstroot Inc.</h3>
            <p className="text-muted-foreground">B2B2C SaaS • Financial Literacy • K-12 Education</p>
            <p className="text-sm text-primary mt-1">Oct 2021 – Sep 2022 • Product Manager</p>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          FirstRoot teaches financial literacy through participatory budgeting in K-12 schools. 
          As a Product Manager, I drove growth, improved user experience, and shaped product strategy 
          across multiple initiatives.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-6">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FirstrootCaseStudies;
