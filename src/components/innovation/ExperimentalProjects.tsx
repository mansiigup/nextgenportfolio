import { FlaskConical, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import nipunSetuLogo from '@/assets/nipun-setu-logo.png';

interface Project {
  title: string;
  description: string;
  status: string;
  tech: string[];
  learnings: string;
  accentColor: string;
  link?: string;
  logo?: string;
  personaLink?: string;
}

const projects: Project[] = [
  {
    title: 'Nipun Setu',
    description: 'An AI-powered career navigation platform that builds personalised learning roadmaps for 8 distinct user personas — from fresh graduates to career pivoters to founders — solving the universal "navigation problem" where 500M+ people need to upskill but 96% drop out of generic courses.',
    status: 'Live',
    tech: ['React', 'AI/LLM', 'EdTech', 'Career Navigation'],
    learnings: 'The world doesn\'t have a learning problem — it has a navigation problem. Generic courses fail because they ignore context: a BBA graduate pivoting to analytics needs a fundamentally different path than a CS graduate.',
    accentColor: 'border-l-ring',
    link: 'https://nipun-setu.lovable.app/',
    logo: nipunSetuLogo,
    personaLink: '/documents/nipunsetu_personas.html',
  },
  {
    title: 'Product Metrics Dashboard Template',
    description: 'An open-source Looker Studio template for product teams to quickly set up North Star metrics, cohort analysis, and funnel visualization.',
    status: 'Live',
    tech: ['Concept'],
    learnings: 'Most teams struggle not with building dashboards but knowing which metrics matter—documentation is as important as the template.',
    accentColor: 'border-l-secondary',
    link: 'https://growthtrackingdashboard.lovable.app',
  },
  {
    title: 'CompatIQ',
    description: 'A universal compatibility assessment framework that captures responses across multiple parameters — personality, values, work style, expectations — before two parties meet. Whether it\'s finding the right life partner, co-founder, or hiring the ideal candidate, CompatIQ generates a data-driven compatibility score to enable smarter, more intentional connections.',
    status: 'Live',
    tech: ['Assessment Design', 'Matching Algorithms', 'HR Tech', 'Relationship Tech'],
    learnings: 'Compatibility isn\'t one-dimensional — the same person can be a great cultural fit but a poor skill fit. Multi-parameter frameworks surface nuances that gut feeling misses.',
    accentColor: 'border-l-destructive',
    link: 'https://align-iq-score.lovable.app',
  },
  {
    title: 'DineIQ',
    description: 'The world\'s first AI dining companion that eliminates confusion, anxiety, and disappointment from dining out. From smart menu translation and AI dish previews to live order tracking and silent concierge communication — DineIQ transforms every restaurant visit into a confident, immersive experience for travelers, families, business diners, and anyone with dietary needs.',
    status: 'Evaluation',
    tech: ['AI/LLM', 'FoodTech', 'Computer Vision', 'Real-time Tracking'],
    learnings: 'Dining doesn\'t have a food problem — it has a communication problem. Six distinct pain points (menu confusion, language barriers, waiting anxiety, expectation mismatch, fine dining comprehension, silent disconnect) all trace back to one root cause: broken information flow between kitchen and table.',
    accentColor: 'border-l-primary',
    personaLink: '/documents/dineiq_portfolio.html',
  },
];

const ExperimentalProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);
  

  return (
    <section className="py-20 bg-background relative">
      {/* Gradient divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto mb-12">
          <p
            className={`text-primary font-medium mb-3 tracking-wide uppercase text-sm transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experimental Projects
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Building & Learning
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Side projects where I explore new technologies, test product hypotheses, and learn by doing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={project.title}
                className={`border-l-4 ${project.accentColor} rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${isExpanded ? 'shadow-lg ring-1 ring-primary/10' : ''}`}
                style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary/20 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.logo ? (
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img src={project.logo} alt={project.title} className="w-10 h-10 object-contain" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FlaskConical className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground">{project.title}</h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded inline-flex items-center gap-1.5 ${project.status === 'Live' ? 'bg-primary/15 text-primary' : 'bg-accent text-accent-foreground'}`}>
                            {project.status === 'Live' && (
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                              </span>
                            )}
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="text-muted-foreground text-sm mt-4 ml-14">{project.description}</p>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ml-14 ${
                      isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs bg-background border border-border rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 bg-accent/50 backdrop-blur-sm rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">💡 Key Learning:</span>{' '}
                        {project.learnings}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                        >
                          View Live <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.personaLink && (
                        <a
                          href={project.personaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                        >
                          View Personas <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalProjects;
