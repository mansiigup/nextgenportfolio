import { useState } from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import FirstrootCaseStudies from './FirstrootCaseStudies';
import FreadomCaseStudies from './FreadomCaseStudies';

type Company = 'firstroot' | 'freadom';

const companies = [
  {
    id: 'firstroot' as Company,
    name: 'Firstroot Inc.',
    role: 'Product Manager',
    period: 'Oct 2021 – Sep 2022',
    focus: 'B2B2C SaaS • Financial Literacy • K-12 Education',
    caseStudyCount: 6,
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 'freadom' as Company,
    name: 'Freadom Edu',
    role: 'Product Lead',
    period: '2022 – Present',
    focus: 'EdTech • Reading Literacy • Global Expansion',
    caseStudyCount: 4,
    color: 'from-emerald-500 to-teal-500'
  }
];

const ProfessionalProducts = () => {
  const [activeCompany, setActiveCompany] = useState<Company>('firstroot');

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Professional Products</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Products I've Built & Scaled
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep dives into product initiatives from my professional roles—each with measurable 
              impact on growth, user experience, and business outcomes.
            </p>
          </div>

          {/* Company Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => setActiveCompany(company.id)}
                className={`group relative p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 min-w-[280px] text-left ${
                  activeCompany === company.id
                    ? 'border-primary bg-accent shadow-lg'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center shrink-0`}>
                    <span className="text-lg font-bold text-white">
                      {company.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{company.period}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeCompany === company.id ? 'text-primary rotate-90' : 'text-muted-foreground'
                  }`} />
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">{company.focus}</p>
                  <p className="text-xs text-primary mt-1">{company.caseStudyCount} Impact Studies</p>
                </div>
              </button>
            ))}
          </div>

          {/* Case Studies Content */}
          <div className="animate-fade-in">
            {activeCompany === 'firstroot' && <FirstrootCaseStudies />}
            {activeCompany === 'freadom' && <FreadomCaseStudies />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProducts;
