import { useState } from 'react';
import { motion } from "motion/react";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    text: "Team Jæren can be warmly recommended. Skilled professionals who really know their job. 👍",
    initials: "HC",
    name: "Hanne Christiansen",
    role: "Customer",
  },
  {
    text: "Replacement of 2 windows. They even hung up the roller blind again.",
    initials: "EV",
    name: "Espen Vigre",
    role: "Customer",
  },
  {
    text: "Super satisfied with Team Jæren 😊 Works fast but carefully and has good solutions 😊 Can absolutely be recommended!",
    initials: "CHL",
    name: "Cecilie Haukeli Løvås",
    role: "Customer",
  },
  {
    text: "Good professionals who are fast and solution-oriented, very satisfied and can really be recommended!",
    initials: "KC",
    name: "Kenneth Christensen",
    role: "Customer",
  },
  {
    text: "Team Jæren is highly recommended. Skilled professionals who really know their jobs. 👍",
    initials: "HHM",
    name: "Hanne Høykoll Melsom",
    role: "Customer",
  },
];



const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section id="testimonials" className="bg-background py-24 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center text-glow">
            Hva Våre <span className="text-primary">Kunder</span> Sier
          </h2>
          <p className="text-center text-xl text-muted-foreground">
            Ikke bare ta vårt ord for det. Her er hva våre fornøyde kunder
            har å si om å jobbe med Team Jæren.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="construction-card p-6 h-full flex flex-col"
            >
              {/* Quote */}
              <div className="flex-1 mb-6">
                <div className="text-primary text-4xl mb-4 leading-none">"</div>
                <p className="text-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ring-2 ring-primary/20">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {testimonials.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-primary/30 bg-background/10 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50"
            >
              {showAll ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Vis Færre Anmeldelser
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  Se Flere Anmeldelser
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Klar til å bli med på vår liste over fornøyde kunder?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-construction"
          >
            Få Ditt Gratis Tilbud
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;