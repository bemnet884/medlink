"use client";

import { ArrowRight, Check, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonTextWeb?: string;
  buttonUrlWeb?: string;
  buttonTextMobile?: string;
  buttonUrlMobile?: string;
  items?: string[];
}

const defaultItems = [
  "Book appointments instantly",
  "Consult verified doctors",
  "Access your medical records anywhere",
  "24/7 healthcare support",
];

export const CtaSection = ({
  title = "Get Started with MedLink Today",
  description = "Join thousands of patients and healthcare providers using MedLink to connect faster, safer, and more efficiently.",
  buttonTextWeb = "Use Web App",
  buttonUrlWeb = "#",
  buttonTextMobile = "Download Mobile App",
  buttonUrlMobile = "#",
  items = defaultItems,
}: CtaSectionProps) => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <div className="bg-card shadow-md rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-12 md:px-16">
          {/* Text Section */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground mb-6">{description}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={buttonUrlWeb} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="size-4 mr-2" /> {buttonTextWeb}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"

              >
                <a href={buttonUrlMobile} target="_blank" rel="noopener noreferrer">
                  <Apple className="size-4 mr-2" /> {buttonTextMobile}
                </a>
              </Button>
            </div>
          </div>


          <ul className="grid grid-cols-2 gap-y-2 text-sm text-foreground mb-8">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
