"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jenifer",
    job: "Chief",
    review:
      "But I must explain to you haw all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Lopez Chris",
    job: "CEO",
    review:
      "You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Hamilton",
    job: "COO",
    review:
      "ut I must explain to you haw all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Lucifer",
    job: "APP Developer",
    review:
      "You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Mark Steve",
    job: "Chief",
    review:
      "You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Stork Gem",
    job: "Chief",
    review:
      "You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-12 text-center mx-auto">
            They say about our work
          </h2>
        </Fade>

        {/* Slider */}
        <Fade
          direction="up"
          delay={600}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[350px]"
          >
            {reviewsData.map((person, index) => (
              <SwiperSlide key={index}>
                <Card className="p-8 min-h-[300px] cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex flex-col items-start gap-x-4">
                      {/* Avatar */}
                      <Image
                        src={person.avatar}
                        alt="avatar"
                        width={70}
                        height={70}
                        priority
                        className="mb-2"
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p className="">{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;
