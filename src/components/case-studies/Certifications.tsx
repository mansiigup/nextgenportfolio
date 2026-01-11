import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Product Management',
    issuer: 'Great Learning',
    type: 'Professional Certificate',
  },
  {
    name: 'Product Analytics',
    issuer: 'Mixpanel',
    type: 'Platform Certification',
  },
  {
    name: 'SQL for Data Analysis',
    issuer: 'Multiple Platforms',
    type: 'Technical Skill',
  },
  {
    name: 'Agile & Scrum',
    issuer: 'Industry Standard',
    type: 'Methodology',
  },
  {
    name: 'Design Thinking',
    issuer: 'IDEO/Stanford d.school',
    type: 'Framework',
  },
  {
    name: 'AI/ML for Product Managers',
    issuer: 'Various Courses',
    type: 'Domain Knowledge',
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Continuous Learning
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <p className="text-muted-foreground text-lg">
            Formal training that complements hands-on experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm mb-1 truncate">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                  <span className="inline-block px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded">
                    {cert.type}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
