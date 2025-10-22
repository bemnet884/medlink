"use client";

import { CalendarCheck, Video, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Search className="size-6 text-primary" />,
    title: "Search for Doctors",
    description:
      "Find trusted specialists near you or connect with certified professionals online.",
  },
  {
    icon: <CalendarCheck className="size-6 text-primary" />,
    title: "Book an Appointment",
    description:
      "Easily schedule in-person or online consultations that fit your time and comfort.",
  },
  {
    icon: <Video className="size-6 text-primary" />,
    title: "Consult Virtually or In-Person",
    description:
      "Join a secure video call or visit the clinic — whichever works best for your needs.",
  },
  {
    icon: <FileText className="size-6 text-primary" />,
    title: "Manage Records & History",
    description:
      "Access your past consultations, prescriptions, and reports all in one safe place.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-primary"
        >
          How MedLink Works
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          Connecting patients and healthcare professionals in four simple steps.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center bg-accent rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-foreground mb-5">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-accent-foreground">{step.title}</h3>
              <p className="text-sm text-background">{step.description}</p>

              {/* Connecting Line for Timeline Feel */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-30px] w-[60px] h-[2px] bg-primary"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
