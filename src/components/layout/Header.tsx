import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const heroSection = document.querySelector('section');
          const heroHeight = heroSection?.offsetHeight || window.innerHeight;

          // More responsive and accurate thresholds
          setIsScrolled(scrollPosition > 20);
          setIsInHero(scrollPosition < heroHeight * 0.75); // Stay invisible for 75% of hero section

          ticking = false;
        });
        ticking = true;
      }
    };

    // Call once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'} ${isInHero ? 'opacity-0' : ''}`}>
        <div className={`${isInHero ? 'bg-transparent border-transparent' : 'bg-card/80 backdrop-blur-md border-b border-border/50'}`}>
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+47 976 01 170</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>bm@teamjaeren.no</span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Indrebøvegen 20, Nærbø</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'} ${isInHero
        ? 'bg-transparent backdrop-blur-none border-none'
        : 'nav-blur'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Team Jæren"
                className="h-12 w-auto transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-black transition-colors duration-300 ${isInHero ? 'text-white' : 'text-primary'
                  }`}>TEAM JÆREN</span>
                <span className={`text-xs font-medium transition-colors duration-300 ${isInHero ? 'text-white/80' : 'text-muted-foreground'
                  }`}>Profesjonell Snekkerarbeid</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors font-medium ${isInHero
                  ? 'text-white hover:text-primary'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Om Oss
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-colors font-medium ${isInHero
                  ? 'text-white hover:text-primary'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Tjenester
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className={`transition-colors font-medium ${isInHero
                  ? 'text-white hover:text-primary'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Prosjekter
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`transition-colors font-medium ${isInHero
                  ? 'text-white hover:text-primary'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Anmeldelser
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-construction"
              >
                Få Tilbud
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50">
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Tjenester
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Om Oss
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Prosjekter
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Anmeldelser
                </button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="btn-construction w-full mt-2"
                >
                  Få Tilbud
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;