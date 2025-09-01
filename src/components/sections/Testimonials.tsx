import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';
import { motion } from "motion/react";

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

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
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

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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