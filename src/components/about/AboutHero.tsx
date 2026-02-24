import { useState } from 'react';
import { Target, Users, BarChart3, Lightbulb, Camera, Palette, Rocket, FlaskConical, Search, Layers, TrendingUp, RefreshCw } from 'lucide-react';
import defaultProfilePicture from '@/assets/profile-picture.png';

const developmentCycle = [
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

const strategyCycle = [
  {
    icon: Target,
    title: 'Strategy & Vision',
    description: 'Define product vision aligned with business goals and identify key opportunities.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: Lightbulb,
    title: 'Discovery & Research',
    description: 'Continuous user research to validate problems worth solving.',
    color: 'from-secondary to-secondary/70',
  },
  {
    icon: Layers,
    title: 'Prioritization & Roadmap',
    description: 'Balance priorities using RICE, impact/effort for strategic roadmaps.',
    color: 'from-success to-success/70',
  },
  {
    icon: TrendingUp,
    title: 'Execution & Delivery',
    description: 'Lead cross-functional teams through agile development cycles.',
    color: 'from-warning to-warning/70',
  },
  {
    icon: Users,
    title: 'Launch & Activation',
    description: 'Execute GTM strategy focused on user activation and adoption.',
    color: 'from-destructive to-destructive/70',
  },
  {
    icon: BarChart3,
    title: 'Measure & Iterate',
    description: 'Analyze performance, gather insights, and iterate continuously.',
    color: 'from-primary to-secondary',
  },
];

const AboutHero = () => {
  const [activeDevStep, setActiveDevStep] = useState(0);
  const [activeStratStep, setActiveStratStep] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfilePicture);

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
  const getStepPosition = (index: number, total: number, radius: number = 100) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const CycleVisualization = ({ 
    steps, 
    activeStep, 
    setActiveStep, 
    title, 
    gradientId 
  }: { 
    steps: typeof developmentCycle; 
    activeStep: number; 
    setActiveStep: (n: number) => void;
    title: string;
    gradientId: string;
  }) => (
    <div className="relative">
      <div className="text-center mb-4">
        <h4 className="font-serif text-lg md:text-xl font-bold text-foreground">{title}</h4>
      </div>
      
      <div className="relative w-[280px] h-[280px] mx-auto">
        {/* Center circle with animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse-soft">
          <div className="text-center">
            <RefreshCw className="w-6 h-6 text-primary mx-auto animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[10px] font-medium text-muted-foreground">Iterate</span>
          </div>
        </div>

        {/* Connecting circle path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
          <circle
            cx="140"
            cy="140"
            r="100"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeDasharray="6 3"
            className="opacity-40"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--success))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Cycle steps positioned in circle */}
        {steps.map((step, index) => {
          const pos = getStepPosition(index, steps.length, 100);
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
              <div className="group relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg ${
                  index === activeStep
                    ? `bg-gradient-to-br ${step.color} scale-125`
                    : 'bg-card border border-border hover:border-primary/50 hover:scale-110'
                }`}>
                  <step.icon className={`w-5 h-5 ${index === activeStep ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </div>
                
                {/* Step number badge */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
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
      </div>

      {/* Active step detail card */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-card to-accent/10 border border-primary/20 min-h-[100px]">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center`}>
            {(() => {
              const Icon = steps[activeStep].icon;
              return <Icon className="w-4 h-4 text-primary-foreground" />;
            })()}
          </div>
          <span className="text-xs font-medium text-muted-foreground">Step {activeStep + 1}</span>
        </div>
        <h5 className="text-sm font-bold text-foreground mb-1">{steps[activeStep].title}</h5>
        <p className="text-xs text-muted-foreground">{steps[activeStep].description}</p>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === activeStep 
                ? 'bg-primary w-5' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );

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

          {/* Dual Cycle Section */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                My End-to-End Approach
              </h3>
              <p className="text-muted-foreground">Two interconnected cycles driving product excellence</p>
            </div>

            {/* Mobile View - Stacked */}
            <div className="lg:hidden space-y-8">
              <CycleVisualization 
                steps={strategyCycle}
                activeStep={activeStratStep}
                setActiveStep={setActiveStratStep}
                title="Strategy Cycle"
                gradientId="stratGradientMobile"
              />
              <CycleVisualization 
                steps={developmentCycle}
                activeStep={activeDevStep}
                setActiveStep={setActiveDevStep}
                title="Development Cycle"
                gradientId="devGradientMobile"
              />
            </div>

            {/* Desktop View - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
              <div className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                <CycleVisualization 
                  steps={strategyCycle}
                  activeStep={activeStratStep}
                  setActiveStep={setActiveStratStep}
                  title="Strategy Cycle"
                  gradientId="stratGradient"
                />
              </div>
              <div className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                <CycleVisualization 
                  steps={developmentCycle}
                  activeStep={activeDevStep}
                  setActiveStep={setActiveDevStep}
                  title="Development Cycle"
                  gradientId="devGradient"
                />
              </div>
            </div>

            {/* Connecting element */}
            <div className="hidden lg:flex justify-center items-center mt-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full border border-primary/20">
                <RefreshCw className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-sm font-medium text-primary">Continuous Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
