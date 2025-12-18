const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-all"
    >
      <div className="text-center animate-fadeIn">
        <h2 className="text-4xl md:text-6xl font-bold dark:text-white">
          Hi, I'm Saranya
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          MERN Stack Developer | React | JavaScript | Tailwind | Git
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* View Projects */}
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg
                       hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </a>

          {/* Portfolio Live Demo */}
          <a
            href="www.saranyap.live"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg
                       hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Live Portfolio
          </a>

          {/* Download CV */}
          <a
            href="/Saranya Resume.pdf"
            download
            className="bg-gray-900 text-white px-6 py-3 rounded-lg
                       hover:bg-gray-700 transition duration-300
                       dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
