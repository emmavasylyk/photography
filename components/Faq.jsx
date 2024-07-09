"use client";

import { Fade } from "react-awesome-reveal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "01. What kind of photography equipment do you use?",
    answer:
      "I use a Canon EOS R5 and Sony A7 III cameras with a variety of lenses, including the Canon RF 24-70mm f/2.8L IS USM, along with essential accessories like Manfrotto tripods, Godox V1 flashes, and DJI Mavic Air 2 drone for diverse photography needs,",
    value: "item-1",
  },
  {
    title: "02. Do I have to come to your studio to view my photos?",
    answer:
      "No, you don't have to come to my studio to view your photos; I provide an online gallery where you can conveniently view and select your images.",
    value: "item-2",
  },
  {
    title: "03. How long have you been in business?",
    answer:
      "I have been in business for 10 years, capturing memorable moments and providing quality photography services.",
    value: "item-3",
  },
];

const Faq = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="section-title mb-12 text-center mx-auto">
              Our Studio
            </h2>
          </Fade>

          <div className="">
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={item.value}>
                    <AccordionTrigger>
                      <div className="ms-3">{item.title}</div>
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
