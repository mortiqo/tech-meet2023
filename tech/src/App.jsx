import Navbar from "./navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Home from "./pages/home";

function App() {
  let component
    switch (window.location.pathname) {
      case "/":
        component = <Home />
        break
      case "/about":
        component = <About />
        break
      case "/projects":
        component = <Projects />
        break
      case "/contact":
        component = <Contact />
        break
    }
    return (
      <>
      <Navbar />
      <div className="container">
      {component}
      </div>
      </>
    ) 
} 

export default App
