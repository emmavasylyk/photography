"use client";

import { Fade } from "react-awesome-reveal";
import { Smile, Scan, Bird } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Smile size={48} strokeWidth={1} />,
    title: "Portraiture",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
  },
  {
    icon: <Scan size={48} strokeWidth={1} />,
    title: "Landscapes",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
  },
  {
    icon: <Bird size={48} strokeWidth={1} />,
    title: "Lifestyles",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
            Our Services
          </h2>
        </Fade>

        {/* Category Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {servicesData.map((item, index) => (
              <Card
                key={index}
                className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700"
              >
                <CardHeader className="text-primary">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center absolute -bottom-6 right-6">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Services;
