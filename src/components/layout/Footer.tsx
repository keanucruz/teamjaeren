import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Team Jæren"
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-primary">TEAM JÆREN</span>
                <span className="text-sm font-medium text-muted-foreground">Profesjonell Snekkerarbeid</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Din betrodde tømrer i Nærbø, Stavanger og omegn.
              Vi leverer kvalitetshåndverk med profesjonell service du kan stole på.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100060081560532"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/teamjaerenas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Hurtiglenker</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Våre Tjenester
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Om Oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Prosjektgalleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kundeanmeldelser
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Få Tilbud
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Kontaktinfo</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+4797601170" className="text-muted-foreground hover:text-primary transition-colors">
                    +47 976 01 170
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="mailto:bm@teamjaeren.no" className="text-muted-foreground hover:text-primary transition-colors">
                    bm@teamjaeren.no
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  Indrebøvegen 20, 4365 Nærbø<br />
                  <span className="text-sm">Betjener hele Jæren-regionen</span>
                </div>
              </li>
            </ul>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Team Jæren AS. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Profesjonelle snekkeroppgaver i Norge
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;