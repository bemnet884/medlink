import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero = ({
  heading = "MedLink",
  subheading = "Connecting Patients with Doctors",
  description = "Easily find doctors, book appointments, and get online consultations — all in one platform.",
  buttons = {
    primary: {
      text: "Find Doctors",
      url: "/doctors",
    },
    secondary: {
      text: "Learn More",
      url: "/about",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Doctor-Patient Consultation",
  },
}: HeroProps) => {
  return (
    <section className="bg-background flex items-center justify-center pb-20 pt-0 lg:pb-32 lg:pt-10">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 p-5 lg:w-2/3">
          <h2 className="text-foreground text-4xl font-semibold md:text-5xl lg:text-8xl">
            <span>{heading}</span> {" "}
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="whitespace-nowrap pl-4 pr-6 text-sm lg:pl-6 lg:pr-8 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="left-1/2! h-[92%]! w-[69%]! absolute top-2.5 -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
