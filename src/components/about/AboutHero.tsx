import { useState, useEffect } from 'react';
import { Target, Users, BarChart3, Lightbulb, Camera, Palette, Rocket, FlaskConical, Search } from 'lucide-react';
import defaultProfilePicture from '@/assets/profile-picture.png';

const cycleSteps = [
  {
    icon: Target,
    title: 'Problem-First Thinking',
    description: 'Start with "What is the problem?" before jumping to solutions.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: BarChart3,
    title: 'Product Analytics & Intelligence',
    description: 'Data-driven insights to validate assumptions and guide decisions.',
    color: 'from-secondary to-secondary/70',
  },
  {
    icon: Users,
    title: 'Consumer Behavior & User Research',
    description: 'Deep understanding of user needs, personas, and pain points.',
    color: 'from-success to-success/70',
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Translating insights into intuitive, scalable product experiences.',
    color: 'from-warning to-warning/70',
  },
  {
    icon: Rocket,
    title: 'Launch & Market',
    description: 'Strategic go-to-market execution and stakeholder alignment.',
    color: 'from-destructive to-destructive/70',
  },
  {
    icon: FlaskConical,
    title: 'Test & Analyze',
    description: 'Continuous experimentation, A/B testing, and iteration loops.',
    color: 'from-primary to-secondary',
  },
];

const AboutHero = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfilePicture);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % cycleSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Calculate positions for the circular layout
  const getStepPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 160; // Radius of the circle
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-accent/30 to-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-success/10 to-warning/10 rounded-full blur-2xl animate-pulse-soft" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content with Profile */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl animate-scale-in">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden relative">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover scale-125"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Camera className="w-12 h-12 mb-2" />
                      <span className="text-xs">Add Photo</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse-soft" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
            </div>

            {/* Title and Overview */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Product Leader & Innovator</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient-slack">Mansi Gupta</span>
              </h1>

              {/* Quotation */}
              <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-foreground/80">
                "Your next breakthrough hides behind the courage to audit your own thinking."
              </blockquote>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                <p>
                  A curious builder at heart for <span className="text-foreground font-semibold">4.5+ years</span>, driven by the thrill of turning bold ideas into intelligent, intuitive products. Fascinated by the endless possibilities of AI, data, and emerging technologies, with a passion for crafting experiences that feel seamless, smart, and human.
                </p>
                <p>
                  Always exploring the edge where innovation meets real-world impact—whether it's reimagining how people interact with technology or scaling solutions that make life simpler and smarter. Believes that great products aren't just built—they're imagined, iterated, and inspired by the future we dare to create.
                </p>
                <p>
                  I bring deep ownership and relentless focus on impact. My journey spans <span className="text-primary font-medium">EdTech</span> and <span className="text-secondary font-medium">FinTech</span>, directly engaging with C-suite executives. My approach: identify the problem, understand why it exists, and solve it with scalable, intelligent solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Product Lifecycle Cycle */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Product Development Cycle
              </h3>
              <p className="text-muted-foreground">My end-to-end approach to building products</p>
            </div>

            {/* Mobile View - Vertical Steps */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-success" />
                
                <div className="space-y-4">
                  {cycleSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                        index === activeStep
                          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30'
                          : 'bg-card/50 border border-border/50'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        index === activeStep
                          ? `bg-gradient-to-br ${step.color}`
                          : 'bg-accent'
                      }`}>
                        <step.icon className={`w-6 h-6 ${index === activeStep ? 'text-primary-foreground' : 'text-accent-foreground'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${index === activeStep ? 'text-primary' : 'text-foreground'}`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {/* Step number */}
                      <div className="absolute -left-2 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cycle indicator */}
                <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Continuous iteration loop</span>
                </div>
              </div>
            </div>

            {/* Desktop View - Circular Layout */}
            <div className="hidden lg:flex justify-center items-center py-8">
              <div className="relative w-[400px] h-[400px]">
                {/* Center circle with animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse-soft">
                  <div className="text-center">
                    <Search className="w-8 h-8 text-primary mx-auto mb-1" />
                    <span className="text-xs font-medium text-muted-foreground">Iterate</span>
                  </div>
                </div>

                {/* Connecting circle path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="url(#cycleGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="opacity-30"
                  />
                  <defs>
                    <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--success))" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Cycle steps positioned in circle */}
                {cycleSteps.map((step, index) => {
                  const pos = getStepPosition(index, cycleSteps.length);
                  return (
                    <div
                      key={step.title}
                      className="absolute transition-all duration-500 cursor-pointer"
                      style={{
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`group relative flex flex-col items-center`}>
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                          index === activeStep
                            ? `bg-gradient-to-br ${step.color} scale-125`
                            : 'bg-card border border-border hover:border-primary/50 hover:scale-110'
                        }`}>
                          <step.icon className={`w-7 h-7 ${index === activeStep ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        
                        {/* Label - positioned based on location in circle */}
                        <div className={`absolute whitespace-nowrap transition-all duration-300 ${
                          pos.y < 0 ? 'bottom-full mb-2' : 'top-full mt-2'
                        } ${index === activeStep ? 'opacity-100' : 'opacity-70'}`}>
                          <span className={`text-xs font-medium ${index === activeStep ? 'text-primary' : 'text-muted-foreground'}`}>
                            {step.title}
                          </span>
                        </div>

                        {/* Step number badge */}
                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === activeStep
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Arrows between steps */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  {cycleSteps.map((_, index) => {
                    const startPos = getStepPosition(index, cycleSteps.length);
                    const endPos = getStepPosition((index + 1) % cycleSteps.length, cycleSteps.length);
                    const midX = 200 + (startPos.x + endPos.x) / 2 * 0.7;
                    const midY = 200 + (startPos.y + endPos.y) / 2 * 0.7;
                    
                    return (
                      <path
                        key={index}
                        d={`M ${200 + startPos.x * 0.85} ${200 + startPos.y * 0.85} Q ${midX} ${midY} ${200 + endPos.x * 0.85} ${200 + endPos.y * 0.85}`}
                        fill="none"
                        stroke={index === activeStep ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                        strokeWidth={index === activeStep ? 2 : 1}
                        markerEnd="url(#arrowhead)"
                        className="transition-all duration-300"
                      />
                    );
                  })}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Active step detail card */}
              <div className="ml-12 max-w-sm">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${cycleSteps[activeStep].color} bg-opacity-10 border border-primary/20`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cycleSteps[activeStep].color} flex items-center justify-center`}>
                      {(() => {
                        const Icon = cycleSteps[activeStep].icon;
                        return <Icon className="w-5 h-5 text-primary-foreground" />;
                      })()}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Step {activeStep + 1} of {cycleSteps.length}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{cycleSteps[activeStep].title}</h4>
                  <p className="text-muted-foreground">{cycleSteps[activeStep].description}</p>
                </div>
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {cycleSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;