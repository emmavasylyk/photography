"use client";

import { Fade } from "react-awesome-reveal";

import {
  CameraIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  ViewfinderCircleIcon,
  PencilSquareIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Professional-Grade Equipment",
    description:
      "High-resolution cameras and premium lenses to capture every detail with stunning clarity.",
    icon: CameraIcon,
  },
  {
    name: "Versatile Shooting Locations",
    description:
      "Flexible options for studio, outdoor, or on-location shoots to suit your preferences.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Personalized Service",
    description:
      "Tailored photography sessions to match your unique vision and requirements.",
    icon: UserGroupIcon,
  },
  {
    name: "Creative Direction",
    description:
      "Professional guidance on poses, lighting, and styling to make you look your best.",
    icon: ViewfinderCircleIcon,
  },
  {
    name: "High-Quality Editing",
    description:
      "Advanced photo editing and retouching to enhance your images and bring out their full potential.",
    icon: PencilSquareIcon,
  },
  {
    name: "Online Gallery Access",
    description:
      "Convenient online gallery for easy viewing, selection, and sharing of your photos.",
    icon: FolderArrowDownIcon,
  },
];

const Features = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
            Key Features
          </h2>
        </Fade>

        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Everything you need to deliver faster.
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mt-6 text-lg leading-8 text-black dark:text-white">
                Including these key features will help highlight the benefits
                and professionalism of our photography services.
              </p>
            </Fade>
          </div>
        </div>
        {/* Features lists */}
        <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {features.map((feature) => (
                <div
                  className="relative hover:scale-110 transition-all"
                  key={feature.name}
                >
                  <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                    <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                      <feature.icon
                        className="h-9 w-9 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-black dark:text-white">
                      {feature.name}
                    </div>
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </Fade>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
