import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from "react-icons/fa";


const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, percent: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, percent: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, percent: 70 },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" />, percent: 60 },
    { name: "React JS", icon: <FaReact className="text-cyan-400" />, percent: 55 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, percent: 80 },
  ];
  return (
    <section id="about" className="mt-20 px-8 md:px-20 py-24">
      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2
          data-aos="zoom-in-up"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About <span className="text-accent">Me</span>
        </h2>

        <p
          data-aos="fade-up"
          className="text-lg leading-relaxed max-w-3xl mx-auto"
        >
          I'm a passionate <span className="font-semibold">Web Developer</span> who
          loves creating modern, responsive, and user-friendly websites. My goal is
          to blend creativity with functionality — delivering digital experiences
          that not only look great but perform flawlessly.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-accent">Skills</span>
        </h3>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
        relative overflow-hidden
        border border-gray-600 rounded-xl
        p-6 flex flex-col items-center justify-center
        h-40 cursor-pointer group
      "
            >
              {/* FILL ANIMATION */}
              <div
                className="absolute bottom-0 left-0 w-full bg-accent opacity-10 
                           translate-y-full group-hover:translate-y-0 transition-all duration-700"
                style={{ height: `${skill.percent}%` }}
              ></div>
              {/* PERCENT NUMBER */}
              <p className="
                            absolute bottom-1  
                            text-sm font-bold 
                            opacity-0 
                            group-hover:opacity-100 
                            transition-opacity duration-500 z-20
               ">
                {skill.percent}%
              </p>

              {/* ICON */}
              <div className="text-5xl z-10 mb-3">
                {skill.icon}
              </div>

              {/* NAME */}
              <p className="text-lg font-semibold z-10">
                {skill.name}
              </p>
            </div>
          ))}
        </div>



      </div>
    </section>

  );
};

export default About;