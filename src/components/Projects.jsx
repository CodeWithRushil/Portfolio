import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "WormHumus",
    description:
      "A brand-focused website built to present premium herbal-fed vermicast for landscaping, agriculture, and sustainability projects across the GCC.",
    image: "/assets/project1.png",
    link: "https://wormhumus.vercel.app",
  },
  {
    id: 2,
    title: "CourseFlow",
    description:
      "An AI-powered course creation platform that helps users design structured learning paths, generate course layouts, and manage content efficiently from a single dashboard.",
    image: "/assets/project2.png",
    link: "https://www.courseflow.tech",
  },
  {
    id: 3,
    title: "LinkedInk",
    description:
      "A one-stop AI tool to create polished LinkedIn posts and hashtags, designed to help users grow their personal brand faster with minimal effort.",
    image: "/assets/project3.png",
    link: "https://linkedink.vercel.app",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-white mt-3 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
