import About from "./Components/About";
import Contact from "./Components/Contact";
// import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Github from "./Components/Github";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { NotFound } from "./Components/NotFound";
import Projects from "./Components/Projects";
import Techstack from "./Components/Techstack";

const App = () => {
  return (
    <>
      {/* <NotFound /> */}
      <Navbar/>
      <Home />
      <About />
      {/* <Education /> */}
      <Techstack />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

export default App;