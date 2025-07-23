import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/skill/Skill";
import Project from "./components/projects/Project";
import Contactus from "./components/contact/Contactus";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contactus />
    </>
  );
};
export default App;
