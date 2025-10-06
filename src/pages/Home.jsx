import React from "react";

const Home = () => {
  return (
    <section id="about" className=" px-8 md:px-20 py-24 ">
      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          A Little About <span className="text-accent">Me</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          I'm a passionate <span className="font-semibold">Web Developer</span> who loves creating 
          modern, responsive, and user-friendly websites. My goal is to blend creativity with
          functionality — delivering digital experiences that not only look great but perform flawlessly.
        </p>
      </div>

      {/* Skills / Services */}
      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        <div className="p-8 border border-gray-200 hover:shadow-lg transition rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">🎨 Design</h3>
          <p className="text-gray-600">
            Crafting clean, aesthetic, and user-focused UI designs that make users feel at home.
          </p>
        </div>

        <div className="p-8 border border-gray-200 hover:shadow-lg transition rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">💻 Development</h3>
          <p className="text-gray-600">
            Building fast and scalable web apps using React, Node.js, and modern technologies.
          </p>
        </div>

        <div className="p-8 border border-gray-200 hover:shadow-lg transition rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">⚡ Strategy</h3>
          <p className="text-gray-600">
            Turning ideas into structured plans with a focus on performance, SEO, and usability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
