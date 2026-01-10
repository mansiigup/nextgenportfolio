import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CaseStudyProps {
  title: string;
  company: string;
  period: string;
  context: string;
  problemMattered: string;
  role: string;
  decisions: string[];
  execution: string;
  metrics: { label: string; value: string }[];
  learnings: string;
  tags: string[];
}

const CaseStudyCard = ({
  title,
  company,
  period,
  context,
  problemMattered,
  role,
  decisions,
  execution,
  metrics,
  learnings,
  tags,
}: CaseStudyProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">
          {company} • {period}
        </p>

        {/* Metrics Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.slice(0, 4).map((metric) => (
            <div key={metric.label} className="text-center p-3 bg-background rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Context */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Context & Problem</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{context}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
        >
          {isExpanded ? 'Show less' : 'Read full case study'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 md:px-8 pb-8 border-t border-border pt-6 space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why This Problem Mattered</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{problemMattered}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">My Role & Ownership</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{role}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Decisions & Trade-offs</h4>
            <ul className="space-y-2">
              {decisions.map((decision, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Execution Approach</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{execution}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Learnings & Reflections</h4>
            <p className="text-muted-foreground text-sm leading-relaxed italic">{learnings}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyCard;
