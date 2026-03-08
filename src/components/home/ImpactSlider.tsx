import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Globe, Users, TrendingUp, Zap, Brain } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ImpactSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 4;
  const slidePercent = 100 / itemsPerView;

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
      value: '10-20%', 
      label: 'GTM Growth', 
      icon: TrendingUp,
      color: 'from-primary to-secondary',
      description: 'Go-to-market growth through strategic product positioning'
    },
    { 
      value: '4', 
      label: 'Core AI Models', 
      icon: Brain,
      color: 'from-secondary to-primary',
      description: 'STT, TTS, personalized recommendations & AI story generation models developed with Stanford, CMU & IIT Bombay'
    },
  ];

  const maxIndex = Math.max(0, impactStats.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Impact at a Glance
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Key achievements and measurable outcomes
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
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

        <div 
          ref={sliderRef}
          className="overflow-hidden mx-8"
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * slidePercent}%)` }}
          >
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${slidePercent}%` }}
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center relative overflow-hidden h-full min-h-[180px] md:min-h-[220px]`}>
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

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
