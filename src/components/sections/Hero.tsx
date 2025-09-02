import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone } from 'lucide-react';

const Hero = () => {
  // Hero images array (4 images)
  const heroImages = [
    '/hero/488239245_2176649926126778_1872557244257684905_n.jpg',
    '/hero/476162088_2131634587294979_1782095260138082371_n (1).jpg',
    '/hero/476334989_2131634753961629_8371082186504370994_n.jpg',
    '/hero/476449935_2131634860628285_7349775265480968078_n.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch images every 2.5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [heroImages.length, isPaused]);
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Switching Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Team Jæren Construction ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          {/* Main Title */}
          <h1 className="hero-title mb-8 leading-tight" style={{
            textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white, 0px 2px 0px white, 2px 0px 0px white, 0px -2px 0px white, -2px 0px 0px white, 3px 3px 6px rgba(0,0,0,0.5)'
          }}>
            DIN BETRODDE
            <br />
            TØMRER
            <br />
            PÅ JÆREN
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl leading-relaxed" style={{
            textShadow: '1px 1px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Vi nyter stor tillit blant våre kunder og kan vise til gode referanser fra tidligere arbeid.
            Velg oss - velg kvalitet! Fra nybygg til oppussing leverer vi
            profesjonelt håndverk med garantert tilfredshet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              onClick={scrollToContact}
              className="btn-construction text-primary-foreground animate-glow"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Få Gratis Tilbud
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-primary/30 bg-background/10 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 text-white"
              style={{
                textShadow: '1px 1px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8)'
              }}
            >
              Se Våre Tjenester
            </Button>
          </div>


        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-primary scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float animation-delay-2000 hidden lg:block" />
    </section>
  );
};

export default Hero;