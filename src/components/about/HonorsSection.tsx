import { Trophy, FileText, Code, ExternalLink, Sparkles, Award, MessageSquareText } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type DialogType = 'feedback' | 'certificate' | null;

const judgeFeedback = `Nipun-Setu addresses a timely and high-impact challenge— helping learners who want to grow professionally but don't always know the next step to take. Judges appreciated the focus on bridging the gap between ambition and actionable guidance through personalized learning roadmaps.

The concept of dynamically generating learning paths and breaking them into manageable, context-aware steps was seen as both creative and aligned with the direction of modern learning and professional development. The idea of combining onboarding, career matchmaking, expert access, and progress tracking shows thoughtful consideration of the broader learning journey.

Several judges noted that the project feels more like a full platform than a simple prototype, with detailed thinking around how learners might discover their skill gaps and navigate toward meaningful growth opportunities. The clarity of the vision and the structured approach to building the platform were recognized as strong aspects of the project.

The experience could potentially be strengthened further by focusing more deeply on the specific impact the platform aims to create for learners and by refining the scope of features to go deeper in a few key areas. Highlighting clearer examples of how a learner moves through the roadmap from starting point to outcomes could help make the value of the platform even more tangible.

Overall, Nipun-Setu was seen as a thoughtful and ambitious concept with strong potential to support learners navigating career transitions and skill development, combining personalized guidance with structured learning pathways.`;

const honors = [
  {
    icon: Trophy,
    title: 'Create+AI Challenge Winner',
    organization: 'Stanford Accelerator Learning Program × Freadom Edu',
    description: 'Won the Create+AI Challenge conducted by the Stanford Accelerator Learning Program as part of the Freadom Edu product team. Recognized for innovative AI-driven solutions in educational technology.',
    gradient: 'from-warning to-amber-500',
    badge: 'Winner',
    link: 'https://acceleratelearning.stanford.edu/funding/create-ai-challenge/',
    external: true,
  },
  {
    icon: FileText,
    title: 'Published Research Paper',
    organization: 'IJARIIE — Volume 4, Issue 3, 2018',
    description: 'Published a research paper titled "Sustainable Environmental Management at Jai Maruti Gas Cylinders Limited, Gwalior, Madhya Pradesh" in the International Journal of Advance Research and Innovative Ideas in Education (ISSN: 2395-4396, Paper ID: 8364).',
    gradient: 'from-primary to-secondary',
    badge: 'Published',
    link: '/documents/research_paper_certificate.pdf',
    external: false,
  },
  {
    icon: Code,
    title: 'Nipun Setu — AI Career Platform',
    organization: '75:15:1 Women\'s Day AI Builder Challenge × Future World Alliance',
    description: 'Built Nipun Setu, an AI-powered career growth platform, as part of the 75:15:1 Women\'s Day AI Builder Challenge.',
    achievement: 'Won Community Favourite title out of 22 Projects',
    gradient: 'from-success to-emerald-500',
    badge: 'Builder',
    link: 'https://nipun-setu.lovable.app/',
    external: true,
    hasFeedback: true,
    hasCertificate: true,
  },
];

const HonorsSection = () => {
  const [openDialog, setOpenDialog] = useState<DialogType>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-warning/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warning/20 to-primary/20 rounded-full mb-4 border border-warning/30">
              <Sparkles className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-warning">Recognition</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient-slack">Honors & Awards</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognitions that reflect a commitment to innovation and impact
            </p>
          </div>

          {/* Honors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {honors.map((honor, index) => (
              <div
                key={honor.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top gradient accent */}
                <div className={`h-1.5 bg-gradient-to-r ${honor.gradient}`} />
                
                <div className="p-6">
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${honor.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <honor.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${honor.gradient} text-primary-foreground`}>
                      {honor.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {honor.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-3">{honor.organization}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 mt-1">
                      {honor.hasFeedback && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDialog('feedback');
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer z-10"
                          title="View judges feedback"
                        >
                          <MessageSquareText className="w-4 h-4" />
                        </button>
                      )}
                      {honor.hasCertificate && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDialog('certificate');
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer z-10"
                          title="View certificate"
                        >
                          <Award className="w-4 h-4" />
                        </button>
                      )}
                      {honor.link && honor.link !== '#' && (
                        <a
                          href={honor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors shrink-0 cursor-pointer z-10"
                          title="Learn more"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {honor.description}
                  </p>

                  {/* Achievement badge */}
                  {honor.achievement && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-success/10 border border-success/20 rounded-full">
                      <Trophy className="w-3.5 h-3.5 text-success" />
                      <span className="text-xs font-semibold text-success">{honor.achievement}</span>
                    </div>
                  )}
                </div>

                {/* Hover glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${honor.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Judges Feedback Dialog */}
      <Dialog open={openDialog === 'feedback'} onOpenChange={(open) => setOpenDialog(open ? 'feedback' : null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Feedback for Nipun-Setu</DialogTitle>
            <DialogDescription>Judges' feedback from the 75:15:1 Women's Day AI Builder Challenge</DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mt-2">
            {judgeFeedback}
          </div>
        </DialogContent>
      </Dialog>

      {/* Certificate Dialog */}
      <Dialog open={openDialog === 'certificate'} onOpenChange={(open) => setOpenDialog(open ? 'certificate' : null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Certificate of Completion</DialogTitle>
            <DialogDescription>75:15:1 Women's Day AI Builder Challenge — March 2026</DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <img
              src="/documents/nipun_setu_certificate.png"
              alt="Certificate of Completion — 75:15:1 Women's Day AI Builder Challenge"
              className="w-full rounded-lg border border-border"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HonorsSection;
