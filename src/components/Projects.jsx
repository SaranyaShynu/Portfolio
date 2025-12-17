import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white">Projects</h2>

      <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">

        {/* Project 1 */}
        <div className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 animate-fadeIn">
          <h3 className="text-xl font-semibold dark:text-white">🛵 Vespa Elegance — Premium Scooter E-commerce (Node.js + EJS) </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Vespa Elegance is a backend-focused e-commerce application designed for showcasing and selling premium Vespa scooters.
The platform includes user authentication, product management, and secure order workflows, providing a realistic purchase flow.

Key Highlights

Full backend functionality with add-to-cart, login/register, and checkout

Admin panel for managing products and inventory

Elegant UI using EJS templating for dynamic content rendering

Secure data flow and structured database collections

Designed for scalability to support more models and features in the future

Tech Used: Node.js, Express.js, MongoDB, EJS, GitHub
          </p>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/SaranyaShynu/Vespa-Elegance"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
            <a
              href="https://vespaelegance.shop"
              target="_blank"
              className="text-blue-600 underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 animate-fadeIn">
          <h3 className="text-xl font-semibold dark:text-white">😊 HappyVibes — AI Quote Generator (Hugging Face + Node.js)</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            HappyVibes is an AI-powered quote generation app that creates meaningful and motivational quotes using a Hugging Face language model.
Users can generate a new quote instantly with a single click, making it fun, lightweight, and interactive.

Key Highlights

Integrates a fine-tuned Hugging Face Transformer model

Simple UI with dynamic server-side rendering using EJS

Fast quote generation using Node.js backend API

Designed for creativity and personalization

Can be extended to include categories, favorites, or sharing options

Tech Used: Hugging Face, Node.js, Express.js, EJS, GitHub
          </p>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/yourgithub/quote-generator"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
            <a
              href="https://happyvibes.onrender.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        
        {/* Project 2 */}
        <div className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 animate-fadeIn">
          <h3 className="text-xl font-semibold dark:text-white"> 🛍️ AuraBasket — Online Gift Store (React + Tailwind CSS)</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
           

AuraBasket is a modern frontend web application designed for browsing and purchasing gifts online.
It focuses on attractive product display, smooth navigation, and a clean user shopping experience.
The UI was built entirely using React for component-based structure and Tailwind CSS for fast and responsive styling.

Key Highlights

User-friendly interface with a clear layout of categories like souvenirs, accessories, greeting cards, etc.

Featured products section to highlight trending items

Fast and responsive design suitable for both mobile and desktop screens

Component-based structure for easy scalability & future backend integration

Includes brand styling like logo, theme colors, and smooth transitions

Tech Used: React, Tailwind CSS, Vite, GitHub
          </p>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/SaranyaShynu/AuraBasket.git"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              className="text-blue-600 underline"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
