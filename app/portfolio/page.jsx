"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const projectData = [
  {
    image: "/work/3.png",
    category: "portraits",
    name: "Portrait: Macro Allian",
    description: "Shoot Data 08/01/2024",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "portraits",
    name: "Portrait: Mark Adam",
    description: "Shoot Data 11/01/2017",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/2.png",
    category: "Products",
    name: "Product: Cosmetics",
    description: "Shoot Data 14/01/2018",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "portraits",
    name: "Portrait: Lucy Aln",
    description: "Shoot Data 16/07/2023",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "fashion",
    name: "Fashion: Susee",
    description: "Shoot Data 28/07/2024",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/4.png",
    category: "Products",
    name: "Canteen Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "portraits",
    name: "Portrait: Elsa Liv",
    description: "Shoot Data 09/03/2024",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/11.png",
    category: "fashion",
    name: "Fashion Adam",
    description: "Shoot Data 13/02/2021",
    link: "/",
    codepen: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const portfolio = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Portfolio
          </h2>
        </Fade>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {filteredProjects.map((project, index) => (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default portfolio;
