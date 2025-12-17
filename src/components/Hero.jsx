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
           MERN Stack Developer  
          | React | JavaScript | Tailwind | Git 
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View My Work
          </a>

          <a
            href="/Saranya Resume.pdf"
            download
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:bg-white dark:text-black"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
