import Links from "./Components/Links/Links";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <Projects/>
      <Contact/>
      <Links />
    </div>
  );
}

export default App;
