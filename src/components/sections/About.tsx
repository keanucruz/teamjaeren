import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every project reflects our commitment to excellence and attention to detail."
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "Our experienced carpenters and apprentices deliver professional results."
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Trusted by hundreds of clients across the Stavanger region."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your schedule and complete projects as promised."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium">Om Team Jæren</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bygger <span className="text-primary">Tillit</span> Gjennom
              <br />Kvalitetsarbeid
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Team Jæren AS ble etablert i 2019 da erfaren bygger Tom Erik Aniksdal
                gikk sammen med Bjarte Mæling. I dag utfører vi alle typer snekkerarbeid
                for både private og offentlige kunder i hele Jæren-regionen.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Vi er opptatt av høy kvalitet og riktig utførelse. Våre dyktige håndverkere
                og lærlinger jobber med lokale partnere for å sikre fortreffelighet i hvert prosjekt.
                Vårt mål er enkelt: fornøyde kunder gjennom kvalitetsarbeid til rettferdige priser.
              </p>
            </div>

            <Button
              onClick={scrollToContact}
              className="btn-construction"
              size="lg"
            >
              Start Ditt Prosjekt
            </Button>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="construction-card overflow-hidden">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] object-cover"
                onLoadedMetadata={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.playbackRate = 1.0; // Set 2x speed
                }}
              />
            </div>


          </div>
        </div>


      </div>
    </section>
  );
};

export default About;