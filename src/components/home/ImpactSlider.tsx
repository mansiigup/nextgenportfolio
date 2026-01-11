import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Globe, Users, TrendingUp } from 'lucide-react';

const ImpactSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const impactStats = [
    { 
      value: '15+', 
      label: 'Products Shipped', 
      icon: Rocket,
      color: 'from-primary to-primary/70',
      description: 'End-to-end product launches from ideation to scale'
    },
    { 
      value: '3', 
      label: 'Markets Expanded', 
      icon: Globe,
      color: 'from-secondary to-secondary/70',
      description: 'International expansion driving global growth'
    },
    { 
      value: '5M+', 
      label: 'Users Impacted', 
      icon: Users,
      color: 'from-success to-success/70',
      description: 'Building products that touch millions of lives'
    },
    { 
      value: '40%', 
      label: 'Avg. Metric Lift', 
      icon: TrendingUp,
      color: 'from-warning to-warning/70',
      description: 'Consistent improvement in key business metrics'
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
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:border-primary transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider */}
        <div 
          ref={sliderRef}
          className="overflow-hidden rounded-3xl"
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-3xl p-10 md:p-12 text-center relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <stat.icon size={48} className="mx-auto mb-6 text-white/90" />
                    <p className="font-serif text-6xl md:text-7xl font-bold text-white mb-3">
                      {stat.value}
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-white/95 mb-4">
                      {stat.label}
                    </p>
                    <p className="text-white/80 text-sm md:text-base max-w-md mx-auto">
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
