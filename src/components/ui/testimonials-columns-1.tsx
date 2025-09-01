"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    initials: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, initials, name, role }, i) => (
                <div className="construction-card p-10 max-w-xs w-full" key={i}>
                  <div className="text-foreground/90 leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm ring-2 ring-primary/20">
                      {initials}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Team Jæren kan anbefales på det varmeste. Dyktige fagfolk som virkelig kan jobben sin. 👍",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Hanne Christiansen",
    role: "Homeowner",
  },
  {
    text: "Bytting av 2 vindauge. Dei hengde til og med opp rullegardinet att.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Espen Vigre",
    role: "Property Manager",
  },
  {
    text: "Super fornøyd med Team Jæren😊 Arbeider kjapt, men nøye og har gode løsninger😊 Kan absolutt anbefales!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Cecilie Haukeli Løvås",
    role: "Business Owner",
  },
  {
    text: "Gode fagfolk som er raske og løsningsorienterte, veldig fornøyd og kan virkelig anbefales!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Kenneth Christensen",
    role: "Project Manager",
  },
  {
    text: "Professional craftsmanship and excellent attention to detail. They delivered exactly what was promised.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Linda Andersen",
    role: "Architect",
  },
  {
    text: "Outstanding renovation work on our commercial property. Highly professional team.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Maria Hansen",
    role: "Commercial Developer",
  },
];