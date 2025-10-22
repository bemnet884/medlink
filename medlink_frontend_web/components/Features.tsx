import { CalendarCheck, Users, Video, FileText, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const FeatureSection = ({
  title = "Why Choose MedLink",
  features = [
    {
      heading: "Find Trusted Doctors",
      description:
        "Search doctors by specialty, location, or rating, making it easy to connect with professionals you can trust.",
      icon: <Users className="size-6 text-primary" />,
    },
    {
      heading: "Book Appointments Online",
      description:
        "Schedule in-person or virtual consultations with a few clicks, saving time and avoiding long waiting lines.",
      icon: <CalendarCheck className="size-6 text-primary" />,
    },
    {
      heading: "Virtual Consultations",
      description:
        "Connect with doctors remotely via video calls for convenience and safety, especially for patients in remote areas.",
      icon: <Video className="size-6 text-primary" />,
    },
    {
      heading: "Access Medical Records",
      description:
        "Keep all your health history and documents in one secure place, accessible anytime for both you and your doctors.",
      icon: <FileText className="size-6 text-primary" />,
    },
    {
      heading: "Health Tracking",
      description:
        "Track your appointments, medications, and overall health progress with an easy-to-use dashboard.",
      icon: <Heart className="size-6 text-primary" />,
    },
    {
      heading: "Secure & Private",
      description:
        "Your personal and medical information is fully protected using advanced encryption and privacy standards.",
      icon: <ShieldCheck className="size-6 text-primary" />,
    },
  ],
  buttonText = "Get Started",
  buttonUrl = "#",
}: FeatureSectionProps) => {
  return (
    <MaxWidthWrapper>
      <section className="pb-0 pt-5 mx-10 flex items-center justify-center bg-background">
        <div className="container">
          {title && (
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-foreground text-4xl font-medium lg:text-5xl">
                {title}
              </h2>
            </div>
          )}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-accent/20 mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.heading}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          {buttonUrl && (
            <div className="mt-16 flex justify-center">
              <Button size="lg" asChild>
                <a href={buttonUrl}>{buttonText}</a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export { FeatureSection };
