import React, { useState, useCallback, useEffect } from "react";
<<<<<<< HEAD
// use anchor links for same-page scrolling
import DarkMode from "./DarkMode.jsx";
import mypic from "../assets/images/mypic.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // run animation only once
    });
  }, []);

=======
import DarkMode from "./DarkMode.jsx";
import mypic from "../assets/images/mypic.png";
export default function Header() {
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
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
<<<<<<< HEAD

  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  //mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header
        className={`
    flex justify-between items-center 
    fixed top-0 left-0 right-0 z-50 
    backdrop-blur-lg px-10 py-4 
    transition-transform duration-300
    ${showNav ? "translate-y-0" : "-translate-y-full"}
  `}

      >
        <h1 className="text-xl font-bold">Me</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#works" className="hover:text-accent">Works</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </nav>

        {/* Right Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
=======
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
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
          <a
            href="#contact"
            className="border border-black dark:border-white px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Let’s talk
          </a>
          <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
<<<<<<< HEAD

        {/* Hamburger Button (Mobile Only) */}
        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center items-center"
        >
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>

      </header>


=======
      </header>

>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-10 py-20"
      >
        {/* Text */}
        <div className="max-w-3xl">
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
=======
           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
            HI, I'M <span className="text-accent">SEN SOVISAL</span>.
            <br />
            <span className="text-accent">FRONT-END DEVELOPER</span>
            <br />
            BASED IN <span className="line-through">CAMBODIA</span>
          </h2>
<<<<<<< HEAD
          <p className="mt-4 text-lg">
            DESIGN ✦ DEVELOPMENT ✦ WEBFLOW
          </p>

          <div
            data-aos="fade-up"
            className="mt-6 flex justify-center gap-4">
            <a

              href="#projects"
              className="bg-black dark:bg-white text-white dark:text-black  px-5 py-3 rounded hover:bg-white border-black border dark:hover:bg-black dark:hover:text-white dark:hover:border-white hover:text-black transition"
=======
          <p className="mt-4 text-lg text-pl dark:text-pk">
            DESIGN ✦ DEVELOPMENT ✦ WEBFLOW
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-black dark:bg-white text-white dark:text-black  px-5 py-3 rounded hover:bg-white border-black border hover:text-black transition"
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
            >
              Got a project?
            </a>
            <a
              href="#contact"
<<<<<<< HEAD
              className=" text-black dark:text-white dark:hover:text-black dark:hover:bg-white border border-black dark:border-white px-5 py-3 rounded hover:bg-black hover:text-white transition"
            >
              Let's talk
=======
              className="border border-black dark:border-white px-5 py-3 rounded hover:bg-black hover:text-white transition"
            >
              Let’s talk
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
<<<<<<< HEAD
            data-aos="fade-left"
=======
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
            src={mypic}
            alt="Profile"
            className="w-80 rounded-lg shadow-lg"
          />
        </div>
      </section>
<<<<<<< HEAD

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-black/90 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => setMenuOpen(false)}>
              Works
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>


=======
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
    </div>
  );
}
