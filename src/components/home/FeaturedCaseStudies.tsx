import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCases = [
  {
    title: 'Scaling a Reading Literacy Platform to ₹40M+ Revenue',
    company: 'Freadom Edu',
    metrics: [
      { label: 'Revenue', value: '₹40M+' },
      { label: 'Schools', value: '10K+' },
      { label: 'Students', value: '1.2M+' },
    ],
    tags: ['0→1', 'B2B SaaS', 'Growth Strategy'],
  },
  {
    title: 'Global Market Expansion: Finland, Korea, UAE & Morocco',
    company: 'Freadom Edu',
    metrics: [
      { label: 'Countries', value: '4' },
      { label: 'Time to Market', value: '<6mo' },
      { label: 'Localization', value: '100%' },
    ],
    tags: ['Global Expansion', 'Localization', 'Market Entry'],
  },
  {
    title: 'AI-Powered Personalization with Stanford & CMU Research Labs',
    company: 'Freadom Edu',
    metrics: [
      { label: 'Engagement Lift', value: '50-60%' },
      { label: 'AI Models', value: '4' },
      { label: 'A/B Tests', value: '20+' },
    ],
    tags: ['AI/ML', 'Personalization', 'Research Collaboration'],
  },
];

const FeaturedCaseStudies = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Featured Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dives into product initiatives—from problem to execution to impact.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {featuredCases.map((study) => (
            <Link
              key={study.title}
              to="/case-studies"
              className="group block p-6 md:p-8 bg-background rounded-2xl border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-muted-foreground mb-6">{study.company}</p>

              <div className="flex flex-wrap items-center gap-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
                <div className="flex-1 flex justify-end">
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read case study
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-background transition-colors"
          >
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
