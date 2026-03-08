import { useState, useEffect } from 'react';
import { Target, BarChart3, Palette, Rocket, LineChart, RefreshCw, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const PHASES = [
  {
    id: 'discover',
    label: 'Discover',
    devLabel: 'Scope',
    number: '01',
    icon: Target,
    stratDesc: 'Understand the landscape — stakeholders, context, root problems.',
    devDesc: 'Define project scope, technical constraints, and user needs.',
    merged: 'Map the full problem space: business goals, user needs, and technical boundaries — before a single line is written.',
    questions: [
      'What is the core problem this product/strategy needs to solve?',
      'Who are the key stakeholders and what are their success criteria?',
      'What technical constraints or dependencies exist?',
      'What does the competitive or market landscape look like?',
    ],
    outputs: ['Problem Statement', 'Stakeholder Map', 'Technical Scope Doc', 'Constraint Register'],
  },
  {
    id: 'define',
    label: 'Define',
    devLabel: 'Plan',
    number: '02',
    icon: BarChart3,
    stratDesc: 'Set measurable goals, KPIs, and strategic direction.',
    devDesc: 'Architecture decisions, tech stack, sprint plan, milestones.',
    merged: 'Align business goals with technical architecture — so what gets built actually matches what success requires.',
    questions: [
      'What does success look like in 30, 60, and 90 days?',
      'What tech stack and architecture best serves these goals?',
      'What are the must-haves vs. nice-to-haves for v1?',
      'What are the biggest risks to delivery on time and on scope?',
    ],
    outputs: ['OKR / KPI Framework', 'Architecture Decision Record', 'Sprint Roadmap', 'Risk Register'],
  },
  {
    id: 'design',
    label: 'Design',
    devLabel: 'Build',
    number: '03',
    icon: Palette,
    stratDesc: 'Translate goals into a structured strategic roadmap.',
    devDesc: 'Active development — features, components, integrations.',
    merged: 'Build the right thing: strategic design decisions that shape every technical choice from interface to infrastructure.',
    questions: [
      'What is the core user journey and how does it map to business value?',
      'Which features create the most strategic leverage — what ships first?',
      'What technical debt are we consciously accepting, and why?',
      'How does this design hold up against the success criteria defined earlier?',
    ],
    outputs: ['Feature Roadmap', 'System Design Doc', 'UX Flow', 'Technical Spec'],
  },
  {
    id: 'execute',
    label: 'Execute',
    devLabel: 'Test',
    number: '04',
    icon: Rocket,
    stratDesc: 'Deliver with discipline — coordinated, tracked, accountable.',
    devDesc: 'QA, integration testing, performance, security validation.',
    merged: 'Validate both the build and the strategy: does what we shipped actually solve what we set out to solve?',
    questions: [
      'Does the built product match the original requirements and acceptance criteria?',
      'What bugs, performance issues, or edge cases were found in testing?',
      'Are we tracking toward the KPIs defined in the Define phase?',
      'What feedback from early users or testers challenges our assumptions?',
    ],
    outputs: ['Test Results Report', 'Bug & Issue Log', 'Performance Benchmark', 'Stakeholder Update'],
  },
  {
    id: 'measure',
    label: 'Measure',
    devLabel: 'Deploy',
    number: '05',
    icon: LineChart,
    stratDesc: 'Evaluate results honestly against defined goals.',
    devDesc: 'Staged rollout, monitoring, incident response, observability.',
    merged: 'Ship and watch: deployment strategy is a strategic decision — how you launch shapes what you can learn from it.',
    questions: [
      'What deployment strategy best manages risk?',
      'What metrics and alerts are in place to detect issues post-launch?',
      'How are we measuring user behaviour against success criteria?',
      'What is the rollback plan if something goes critically wrong?',
    ],
    outputs: ['Deployment Plan', 'Monitoring Dashboard', 'Launch Metrics Report', 'Incident Runbook'],
  },
  {
    id: 'iterate',
    label: 'Iterate',
    devLabel: 'Improve',
    number: '06',
    icon: RefreshCw,
    stratDesc: 'Refine the strategy based on real-world data.',
    devDesc: 'Hotfixes, performance improvements, backlog reprioritisation.',
    merged: 'Close the loop: real data reshapes the next cycle\'s strategy — this is where compounding improvement begins.',
    questions: [
      'What did the data tell us that our assumptions got wrong?',
      'Which features drove the most strategic value — and which fell flat?',
      'What should be added, changed, or removed in the next cycle?',
      'How does the strategy need to evolve based on what we now know?',
    ],
    outputs: ['Retrospective Report', 'Updated Backlog', 'Revised Strategy Brief', 'Next Cycle Plan'],
  },
];

// Phase colors using CSS custom properties for theming
const PHASE_COLORS = [
  { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/20', badge: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { bg: 'from-yellow-500/20 to-amber-600/10', border: 'border-yellow-500/30', text: 'text-yellow-400', glow: 'shadow-yellow-500/20', badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { bg: 'from-emerald-500/20 to-green-600/10', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'shadow-emerald-500/20', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { bg: 'from-violet-500/20 to-purple-600/10', border: 'border-violet-500/30', text: 'text-violet-400', glow: 'shadow-violet-500/20', badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
  { bg: 'from-cyan-500/20 to-teal-600/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'shadow-cyan-500/20', badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
];

const MergedCycleShowcase = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [dialogPhase, setDialogPhase] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % PHASES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-10 mb-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wider uppercase">The Unified Framework</span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          Strategy <span className="text-primary">×</span> Development
        </h3>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Six phases where strategic thinking and technical execution merge into one continuous product-building cycle
        </p>
      </div>

      {/* Animated Loop SVG */}
      <div className="flex justify-center mb-8">
        <svg width="320" height="100" viewBox="0 0 320 100" className="overflow-visible">
          {PHASES.map((phase, i) => {
            const x = 30 + i * 54;
            const y = 50;
            const isActive = i === activePhase;
            const colors = ['#f97316', '#eab308', '#10b981', '#3b82f6', '#8b5cf6', '#06b6d4'];
            return (
              <g key={phase.id} onClick={() => { setActivePhase(i); setExpandedPhase(i === expandedPhase ? null : i); }} className="cursor-pointer">
                {i < PHASES.length - 1 && (
                  <line x1={x + 16} y1={y} x2={x + 38} y2={y} stroke={colors[i]} strokeWidth="2" opacity="0.3" strokeDasharray="4 2" />
                )}
                {i === PHASES.length - 1 && (
                  <path d={`M ${x + 16} ${y} Q ${x + 40} ${y}, ${x + 40} ${y - 20} Q ${x + 40} ${y - 40}, ${x - 20} ${y - 40} L 30 ${y - 40} Q 10 ${y - 40}, 10 ${y - 20} Q 10 ${y}, 30 ${y}`}
                    stroke="url(#loopGrad)" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 2" />
                )}
                <circle cx={x} cy={y} r={isActive ? 16 : 12} fill={isActive ? colors[i] : 'transparent'} stroke={colors[i]}
                  strokeWidth={isActive ? 0 : 2} opacity={isActive ? 1 : 0.5}
                  className="transition-all duration-500"
                  style={isActive ? { filter: `drop-shadow(0 0 8px ${colors[i]}60)` } : {}} />
                <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
                  fontSize={isActive ? 9 : 8} fill={isActive ? 'white' : colors[i]}
                  fontWeight={isActive ? 700 : 400} className="pointer-events-none select-none">
                  {phase.number}
                </text>
                <text x={x} y={y + 30} textAnchor="middle" fontSize="8" fill={isActive ? colors[i] : 'currentColor'}
                  className={`pointer-events-none select-none ${isActive ? '' : 'text-muted-foreground'}`}
                  fontWeight={isActive ? 600 : 400}>
                  {phase.label}
                </text>
                <text x={x} y={y + 40} textAnchor="middle" fontSize="7" className="pointer-events-none select-none text-muted-foreground" fill="currentColor" opacity="0.5">
                  × {phase.devLabel}
                </text>
              </g>
            );
          })}
          <defs>
            <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Phase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PHASES.map((phase, i) => {
          const colors = PHASE_COLORS[i];
          const isActive = i === activePhase;
          const isExpanded = i === expandedPhase;
          const Icon = phase.icon;

          return (
            <div
              key={phase.id}
              className={`relative rounded-xl border backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden group
                ${isActive ? `${colors.border} shadow-lg ${colors.glow}` : 'border-border/50 hover:border-border'}
                ${isExpanded ? 'ring-1 ring-primary/20' : ''}
              `}
              onClick={() => setExpandedPhase(isExpanded ? null : i)}
            >
              {/* Phase number watermark */}
              <div className={`absolute -top-4 -right-2 text-7xl font-bold pointer-events-none select-none transition-opacity duration-500 ${isActive ? 'opacity-10' : 'opacity-[0.04]'} ${colors.text}`}>
                {phase.number}
              </div>

              {/* Card content */}
              <div className={`relative p-5 bg-gradient-to-br ${colors.bg}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? `bg-gradient-to-br ${colors.bg} border ${colors.border}` : 'bg-card border border-border'}`}>
                      <Icon className={`w-4.5 h-4.5 ${isActive ? colors.text : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isActive ? 'text-foreground' : 'text-foreground/80'}`}>
                        {phase.label} <span className={colors.text}>×</span> {phase.devLabel}
                      </h4>
                      <span className={`text-[10px] tracking-wider uppercase ${colors.text} opacity-70`}>Phase {phase.number}</span>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => { e.stopPropagation(); setExpandedPhase(isExpanded ? null : i); }}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Dual lane pills */}
                <div className="flex gap-2 mb-3">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border ${colors.badge}`}>Strategy: {phase.label}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-card text-muted-foreground">Dev: {phase.devLabel}</span>
                </div>

                {/* Merged description */}
                <p className="text-xs text-muted-foreground leading-relaxed">{phase.merged}</p>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Strategy & Dev layers */}
                    <div className="grid grid-cols-1 gap-2">
                      <div className={`p-3 rounded-lg bg-card/50 border ${colors.border}`}>
                        <span className={`text-[10px] tracking-wider uppercase ${colors.text} font-medium`}>◎ Strategy Layer</span>
                        <p className="text-xs text-muted-foreground mt-1">{phase.stratDesc}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-card/50 border border-border">
                        <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-medium">⬡ Dev Layer</span>
                        <p className="text-xs text-muted-foreground mt-1">{phase.devDesc}</p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-muted-foreground mb-2 block">Deliverables</span>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.outputs.map((output) => (
                          <span key={output} className={`text-[10px] px-2.5 py-1 rounded-full border ${colors.badge}`}>
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View questions button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); setDialogPhase(i); }}
                      className={`w-full text-xs py-2 rounded-lg border ${colors.border} ${colors.text} hover:bg-card/50 transition-colors font-medium`}
                    >
                      View Guiding Questions →
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Questions Dialog */}
      <Dialog open={dialogPhase !== null} onOpenChange={() => setDialogPhase(null)}>
        <DialogContent className="max-w-md">
          {dialogPhase !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif">
                  {PHASES[dialogPhase].label} × {PHASES[dialogPhase].devLabel}
                </DialogTitle>
                <DialogDescription>
                  Guiding questions for Phase {PHASES[dialogPhase].number}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 mt-2">
                {PHASES[dialogPhase].questions.map((q, qi) => (
                  <div key={qi} className={`flex gap-3 p-3 rounded-lg bg-accent/30 border border-border/50`}>
                    <span className={`text-xs font-bold ${PHASE_COLORS[dialogPhase].text} shrink-0 mt-0.5`}>0{qi + 1}</span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MergedCycleShowcase;
