import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Hammer, Wrench, PlusCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Å Bygge Nytt",
      description: "Ønsker du å bygge ny bolig? Vi er ekspertene på området. Det er en stor investering å bygge helt nytt og det kan være mange papirer og andre faktorer involvert. Vi i Team Jæren AS er med deg hele veien i byggeprosessen og tar oss av hele jobben for deg!",
      features: ["Komplett nybygg", "Ekspertveiledning hele veien", "Håndterer alt papirarbeid", "Tett dialog med kunder"],
      image: "/gallery/35195628_465011497290638_7279601565332144128_n.jpg"
    },
    {
      icon: PlusCircle,
      title: "Å Bytte Ut",
      description: "Trenger du og din familie mer plass? Det er flere måter å utvide din bolig. Det ene alternativet kan være å utvide etasjen med forlenget stue eller et ekstra soverom. Vi hjelper også med ekstra terrasse eller et nytt inngangsparti.",
      features: ["Utvidede stuer", "Ekstra soverom", "Tilleggsterrasser", "Nye inngangsområder"],
      image: "/gallery/476428657_2131634853961619_4220883679107877673_n.jpg"
    },
    {
      icon: Hammer,
      title: "Å Bygge På",
      description: "Det andre alternativet for utvidelse av eksisterende bolig, kan være å bygge på i høyden. Dette er et godt alternativ om tomten er for liten til å utvides. Vi hjelper med balkonger, løfte av tak eller å sette på en hel ekstra etasje.",
      features: ["Bygging i høyden", "Balkongkonstruksjon", "Takløfting", "Komplette tilleggsetasjer"],
      image: "/gallery/474899528_2121866954938409_3484030516373131524_n.jpg"
    },
    {
      icon: Wrench,
      title: "Å Pusse Opp",
      description: "Gjennom årene har vi opparbeidet oss lang erfaring med rehabiliteringsprosjekter i alle størrelser, og vi jobber både for private og offentlige sektorer. Dersom du har behov for modernisering, reparasjon eller vedlikehold, har vi kunnskapen om gode løsninger og riktig utførelse av arbeidet.",
      features: ["Moderniseringsprosjekter", "Reparasjonstjenester", "Vedlikeholdsarbeid", "Både private og offentlige sektorer"],
      image: "/gallery/75388173_826265624498555_1906310608580509696_n.jpg"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Hva Vi <span className="text-primary">Bygger</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tilbyr ulike snekkeroppgaver som nybygg, påbygg,
            oppussing og mer i Nærbø, Stavanger og omegn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="construction-card p-0 group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    Få Tilbud
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vi er opptatt av kvalitet, og det skal gjenspeiles i alt arbeidet vi utfører.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Gratis Befaring</h4>
              <p className="text-muted-foreground">Vi møter opp til avtalt tid, og tilbyr god bistand i form av tips og råd på hvordan prosjektet burde utføres, sammen finner vi en løsning som passer deg.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Uforpliktende Tilbud</h4>
              <p className="text-muted-foreground">Etter befaringen, vil vi sende over ett uforpliktende tilbud med en komplett oversikt på hva som må gjøres, slikt at vi unngår overraskelser.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Arbeidet Utføres Etter Avtale</h4>
              <p className="text-muted-foreground">Når kontrakten er signert, vil vi påbegynne arbeidet til avtalt tid og til avtalt pris. Du som kunde skal være trygg på valget, og vi holder deg oppdatert igjennom hele prosessen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;