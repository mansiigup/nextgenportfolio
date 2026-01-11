import { Linkedin, Mail, MapPin, Clock } from 'lucide-react';

const SocialLinks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mansigupta4cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/mansigupta4cl</p>
                  </div>
                </a>

                <a
                  href="mailto:mansi4cl@gmail.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                    <p className="text-sm text-muted-foreground">mansi4cl@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">India (Open to remote & hybrid)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
