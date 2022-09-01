import Links from "./Components/Links/Links";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <Projects/>
      <Contact/>
      <Links />
      <Footer/>
      {/* <div className="teste"> */}
      {/* {console.log(items)} */}
      {/* let's < FiIcons.FiInfo /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
