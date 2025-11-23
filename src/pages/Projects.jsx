import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import vdownload from "../assets/images/vdownload.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    title: "My Portfolio Website",
    description: "A modern responsive portfolio built with React and Tailwind CSS.",
    image: portfolio, 
    github: "https://github.com/VisalSenso/my-portfolio",
    demo: "https://sensovisalportfolio.netlify.app/",
  },
  {
    title: "Video Downloader (React js Node js and Tailwind CSS)",
    description: "Enter a video or playlist URL to fetch available formats and download options. Supports YouTube, Facebook, Instagram Tik Tok and X (Twitter).",
    image: vdownload,
    github: "https://github.com/VisalSenso/videold-frontend",
    demo: "https://videodl.netlify.app/",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="mt-20 px-8 md:px-20 py-24">
      <div className="max-w-6xl mx-auto px-6">
       <h2
          data-aos="zoom-in-up"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My <span className="text-accent">Project</span>
        </h2>

        <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" border border-gray-200 hover:shadow-lg rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className=" text-sm mb-4">{project.description}</p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-gray-400 text-xl"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="hover:text-gray-400 text-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
