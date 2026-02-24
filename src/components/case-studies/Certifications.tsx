import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Product School Micro Certification',
    issuer: 'Product School',
    type: 'Professional Certificate',
  },
  {
    name: 'Product Analytics Certification',
    issuer: 'Product Fox Community',
    type: 'Analytics Certification',
  },
  {
    name: 'Google Cloud GenAI Skillset',
    issuer: 'Google Cloud',
    type: 'AI/ML Certification',
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
              className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <span className="inline-block px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded">
                    {cert.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
