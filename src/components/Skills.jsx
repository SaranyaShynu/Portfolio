const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 mt-10 animate-fadeIn">
        {[
          "JavaScript (ES6+)",
          "React",
          "Tailwind CSS",
          "Bootstrap",
          "Node.js Basics",
          "MongoDB Basics",
          "Git & GitHub",
          "Hugging Face Models",
          "Postman API Testing",
        ].map((skill, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center dark:text-gray-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
