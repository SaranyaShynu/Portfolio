const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white">
        Contact
      </h2>

      <div className="mt-10 max-w-xl mx-auto text-center animate-fadeIn dark:text-gray-300">
        <p className="text-lg">📩 Email: saranyarajendran790@gmail.com</p>
        <p className="text-lg mt-2">
          🔗 LinkedIn: <a className="text-blue-500" href="www.linkedin.com/in/saranya-p-4a8bb938b">www.linkedin.com/in/saranya-p-4a8bb938b</a>
        </p>
        <p className="text-lg mt-2">
          💻 GitHub: 
          <a
            className="text-blue-500"
            href="https://github.com/SaranyaShynu"
          >
            github.com/SaranyaShynu
          </a>
        </p>

        <p className="text-lg mt-2">📍 Kannur, Kerala, India</p>
      </div>
    </section>
  );
};

export default Contact;
