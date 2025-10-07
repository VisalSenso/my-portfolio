import React from "react";

const Footer = () => {
  return (
    <footer className="w-ful border-t border-gray-200 text-black dark:text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo or Name */}
        <div className="text-lg font-semibold">
          <span className="text-black">ME</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-accent transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#works" className="hover:text-accent transition-colors">
            Works
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-pl dark:text-pk mt-6">
        © {new Date().getFullYear()} Sen Sovisal — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
