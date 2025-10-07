import React, { useState, useCallback, useEffect } from "react";
import DarkMode from "./DarkMode.jsx";
import mypic from "../assets/images/mypic.png";
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">Me</h1>
        <nav>
          <ul className="flex gap-8 ">
            <li>
              <a href="#home" className="hover:text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-accent">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="border border-black dark:border-white px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Let’s talk
          </a>
          <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-10 py-20"
      >
        {/* Text */}
        <div className="max-w-3xl">
           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            HI, I'M <span className="text-accent">SEN SOVISAL</span>.
            <br />
            <span className="text-accent">FRONT-END DEVELOPER</span>
            <br />
            BASED IN <span className="line-through">CAMBODIA</span>
          </h2>
          <p className="mt-4 text-lg text-pl dark:text-pk">
            DESIGN ✦ DEVELOPMENT ✦ WEBFLOW
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-black dark:bg-white text-white dark:text-black  px-5 py-3 rounded hover:bg-white border-black border hover:text-black transition"
            >
              Got a project?
            </a>
            <a
              href="#contact"
              className="border border-black dark:border-white px-5 py-3 rounded hover:bg-black hover:text-white transition"
            >
              Let’s talk
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src={mypic}
            alt="Profile"
            className="w-80 rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
