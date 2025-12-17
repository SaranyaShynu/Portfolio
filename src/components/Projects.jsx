import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Vespa Elegance",
      emoji: "🛵",
      description: "Backend-focused e-commerce application for premium Vespa scooters.",
      highlights: [
        "Full backend functionality with add-to-cart, login/register, and checkout",
        "Admin panel for managing products and inventory",
        "Elegant UI using EJS templating for dynamic content",
        "Secure data flow and structured database",
        "Scalable design to support more models and features"
      ],
      tech: "Node.js, Express.js, MongoDB, EJS, GitHub",
      github: "https://github.com/SaranyaShynu/Vespa-Elegance",
      live: "https://vespaelegance.shop"
    },
    {
      name: "HappyVibes",
      emoji: "😊",
      description: "AI-powered motivational quote generator using Hugging Face and Node.js.",
      highlights: [
        "Integrates a fine-tuned Hugging Face Transformer model",
        "Simple UI with dynamic server-side rendering using EJS",
        "Fast quote generation via Node.js backend API",
        "Designed for creativity and personalization",
        "Can be extended to include categories, favorites, or sharing options"
      ],
      tech: "Hugging Face, Node.js, Express.js, EJS, GitHub",
      github: "https://github.com/SaranyaShynu/HappyVibes.git",
      live: "https://happyvibes.onrender.com"
    },
    {
      name: "AuraBasket",
      emoji: "🛍️",
      description: "Modern frontend React web application for browsing and purchasing gifts online.",
      highlights: [
        "User-friendly interface with clear layout of categories like souvenirs, accessories, greeting cards",
        "Featured products section highlighting trending items",
        "Fast and responsive design suitable for mobile and desktop",
        "Component-based structure for scalability & future backend integration",
        "Includes brand styling like logo, theme colors, and smooth transitions"
      ],
      tech: "React, Tailwind CSS, Vite, GitHub",
      github: "https://github.com/SaranyaShynu/AuraBasket.git",
      live: "https://aurabasket.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white">Projects</h2>

      <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 animate-fadeIn hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold dark:text-white mb-2">
              {project.emoji} {project.name} — <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.tech}</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>

            <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
