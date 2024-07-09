"use client";

import { Fade } from "react-awesome-reveal";

import {
  RiRidingFill,
  RiUserHeartFill,
  RiStarHalfSLine,
  RiVidiconFill,
  RiVipCrown2Fill,
  RiSendPlaneFill,
} from "react-icons/ri";

import HeroImg from "@/components/HeroImg";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mrs Smith",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "photography@gmail.com",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 99 787 7761",
  },

  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Born on 23 Jan, 2000",
  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: "Master Degree",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "22, Ella Statu, Texas, US",
  },
];

const about = () => {
  return (
    <section className="pb-12 min-h-screen xl:py-24 overflow-hidden">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About me
          </h2>
        </Fade>

        <div className="flex flex-col xl:flex-row xl:gap-4">
          <div className="relative flex-1 xl:flex">
            <Fade
              direction="left"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <HeroImg
                containerStyles="w-[450px] h-[450px] xl:w-[505px] xl:h-[505px] mx-auto xl:mx-0 bg-no-repeat relative"
                imgSrc="/about/profile.png"
              />
            </Fade>
          </div>
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <Fade
                  direction="right"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="h3 mb-4">
                    Let's plan your perfect photoshoot
                  </h3>
                </Fade>
                <Fade
                  direction="right"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Our mission is to further develop the overall excellence of
                    photography and to capture memories that will be cherished
                    for a lifetime, in the timeless photographs.
                  </p>
                </Fade>
                <Fade
                  direction="right"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Professional photography services combine the classic
                    knowledge of traditional photographic portraiture and
                    contemporary style.
                  </p>
                </Fade>

                <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto xl:mx-0">
                  <Fade
                    direction="right"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    {infoData.map((item, index) => (
                      <div
                        className="flex items-center gap-x-3 mx-auto xl:mx-0"
                        key={index}
                      >
                        <div className="text-primary">{item.icon}</div>
                        <div className="">{item.text}</div>
                      </div>
                    ))}
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
