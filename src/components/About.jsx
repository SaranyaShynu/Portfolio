const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center dark:text-white">About Me</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm Saranya, a B.Tech Computer Science graduate and a passionate
          MERN Stack Developer. I enjoy creating clean, modern, and
          responsive websites that offer an excellent user experience.
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I frequently work with technologies like React, JavaScript, Tailwind
          CSS, Bootstrap, Node.js, MongoDB, Git/GitHub, and Hugging Face. 
          Along with development projects, I also explore automation tools like Zapier
          to connect apps without code and Landbot to build interactive chat experiences 
          that make websites more engaging.
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I love continuous learning — currently improving my UI skills, exploring
          new APIs, and experimenting with AI tools to enhance my projects. 
          In my free time, I enjoy reading books,listening to music, etc.
        </p>
      </div>
    </section>
  );
};

export default About;
