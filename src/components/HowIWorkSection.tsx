import { Users2, Scale, Compass, MessageCircle } from 'lucide-react';

const workStyles = [
  {
    icon: Users2,
    title: 'Stakeholder Management',
    description:
      'I build trust through transparency and over-communication. Regular syncs with leadership, clear escalation paths, and proactive updates ensure alignment. I have managed cross-functional teams of 9+ and worked directly with C-suite executives.',
  },
  {
    icon: Scale,
    title: 'Decision-Making Style',
    description:
      'Data-informed, not data-paralyzed. I gather enough evidence to make confident decisions quickly, while building in checkpoints to course-correct. I use frameworks like RICE for prioritization but know when to trust product intuition.',
  },
  {
    icon: Compass,
    title: 'Handling Ambiguity',
    description:
      'Ambiguity is where opportunity lives. I break down undefined problems into testable hypotheses, run quick experiments, and iterate based on learnings. My 0 to 1 experience means I am comfortable building the plane while flying it.',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description:
      'I adapt my communication to the audience—technical depth with engineers, business outcomes with executives, user impact with designers. Written specs, visual documentation, and async-first communication keep teams aligned across time zones.',
  },
];

const HowIWorkSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            How I Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Operating Style
          </h2>
          <p className="text-muted-foreground text-lg">
            What you can expect when working with me—stakeholder management, decision-making, and navigating ambiguity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {workStyles.map((style) => (
            <div
              key={style.title}
              className="p-6 bg-background rounded-xl border border-border"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <style.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{style.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
