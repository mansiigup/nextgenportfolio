import { useState, useEffect } from 'react';
import { Target, Users, BarChart3, Lightbulb, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import defaultProfilePicture from '@/assets/profile-picture.png';

const philosophyItems = [
  {
    icon: Target,
    title: 'Problem-First Thinking',
    description: 'I start with "What is the problem?" before jumping to solutions. Understanding the why behind user pain points leads to products that truly matter.',
  },
  {
    icon: Users,
    title: 'User-Centric Innovation',
    description: 'Deep user research and persona-driven design inform every decision. Real users, not assumptions, guide the product roadmap.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Metrics tell the story. I build dashboards, run experiments, and let data validate hypotheses while balancing qualitative insights.',
  },
  {
    icon: Lightbulb,
    title: 'Calculated Trade-offs',
    description: 'Every product decision involves trade-offs. I prioritize ruthlessly using frameworks like RICE and MoSCoW while maintaining stakeholder alignment.',
  },
];

const AboutHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfilePicture);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % philosophyItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + philosophyItems.length) % philosophyItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
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

          {/* Philosophy Slider */}
          <div className="relative">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="shrink-0 bg-card/50 hover:bg-card border border-border shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {philosophyItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="min-w-full px-2"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {philosophyItems.map((phi, idx) => (
                          <div
                            key={phi.title}
                            className={`p-6 rounded-2xl border transition-all duration-300 ${
                              idx === currentIndex 
                                ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-lg scale-105' 
                                : 'bg-card/80 border-border hover:border-primary/20'
                            }`}
                          >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                              idx === currentIndex 
                                ? 'bg-gradient-to-br from-primary to-secondary' 
                                : 'bg-accent'
                            }`}>
                              <phi.icon className={`w-7 h-7 ${idx === currentIndex ? 'text-primary-foreground' : 'text-accent-foreground'}`} />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-lg">{phi.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{phi.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="shrink-0 bg-card/50 hover:bg-card border border-border shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Slider dots */}
            <div className="flex justify-center gap-2 mt-6">
              {philosophyItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
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
