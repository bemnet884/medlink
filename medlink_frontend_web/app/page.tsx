import { CtaSection } from "@/components/CTA";
import { FeatureSection } from "@/components/Features";
import { Hero } from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <CtaSection />
    </>
  );
}
