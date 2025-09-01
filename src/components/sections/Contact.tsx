import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+47 976 01 170",
      description: "Ring oss for umiddelbar hjelp"
    },
    {
      icon: Mail,
      title: "E-post",
      value: "bm@teamjaeren.no",
      description: "Send oss dine prosjektdetaljer"
    },
    {
      icon: MapPin,
      title: "Lokasjon",
      value: "Indrebøvegen 20, 4365 Nærbø",
      description: "Betjener hele Jæren-regionen"
    },
    {
      icon: Clock,
      title: "Timer",
      value: "Man-Fre 7:00-16:00",
      description: "Kontakt oss for prosjektkonsultasjon"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Start Ditt <span className="text-primary">Prosjekt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Klar til å starte ditt snekkerprosjekt? Vi tilbyr gratis befaring og uforpliktende tilbud.
            Kontakt oss i dag og la oss diskutere hvordan vi kan hjelpe deg å gjøre visjonen din til virkelighet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="construction-card p-6 group">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="construction-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Oss en Melding</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ditt Navn *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="Skriv inn ditt fulle navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-postadresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="din.epost@eksempel.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefonnummer
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="+47 XXX XX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Prosjektdetaljer *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      placeholder="Fortell oss om prosjektet ditt: type arbeid, tidsramme, budsjett og eventuelle spesifikke krav..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-construction w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sender..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Melding
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Finn Oss</h3>
          <div className="construction-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31670.89089654716!2d5.8756!3d58.7636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a2c8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sN%C3%A6rb%C3%B8%2C%20Norway!5e0!3m2!1sen!2sno!4v1635789123456!5m2!1sen!2sno"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Betjener Nærbø, Stavanger og hele Jæren-regionen med profesjonelle snekkeroppgaver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;