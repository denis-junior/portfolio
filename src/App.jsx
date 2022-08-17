import Links from "./Components/Links/Links";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <Links />
    </div>
  );
}

export default App;
