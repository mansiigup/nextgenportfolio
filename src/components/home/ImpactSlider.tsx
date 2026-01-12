import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Globe, Users, TrendingUp, Zap, IndianRupee, Brain } from 'lucide-react';

const ImpactSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const impactStats = [
    { 
      value: '7+', 
      label: 'Products Shipped', 
      icon: Rocket,
      color: 'from-primary to-primary/70',
      description: 'End-to-end product launches from ideation to scale'
    },
    { 
      value: '3', 
      label: 'Continents Expanded', 
      icon: Globe,
      color: 'from-secondary to-secondary/70',
      description: 'Global expansion driving international growth'
    },
    { 
      value: '1.2M+', 
      label: 'Users Impacted', 
      icon: Users,
      color: 'from-success to-success/70',
      description: 'Building products that touch millions of lives'
    },
    { 
      value: '200+', 
      label: 'Launches & Releases', 
      icon: Zap,
      color: 'from-warning to-warning/70',
      description: 'Continuous deployment and feature releases'
    },
    { 
      value: '₹50M+', 
      label: 'Revenue Generated', 
      icon: IndianRupee,
      color: 'from-primary to-secondary',
      description: 'Direct business impact through product innovation'
    },
    { 
      value: '4', 
      label: 'Core AI Models', 
      icon: Brain,
      color: 'from-secondary to-primary',
      description: 'STT, TTS, personalized recommendations & AI story generation models developed with Stanford, CMU & IIT Bombay'
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactStats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, impactStats.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + impactStats.length) % impactStats.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % impactStats.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="mb-8">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Impact at a Glance
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Key achievements and measurable outcomes
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider - Shows all 4 boxes sliding together */}
        <div 
          ref={sliderRef}
          className="overflow-hidden mx-8"
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {/* Duplicate items for infinite loop effect */}
            {[...impactStats, ...impactStats].map((stat, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 px-2"
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center relative overflow-hidden h-full min-h-[220px]`}>
                  {/* Background decoration */}
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <stat.icon size={32} className="mb-3 text-white/90" />
                    <p className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white/95 mb-2">
                      {stat.label}
                    </p>
                    <p className="text-white/75 text-xs hidden md:block">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {impactStats.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSlider;
