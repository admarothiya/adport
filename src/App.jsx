import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SkillsPage from "./components/SkillsPage"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EducationPage from "./components/EducationPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-full mx-auto">
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="education"><EducationPage /></section> {/* EducationPage now before About and Contact */}
        <section id="about"><About /></section> {/* About near the end */}
        <section id="contact"><Contact /></section> {/* Contact last */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
