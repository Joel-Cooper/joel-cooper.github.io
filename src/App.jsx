import { useRef, useState } from "react";
import './index.css';
import Header from "./Header/Header.jsx"
import Introduction from "./Introduction/Introduction.jsx";
import About from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [theme, setTheme] = useState('default');  // Default theme is light

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'minimal' : 'default';
    setTheme(newTheme);

    // Dynamically change the theme by toggling the link tag
    const link = document.getElementById('theme-stylesheet');
    if (newTheme === 'minimal') {
      link.setAttribute('href', '/minimal.css'); // Path to dark theme in the public folder
    } else {
      link.setAttribute('href', '/index.css'); // Path to light theme (index.css)
    }
  };

  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const viewWork = (section) => {
    if (section === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    else if (section === "skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    else if (section === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return(
    <>
      <Header theme={theme} viewWork={viewWork}/>
      <button id="themeButton" onClick={toggleTheme}>Toggle Theme</button>
      <Introduction theme={theme} viewWork={viewWork} />
      <section ref={aboutRef} id="about"><About theme={theme}/></section>
      <section ref={skillsRef} id="skills"><Skills theme={theme} /></section>
      <section ref={projectsRef} id="projects"><Projects theme={theme} /></section>
      <section ref={contactRef} id="contact"><Contact theme={theme} /></section>
      <Footer/>

      <link id="theme-stylesheet" rel="stylesheet" href="/index.css" />
    </>
  );
}

export default App
