import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OfflineIndicator from "./components/OfflineIndicator";
import ProfilePic from "./components/ProfilePic";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Games from "./components/Games";

export default function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen transition-colors">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Offline status banner */}
      <OfflineIndicator />

      {/* Page Content */}
      <main className="pt-20">
        <Routes>

          {/* HOME / PORTFOLIO */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProfilePic />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* OFFLINE GAMES */}
          <Route path="/games" element={<Games />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
