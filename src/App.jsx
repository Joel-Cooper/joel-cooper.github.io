import { useRef } from "react";
import Header from "./Header/Header.jsx"
import Introduction from "./Introduction/Introduction.jsx";
import About from "./About.jsx";
import Skills from "./Skills/Skills.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
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
      <Header viewWork={viewWork}/>
      <Introduction viewWork={viewWork} />
      <section ref={aboutRef} id="about"><About/></section>
      <section ref={skillsRef} id="skills"><Skills/></section>
      <section ref={projectsRef} id="projects"><Projects/></section>
      <section ref={contactRef} id="contact"><Contact/></section>
      <Footer/>
    </>
  );
}

export default App
